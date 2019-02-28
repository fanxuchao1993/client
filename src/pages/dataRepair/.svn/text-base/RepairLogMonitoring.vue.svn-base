<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>修复日志监控</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>修复日志监控总览
				</div>
				<div class="divStyle2">
					<div class="divStyle">
						<el-input v-model="billId" placeholder="手机号" clearable></el-input>
					</div>
					<div class="divStyle">
						<el-date-picker
							v-model="requestTime"
							type="date"
							align="left"
					      	placeholder="稽核日期"
					      	format="yyyy-MM-dd"
					      	value-format="yyyy-MM-dd">
					   	</el-date-picker>
					</div>
					<div class="divStyle">
						<span style="margin-left: 15px;">至</span>
					</div>
					<div class="divStyle">
						<el-date-picker
							v-model="requestTimeEnd"
							type="date"
							align="left"
					      	placeholder="稽核日期"
					      	format="yyyyMMdd"
					      	value-format="yyyy-MM-dd">
					   	</el-date-picker>
					</div>
					<div class="divStyle">
						<el-select v-model="requestType" clearable placeholder="操作类型">
						   	<el-option 
						   		v-for="item in options" 
						   		:key="item.requestTypeId" 
						   		:label="item.requestTypeName"
					      		:value="item.requestTypeId">
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
			    :data="repairLogData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="OPERATOR_NAME" label="业务类型"></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号"></el-table-column>
			    <el-table-column prop="REQUEST_TYPE" label="操作类型"></el-table-column>
			    <el-table-column prop="REQUEST_INTERFACE" label="调用接口名称"></el-table-column>
			    <el-table-column prop="PARSE_RESULT" label="返回结果"></el-table-column>
			    <el-table-column prop="REQUEST_TIME" label="接口调用时间"></el-table-column>
			    <el-table-column prop="RESPONSE_TIME" label="接口返回时间"></el-table-column>
			    <el-table-column prop="RESPONSE_CODE" label="返回值编码"></el-table-column>
			    <el-table-column prop="DES" label="返回值描述"></el-table-column>
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
	import { getRepairLog as getRepairLog } from '@/api/Api'
	export default{
		name: 'RepairLogMonitoring',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		billId:'',
	    		requestType:'',
	    		requestTime:'',
	    		requestTimeEnd:'',
	    		responseTimeEnd:'',
	    		repairLogData:[],
	    		options: [
			        {
			          	requestTypeId: '1',
			          	requestTypeName: '查询'
			        },
			        {
			          	requestTypeId: '2',
			          	requestTypeName: '修复'
			        },
			        {
			          	requestTypeId: '3',
			          	requestTypeName: '校验'
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
				getRepairLog(
					{
						start:self.currentPage-1,
			    	    limit:self.pageSize,
						billId:self.billId,
						requestTime:self.requestTime,
						requestTimeEnd:self.requestTimeEnd,
						responseTimeEnd:self.responseTimeEnd,
						requestType:self.requestType
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.repairLogData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
					/*self.options = res.data.response.repairAllNameList;*/
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
			},
			handleClick(row) {
				let params = {
					'jobName':row.TASK_NAME
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params));
				this.$router.push({
			    	'name':'InterFaceCallFailCount'
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