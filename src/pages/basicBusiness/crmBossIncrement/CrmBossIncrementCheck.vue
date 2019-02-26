<!--CRM-BOSS日增量稽核查看-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness'}">基础业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness/crmBossIncrement'}">CRM-BOSS日增量稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>数据总览
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-search"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="促销名称" v-model="operatorName" clearable></el-input>
				<el-input placeholder="促销代码" v-model="operatorCode" clearable></el-input>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核时间"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题名称"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点名称"></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="促销代码"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="促销名称"></el-table-column>
			    <el-table-column prop="TOTAL_NUMB" label="平台(参与比对总数)"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边(CRM)">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="ERRORB" label="B单边(平台)">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数"></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)"></el-table-column>
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
	import { getClassSumList as getClassSumList } from '@/api/Api'
	export default{
		name: 'CrmBossIncrementCheck',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
	  	data () {
	    	return {
	    		name:'查看',
	    		currentPage: 1,
	    		pageSize:10,
	    		operatorName:'',
	    		operatorCode:'',
	    		tableData: [
		    		{
		    			TOPIC_NAME:'aabbcc',
		    			AUDIT_DATE:'1601476',
			          	AUDIT_BATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: 'BOSS增量稽核3',
			         	UNEQUAL: '100.03%',
			          	ERRORA: 10086,
			          	ERRORB: 10086,
			          	TOPIC_ID: '每日上限',
			          	AUDIT_POINTID: '10.02%',
			          	OPERATOR_CODE: 'ATTRIBUTE'
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
				getClassSumList(
					{
						auditTime:params.auditTime,
			    	    auditBatch:params.auditBatche,
			    	    topicId:params.topicId,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    sourceSystem:'BOSSADD',
			    	    operatorCode:self.operatorCode,
			    	    operatorName:self.operatorName,
			    	    isJump:''
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			backRouter(){
				this.$router.back(-1);
			},
			handleClick(row,column){
				let params = this.getParamas;
				params.topicId = row.TOPIC_ID;
				let resultType;
				if (column.label == 'A单边(CRM)') {
					resultType = {resultType:'A'}
				} else if (column.label == 'B单边(平台)') {
					resultType = {resultType:'B'}
				} else if (column.label == '不一致') {
					resultType = {resultType:'U'}
				}
				let bossParam = {
					auditPointId:row.AUDIT_POINTID,
					extendId:row.OPERATOR_CODE
				}
				console.log(Object.assign({},params,resultType,bossParam));
				this.$store.dispatch('setParamasInfo',Object.assign({},params,resultType,bossParam));
				this.$router.push({name:'CrmBossIncrementCheckDetails'});
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