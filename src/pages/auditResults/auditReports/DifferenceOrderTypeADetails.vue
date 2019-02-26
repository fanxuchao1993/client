<!--差异数订购明细，A有B有C无类型-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults'}">稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/auditReports'}">多方稽核报表</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/auditReports/differenceOrder'}">差异数订购</el-breadcrumb-item>
			  	<el-breadcrumb-item>明细</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--孙级页面-->
		<div class="tableMenu">
		    <div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-search"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="resultTypeId" placeholder="类型">
				    <el-option
				      	v-for="item in options"
				      	:key="item.RESULTTYPEID"
				      	:label="item.RESULTTYPEMULTINAME"
				      	:value="item.RESULTTYPEID">
				    </el-option>
			  	</el-select>
				<el-input placeholder="接入号" v-model="connectNum" clearable></el-input>
				<el-input placeholder="svccode" v-model="svccodeSelect" clearable></el-input>
				<el-input placeholder="subscode" v-model="subscodeSelect" clearable></el-input>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableChildData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDITDATE" label="稽核时间"></el-table-column>
			    <el-table-column prop="AUDITBATCH" label="稽核批次"></el-table-column>
			    <el-table-column prop="RESULTTYPEMULTINAME" label="结果类型"></el-table-column>
			    <el-table-column prop="AUTITCOLUMN1" label="subscode"></el-table-column>
			    <el-table-column prop="AUTITCOLUMN2" label="svccode"></el-table-column>
			    <el-table-column prop="AUTITCOLUMN3" label="接入号"></el-table-column>
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
	import { getAuditTypeADetail as getAuditTypeADetail } from '@/api/Api'
	export default{
		name: 'DifferenceOrderTypeADetails',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		subscodeSelect:'',
	    		svccodeSelect:'',
	    		connectNum:'',
	    		resultTypeId:'',
	    		totalCount:0,
	    		name:'差异数订购明细',
	    		tableChildData: [
	    			{
			          	AUDITDATE: '201808111',
			          	AUDITBATCH: '1185030',
			          	RESULTTYPEMULTINAME: '有A无BC',
			          	AUTITCOLUMN1: 223300000,
			          	AUTITCOLUMN2: 4455777788,
			          	AUTITCOLUMN3: 187623527
			      	}
	    		],
	    		options: [
		    		{
			          	RESULTTYPEID: '选项1',
			          	RESULTTYPEMULTINAME: '集团短彩信'
			        }, 
			        {
			          	RESULTTYPEID: '选项2',
			          	RESULTTYPEMULTINAME: '双皮奶'
			        }
		        ]
	    	}
	    },
	    created(){
	   		this.getList();
	   		this.resultTypeId = this.getParamas.resultTypeId;
	   	},
		methods: {
			getList(){
				let self = this;
				const params = this.getParamas;
				console.log(JSON.stringify(params));
				getAuditTypeADetail(
					{
						auditTime:params.auditTime,
			    	    auditBatches:params.auditBatches,
			    	    auditPointId:params.auditPointId,
			    	    resultSumId:params.resultSumId,
			    	    ruleId:params.ruleId,
			    	    auditNum:params.auditNum,
			    	    subscodeSelect:self.subscodeSelect,
			    	    svccodeSelect:self.svccodeSelect,
			    	    connectNum:self.connectNum,
			    	    resultTypeId:self.resultTypeId,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT',
			    	    flag:'1'
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response.reList));
					console.log('请求成功！'+JSON.stringify(res.data.response.resultTypelist));
					self.tableChildData = res.data.response.reList;
					self.options = res.data.response.resultTypelist;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
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