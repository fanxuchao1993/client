<!--集团短彩信不一致条数-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness/groupShortMessage'}">集团短彩信</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{resultTypeName}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{resultTypeName}}条数
				
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				
				<el-select v-model="analysis" clearable  placeholder="差异原因类型">
				   	<el-option 
				   		v-for="item in optionsAnalysis" 
				   		:key="item.analysisId" 
				   		:label="item.analysisName"
			      		:value="item.analysisId">
			    	</el-option>
				</el-select>
				<el-input placeholder="业务代码" v-model="operatorCodes" clearable></el-input>
				<el-select v-model="trendId" clearable  placeholder="新增或者存量">
				   	<el-option 
				   		v-for="item in options" 
				   		:key="item.trendId" 
				   		:label="item.trendName"
			      		:value="item.trendId">
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
			    <el-table-column prop="AUDIT_DATE" label="稽核时间" width='100px'></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
			    <el-table-column prop="REPAIR_CONDITION" label="修复情况" width='100px'></el-table-column>
			    <el-table-column prop="SIGN" label="是否月底失效" width='100px'></el-table-column>
			    <el-table-column prop="OS_STATE" label="停开机时间" width='100px'></el-table-column>
			    <el-table-column prop="INCREASE_CONDITION" label="新增或存量" width='100px'></el-table-column>
			    <el-table-column prop="CA" label="CUST_SERVICE_ID" width='100px'></el-table-column>
			    <el-table-column prop="ACCESS_NUMBER" label="接入号" width='100px'></el-table-column>
			    <el-table-column prop="SUBSCODE" label="SUBSCODE" width='100px'></el-table-column>
			    <el-table-column prop="ENTCODE" label="ENTCODE" width='100px'></el-table-column>
			    <el-table-column prop="OPERATORCODE" label="业务代码" width='100px'></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称" width='100px'></el-table-column>
			    <el-table-column prop="CRM_SUBSCODE" label="CRM侧SUBSCODE" width='100px'></el-table-column>
			    <el-table-column prop="CRM_ENTCODE" label="CRM侧ENTCODE" width='100px'></el-table-column>
			    <el-table-column prop="CRM_SVCCODE" label="CRM侧SVCCODE" width='100px'></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号" width='100px'></el-table-column>
			    <el-table-column prop="PROD_ID" label="PROD_ID" width='100px'></el-table-column>
			    <el-table-column prop="PROD_INST_ID" label="PROD_INST_ID" width='100px'></el-table-column>
			    <el-table-column prop="EXTEND_ID" label="EXTEND_ID" width='100px'></el-table-column>
			    <el-table-column prop="CRM_PROD_DATE" label="CRM产品生效时间" width='100px'></el-table-column>
			    <el-table-column prop="CRM_STATE" label="用户状态" width='100px'></el-table-column>
			    <el-table-column prop="CUST_STATE" label="客户状态" width='100px'></el-table-column>
			    <el-table-column prop="OPERATOR_TIME" label="操作时间" width='100px'></el-table-column>
			    <el-table-column prop="ORDER_STATE" label="状态" width='100px'></el-table-column>
			    <el-table-column prop="ANALYSIS_CAUSES" label="差异原因类型" width='100px'></el-table-column>
			    <el-table-column prop="RESULT" label="差异原因" width='100px'></el-table-column>
			    <el-table-column prop="IS_LAST_MONTH_CRM" label="是否在CRM侧上月数据中" width='100px'></el-table-column>
			    <el-table-column prop="IS_LAST_MONTH_ED" label="是否在ED侧上月数据中" width='100px'></el-table-column>
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
	import { getPlateDetail as getPlateDetail } from '@/api/Api'
	import { mapGetters } from 'vuex'
	export default{
		name: 'GroupShortMessageB',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			const param = this.getParamas;
			this.resultTypeName = param.resultTypeName;
	   		this.getList('0');
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		operatorCodes:'',
	    		trendId:'',
	    		resultTypeName:'',
	    		analysis:'',
	    		trendId:'',
	    		tableData: [],
		        options: [
		    		{
			          	trendId: 'A',
			          	trendName: '新增'
			        }, 
			        {
			          	trendId: 'K',
			          	trendName: '存量'
			        }
		        ],
		        optionsAnalysis: [
			        {
			          	analysisId: 'ED_4',
			          	analysisName: 'ED_ENTCODE和SVCCODE相同SUBSCODE不同'
			        },
		    		{
			          	analysisId: 'ED_3',
			          	analysisName: 'ED单边且在CRM中是已经失效的'
			        }, 
			        {
			          	analysisId: 'ED_1',
			          	analysisName: 'ED单边且在CRM中无客户的(ENTCODE)'
			        }, 
			        {
			          	analysisId: 'ED_2',
			          	analysisName: 'ED单边且在CRM中有客户但无用户的'
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
				let params = this.getParamas;
				getPlateDetail(
					{
						auditBatch:params.auditBatch,
			    	    operatorCodes:self.operatorCodes,
			    	    trendId:self.trendId,
			    	    analysis:self.analysis,
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
			handleClick(row){		
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