<!--家庭业务稽核家庭宽带状态查看A单边B单边不一致条数-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/familyBusiness'}">家庭业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/familyBusiness/familyBroadband'}">家庭宽带</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/familyBusiness/familyBroadband/familyBroadbandServiceCheck'}">业务查看</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_BATCH" label="用户ID"></el-table-column>
			    <el-table-column prop="AUDITTABLENUM" label="用户号码"></el-table-column>
			    <el-table-column prop="AUDITTABLENUM" label="业务类型"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="业务代码"></el-table-column>
		       	<el-table-column prop="ERRORB" label="OPERATOR_NAME" width='160px'></el-table-column>
		       	<el-table-column prop="ERRORB" label="PLATE_BUSI_CODE" width='160px'></el-table-column>
	          	<el-table-column prop="ERRORB" label="PLATE_BUSI_NAME" width='160px'></el-table-column>
             	<el-table-column prop="ERRORB" label="企业代码"></el-table-column>
                <el-table-column prop="ERRORB" label="OFFER_ID" width='100px'></el-table-column>
               	<el-table-column prop="ERRORB" label="PROD_ID" width='100px'></el-table-column>
			    <el-table-column prop="ERRORB" label="差异类型"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="用户状态"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="用户生效时间" width='110px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="用户失效时间" width='110px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="AREA_CODE" width='110px'></el-table-column>		    
			    <el-table-column prop="UNEQUAL" label="USER_CREATE_DATE" width='170px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="USER_DONE_DATE" width='160px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="BRAND_ID" width='100px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PROD_EFFECTIVE_DATE" width='190px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PROD_EXPIRE_DATE" width='170px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PROD_INST_ID" width='130px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PROD_STATE" width='120px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PROD_CREATE_DATE" width='170px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PROD_DONE_DATE" width='160px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PROD_OP_ID" width='120px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PROD_CHANNEL_TYPE" width='190px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PLATE_OPERATE_TIME" width='190px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="订购时间"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PLATE_ORDER_SOURCE" width='190px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PLATE_ORDER_EFFECTIVE_DATE" width='250px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="PLATE_ORDER_EXPIRE_DATE" width='230px'></el-table-column>
		  	</el-table>
			<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size.sync="pageSize"
			      layout="prev, pager, next, total"
			      :total='1'>
			    </el-pagination>
		  	</div>
		</div>	
	</div>
</template>

<script>
	export default{
		name: 'BroadbanServiceCheckN',
	  	data () {
	    	return {
	    		name:'不一致条数',
	    		currentPage: 1,
	    		pageSize:10,
	    		tableData: [
		    		{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'4',
			          	AUDIT_BATCH: '201808114',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: '集团彩铃',
			         	GATEWAYTOTALNUM: '100.03%',
			          	ERRORA: 0,
			          	ERRORB: 0,
			          	UNEQUAL: 123231,
			          	CRMTOTALNUM: '每日上限',
			          	CONSISRATIO: '10.02%',
			          	REPORTLINK: 'ATTRIBUTE',
			          	SOURCE_SYSTEM:'aa',
			          	TOTAL_NUM_B:'bb',
			          	serviceIds:'37'
			     	}
		    	]
	    	}
	  	},
	  	methods: {
			getList(){
				//根据this.pageName判断页面传参类型
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