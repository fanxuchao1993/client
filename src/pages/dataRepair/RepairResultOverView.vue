<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>修复结果</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>修复结果总览
				</div>
				<div class="divStyle2">
					<div class="divStyle">
						<el-select v-model="serviceId" clearable placeholder="业务名称">
						   	<el-option 
						   		v-for="item in options" 
						   		:key="item.OPERATOR_CODE" 
						   		:label="item.OPERATOR_NAME"
					      		:value="item.OPERATOR_CODE">
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
			    :data="repairResultOverViewData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="MODEFY_DATE" label="修复日期"></el-table-column>
			    <el-table-column prop="BUSINESS_NAME" label="业务名称"></el-table-column>
			    <el-table-column prop="TASK_NAME" label="任务名称"></el-table-column>
			    <el-table-column prop="REPAIR_ALL_COUNT" label="修复总条数"></el-table-column>
			    <el-table-column prop="INTERFACE_SUCCESS_COUNT" label="接口成功条数"></el-table-column>
			    <el-table-column label="接口调用失败条数">
			    	<template slot-scope="scope">
				        <el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.INTERFACE_CALL_FAIL_COUNT}}</el-button>
				    </template>
			    </el-table-column>
			    <el-table-column prop="INTERFACE_CALL_SUCCESS_RATE" label="接口调用成功率%"></el-table-column>
			    <el-table-column prop="REPAIR_DATA_SUCCESS_RATE" label="修复数据成功率%"></el-table-column>
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
		  	<div>
				<p>说明：</p>
				<p>1、修复总览显示最后一次修复日期所在月份的全月任务信息;</p>
				<p>2、接口成功条数 = 调用修复接口且修复成功数； </p>
				<p style="margin-left:25px;">接口调用失败条数 = 调用修复接口失败数+调用接口异常数+不满足修复条件未调用修复接口数据；</p>
				<p style="margin-left:25px;">接口调用成功率 = 调用修复接口修复成功和返回有错误码条数 / 修复总条数 * 100%；</p>
				<p style="margin-left:25px;">修复数据成功率 = 接口成功条数 / 修复总数 * 100%；</p>
				<p>3、接口调用失败条数定向到接口日志，显示该任务中调用修复接口返回有错误码的明细，计算条数方法为：修复总条数 * 接口调用成功率。</p>
		  	</div>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getRepairResultOverView as getRepairResultOverView } from '@/api/Api'
	export default{
		name: 'RepairResultOverView',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		serviceId:'',
	    		repairResultOverViewData:[],
	    		options: [
		    		{
			          	OPERATOR_CODE: '',
			          	OPERATOR_NAME: ''
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
				getRepairResultOverView(
					{
						start:self.currentPage-1,
			    	    limit:self.pageSize,
						serviceId:self.serviceId
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.repairResultOverViewData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
					self.options = res.data.response.repairAllNameList;
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