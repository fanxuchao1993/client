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
						route:'/securityManage/userManage'
					},
					{
						name:'角色管理',
						route:'/securityManage/roleManagement'
					},
					{
						name:'应用系统管理',
						route:'/securityManage/applicationManagement'
					},
					{
						name:'ETL权限管理',
						route:'/securityManage/eTLManagement'
					},
					{
						name:'系统资源管理',
						route:'/securityManage/systemResourseManagement'
					},
					{
						name:'日志管理',
						route:'/securityManage/loggerManagement'
					},
					{
						name:'用户扩展属性管理',
						route:'/securityManage/userExpansionManagement'
					},
					{
						name:'系统公告',
						route:'/securityManage/noticeManagement'
					},
					{
						name:'源数据权限',
						route:'/securityManage/sourseResourseManagement'
					},
					{
						name:'数据平台中心',
						route:'/securityManage/dataPlateCenter'
					},
					{
						name:'告警日志',
						route:'/securityManage/alarmLogger'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>