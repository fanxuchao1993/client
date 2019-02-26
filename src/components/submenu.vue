<!--子菜单-->
<template>
	<div class="nav-menu">
		<!-- swiper -->
	    <swiper class="nav-menu-list" :options="swiperOption">		    	
	        <swiper-slide v-for="(item,index) in menuData" :key="index">
	        	<router-link tag='span' :to="item.route">{{item.name}}</router-link>
	        </swiper-slide>
	    </swiper>
		<i class="iconfont icon-guanbi" title="关闭"></i>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default{
		name:'submenu',
		components: {
		    swiper,
		    swiperSlide
		},
		props:{
			menuData:{}
		},
		data(){
			return{
				swiperOption: {
		          	slidesPerView: 'auto'
		       	},
			}
		},
		methods:{
//			goRoute(routeName){
//				this.$router.push({
//			    	path:routeName
//			    });
//			}
		}
	}
</script>

<style scoped>
	.swiper-slide{/*width: fit-content;*/width: auto;}
	/*导航子菜单*/
	.nav-menu{background-color: #FFFFFF;height: 80px;box-shadow: 0 1px 4px 1px #e0e0e0;color: #0099FF;font-size: 15px;font-weight: bold;line-height: 28px;position: relative;}
	.nav-menu .nav-menu-list{margin: 0 82px;margin-right: 102px;padding: 26px 0;list-style: none;color: #0099FF;font-size: 15px;font-weight: bold;line-height: 28px;}
	.nav-menu .nav-menu-list span{float: left;margin-right: 30px;padding: 0 15px;border-radius: 15px;cursor: pointer;}
	.nav-menu .nav-menu-list span.current{background-color: #0099FF;color: #FFFFFF;}
	.nav-menu .nav-menu-list span:hover{background-color: #0099FF;color: #FFFFFF;}
	.nav-menu i{color: #CCCCCC;line-height: 80px;margin-right: 86px;cursor: pointer;position: absolute;top: 0;right: 0;}
	.nav-menu i:hover{color: #3e58c9;}
	.nav-menu .hide{display: none;}
</style>