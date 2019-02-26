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
						name:'元数据权限',
						route:'/'
					},
					{
						name:'数据平台中心',
						route:'/test'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>