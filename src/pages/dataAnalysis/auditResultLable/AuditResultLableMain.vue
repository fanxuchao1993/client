<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>稽核结果标签</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>稽核结果标签
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input v-model="dataTypeCode" placeholder="标签编码" clearable></el-input>
			       
			    <el-select v-model="resultType" clearable  placeholder="稽核平台" >
				   	<el-option 
				   		v-for="item in optionsPlat" 
				   		:key="item.SYSTEM_ID" 
				   		:label="item.SYSTEM_NAME"
			      		:value="item.SYSTEM_ID">
			    	</el-option>
				</el-select>
				<el-date-picker
					v-model="auditTime"
					type="date"
					align="left"
			      	placeholder="稽核日期"
			      	format="yyyyMMdd"
			      	value-format="yyyyMMdd" clearable>
			   </el-date-picker>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="auditLable"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="SYSTEM_TIME_ID" label="稽核日期"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次"></el-table-column>
			    <el-table-column prop="SYSTEM_ID" label="稽核平台"></el-table-column>
			    <el-table-column label="标签编号">
			    	<template slot-scope="scope">
			        	<el-button @click="handleCodeClick(scope.row)" type="text" size="small">{{scope.row.DATA_TYPE_CODE}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CT" label="数量"></el-table-column>
			    <el-table-column prop="CTPERCENT" label="占比"></el-table-column>
			    <el-table-column prop="DATA_TYPE_DESC" label="标签描述" width="250px"></el-table-column>
			    <el-table-column prop="DATA_TYPE_ID" label="标签ID"></el-table-column>
			    <el-table-column prop="DATA_TYPE_NAME" label="标签名称" width="250px"></el-table-column>
			    <el-table-column   label="操作">
			    	<template slot-scope="scope">
				    	<el-button @click="handleClick(scope.row)" type="text" size="small">填写</el-button>
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
	import { getSourceSystemList as getSourceSystemList } from '@/api/Api'
	import { getLabelSum as getLabelSum } from '@/api/Api'
	
	export default{
		name: 'AuditResultLableMain',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		auditTime:'',
	    		dataTypeCode:'',
	    		resultType:'',
	    		auditLable:[],
	    		optionsPlat: [
		    		{
			          	SYSTEM_NAME: '',
			          	SYSTEM_ID: ''
			        }
		        ]
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
				getLabelSum(
					{
						auditTime:self.auditTime,
						resultType:self.resultType,
						dataTypeCode:self.dataTypeCode,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.auditLable = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
					
					this.getSourceSystemList();//查询平台
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			getSourceSystemList(){
				let self = this;
				getSourceSystemList(
					{
						systemId: ''
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.optionsPlat = res.data.response.reList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
			},
			handleCodeClick(row){
				let params = this.getParamas;
				let orderParams = {
					'auditTime':row.SYSTEM_TIME_ID,
					'auditBatch':row.AUDIT_BATCH,
					'resultType':row.SYSTEM_ID,
					'dateTypeId':row.DATA_TYPE_CODE,
					'dateTypeName':row.DATA_TYPE_NAME,
					'ctPercent':row.CTPERCENT
				}
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'AuditResultLableDetail'
			    });
			},
	      	handleClick(row) {
	        	let params = this.getParamas;
				let orderParams = {
					'auditTime':row.SYSTEM_TIME_ID,
					'auditBatch':row.AUDIT_BATCH,
					'resultType':row.SYSTEM_ID,
					'dateTypeId':row.DATA_TYPE_CODE,
					'dateTypeName':row.DATA_TYPE_NAME,
					'ctPercent':row.CTPERCENT
				}
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'AuditResultLableFillIn'
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
	.descriptionCss{color:red;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
</style>