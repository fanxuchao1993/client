<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>接口日志</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>接口日志总览
				</div>
			</div>
		    <iframe  :src="taskUrl" height="400" width="100%"></iframe>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default{
		name: 'InterFaceLog',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		taskUrl:''
	    	}
	  	},

	  	created(){
	   		this.taskUrl = 'http://bmcccmp.bmcc.com.cn:8080/app/dataflow/DataflowManagement!listRepairInterfaceLog.action';
	   	},
		methods: {
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
</style>