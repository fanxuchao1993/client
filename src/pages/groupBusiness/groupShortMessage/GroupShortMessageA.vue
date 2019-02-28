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
			    <el-table-column prop="IS_INVALID" label="是否月底失效" width='100px'></el-table-column>
			    <el-table-column prop="OS_STATE" label="停开机时间" width='100px'></el-table-column>
			    <el-table-column prop="INCREASE_CONDITION" label="新增或存量" width='100px'></el-table-column>
			    <el-table-column prop="CUST_SERVICE_ID" label="CUST_SERVICE_ID" width='100px'></el-table-column>
			    <el-table-column prop="ACCESS_NUMBER" label="接入号" width='100px'></el-table-column>
			    <el-table-column prop="SUBSCODE" label="SUBSCODE" width='100px'></el-table-column>
			    <el-table-column prop="ENTCODE" label="ENTCODE" width='100px'></el-table-column>
			    <el-table-column prop="OPERATORCODE" label="业务代码" width='100px'></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称" width='100px'></el-table-column>
			    <el-table-column prop="ED_SUBSCODE" label="ED侧SUBSCODE" width='100px'></el-table-column>
			    <el-table-column prop="ED_ENTCODE" label="ED侧ENTCODE" width='100px'></el-table-column>
			    <el-table-column prop="ED_SVCCODE" label="ED侧SVCCODE" width='100px'></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号" width='100px'></el-table-column>
			    <el-table-column prop="PROD_ID" label="PROD_ID" width='100px'></el-table-column>
			    <el-table-column prop="PROD_INST_ID" label="PROD_INST_ID" width='100px'></el-table-column>
			    <el-table-column prop="EXTEND_ID" label="EXTEND_ID" width='100px'></el-table-column>
			    <el-table-column prop="EFFECTIVE_DATE" label="生效时间" width='100px'></el-table-column>
			    <el-table-column prop="EXPIRE_DATE" label="失效时间" width='100px'></el-table-column>
			    <el-table-column prop="BRAND_ID" label="品牌" width='100px'></el-table-column>
			    <el-table-column prop="CHANNEL_TYPE" label="渠道" width='100px'></el-table-column>
			    <el-table-column prop="STATE" label="状态" width='100px'></el-table-column>
			    <el-table-column prop="USER_STATE" label="用户状态" width='100px'></el-table-column>
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
	import { getCrmDetail as getCrmDetail } from '@/api/Api'
	import { mapGetters } from 'vuex'
	export default{
		name: 'GroupShortMessageA',
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
			          	analysisId: 'CRM_1',
			          	analysisName: 'CRM_ENTCODE和SVCCODE相同SUBSCODE不同'
			        },
		    		{
			          	analysisId: 'CRM_2',
			          	analysisName: 'CRM单边且ED没有对应的ENTCODE'
			        }, 
			        {
			          	analysisId: 'CRM_3',
			          	analysisName: 'CRM单边的其他'
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
				getCrmDetail(
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