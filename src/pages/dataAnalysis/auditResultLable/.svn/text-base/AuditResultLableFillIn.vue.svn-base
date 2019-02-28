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
				<i class="iconfont icon-biaotishutiao6x25"></i>编写
				<label class="descriptionCss">稽核时间:{{auditTime}}</label>
				<label class="descriptionCss">稽核平台:{{resultType}}</label>
				<label class="descriptionCss">标签编号:{{dateTypeId}}</label>
				<label class="descriptionCss">标签名称:{{dateTypeName}}</label>
				<label class="lableStyle">业务原因反馈:</label>
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="选择" @click="handleClick"><i class="iconfont icon-search"></i>选择</span>
			</div>
			<el-table
			    :data="auditResultLableFillIn"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
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
	import { getLabelOppRelation as getLabelOppRelation } from '@/api/Api'
	
	export default{
		name: 'AuditResultLableFillIn',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		dataTypeId:'',
	    		dateTypeName:'',
	    		resultType:'',
	    		auditBatch:'',
	    		auditTime:'',
	    		auditResultLableFillIn:[]
	    	}
	  	},

	  	created(){
	  		const params = this.getParamas;
	  		this.auditTime = params.auditTime;
	  		this.resultType = params.resultType;
	  		this.dateTypeId = params.dateTypeId;
	  		this.dateTypeName = params.dateTypeName;
	   		this.getList();
	   	},
		methods: {
			getList(){
				let self = this;
				getLabelOppRelation(
					{
						dataTypeId:self.dateTypeId,
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
	      	handleClick(row) {
	        	let params = this.getParamas;
				let orderParams = {
					'auditTime':params.auditTime,
					'auditBatch':params.auditBatch,
					'resultType':params.resultType,
					'dateTypeId':params.dateTypeId,
					'dateTypeName':params.dateTypeName,
					'ctPercent':params.ctPercent
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'AuditResultLableChoose'
			    });
	      	},
	      	handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getList();
	      	}
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.descriptionCss{color:red;margin-left:20px;}
	.lableStyle{margin-left:20%;}
	.block{text-align: right;margin-top: 15px;}
</style>