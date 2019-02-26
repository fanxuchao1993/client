<!--调度管理-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'DispatchManage',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'流程配置',
						route:'/'
					},
					{
						name:'流程监控',
						route:'/test'
					},
					{
						name:'脚本日志',
						route:'/test'
					},
					{
						name:'数据导入',
						route:'/test'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>