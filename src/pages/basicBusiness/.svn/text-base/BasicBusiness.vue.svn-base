<!--基础业务稽核-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'BasicBusiness',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'CRM-BOSS日增量稽核',
						route:'/basicBusiness/crmBossIncrement'
					},
					{
						name:'CRM-HLR稽核',
						route:'/basicBusiness/crmHlrAudit'
					},
					{
						name:'CRM-BOSS稽核',
						route:'/basicBusiness/crmBossAudit'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>