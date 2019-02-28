<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults'}">稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/overview'}">概览</el-breadcrumb-item>
			  	<el-breadcrumb-item>稽核平台</el-breadcrumb-item>
			  	
			</el-breadcrumb>
		</div>
		<!--子级页面-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>稽核平台详情
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableChildData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="auditDate" label="稽核时间"></el-table-column>
			    <el-table-column prop="auditBatch" label="稽核批次"></el-table-column>
			    <el-table-column prop="auditPointName" label="稽核点名称"></el-table-column>
			    <el-table-column prop="totalNumB" label="平台(参与比对总数)"></el-table-column>
			    <el-table-column prop="totalNum" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column prop="errorA" label="A单边(CRM)"></el-table-column>
			    <el-table-column prop="errorB" label="B单边(平台)"></el-table-column>
			    <el-table-column prop="unequal" label="不一致条数"></el-table-column>
			    <el-table-column prop="consisNum" label="一致性条数"></el-table-column>
			    <el-table-column prop="consisRatio" label="一致率(%)"></el-table-column>
			    <el-table-column prop="linkRelativeRatio" label="一致率环比上月"></el-table-column>
			    <el-table-column prop="errorNum" label="总差异数"></el-table-column>
			    <el-table-column prop="incrementNum" label="新增差异数"></el-table-column>
			    <el-table-column prop="overLapDeff" label="重复差异数"></el-table-column>
			    <el-table-column prop="incrementRatio" label="新增差异占比"></el-table-column>
			    <el-table-column prop="new_Huanbishangyue" label="新增差异环比"></el-table-column>
			    <el-table-column label="分类汇总" fixed="right" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">查看</el-button>
			      	</template>
			    </el-table-column>
			     <p
			       v-if="busiType='0014'"
			     <el-table-column prop="chakan" label="套餐分析"> </el-table-column>
			     >
			     </p>
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
	import { getCommSchoolResultList as getCommSchoolResultList } from '@/api/Api'
	export default{
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		auditTime:'',
	    		auditPointName:'',
	    		auditBatches:'',
	    		totalCount:0,
	    		tableChildData: [
	    			{
	    				AUDITDATE: '',
			          	AUDITBATCH: '',
			          	AUDITPOINTNAME: '',
			         	totalNumB: '',
			         	totalNum:'',
			         	errorA:'',
			         	errorB:'',
			         	unequal:'',
			         	consisNum:'',
			         	consisRatio:'',
			         	linkRelativeRatio:'',
			         	incrementNum:'',
			         	overLapDeff:'',
			         	incrementRatio:'',
			         	new_Huanbishangyue:'',
			         	chakan:'',
			         	topicId:''
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
				getCommSchoolResultList(
					{
						busiType:params.BUSITYPE,
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
					'auditDate':row.auditDate,
					'auditBatch':row.auditBatch,
					'busiType':params.BUSITYPE,
					'topicId':row.topicId
					
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'overViewList'
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