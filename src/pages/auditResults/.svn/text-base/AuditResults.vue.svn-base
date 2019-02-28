<!--稽核结果-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'AuditResults',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'概览',
						route:'/auditResults/overview'
					},
					{
						name:'个人工单',
						route:'/auditResults/workList'
					},
					{
						name:'多方稽核报表',
						route:'/auditResults/auditReports'
					},				
					{
						name:'稽核规则',
						route:'/auditResults/auditRules'
					}
				]
	    	}
	  	}
	}
</script>

<style>
</style>