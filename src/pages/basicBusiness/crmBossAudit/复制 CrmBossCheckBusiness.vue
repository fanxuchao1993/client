<!--CRM-BOSS稽核查看业务类型-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness'}">基础业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness/crmBossAudit'}">CRM-BOSS稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness/crmBossAudit/crmBossAuditCheck'}">查看</el-breadcrumb-item>
			  	<el-breadcrumb-item>业务类型</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>业务类型
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
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
			    <el-table-column prop="AUDIT_DATE" label="稽核时间" width='90px'></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='80px'></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题名称" width='120px'></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点名称" width='300px'></el-table-column>
			    <el-table-column prop="BUSI_TYPE_NAME" label="业务类型"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点名称" width='200px'></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="服务名称" width='150px'></el-table-column>
			    <el-table-column prop="TOTAL_NUMB" label="平台(参与比对总数)"></el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边(CRM)" width='110px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="ERRORB" label="B单边(平台)" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="TOTAL_DEFF" label="总差异数" width='80px'></el-table-column>
			    <el-table-column prop="REPEAT_DEFF" label="重复差异数" width='100px'></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="新增差异数" width='100px'></el-table-column>
			    <el-table-column prop="DEFF_RATIO" label="新增差异占比(%)" width='130px'></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_HUANBI" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="CONSIS_HUAN_BI_THREE" label="一致率环比三月(%)"></el-table-column>
			    <el-table-column prop="FAILORDER_RELANUM" label="关联失败订单数"></el-table-column>
			    <el-table-column prop="FAILORDER_RATIO" label="关联失败订单率(%)"></el-table-column>
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
	import { getClassSumList as getClassSumList } from '@/api/Api'
	export default{
		name: 'CrmBossCheckBusiness',
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
	    		operatorName:'',
	    		operatorCode:'',
	    		totalCount:0,
	    		tableData: []
	    	}
	  	},
	  	methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				const params = this.getParamas;
				getClassSumList(
					{
			    	    auditBatch:params.auditBatch,
			    	    topicId:params.topicId,
			    	    sourceSystem:'BOSS',
			    	    operatorType:'BOSS',
			    	    operatorName:self.operatorName,
			    	    operatorCode:self.operatorCode,
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
			handleClick(row,column){
				let params = this.getParamas;
				let resultType;
				if (column.label == 'A单边(CRM)') {
					resultType = {resultType:'A'}
				} else if (column.label == 'B单边(平台)') {
					resultType = {resultType:'B'}
				} else if (column.label == '不一致') {
					resultType = {resultType:'U'}
				}
				console.log(Object.assign({},params,resultType));
				this.$store.dispatch('setParamasInfo',Object.assign({},params,resultType));
				this.$router.push({name:'CrmBossCheckBusinessABN'});				
			},
	      	handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getList('0');
	      	}
	    }
	}
</script>

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>