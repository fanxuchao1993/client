<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataRepair'}">数据修复</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/dataRepair/repairResultOverView'}">修复结果总览</el-breadcrumb-item>
			  	<el-breadcrumb-item>接口调用失败条数</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>修复结果总览
				</div>
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
			</div>
		    <iframe  :src="taskUrl" height="400" width="100%"></iframe>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Qs from 'qs'
	export default{
		name: 'InterFaceCallFailCount',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		taskUrl:'',
	    		jobName:''
	    	}
	  	},

	  	created(){
	   		this.jobName = this.getParamas.jobName;
	   		this.taskUrl = 'http://bmcccmp.bmcc.com.cn:8080/app/dataflow/DataflowManagement!listRepairInterfaceLog.action?jobName='+this.jobName+'&flag=1&requestType=2&operatorStatus=2';
	   	},
		methods: {
	      	backRouter(){
				this.$router.back(-1);
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