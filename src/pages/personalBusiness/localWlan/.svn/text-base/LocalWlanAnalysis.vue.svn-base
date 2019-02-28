<!--本地WLAN分析-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/personalBusiness'}">个人业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="this.$route.matched[2].path">{{this.$route.matched[2].meta.title}}</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{pageName}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{pageName}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="OS_DONE_DATE_STATE" label="订购时间状态" width="110px"></el-table-column>
			    <el-table-column prop="OS_DONE_DATE" label="停开机时间" width="100px"></el-table-column>
			    <el-table-column prop="RETYPE" label="增存量" width="70px"></el-table-column>
			    <el-table-column prop="BILL_ID" label="用户号码" width="80px"></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="OPERATOR_CODE" width="150px"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="套餐" width="50px"></el-table-column>
			    <el-table-column prop="SP_CODE" label="企业代码" width="80px"></el-table-column>
			    <el-table-column prop="OFFER_ID" label="策划ID" width="80px"></el-table-column>
			    <el-table-column prop="PROD_ID" label="产品ID" width="80px"></el-table-column>
			    <el-table-column prop="RESULT_TYPE" label="单边类型" width="80px"></el-table-column>
			    <el-table-column prop="USER_STATE" label="用户状态" width="80px"></el-table-column>
			    <el-table-column prop="OS_STATE" label="停开机状态" width="100px"></el-table-column>
			    <el-table-column prop="USER_EFFECTIVE_DATE_YM" label="USER_EFFECTIVE_DATE_YM" width="220px"></el-table-column>
			    <el-table-column prop="USER_EFFECTIVE_DATE_D" label="USER_EFFECTIVE_DATE_D" width="200px"></el-table-column>
			    <el-table-column prop="USER_EXPIRE_DATE" label="USER_EXPIRE_DATE" width="160px"></el-table-column>
			    <el-table-column prop="BRAND_ID" label="品牌" width="50px"></el-table-column>
			    <el-table-column prop="PROD_STATE" label="产品状态" width="80px"></el-table-column>
			    <el-table-column prop="PROD_EFFECTIVE_DATE_YM" label="PROD_EFFECTIVE_DATE_YM" width="220px"></el-table-column>
			    <el-table-column prop="PROD_EFFECTIVE_DATE_D" label="PROD_EFFECTIVE_DATE_D" width="210px"></el-table-column>
			    <el-table-column prop="PROD_EXPIRE_DATE" label="PROD_EXPIRE_DATE" width="170px"></el-table-column>
			    <el-table-column prop="PLATE_ORDER_STATUS" label="PLATE_ORDER_STATUS" width="190px"></el-table-column>
			    <el-table-column prop="PLATE_OPERATE_TIME_YM" label="PLATE_OPERATE_TIME_YM" width="210px"></el-table-column>
			    <el-table-column prop="PLATE_OPERATE_TIME_D" label="PLATE_OPERATE_TIME_D" width="200px"></el-table-column>
			    <el-table-column prop="PRODC_EFFECTIVE_DATE" label="PRODC_EFFECTIVE_DATE" width="200px"></el-table-column>
			    <el-table-column prop="PRODC_EXPIRE_DATE" label="PRODC_EXPIRE_DATE" width="180px"></el-table-column>
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
	import { getResultSumMeal as getResultSumMeal } from '@/api/Api'
	import { mapGetters } from 'vuex'
	export default{
		name: 'LocalWlanAnalysis',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		pageName: '分析',
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		tableData: []
	    	}
	  	},
	  	methods: {
			getList(){
				let self = this;
				const params = this.getParamas;
				getResultSumMeal(
					{
						auditTime:params.auditTime,
						auditBatch:params.auditBatch,
						busiType:'0014',
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
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

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>