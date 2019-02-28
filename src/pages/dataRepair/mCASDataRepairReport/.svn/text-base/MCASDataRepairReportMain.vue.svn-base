<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>MCAS数据修复报表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>MCAS数据修复报表总览
				</div>
			</div>
			<el-table
			    :data="auditData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核时间"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题名称"></el-table-column>
			    <el-table-column label="平台(参与比对总数)">
			    	<template slot-scope="scope">
				       	{{scope.row.SOURCE_SYSTEM}}({{scope.row.TOTAL_NUMB}})
				    </template>
			    </el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边(CRM)"></el-table-column>
			    <el-table-column prop="ERRORB" label="B单边(平台)"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致"></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数"></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)"></el-table-column>
			    <el-table-column prop="REPAIR_RATIO" label="修复率"></el-table-column>
			    <el-table-column label="修复情况" fiexd="right">
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
			      :total=totalCount>
			    </el-pagination>
		  	</div>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { auditList as auditList } from '@/api/Api'
	export default{
		name: 'MCASDataRepairReport',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		auditData:[],
	    	}
	  	},

	  	created(){
	   		this.getList('0');
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				auditList(
					{
						start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.auditData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
			},
			handleClick(row) {
				let params = {
					'auditDate':row.AUDIT_DATE,
					'auditBatch':row.AUDIT_BATCH,
					'topicId':row.TOPIC_ID
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params));
				this.$router.push({
			    	'name':'MCASDetail'
			    });
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

<style>
	.el-range-separator{line-height: 21px !important;}
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
</style>