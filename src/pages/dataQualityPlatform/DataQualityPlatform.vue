<!--数据质量平台-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'DataQualityPlatform',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'数据平台中心',
						route:'/dataQualityPlatform/dataQualityPlatformDetail'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>