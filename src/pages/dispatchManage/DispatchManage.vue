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
						route:'/dispatchManage/processConfiguration'
					},
					{
						name:'流程监控',
						route:'/dispatchManage/processMonitoring'
					},
					{
						name:'脚本日志',
						route:'/dispatchManage/scriptLog'
					},
					{
						name:'数据导入',
						route:'/dispatchManage/dataImport'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>