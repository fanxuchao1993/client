<!--香港一卡多号查看A单边B单边不一致条数-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/personalBusiness'}">个人业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="this.$route.matched[2].path">{{this.$route.matched[2].meta.title}}</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="this.$route.matched[2].path+'/simMaxHKCheck'">查看</el-breadcrumb-item>
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
			    <el-table-column prop="USER_ID" label="用户ID" width="100px"></el-table-column>
			    <el-table-column prop="BILL_ID" label="用户号码" width="120px"></el-table-column>
			    <el-table-column prop="BUSI_TYPE" label="业务类型"></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="业务代码" width="130px"></el-table-column>
			    <el-table-column prop="SP_CODE" label="企业代码"></el-table-column>
			    <el-table-column prop="OFFER_ID" label="策划ID"></el-table-column>
			    <el-table-column prop="PROD_ID" label="产品ID" width="120px"></el-table-column>
			    <el-table-column prop="RESULT_TYPE" label="差异类型"></el-table-column>
			    <el-table-column prop="USER_STATE" label="用户状态"></el-table-column>
			    <el-table-column prop="USER_EFFECTIVE_DATE" label="用户生效时间" width="120px"></el-table-column>
			    <el-table-column prop="USER_EXPIRE_DATE" label="用户失效时间" width="120px"></el-table-column>
			    <el-table-column prop="AREA_CODE" label="area_code" width="100px"></el-table-column>
			    <el-table-column prop="USER_CREATE_DATE" label="入网时间" width="120px"></el-table-column>
			    <el-table-column prop="USER_DONE_DATE" label="user_done_date" width="140px"></el-table-column>
			    <el-table-column prop="BRAND_ID" label="当月品牌" width="120px"></el-table-column>
			    <el-table-column prop="PROD_EFFECTIVE_DATE" label="产品生效日期" width="120px"></el-table-column>
			    <el-table-column prop="PROD_EXPIRE_DATE" label="产品失效日期" width="120px"></el-table-column>
			    <el-table-column prop="PROD_INST_ID" label="PROD_INST_ID" width="140px"></el-table-column>
			    <el-table-column prop="PROD_STATE" label="PROD_STATE" width="120px"></el-table-column>
			    <el-table-column prop="PROD_CREATE_DATE" label="PROD_CREATE_DATE" width="180px"></el-table-column>
			    <el-table-column prop="PROD_DONE_DATE" label="PROD_DONE_DATE" width="160px"></el-table-column>
			    <el-table-column prop="PROD_OP_ID" label="PROD_OP_ID" width="120px"></el-table-column>
			    <el-table-column prop="PROD_CHANNEL_TYPE" label="PROD_CHANNEL_TYPE" width="190px"></el-table-column>
			    <el-table-column prop="PLATE_OPERATE_TIME" label="PLATE_OPERATE_TIME" width="190px"></el-table-column>
			    <el-table-column prop="PLATE_ORDER_STATUS" label="PLATE_ORDER_STATUS" width="190px"></el-table-column>
			    <el-table-column prop="PLATE_ORDER_SOURCE" label="PLATE_ORDER_SOURCE" width="190px"></el-table-column>
			    <el-table-column prop="PLATE_ORDER_EFFECTIVE_DATE" label="订购时间"></el-table-column>
			    <el-table-column prop="PLATE_ORDER_EXPIRE_DATE" label="PLATE_ORDER_EXPIRE_DATE" width="230px"></el-table-column>
			    <el-table-column prop="PLATE_USER_STATE" label="PLATE_USER_STATE" width="180px"></el-table-column>
			    <el-table-column prop="PLATE_USER_EFFECTIVE_DATE" label="PLATE_USER_EFECTIVE_DATE" width="230px"></el-table-column>
			    <el-table-column prop="PLATE_USER_EXPIRE_DATE" label="PLATE_USER_EXPIRE_DATE" width="220px"></el-table-column>
			    <el-table-column prop="OS_STATE" label="停开机状态" width="120px"></el-table-column>
			    <el-table-column prop="SUB_BILL_ID" label="SUB_BILL_ID" width="150px"></el-table-column>
			    <el-table-column prop="SERVICE_ID" label="SERVICE_ID" width="120px"></el-table-column>
			    <el-table-column prop="HLR_ODB_DATE_COMB" label="HLR_ODB_DATA_COMB" width="190px"></el-table-column>
			    <el-table-column prop="HLR_STATUS_SUBS_DEACT" label="HLR_STATUS_SUBS_DEACT" width="220px"></el-table-column>
			    <el-table-column prop="TREND" label="TREND"></el-table-column>
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
	import { getDetailStatus as getDetailStatus } from '@/api/Api'
	import { mapGetters } from 'vuex'
	export default{
		name: 'SimMaxHKCheckABN',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		pageName:'A单边B单边不一致条数',
	    		currentPage: 1,
	    		pageSize: 10,
	    		totalCount:0,
	    		tableData: []
	    	}
	  	},
	  	methods: {
			getList(){
				let self = this;
				const params = this.getParamas;
				getDetailStatus(
					{
						auditTime:params.auditTime,
						auditBatch:params.auditBatch,
						topicId:params.topicId,
						busiType:'0032',
			    	    resultType:params.resultType,
			    	    auditPointId:params.auditPointId,
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