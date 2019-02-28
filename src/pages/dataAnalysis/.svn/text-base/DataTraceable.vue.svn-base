<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>数据追溯</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>数据追溯
				</div>
				<div class="divStyle2">
					<div class="divStyle">
						<el-input v-model="telephone" placeholder="手机号码" clearable></el-input>
						<el-select v-model="resultType" @change="changeOption" clearable placeholder="结果追溯类型">
						   	<el-option 
						   		v-for="item in options" 
						   		:key="item.sourceId" 
						   		:label="item.sourceName"
					      		:value="item.sourceId">
					    	</el-option>
						</el-select>
					</div>
					<div class="divStyle">
						<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
					</div>
			   	</div>
				<div class="clear"></div>
			</div>
			<el-table
				v-if="resultType === 'mcas'"
			    :data="dataTraceableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="DATA_DATE" label="数据日期" width="90px"></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号" width="120px"></el-table-column>
			    <el-table-column prop="SP_CODE" label="企业代码"></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="业务代码"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称" width="120px"></el-table-column>
			    <el-table-column prop="OFFER_ID" label="策划编号" width="120px"></el-table-column>
			    <el-table-column prop="PROD_ID" label="产品编号" width="120px"></el-table-column>
			    <el-table-column prop="STATE" label="状态"></el-table-column>
			    <el-table-column prop="CRM_EFFECTIVE_DATE" label="生效日期" width="160px"></el-table-column>
			    <el-table-column prop="CRM_EXPIRE_DATE" label="失效日期" width="160px"></el-table-column>
			    <el-table-column prop="OTHER_TELEPHONE" label="第三方号码"></el-table-column>
			    <el-table-column prop="FEE_TYPE" label="计费类型"></el-table-column>
			    <el-table-column prop="ORDER_STATUS" label="订购关系状态"></el-table-column>
			    <el-table-column prop="EFFECTIVE_DATE" label="订购关系生效时间" width="140px"></el-table-column>
			    <el-table-column prop="BUSI_CODE" label="业务代码名称"></el-table-column>
			    <el-table-column prop="LATEST_ORDER_TIME" label="最近一次订购时间" width="150px"></el-table-column>
			    <el-table-column prop="ORDER_STATUS_CONSIS" label="订购关系状态(规范化)"></el-table-column>
		  	</el-table>
		  	<el-table
				v-else-if="resultType === 'misc'"
			    :data="dataTraceableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="DATA_DATE" label="数据日期"></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号"></el-table-column>
			    <el-table-column prop="SP_CODE" label="企业代码"></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="业务代码"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称"></el-table-column>
			    <el-table-column prop="OFFER_ID" label="策划编号"></el-table-column>
			    <el-table-column prop="PROD_ID" label="产品编号"></el-table-column>
			    <el-table-column prop="STATE" label="状态"></el-table-column>
			    <el-table-column prop="CRM_EFFECTIVE_DATE" label="生效日期"></el-table-column>
			    <el-table-column prop="CRM_EXPIRE_DATE" label="失效日期"></el-table-column>
			    <el-table-column prop="BUSI_USER" label="业务使用方"></el-table-column>
			    <el-table-column prop="ORDER_STATUS" label="订购状态"></el-table-column>
			    <el-table-column prop="ORDER_SOURCE" label="订购/退订来源"></el-table-column>
			    <el-table-column prop="SEARCH_FLAG" label="手机探索标志"></el-table-column>
			    <el-table-column prop="EFFECTIVE_DATE" label="生效时间"></el-table-column>
			    <el-table-column prop="EXPIRE_DATE" label="失效时间"></el-table-column>
			    <el-table-column prop="ORDER_STATUS_CONSIS" label="订购关系状态(规范化)"></el-table-column>
		  	</el-table>
		  	<el-table
				v-else-if="resultType === '139'"
			    :data="dataTraceableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="DATA_DATE" label="数据日期"></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号"></el-table-column>
			    <el-table-column prop="SP_CODE" label="企业代码"></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="业务代码"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称"></el-table-column>
			    <el-table-column prop="OFFER_ID" label="策划编号"></el-table-column>
			    <el-table-column prop="PROD_ID" label="产品编号"></el-table-column>
			    <el-table-column prop="STATE" label="状态"></el-table-column>
			    <el-table-column prop="CRM_EFFECTIVE_DATE" label="生效时间"></el-table-column>
			    <el-table-column prop="CRM_EXPIRE_DATE" label="失效时间"></el-table-column>
			    <el-table-column prop="BUSINESS_TYPE" label="业务类型编码"></el-table-column>
			    <el-table-column prop="BUSI_SUB_CODE" label="业务子类"></el-table-column>
			    <el-table-column prop="ORDER_STATUS" label="订购关系状态"></el-table-column>
			    <el-table-column prop="EFFECTIVE_DATE" label="订购关系生效时间"></el-table-column>
			    <el-table-column prop="EXPIRE_DATE" label="订购关系失效时间"></el-table-column>
			    <el-table-column prop="FEE_TYPE" label="计费类型"></el-table-column>
			    <el-table-column prop="SERVICE_STATUS" label="产生服务状态"></el-table-column>
			    <el-table-column prop="CHANNEL_SOURCE" label="操作渠道来源"></el-table-column>
			    <el-table-column prop="BUSIN_INFO" label="业务受理信息"></el-table-column>
			    <el-table-column prop="ORDER_STATUS_CONSIS" label="订购关系状态(规范化)"></el-table-column>
		  	</el-table>
		  	<el-table
				v-else-if="resultType === 'wlan'"
			    :data="dataTraceableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="DATA_DATE" label="数据日期"></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号"></el-table-column>
			    <el-table-column prop="SP_CODE" label="企业代码"></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="业务代码"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称"></el-table-column>
			    <el-table-column prop="OFFER_ID" label="策划编号"></el-table-column>
			    <el-table-column prop="PROD_ID" label="产品编号"></el-table-column>
			    <el-table-column prop="STATE" label="状态"></el-table-column>
			    <el-table-column prop="CRM_EFFECTIVE_DATE" label="生效日期"></el-table-column>
			    <el-table-column prop="CRM_EXPIRE_DATE" label="失效日期"></el-table-column>
			    <el-table-column prop="ORDER_STATUS" label="用户订购套餐状态"></el-table-column>
			    <el-table-column prop="EFFECTIVE_DATE" label="套餐生效时间"></el-table-column>
			    <el-table-column prop="ORDER_STATUS_CONSIS" label="订购套餐状态(规范化)"></el-table-column>
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
	import { doListComResult as doListComResult } from '@/api/Api'
	export default{
		name: 'DataTraceable',
		computed:{
		 	...mapGetters(['getParamas']) 
//		    getUser:function() {
//		      // 通过vuex的getters方法来获取state里面的数据
//		      return this.$store.getters.getParamas;
//		    }
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		resultType:'',
	    		telephone:'',
	    		dataTraceableData:[],
	    		options: [
		    		{
			          	sourceId: 'mcas',
			          	sourceName: 'MCAS订购关系追溯'
			       	},
			       	{
			          	sourceId: 'misc',
			          	sourceName: 'MISC订购关系追溯'
			       	},
			       	{
			          	sourceId: '139',
			          	sourceName: '139订购关系追溯'
			       	},
			       	{
			          	sourceId: 'wlan',
			          	sourceName: 'WLAN订购关系追溯'
			       	},
		        ]
	    	}
	  	},
	  	created(){
	  		this.resultType = 'mcas';
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				if(this.telephone == ""){
					this.$message.error("请填写手机号码，手机号码不能为空!");
				} else{
					doListComResult(
						{
				    	    start:self.currentPage-1,
				    	    limit:self.pageSize,
							sourceId: self.resultType,
							telephone:self.telephone
						}
					).then(res=>{
						console.log('请求成功！'+JSON.stringify(res.data.response));
						self.dataTraceableData = res.data.response.reList;
						self.totalCount = res.data.response.totalCount;
					}).catch(err=>{
						console.log(err);
						console.log('请求失败！');
					})	
				}
			},
			changeOption(){
				if(this.telephone == ""){
					this.dataTraceableData = "";	
					this.totalCount = 0;
				}else{
					this.getList('1');
				}
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