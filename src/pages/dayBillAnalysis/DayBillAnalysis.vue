<!--日账分析-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'DayBillAnalysis',
	    components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'概览',
						route:'/dayBillAnalysis'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>