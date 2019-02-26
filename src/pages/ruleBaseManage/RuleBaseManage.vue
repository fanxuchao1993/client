<!--规则库管理-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'RuleBaseManage',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'规则查询',
						route:'/'
					},
					{
						name:'白名单管理',
						route:'/test'
					},
					{
						name:'采集规则',
						route:'/test'
					},
					{
						name:'预处理规则',
						route:'/test'
					},
					{
						name:'映射规则',
						route:'/test'
					},
					{
						name:'值表规则',
						route:'/test'
					},
					{
						name:'稽核专题',
						route:'/test'
					},
					{
						name:'局数据刷新',
						route:'/test'
					},
					{
						name:'文档查询',
						route:'/test'
					},
					{
						name:'文档管理',
						route:'/test'
					},
					{
						name:'告警规则',
						route:'/test'
					},
					{
						name:'数据标签管理',
						route:'/test'
					},
					{
						name:'业务标签管理',
						route:'/test'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>