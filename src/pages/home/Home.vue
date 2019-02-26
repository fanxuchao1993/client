<!--首页-->
<template>
	<div>
		<Submenu :menuData="menuData"/>
    <router-view/>
	</div>
</template>

<script>
	import Submenu from "@/components/submenu"
	export default{
		name: 'Home',
		components: {
			Submenu
		},
    data () {
      return {
        name:'首页',
        menuData:[
          {
            name:'概览',
            route:'/home/leaderPage'
          },
          {
            name:'个人主页',
            route:'/home/staffPage'
          }
        ]
      }
    }
	}
</script>
<style scoped>
</style>
