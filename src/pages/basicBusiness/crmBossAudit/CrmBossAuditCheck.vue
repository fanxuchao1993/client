<!--CRM-BOSS稽核查看-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness'}">基础业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness/crmBossAudit'}">CRM-BOSS稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>数据查看
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="operatorType" placeholder="业务类型" clearable>
				    <el-option
				      	v-for="item in options"
				      	:key="item.RESULTTYPEID"
				      	:label="item.RESULTTYPEMULTINAME"
				      	:value="item.RESULTTYPEID">
				    </el-option>
			  	</el-select>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核时间" width="90px"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width="80px"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题名称" width="120px"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点名称" width="250px"></el-table-column>
			    <el-table-column label="业务类型">   	
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.BUSI_TYPE_NAME}}</el-button>
			      	</template>			   
			    </el-table-column>
			    <el-table-column prop="SOURCE_SYSTEM" label="平台(参与比对总数)" width="150px">
			    	<template slot-scope="scope">
			        	{{scope.row.SOURCE_SYSTEM + "(" + scope.row.TOTAL_NUMB +")"}}
			      	</template>
			    </el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与比对总条数" width="110px"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边(CRM)" width="100px"></el-table-column>
			    <el-table-column prop="ERRORB" label="B单边(平台)" width="100px"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致" width="100px"></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数" width="110px"></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)"></el-table-column>
			    <el-table-column prop="CONSIS_HUANBI" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="TOTAL_DEFF" label="总差异数" width="100px"></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="新增差异数" width="100px"></el-table-column>
			    <el-table-column prop="OVER_LAP_DEFF" label="重复差异数" width="100px"></el-table-column>
			    <el-table-column prop="DEFF_RATIO" label="新增差异占比(%)"></el-table-column>
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
	import { getClassSumTypesList as getClassSumTypesList } from '@/api/Api'
	export default{
		name: 'CrmBossAuditCheck',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
	   		this.getList('0');
	   	},
	  	data () {
	    	return {
	    		name:'查看',
	    		currentPage: 1,
	    		pageSize:10,
	    		operatorType:'',
	    		totalCount:0,
	    		tableData: [],
		        options: [
		            {
			          	RESULTTYPEID: '',
			          	RESULTTYPEMULTINAME: '请选择'
			       	},
		    		{
			          	RESULTTYPEID: 'BOSS',
			          	RESULTTYPEMULTINAME: 'BOSS'
			       	}
		        ]
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
				getClassSumTypesList(
					{
						auditTime:params.auditTime,
			    	    auditBatch:params.auditBatch,
			    	    topicId:params.topicId,
			    	    operatorType:self.operatorType,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    sourceSystem:'BOSS'
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
			handleClick(row){
				let params = this.getParamas;
				let auditPointIdNew;
				auditPointIdNew = {auditPointIdNew:row.AUDIT_POINT_ID};
				console.log(Object.assign({},params,auditPointIdNew));
				this.$store.dispatch('setParamasInfo',Object.assign({},params,auditPointIdNew));
				this.$router.push({name:'CrmBossCheckBusiness'});
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