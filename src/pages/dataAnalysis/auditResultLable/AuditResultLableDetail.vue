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
			
			<div>
				<el-input v-model="dataTypeCode" placeholder="标签编号"></el-input>
				<el-input v-model="resultType" placeholder="稽核平台"></el-input>
				<el-date-picker
					v-model="auditTime"
					type="date"
					align="left"
			      	placeholder="稽核日期"
			      	format="yyyyMMdd"
			      	value-format="yyyyMMdd">
			   </el-date-picker>
			   
			</div>
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>详情
				
				<el-input v-model="billId" placeholder="手机号码"></el-input>				
				<el-input v-model="operatorName" placeholder="业务名称"></el-input>
				<el-input v-model="operatorCode" placeholder="业务代码"></el-input>
				<el-input v-model="spCode" placeholder="企业代码"></el-input>
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="查询" @click=""><i class="iconfont icon-search"></i>查询</span>
			</div>
			<el-table
			    :data="auditResultLableDetail"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%">
			    <el-table-column prop="" label="稽核日期	"></el-table-column>
			    <el-table-column prop="" label="稽核平台"></el-table-column>
			    <el-table-column prop="" label="标签编号"></el-table-column>
			    <el-table-column prop="" label="手机号码"></el-table-column>
			    <el-table-column prop="" label="企业代码"></el-table-column>
			    <el-table-column prop="" label="业务代码"></el-table-column>
			    <el-table-column prop="" label="业务名称"></el-table-column>
			    <el-table-column prop="" label="标签描述"></el-table-column>
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
	    		auditTime:'',
	    		resultType:'',
	    		dataTypeCode:'',
	    		spCode:'',
	    		operatorCode:'',
	    		operatorName:'',
	    		billId:'',
	    		auditResultLableDetail:[]
	    	}
	  	},

	  	created(){
	   		this.$message.error('此功能只写了页面，具体的数据查询没有做，只因数据量太大，查询不出来数据，和领导商量之后再做');
	   	},
		methods: {
			
			backRouter(){
				this.$router.back(-1);
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
	.block{text-align: right;margin-top: 15px;}
</style>