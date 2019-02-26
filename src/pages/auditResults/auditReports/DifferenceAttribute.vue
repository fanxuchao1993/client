<!--差异数属性-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults'}">稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/auditReports'}">多方稽核报表</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--子级页面-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>差异数属性
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
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
			    <el-table-column prop="COMPAREATTRNAME" label="属性名称"></el-table-column>
			    <el-table-column prop="RESULTTYPEMULTINAME" label="结果类型"></el-table-column>
			    <el-table-column prop="ERRORNUM" label="数量" width="170px">
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
	import { mapGetters } from 'vuex'
	import { getAuditDifferenceCountList as getAuditDifferenceCountList } from '@/api/Api'
	export default{
		name: 'DifferenceAttribute',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		name:'差异数属性',
	    		totalCount:0,
	    		tableChildData: [
	    			{
	    				AUDITDATE: '201808111',
			          	AUDITBATCH: '1185030',
			          	COMPAREATTRNAME: '属性',
			         	RESULTTYPEMULTINAME: '100.03%',
			         	ERRORNUM:'10085'
	    			},
	    			{
	    				AUDITDATE: '201808111',
			          	AUDITBATCH: '1185030',
			          	COMPAREATTRNAME: '属性',
			         	RESULTTYPEMULTINAME: '100.03%',
			         	ERRORNUM:'185'
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
				const params = this.getParamas;
				getAuditDifferenceCountList(
					{
						auditTime:params.auditTime,
			    	    auditBatches:params.auditBatches,
			    	    auditPointId:params.auditPointId,
			    	    compareAttribute:params.compareAttribute,
			    	    resultSumId:params.resultSumId,
			    	    ruleId:params.ruleId,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT'
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableChildData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
	  		backRouter(){
				this.$router.back(-1);
			},
			handleClick(row){
				let params = this.getParamas;
				let orderParams = {
					'resultTypeId':row.RESULTTYPEID,
					'auditNum':row.AUDITTABLENUM
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'DifferenceAttributeDetails'
			    });
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