<!--集团业务稽核-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'GroupBusiness',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'集团短彩信',
						route:'/groupBusiness/groupShortMessage'
					},
					{
						name:'集团彩铃',
						route:'/groupBusiness/groupColorBell'
					},
					{
						name:'校讯通',
						route:'/groupBusiness/schoolSignal'
					},				
					{
						name:'物联网',
						route:'/groupBusiness/internetOfThings'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>