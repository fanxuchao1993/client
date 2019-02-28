<!--家庭业务稽核-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
		<router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'FamilyBusiness',
		components: {
			Submenu
		},
	  	data () {
	    	return {
	    		menuData:[
					{
						name:'家庭宽带',
						route:'/familyBusiness/familyBroadband'
					},
					{
						name:'亲情通',
						route:'/familyBusiness/familyKinship'
					}
				]
	    	}
	  	}
	}
</script>
<style>
</style>