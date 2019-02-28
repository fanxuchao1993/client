<!--香港一卡多号总览查看-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/personalBusiness'}">个人业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="this.$route.matched[2].path">{{this.$route.matched[2].meta.title}}</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{pageName}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{pageName}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="业务名称" v-model="operatorNames" clearable></el-input>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核时间" width="100px"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点名称" width="180px"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称" width="150px"></el-table-column>
			    <el-table-column prop="TOTAL_NUMB" label="平台(参与比对总数)"></el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column label="A单边(CRM)">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="ERRORB" label="B单边(平台)">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致条数">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数"></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)"></el-table-column>
			    <el-table-column prop="LINK_RELATIVE_RATIO" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="ERROR_NUM" label="总差异数"></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="新增差异数"></el-table-column>
			    <el-table-column prop="OVER_LAP_DEFF" label="重复差异数"></el-table-column>
			    <el-table-column prop="INCREMENT_RATIO" label="新增差异占比(%)"></el-table-column>
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
	import { getResultSumType as getResultSumType } from '@/api/Api'
	import { mapGetters } from 'vuex'
	export default{
		name: 'SimMaxHKCheck',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		pageName: '查看',
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		operatorNames:'',
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
				getResultSumType(
					{
						auditTime:params.auditTime,
						auditBatch:params.auditBatch,
						topicId:params.topicId,
						busiType:'0032',
			    	    operatorNames:self.operatorNames.trim(),
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
				} else if (column.label == '不一致条数') {
					resultType = {resultType:'U'}
				} else {
					resultType = {resultType:''}
				}
				console.log(Object.assign({},params,resultType));
				this.$store.dispatch('setParamasInfo',Object.assign({},params,resultType));
				this.$router.push({name:'SimMaxHKCheckABN'});				
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