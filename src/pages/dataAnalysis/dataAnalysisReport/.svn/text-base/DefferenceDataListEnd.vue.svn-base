<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/home'}">数据分析报表</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{resultTypeName}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{compareTableSourceSystem}}>>{{resultTypeName}}>>{{busiTypeName}}>>批次:{{auditBatch}}>>{{prodName}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input v-model="operatorCode" placeholder="业务代码"></el-input>
				<el-input v-model="spCode" placeholder="企业代码"></el-input>
				<el-input v-model="billId" placeholder="手机号码"></el-input>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="differenceData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%;"
		    >
		    	<el-table-column :label="data" v-for="(data,key) in tableName" :key="key">
		    		<el-table-column   prop="BILL_ID" label="比对号码"/>
	    			<el-table-column   prop="SP_CODE" label="企业代码"/>
	    			<el-table-column   prop="OPERATOR_CODE" label="业务代码"/>
	    			
	    			<el-table-column v-if="orderA" prop="PROD_STATE" label="订购状态"/>
	    			<el-table-column v-if="orderB" prop="PLATE_ORDER_STATUS" label="订购状态"/>
	    			<el-table-column v-if="orderU" prop="PROD_STATE" label="订购状态"/>
	    			
	    			<el-table-column   prop="OFFER_ID" label="CRM策划编号"/>
	    			<el-table-column   prop="PLATE_ORDER_EFFECTIVE_DATE" label="平台订购生效时间"/>
	    			<el-table-column   prop="PROD_EFFECTIVE_DATE" label="CRM产品生效时间"/>
	    			<el-table-column   prop="PROD_EXPIRE_DATE" label="CRM产品失效时间"/>
	    			<el-table-column   prop="PROD_DONE_DATE" label="CRM产品受理时间"/>
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
	import { getDetailList as getDetailList } from '@/api/Api'
	export default{
		name: 'DefferenceDataListEnd',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
	    	return {
	    		header:[],
	    		tableName:[],
	    		resultType:'',
	    		tableHeadName:'',
	    		compareTableSourceSystem:'',
	    		resultTypeName:'',
	    		busiTypeName:'',
	    		busiType:'',
	    		userState:'',
	    		auditBatch:'',
	    		plateOrderStatus:'',
	    		prodId:'',
	    		prodState:'',
	    		timeTypeId:'',
	    		billId:'',
	    		spCode:'',
	    		operatorCode:'',
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		orderA:true,
	    		orderB:true,
	    		orderU:true,
	    		prodName:'',
	    		differenceData:[
	    			{
	    				BILL_ID:'',
	    				SP_CODE:'',
	    				OPERATOR_CODE:'',
	    				PLATE_ORDER_STATUS:'',
	    				PROD_STATE:'',
	    				OFFER_ID:'',
	    				PLATE_ORDER_EFFECTIVE_DATE:'',
	    				PROD_EFFECTIVE_DATE:'',
	    				PROD_EXPIRE_DATE:'',
	    				PROD_DONE_DATE:''
	    			}
	    		]
	    	}
	  	},

	  	created(){
	  		const params = this.getParamas;
	  		this.resultTypeName = params.resultTypeName;
	  		this.busiTypeName = params.busiTypeName;
	  		this.busiType = params.busiType;
	  		this.resultType = params.resultType;
	  		if(params.resultType == "U"){
	  			this.resultTypeName = "不一致"	
	  		}
	  		this.tableHeadName = params.compareTableSourceSystem + "-" +"差异明细展现"+ "(" + this.resultTypeName + ")";
	  		this.compareTableSourceSystem = params.compareTableSourceSystem;
	  		this.tableName.push(this.tableHeadName);
	  		this.auditBatch = params.auditBatch;
	  		this.prodId = params.prodId;
	  		this.userState = params.userState;
	  		this.plateOrderStatus = params.plateOrderStatus;
	  		this.prodState = params.prodState;
	  		this.timeTypeId = params.timeTypeId;
	  		this.prodName = params.prodName;
	   		if(this.resultType == "A"){
	   			this.orderA = true;
	   			this.orderB = false;
	   			this.orderU = false;
	   		}else if(this.resultType == "B"){
	   			this.orderA = false;
	   			this.orderB = true;
	   			this.orderU = false;
	   		}else{
	   			this.orderA = false;
	   			this.orderB = false;
	   			this.orderU = true;
	   		}
	   		this.getList('1');
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				getDetailList(
					{
						compareTableSourceSystem:self.compareTableSourceSystem,
						auditBatch:self.auditBatch,
						resultType:self.resultType,
						busiType:self.busiType,
						userState:self.userState,
						prodId:self.prodId,
						plateOrderStatus:self.plateOrderStatus,
						prodState:self.prodState,
						timeTypeId:self.timeTypeId,
						billId:self.billId,
						spCode:self.spCode,
						operatorCode:self.operatorCode,
						start:self.currentPage-1,
			    	    limit:self.pageSize			    	    
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.differenceData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
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
	        	this.getList('0');
	      	}
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.block{text-align: right;margin-top: 15px;}
</style>