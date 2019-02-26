<!--公共导航组件-->
<template>
	<div class="nav">
		<!--导航Logo-->
		<img class="logo" src="@/assets/imgs/main_logo.png" height="54px" alt="Logo"/>
		<!--导航-->
		<div class="main-nav">
			<!-- swiper -->
		    <swiper class="top-nav" :options="swiperOption">		    	
		        <swiper-slide v-for="(item,index) in navData" :key="index">
		        	<router-link tag='span' :to="item.route">{{item.name}}</router-link>
		        </swiper-slide>
		    </swiper>
			<!--<ul class="top-nav">
				<router-link  tag='li' v-for="(item,index) in navData" :key="index" :to="item.route">{{item.name}}</router-link>
			</ul>-->
		</div>
		<!--导航右侧装饰-->
		<div class="right-menu">
			<div class="rotate-widget"></div>
			<div class="rotate-widget-small"></div>
		</div>
		<!--账号-->
		<div class="user-menu">
			<span>欢迎您：{{username}}&nbsp;</span>
			<span><i class="iconfont icon-gonggao"></i> 公告</span><i class="iconfont icon-shutiao"></i><span>修改密码</span><i class="iconfont icon-shutiao"></i>
			<i class="iconfont icon-logout" title="注销"></i>
		</div>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.min.css'
	export default{
		name:'headerNav',
		components: {
		    swiper,
		    swiperSlide
		},
		data(){
			return{
				swiperOption: {
		          	slidesPerView: 'auto',
		          	slideToClickedSlide: true
		       	},
				username:'马俊',
				navData:[
					{
						name:'首页',
						route:'/home'
					},
					{
						name:'稽核结果',
						route:'/auditResults'
					},
					{
						name:'基础业务稽核',
						route:'/basicBusiness'
					},
					{
						name:'集团业务稽核',
						route:'/groupBusiness'
					},
					{
						name:'家庭业务稽核',
						route:'/familyBusiness'
					},
					{
						name:'个人业务稽核',
						route:'/personalBusiness'
					},
					{
						name:'数据分析',
						route:'/dataAnalysis'
					},
					{
						name:'数据修复',
						route:'/dataRepair'
					},
					{
						name:'调度管理',
						route:'/dispatchManage'
					},
					{
						name:'规则库管理',
						route:'/ruleBaseManage'
					},
					{
						name:'安全管理',
						route:'/securityManage'
					},
					{
						name:'数据质量平台',
						route:'/dataQualityPlatform'
					},
					{
						name:'三方比对报表',
						route:'/comparisonReport'
					},
					{
						name:'日账分析',
						route:'/dayBillAnalysis'
					}
				]
			}
		}
	}
</script>

<style scoped>
	.swiper-slide{/*width: fit-content;*/width: auto;}
	/*导航*/
	.nav{background-color: #09f;width: calc(100% - 30px);height: 80px;padding: 0 15px;position: relative;overflow: hidden;}
	.nav .logo{margin: 13px 0;}
	
	/*导航菜单*/
	.nav .main-nav{position: absolute;left: calc(15% + 200px);right: 395px;top: 16px;line-height: 44px;color: #FFFFFF;font-weight: bold;}
	.nav .top-nav span.current{border-bottom: 3px solid #fff;}
	.nav .top-nav{list-style: none;width: 100%;}
	.nav .top-nav span{float: left;margin: 0 10px;padding: 0 5px;letter-spacing:2px;cursor: pointer;}
	.nav .top-nav span:hover{border-bottom: 3px solid #fff;}
	.nav .top-nav .swiper-slide:last-child span{margin-right: 60px;}
	
	.nav .right-menu{background-color: #3e58c9;width: 360px;position: absolute;right: 0;top: 0;height: 100%;z-index: 999;}
	.nav .right-menu .rotate-widget{transform: rotate(45deg);-webkit-transform:rotate(45deg);background: #3e58c9;width: 200px;height: 80px;position: absolute;right: 260px;z-index: ;}
	.nav .right-menu .rotate-widget-small{transform: rotate(45deg);-webkit-transform:rotate(45deg);background: #0086f1;width: 80px;height: 80px;position: absolute;top: -40px;right: 360px;}	

	.nav .user-menu{position: absolute;right: 20px;top: 0;line-height: 80px;font-size: 15px;font-weight: bold;color: #dfdfdf;letter-spacing:1px;z-index: 999;}
	.nav .user-menu span:first-child{margin-right: 10px;}
	.nav .user-menu span:hover{color: #FFFFFF;text-shadow: 0px 0px 1px 2px #FFFFFF;cursor: pointer;}
	.iconfont{font-size: 15px;font-weight: normal;}
	.icon-logout:hover{color: #FFFFFF;font-weight: bold;cursor: pointer;}
</style>