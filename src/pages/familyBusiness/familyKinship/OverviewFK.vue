<!--家庭业务稽核亲情通-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/familyBusiness'}">家庭业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>亲情通</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>稽核总览
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-search"></i>导出</span>	
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="UPLOAD_DATE" label="稽核时间" width='100px'></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
			    <el-table-column prop="CHECKNAME" label="稽核点名称" width='140px'></el-table-column>
			    <el-table-column prop="TOPIC" label="平台(参与比对总数)"></el-table-column>
			    <el-table-column prop="TOPIC" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column prop="TOPIC" label="A单边(CRM)"></el-table-column>
			    <el-table-column prop="TOPIC" label="B单边(平台)"></el-table-column>
			    <el-table-column prop="TOPIC" label="不一致条数"></el-table-column>
			    <el-table-column prop="TOPIC" label="一致性条数"></el-table-column>
			    <el-table-column prop="GATEWAYTOTALNUM" label="一致率(%)"></el-table-column>
			    <el-table-column prop="GATEWAYTOTALNUM" label="一致率环比上月"></el-table-column>
			    <el-table-column prop="TOPIC" label="总差异数"></el-table-column>
			    <el-table-column prop="TOPIC" label="新增差异数"></el-table-column>
			    <el-table-column prop="TOPIC" label="重复差异数"></el-table-column>
			    <el-table-column prop="GATEWAYTOTALNUM" label="新增差异占比"></el-table-column>
			    <el-table-column prop="GATEWAYTOTALNUM" label="新增差异环比"></el-table-column>
			    <el-table-column label="分类汇总" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			      	</template>
			    </el-table-column>
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
	export default{
		name: 'OverviewFK',
		created(){
//	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		tableData: [
		    		{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'1601476',
			          	AUDIT_BATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: '亲情通_WZGAT',
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
			     	},
			     	{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'1601476',
			          	AUDIT_BATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: '亲情通_WZQQT',
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
			handleClick(row){
				this.$router.push({name:"FamilyKinshipCheck"});
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