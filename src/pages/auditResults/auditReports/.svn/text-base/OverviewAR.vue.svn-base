<!--多方稽核报表-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults'}">稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item>多方稽核报表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>数据总览
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="稽核点名称" v-model="auditPointName" clearable></el-input>
				<el-input placeholder="批次" v-model="auditBatches" clearable></el-input>
				<el-date-picker
					v-model="auditTime"
					type="date"
					align="left"
			      	placeholder="选择日期">
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
			    <el-table-column prop="AUDITDATE" label="稽核时间" width="100px"></el-table-column>
			    <el-table-column prop="AUDITBATCH" label="稽核批次" width="100px"></el-table-column>
			    <el-table-column prop="CHECKNAME" label="稽核点名称" width="200px"></el-table-column>
			    <el-table-column prop="AUDITTABLENUM" label="参与稽核方数量" width="140px"></el-table-column>
			    <el-table-column prop="CRMTOTALNUM" label="CRM参与比对总条数" width="170px"></el-table-column>
			    <el-table-column prop="EDSMPTOTALNUM" label="ED参与对比数" width="140px"></el-table-column>
			    <el-table-column prop="GATEWAYTOTALNUM" label="网关参与比对总数" width="170px"></el-table-column>
			    <el-table-column prop="COMPAREATTRNAME" label="属性名称"></el-table-column>
			    <el-table-column prop="CONSISNUM" label="一致数" width="100px"></el-table-column>
			    <el-table-column prop="CONSISRATIO" label="一致率(%)" width="100px"></el-table-column>
			    <el-table-column prop="ERRORNUM" label="差异数" width="100px">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.ERRORNUM}}</el-button>
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
			      :total=totalCount>
			    </el-pagination>
		  	</div>
		</div>	
	</div>
</template>

<script>
	import { getAuditReportSummaryList as getAuditReportSummaryList } from '@/api/Api'
	export default{
		name: 'OverviewAR',
		data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		auditTime:'',
	    		auditPointName:'',
	    		auditBatches:'',
	    		totalCount:0,
	    		tableData: [
		    		{
		    			RESULTSUMID:'aabbcc',
		    			AUDITDATE:'111',
			          	AUDITBATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: '集团短彩信三方稽核_属性',
			         	GATEWAYTOTALNUM: '100.03%',
			          	CONSISNUM: 10086,
			          	ERRORNUM: 999,
			          	CRMTOTALNUM: '每日上限',
			          	CONSISRATIO: '10.02%',
			          	REPORTLINK: 'ATTRIBUTE'
			     	},{
			     		RESULTSUMID:'aabbcc',
		    			AUDITDATE:'111',
			          	AUDITBATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: '集团短彩信三方稽核_订购',
			         	GATEWAYTOTALNUM: '100.03%',
			          	CONSISNUM: 10086,
			          	ERRORNUM: 999,
			          	CRMTOTALNUM: '每日上限',
			          	CONSISRATIO: '10.02%',
			          	REPORTLINK: 'ORDER'
			     	}
		        ]		        
	    	}
	  	},
	  	created(){
	   		this.getList();
	   	},
		methods: {
			getList(){
				let self = this;
				getAuditReportSummaryList(
					{
						auditTime:self.auditTime,
			    	    auditBatches:self.auditBatches,
			    	    auditPointName:self.auditPointName,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT'
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			handleClick(row){
				let auditInfo = {
					'auditTime':row.AUDITDATE,
					'auditBatches':row.AUDITBATCH,
					'auditPointId':row.CHECKOBJID,
					'compareAttribute':row.COMPAREATTRIBUTE,
					'resultSumId':row.RESULTSUMID,
					'ruleId':row.RULEID
				};
				this.$store.dispatch('setParamasInfo',auditInfo);
				if (row.REPORTLINK=='ATTRIBUTE') {
					this.$router.push({
			    	    name:'DifferenceAttribute'
			        });
				} else {
					this.$router.push({
			    	    name:'DifferenceOrder'
			        });
				}
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