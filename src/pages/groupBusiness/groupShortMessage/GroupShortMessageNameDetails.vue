<!--集团短彩信稽核点名称详情-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness/groupShortMessage'}">集团短彩信</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness/groupShortMessage/groupShortMessageName'}">稽核点名称</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{pageType}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{pageType}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="ENTCODE" v-model="businessCode" clearable></el-input>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="UPLOAD_DATE" label="稽核时间"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='140px'></el-table-column>
			    <el-table-column prop="CHECKNAME" label="稽核点名称" width='160px'></el-table-column>
			    <el-table-column prop="CHECKNAME" label="业务名称" width='160px'></el-table-column>
			    <el-table-column prop="SOURCE_SYSTEM" label="比对结果类型" width='140px'></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="新增/历史" width='120px'></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="ENTCODE" width='200px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="订购渠道" width='120px'></el-table-column>
			    <template v-if="pageType !== 'B单边'">
			    	<el-table-column prop="CONSIS_RATIO" label="CRM开始时间" width='140px'></el-table-column>
				    <el-table-column prop="CONSIS_HUANBI" label="CRM结束时间" width='140px'></el-table-column>
				    <el-table-column prop="TOTAL_DEF" label="CRM订购状态" width='140px'></el-table-column>
			    </template>
			    <el-table-column prop="INCREMENT_NUM" label="平台开始时间" width='140px'></el-table-column>
			    <el-table-column prop="OVER_LAP_DEF" label="平台订购状态" width='140px'></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="近三个月失败订单" width='140px'></el-table-column>
		  	</el-table>
			<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size.sync="pageSize"
			      layout="prev, pager, next, total"
			      :total='86'>
			    </el-pagination>
		  	</div>
		</div>	
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		name: 'GroupShortMessageNameDetails',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			this.pageType = this.getParamas.pageType;
//	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		pageType:'B单边',
	    		businessCode:'',
	    		tableData: [
		    		{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'1601476',
			          	AUDIT_BATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: 'CRMHLR稽核',
			         	GATEWAYTOTALNUM: '100.03%',
			          	ERRORA: 10086,
			          	ERRORB: 999,
			          	UNEQUAL: 123231,
			          	CRMTOTALNUM: '每日上限',
			          	CONSISRATIO: '10.02%',
			          	REPORTLINK: 'ATTRIBUTE',
			          	SOURCE_SYSTEM:'aa',
			          	TOTAL_NUM_B:'bb',
			          	TOPIC:'19991'
			     	}
		        ]
	    	}
	  	},
	  	methods: {
			getList(){
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