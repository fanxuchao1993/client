<!--CRM-HLR稽核A单边B单边不一致-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness'}">基础业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness/crmHlrAudit'}">CRM-HLR稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="手机号" v-model="billId" clearable></el-input>
				<el-select v-model="trend" placeholder="稽核结果类型" clearable>
				    <el-option
				      	v-for="item in items"
				      	:key="item.RESULTTYPEID"
				      	:label="item.RESULTTYPEMULTINAME"
				      	:value="item.RESULTTYPEID">
				    </el-option>
			  	</el-select>
			  	<el-select v-model="resultType" placeholder="稽核结果类型" clearable>
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
			    <el-table-column prop="AUDIT_DATE" label="稽核日期" width='100px'></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="稽核专题"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点"></el-table-column>
			    <el-table-column prop="SERVICE_NAME" label="服务名称"></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号码" width='100px'></el-table-column>
			    <el-table-column prop="SUB_BILL_ID" label="CRM_IMSI" width='100px'></el-table-column>
			    <el-table-column prop="BILL0" label="HLR_IMSI" width='80px'></el-table-column>
			    <el-table-column prop="NODE_ID" label="网元" width='100px'></el-table-column>
			    <el-table-column prop="RESULT_TYPE" label="单边类型" width='100px'></el-table-column>
			    <el-table-column prop="TREND" label="增存量" width='130px'></el-table-column>
			    <el-table-column prop="BRAND_NAME" label="品牌" width='80px'></el-table-column>
			    <el-table-column prop="ORDER_NAME" label="套餐" width='80px'></el-table-column>
			    <el-table-column prop="USER_STATE_NAME" label="用户状态" width='80px'></el-table-column>
			    <el-table-column prop="OS_STATE" label="停复机状态" width='80px'></el-table-column>
			    <el-table-column prop="OS_DATE" label="停机时间" width='80px'></el-table-column>
			    <el-table-column prop="USER_EFFECTIVE_YYYYMM" label="用户生效年月" width='80px'></el-table-column>
			    <el-table-column prop="USER_EFFECTIVE_DD" label="用户生效日" width='80px'></el-table-column>
			    <el-table-column prop="PROD_EFFECTIVE_DATE_YYYYMM" label="服务生效年月" width='80px'></el-table-column>
			    <el-table-column prop="PROD_EFFECTIVE_DATE_DD" label="服务生效日" width='80px'></el-table-column>
			    <el-table-column prop="CUST_STATUS" label="客户状态" width='80px'></el-table-column>
			    <el-table-column prop="FAIL_ORDER_DESC" label="原因" width='80px'></el-table-column>
			    <el-table-column prop="LINK" label="近三个月失败订单" width='80px'></el-table-column>
		  	</el-table>
			<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size.sync="pageSize"
			      layout="prev, pager, next, total"
			      :total='86'>
			    </el-pagination>
		  	</div>
		</div>	
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getHLRDetailList as getHLRDetailList } from '@/api/Api'
	export default{
		name: 'CrmHlrAuditABN',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			this.resultType = this.getParamas.resultType;
	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		name:'A单边B单边不一致',
	    		currentPage: 1,
	    		pageSize:10,
	    		billId:'',
	    		resultType:'0',
	    		trend:'',
	    		tableData: [],
		        options: [
		        	{
		        		RESULTTYPEID: '0',
			          	RESULTTYPEMULTINAME: '请选择'
		        	},
		    		{
			          	RESULTTYPEID: 'A',
			          	RESULTTYPEMULTINAME: 'A单边(HLR)'
			        }, 
			        {
			          	RESULTTYPEID: 'B',
			          	RESULTTYPEMULTINAME: 'B单边(HLR)'
			        }, 
			        {
			          	RESULTTYPEID: 'U',
			          	RESULTTYPEMULTINAME: '不一致(HLR)'
			        }
		        ],
		        items: [
		        	{
		        		RESULTTYPEID: '',
			          	RESULTTYPEMULTINAME: '请选择'
		        	},
		    		{
			          	RESULTTYPEID: 'A',
			          	RESULTTYPEMULTINAME: '增量'
			        }, 
			        {
			          	RESULTTYPEID: 'K',
			          	RESULTTYPEMULTINAME: '存量'
			        }
		        ]
	    	}
	  	},
	  	methods: {
			getList(){
				let self = this;
				const params = this.getParamas;
				getHLRDetailList(
					{
						auditTime:params.auditTime,
			    	    auditBatch:params.auditBatche,
			    	    topicId:params.topicId,
			    	    resultType:self.resultType,
			    	    trend:self.trend,
			    	    billId:self.billId,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    sourceSystem:'HLR'
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
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
	        	this.getList();
	      	}
	    }
	}
</script>

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>