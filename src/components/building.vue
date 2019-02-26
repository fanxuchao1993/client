<template>
	<div class="item-none">
		<i class="iconfont icon-zhuangxiu"></i>
		{{info}}
	</div>
</template>

<script>
	export default{
		name:'building',
		data(){
			return{
				info:'功能努力开发中...'
			}
		}
	}
</script>

<style scoped>
	/*.rootLayer{margin: 0 80px 30px;padding: 0 30px 30px;background-color: #fff;box-shadow: 0 1px 4px 1px #e0e0e0;}*/
	/*.buildingLayer{height: 50px;line-height: 50px;color: #AFAFAF;}*/
	/*.content-list .list-item-color{background-color: #f9f9f9;}
	.content-list .list-item:hover{color: #666;}*/
	.item-none{color: #AFAFAF;font-weight: normal;height: 50px;line-height: 50px;color: #AFAFAF;text-align: center;}
</style>