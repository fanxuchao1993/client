<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>查看</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>查看
				</div>
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input v-model="busiName" placeholder="业务名称" clearable></el-input>
				<el-input v-model="busiCode" placeholder="业务编码" clearable></el-input>
				<el-input v-model="busitypeName" placeholder="业务类型" clearable></el-input>
			</div>
			<el-table
			    :data="auditData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核时间"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题名称"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点名称"></el-table-column>
			    <el-table-column prop="BUSI_TYPE_NAME" label="业务类型"></el-table-column>
			    <el-table-column prop="BUSI_CODE" label="业务编码"></el-table-column>
			    <el-table-column prop="BUSI_NAME" label="业务名称"></el-table-column>
			    <el-table-column prop="ERROR_NUM" label="稽核差异数"></el-table-column>
			    <el-table-column label="已修复记录数">
			    	<template slot-scope="scope">
				       	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.REPAIR_NUM}}</el-button>
				    </template>
			    </el-table-column>
			    <el-table-column label="修复失败记录数">
			    	<template slot-scope="scope">
				       	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.FAILURE_NUM}}</el-button>
				    </template>
			    </el-table-column>
			    <el-table-column prop="UNREPAIR_NUM" label="未修复记录数"></el-table-column>
			   
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
	import { getClassSumTypes as getClassSumTypes } from '@/api/Api'
	import { getDetail as getDetail } from '@/api/Api'
	
	export default{
		name: 'MCASDetail',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		busiName:'',
	    		busiCode:'',
	    		busitypeName:'',
	    		auditData:[],
	    	}
	  	},

	  	created(){
	   		this.getList('0');
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				let params = this.getParamas;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				getClassSumTypes(
					{
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    auditDate:params.auditDate,
			    	    auditBatch:params.auditBatch,
			    	    topicId:params.topicId,
			    	    busiCode:self.busiCode,
			    	    busiName:self.busiName,
			    	    busitypeName:self.busitypeName
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.auditData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			handleClick(row,column) {
				let params = this.getParamas;
				let nameStr;
				let name = column.label;
				if(column.label === "已修复记录数"){
					nameStr = "1";
				}else{
					nameStr = "2";
				}
				let orderParams = {
					'auditTime':row.AUDIT_DATE,
					'auditBatch':row.AUDIT_BATCH,
					'topicId':row.TOPIC_ID,
					'busiCode':row.BUSI_CODE,
					'nameStr':nameStr,
					'name':name
				}
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'MCASDetailRecord'
			    });
	      	},
	      	backRouter(){
				this.$router.back(-1);
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
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
</style>