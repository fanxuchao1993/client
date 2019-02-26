<!--数据分析-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'DataAnalysis',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'增量分析报表',
						route:'/'
					},
					{
						name:'数据趋势分析',
						route:'/test'
					},
					{
						name:'数据分析报表',
						route:'/test'
					},
					{
						name:'环比分析',
						route:'/test'
					},
					{
						name:'稽核结果标签',
						route:'/test'
					},
					{
						name:'数据追溯',
						route:'/test'
					},
					{
						name:'数据平衡性',
						route:'/test'
					},
					{
						name:'基础分析',
						route:'/test'
					},
					{
						name:'集团分析',
						route:'/test'
					},
					{
						name:'管控地图',
						route:'/test'
					},
					{
						name:'自动取数',
						route:'/test'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>
