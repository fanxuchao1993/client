<!--个人业务稽核-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'PersonalBusiness',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'CRM-139邮箱稽核',
						route:'/personalBusiness/crmMail139'
					},
					{
						name:'CRM-MISC稽核',
						route:'/personalBusiness/crmMisc'
					},
					{
						name:'手机视频',
						route:'/personalBusiness/mobileVideo'
					},				
					{
						name:'CRM-MCAS稽核',
						route:'/personalBusiness/crmMcas'
					},				
					{
						name:'本地WLAN',
						route:'/personalBusiness/localWlan'
					},				
					{
						name:'香港一卡多号',
						route:'/personalBusiness/simMaxHongKong'
					},				
					{
						name:'CRM-WLAN稽核',
						route:'/personalBusiness/crmWlan'
					},
					{
						name:'副号码',
						route:'/personalBusiness/viceNumber'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>