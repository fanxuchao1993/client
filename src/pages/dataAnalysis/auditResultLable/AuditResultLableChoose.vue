<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>稽核结果标签</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>选择
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="保存" @click="handleClick"><i class="iconfont"></i>保存</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input v-model="labelName" placeholder="业务原因" clearable></el-input>
				<el-input v-model="labelCode" placeholder="业务原因编号" clearable></el-input>
				<el-input v-model="parentLabelName" placeholder="父级业务原因" clearable></el-input>
				<el-input v-model="parentLabelCode" placeholder="父级业务原因编号" clearable></el-input>
			</div>
			<div>
				<label class="descriptionCss">稽核时间:{{auditTime}}</label>
				<label class="descriptionCss">稽核平台:{{resultType}}</label>
				<label class="descriptionCss">标签编号:{{dateTypeId}}</label>
				<label class="descriptionCss">标签名称:{{dateTypeName}}</label>
			</div>
			<el-table
			    :data="auditResultLableFillIn"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    	@selection-change="handleSelectionChange">
		    	<el-table-column type="selection" width="55"></el-table-column>
			    <el-table-column prop="PARENT_TYPE_CODE" label="父级业务原因编号"></el-table-column>
			    <el-table-column prop="PARENT_TYPE_NAME" label="父级业务原因"></el-table-column>
			    <el-table-column prop="DATA_TYPE_CODE" label="业务原因编号"></el-table-column>
			    <el-table-column prop="DATA_TYPE_NAME" label="业务原因"></el-table-column>
		  	</el-table>
		  	<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size.sync="pageSize"
			      layout="prev, pager, next, total"
			      :total=totalCount>
			    </el-pagination>
		  	</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getSaveLabel as getSaveLabel } from '@/api/Api'
	import { getLabelQuery as getLabelQuery } from '@/api/Api'
	
	export default{
		name: 'AuditResultLableChoose',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		dateTypeId:'',
	    		dateTypeName:'',
	    		resultType:'',
	    		auditBatch:'',
	    		auditTime:'',
	    		labelCode:'',
	    		labelName:'',
	    		parentLabelCode:'',
	    		parentLabelName:'',
	    		labelIds:'',
				allLabelIds:'',
	    		auditResultLableFillIn:[]
	    	}
	  	},

	  	created(){
	  		const params = this.getParamas;
	  		this.auditTime = params.auditTime;
	  		this.resultType = params.resultType;
	  		this.dateTypeId = params.dateTypeId;
	  		this.dateTypeName = params.dateTypeName;
	  		this.ctPercent = params.ctPercent;
	   		this.getList('0');
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				getLabelQuery(
					{
						auditBatch:self.auditBatch,
						systemId:self.resultType,
						labelCode:self.labelCode,
	    				labelName:self.labelName,
	    				parentLabelCode:self.parentLabelCode,
	    				parentLabelName:self.parentLabelName,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.auditResultLableFillIn = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			backRouter(){
				this.$router.back(-1);
			},
			toggleSelection(rows) {
		        if (rows) {
		          rows.forEach(row => {
		            this.$refs.multipleTable.toggleRowSelection(row);
		          });
		        } else {
		          this.$refs.multipleTable.clearSelection();
		        }
		    },
		    handleSelectionChange(val) {
		       	for(let i=0;i<val.length;i++){
		       		if(i == 0){
		       			this.labelIds = val[i].BUSIN_DATA_TYPE_ID;
		       		}else{
		       			this.labelIds += "," + val[i].BUSIN_DATA_TYPE_ID;	
		       		}
		       	}
		       	console.log(this.labelIds);
		       	for(let j=0;j<this.auditResultLableFillIn.length;j++){
		       		if(j == 0){
		       			this.allLabelIds = this.auditResultLableFillIn[j].BUSIN_DATA_TYPE_ID;
		       		}else{
		       			this.allLabelIds += "," + this.auditResultLableFillIn[j].BUSIN_DATA_TYPE_ID;
		       		}
		       	}
		       	console.log(this.allLabelIds);
		    },
	      	handleClick(row) {
		  		let self = this;
		  		let params = this.getParamas;
		  		if(self.labelIds == ""){
        			this.$message.error('请选择任务，任务不能为空！');
		  		}else{

		  			getSaveLabel(
					{
						dateTypeId:params.dateTypeId,
				  		systemId:params.resultType,
				  		auditBatch:params.auditBatch,
				  		ctPercent:params.ctPercent,
				  		labelCode:self.labelCode,
				  		labelName:self.labelName,
				  		parentLabelCode:self.parentLabelCode,
				  		parentLabelName:self.parentLabelName,
				  		labelIds:self.labelIds,
				  		allLabelIds:self.allLabelIds,
					}
				).then(res=>{
					this.getList();
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
		  		}
				
	      	},
	      	handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getList('0');
	      	}
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.descriptionCss{color:red;margin-left:20px;}
	.block{text-align: right;margin-top: 15px;}
</style>