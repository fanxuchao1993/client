<!--集团短彩信总览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>集团短彩信</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>稽核总览
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-search"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="稽核点名称" v-model="auditName" clearable></el-input>
				<el-input placeholder="稽核批次" v-model="auditBatches" clearable></el-input>
				<el-date-picker
					v-model="auditMonth"
					type="month"
					align="left"
			      	placeholder="稽核日期">
			    </el-date-picker>
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
			    <el-table-column label="稽核点名称">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.CHECKNAME}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="SOURCE_SYSTEM" label="平台(参与比对总数)"></el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边(CRM)" width='110px'></el-table-column>
			    <el-table-column prop="ERRORB" label="B单边(平台)" width='100px'></el-table-column>
			    <el-table-column label="不一致条数" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_HUANBI" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="TOTAL_DEF" label="差异总数" width='80px'></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="新增差异数" width='100px'></el-table-column>
			    <el-table-column prop="OVER_LAP_DEF" label="重复差异数" width='100px'></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="新增差异占比" width='120px'></el-table-column>
			    <el-table-column label="分类汇总" fixed="right" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">查看</el-button>
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
	import { mapGetters } from 'vuex'
	export default{
		name: 'OverviewGSM',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		created(){
	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		auditMonth:'',
	    		auditBatches:'',
	    		auditName:'',
	    		tableData: [
		    		{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'1601476',
			          	AUDIT_BATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: '集团短彩信_业务代码(SVCCODE)',
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
			     	},
			     	{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'1601476',
			          	AUDIT_BATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: '集团短彩信_订购状态',
			         	GATEWAYTOTALNUM: '100.03%',
			          	ERRORA: 0,
			          	ERRORB: 0,
			          	UNEQUAL: 123231,
			          	CRMTOTALNUM: '每日上限',
			          	CONSISRATIO: '10.02%',
			          	REPORTLINK: 'ATTRIBUTE',
			          	SOURCE_SYSTEM:'aa',
			          	TOTAL_NUM_B:'bb',
			          	serviceIds:'17'
			     	}
		        ]
	    	}
	  	},
	  	methods: {
			getList(){
			},
			handleClick(row,column){
				let routeName;
				if (column.label==='分类汇总') {
					routeName='GroupShortMessageCheck'
				}else if(column.label==='稽核点名称'){
					let param = {
						serviceIds:row.serviceIds
					}
					this.$store.dispatch('setParamasInfo',param);
					routeName='GroupShortMessageName'
				}else{
					routeName='GroupShortMessageN'
				}
				this.$router.push({name:routeName});
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