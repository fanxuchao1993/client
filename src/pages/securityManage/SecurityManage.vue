<!--安全管理-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'SecurityManage',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'用户管理',
						route:'/'
					},
					{
						name:'角色管理',
						route:'/test'
					},
					{
						name:'ETL权限管理',
						route:'/test'
					},
					{
						name:'应用系统管理',
						route:'/test'
					},
					{
						name:'系统资源管理',
						route:'/test'
					},
					{
						name:'日志管理',
						route:'/test'
					},
					{
						name:'用户扩展属性管理',
						route:'/test'
					},
					{
						name:'系统公告',
						route:'/test'
					},
					{
						name:'源数据权限',
						route:'/test'
					},
					{
						name:'数据平台中心',
						route:'/test'
					},
					{
						name:'告警日志',
						route:'/test'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>