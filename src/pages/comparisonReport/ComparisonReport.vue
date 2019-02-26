<!--三方对比报表-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'ComparisonReport',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'三方比对结果查询',
						route:'/'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>