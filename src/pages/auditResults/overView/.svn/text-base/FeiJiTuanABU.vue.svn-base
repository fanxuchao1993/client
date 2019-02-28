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
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
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
			    <el-table-column prop="TOPIC_NAME" label="稽核专题" width='100px'></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点" width='150px'></el-table-column>
			    <el-table-column prop="SERVICE_NAME" label="服务名称" width='150px'></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号码" width='130px'></el-table-column>
			    <el-table-column prop="SUB_BILL_ID" label="CRM_IMSI" width='150px'></el-table-column>
			    <el-table-column prop="BILL0" label="HLR_IMSI" width='150px'></el-table-column>
			    <el-table-column prop="NODE_ID" label="网元" width='100px'></el-table-column>
			    <el-table-column prop="RESULT_TYPE" label="单边类型" width='100px'></el-table-column>
			    <el-table-column prop="TREND" label="增存量" width='130px'></el-table-column>
			    <el-table-column prop="BRAND_NAME" label="品牌" width='80px'></el-table-column>
			    <el-table-column prop="ORDER_NAME" label="套餐" width='250px'></el-table-column>
			    <el-table-column prop="USER_STATE_NAME" label="用户状态" width='80px'></el-table-column>
			    <el-table-column prop="OS_STATE" label="停复机状态" width='80px'></el-table-column>
			    <el-table-column prop="OS_DATE" label="停机时间" width='80px'></el-table-column>
			    <el-table-column prop="USER_EFFECTIVE_YYYYMM" label="用户生效年月" width='120px'></el-table-column>
			    <el-table-column prop="USER_EFFECTIVE_DD" label="用户生效日" width='120px'></el-table-column>
			    <el-table-column prop="PROD_EFFECTIVE_DATE_YYYYMM" label="服务生效年月" width='120px'></el-table-column>
			    <el-table-column prop="PROD_EFFECTIVE_DATE_DD" label="服务生效日" width='120px'></el-table-column>
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
			      :total=totalCount>
			    </el-pagination>
		  	</div>
		</div>	
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getHLRDetailList as getHLRDetailList } from '@/api/Api'
	export default{
		name: 'FeiJiTuanABU',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			this.name = this.getParamas.name;
			this.resultType = this.getParamas.resultType;
			this.trend=this.getParamas.trend;
	   		this.getList('0');
	   	},
	  	data () {
	    	return {
	    		name:'',
	    		currentPage: 1,
	    		pageSize:10,
	    		billId:'',
	    		resultType:'',
	    		trend:'',
	    		tableData: [],
	    		totalCount:0,
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
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
	    			if(this.resultType=='A'){
	    				this.name='A单边'
				      }else if(this.resultType=='B'){
					    this.name='B单边'
				      }else if(this.resultType=='U'){
					    this.name='不一致'
				      }else{
					this.name='差异数'
			     	}
	    			}
	    		let serv;	
				const params = self.getParamas;
				if(params.serviceId=='14'){
					 serv='37'
				}else if(params.serviceId=='13'){
	      	    	 serv='8'
	      	    }else if(params.serviceId=='15'){
	      	    	serv='100'
	      	    }else if(params.serviceId=='16'){
	      	    	serv='101'
	      	    }else if(params.serviceId=='35'){
	      	    	serv='14'
	      	    }else if(params.serviceId=='46'){
	      	    	serv='-6'
	      	    }else if(params.serviceId=='42'){
	      	    	serv='38'
	      	    }else if(params.serviceId=='43'){
	      	    	serv='40'
	      	    }else if(params.serviceId=='44'){
	      	    	serv='-4'
	      	    }else if(params.serviceId=='45'){
	      	    	serv='-5'
	      	    }else if(params.serviceId=='47'){
	      	    	serv='-7'
	      	    }else if(params.serviceId=='36'){
	      	    	serv='-3'
	      	    }
				getHLRDetailList(
					{
						auditTime:params.auditTime,
			    	    auditBatch:params.auditBatche,
			    	    topicId:params.topicId,
			    	    serviceId:serv,
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

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>