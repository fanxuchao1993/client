<!--数据修复-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'DataRepair',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'修复结果总览',
						route:'/dataRepair/repairResultOverView'
					},
					{
						name:'23G功能修复',
						route:'/dataRepair/featuresRepair'
					},
					{
						name:'国漫修复',
						route:'/dataRepair/guoManRepair/'
					},
					{
						name:'4G功能修复',
						route:'/dataRepair/fourGFeaturesRepair'
					},
					{
						name:'23G在线计费修复',
						route:'/dataRepair/twoThreeGOnlineBillingRepair'
					},
					{
						name:'4G在线计费修复',
						route:'/dataRepair/fourGOnlineBillingRepair'
					},
					{
						name:'234G协同修复',
						route:'/dataRepair/twoThreeGCollaborationRepair'
					},
					{
						name:'4G国漫修复',
						route:'/dataRepair/fourGGuoManRepair'
					},
					{
						name:'手机视频',
						route:'/dataRepair/phoneVideoRepair'
					},
					{
						name:'进度监控',
						route:'/dataRepair/progressMonitoring'
					},
					{
						name:'修复日志监控',
						route:'/dataRepair/RepairLogMonitoring'
					},
					{
						name:'接口日志',
						route:'/dataRepair/InterFaceLog'
					},
					{
						name:'任务日志',
						route:'/dataRepair/TaskLog'
					},
					{
						name:'MCAS数据修复报表',
						route:'/dataRepair/mCASDataRepairReport'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>