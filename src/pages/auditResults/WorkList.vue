<!--个人工单-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item>个人工单</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>申请流程审批
			</div>
			<Building/>
			<!--<iframe src="https://www.zcool.com.cn/search/content?&word=%E4%BC%A0%E8%AF%B4%E4%B8%AD%E7%9A%84%E7%99%BD%E8%8F%9C" width="100%" height="1800px" frameborder="0" scrolling="auto"></iframe>-->
		</div>
	</div>
</template>

<script>
	import Building from "@/components/building"
	export default{
		name: 'WorkList',
		components: {
			Building
		},
	  	data () {
	    	return {
	    		name:'个人工单'
	    	}
	  	}
	}
</script>

<style>
</style>