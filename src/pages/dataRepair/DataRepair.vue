<!--数据修复-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'DataRepair',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'修复结果总览',
						route:'/'
					},
					{
						name:'国漫修复',
						route:'/test'
					},
					{
						name:'4G功能修复',
						route:'/test'
					},
					{
						name:'23G在线计费修复',
						route:'/test'
					},
					{
						name:'4G在线计费修复',
						route:'/test'
					},
					{
						name:'234G协同修复',
						route:'/test'
					},
					{
						name:'4G国漫修复',
						route:'/test'
					},
					{
						name:'进度监控',
						route:'/test'
					},
					{
						name:'手机视频',
						route:'/test'
					},
					{
						name:'修复日志监控',
						route:'/test'
					},
					{
						name:'任务日志',
						route:'/test'
					},
					{
						name:'接口日志',
						route:'/test'
					},
					{
						name:'MCAS数据修复报表',
						route:'/test'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>