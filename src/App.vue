<template>
	<div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  	name: 'App'
}
</script>
<style>
	@import 'http://at.alicdn.com/t/font_463758_tsisftu0cb5zsemi.css';
	/*全局css*/
	*{margin: 0;padding: 0;}
	input{outline: 0;}
	input:focus{outline: 0;}
	input::-webkit-input-placeholder{color: #ccc;}
	input:-moz-placeholder{color: #ccc;}
	input::-moz-placeholder{color: #ccc;}
	input:-ms-input-placeholder{color: #ccc;}
	a{text-decoration:none;out-line: none;color: #fff;}
	h1,h2,h3,h4,h5,h6 { font-size: 100%;font-weight: 500;font-family: 'Avenir', Helvetica, Arial, sans-serif;}
	body{-moz-user-select: none;-webkit-user-select: none;-ms-user-select: none;-khtml-user-select: none;user-select: none;background-color: #efefef;min-width: 1400px;}

	/*loading*/
	/*.el-loading-mask.is-fullscreen{pointer-events: none;}*/

	/*面包屑*/
	.pageLocal{height: 80px;margin: 0 80px;}
	.pageLocal .el-breadcrumb{line-height: 80px;font-size: 15px;}
	.el-breadcrumb__item .el-breadcrumb__inner:hover{color: #09f;}
	.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{color: #666;font-weight: normal;}
	.el-breadcrumb__item:last-child .el-breadcrumb__inner{color: #666;}

	/*表格*/
	.el-table .cell{text-align: center;font-size: 14px;}
	.el-table td, .el-table th{padding: 8px 0;}
	.el-button{white-space:normal;line-height: 23px;}
	.el-button--text{color: #09f;}
	.el-button--small, .el-button--small.is-round{padding: 0;}
	.el-button--mini, .el-button--small{font-size: 14px;}
	.el-table__empty-text{line-height: 60px;}

	/*翻页*/
	.el-pagination__total{color: #aaa;}
	.el-pager li.active{color: #09f;font-weight: bold;}
	.el-pager li:hover{color: #09f;font-weight: bold;}
	.el-pagination{color: #aaa;font-weight: normal;}
	.el-pagination .btn-next, .el-pagination .btn-prev{color: #aaa;font-weight: normal;}
	.el-pager li.btn-quicknext, .el-pager li.btn-quickprev{color: #aaa;font-weight: normal;}

	/*下拉框*/
	.el-select{float: right;}
	.el-select .el-input.is-focus .el-input__inner{color: #09f;border-color:#09f;}
	.el-select-dropdown__item.selected{color: #09f;}

	/*输入框*/
	.el-input{width: 140px;float: right;margin-left: 15px;}
	.el-input__inner{height: 30px;border-radius: 30px;line-height: 30px;display:table-cell;margin-top: 25px;}
	.el-input.is-active .el-input__inner, .el-input__inner:focus{border-color:#09f}

	/*日期选择*/
	.el-date-editor.el-input, .el-date-editor.el-input__inner{width: 140px;margin-left: 15px;float: right;}
	.el-date-table td.today span{color: #09f;}
	.el-date-table td.current:not(.disabled) span{background-color:#09f}

	/*Tabs*/
	.el-tabs--left .el-tabs__item.is-left{text-align: left;}
	.el-tabs__item{height: 80px;line-height: 80px;font-size: 15px;}
	.el-tabs__item.is-active{color: #09f;font-weight: bold;}
	.el-tabs__item:hover{color: #09f;}
	.el-tabs__active-bar{background-color: #09f;}
	.el-tabs__header{margin-bottom: 20px;}
	.el-tabs__content{color: #aaa;}

	/*通用外框*/
	.tableMenu{margin: 0 80px 30px;padding: 0 30px 30px;background-color: #fff;box-shadow: 0 1px 4px 1px #e0e0e0;}
	.tableMenu .content-top{min-height: 80px;line-height: 80px;font-size: 15px;font-weight: bold;color: #09f;position: relative;}
	.tableMenu .content-top input::-webkit-input-placeholder{color: #ccc;}
	.tableMenu .content-top .btn-del{margin-left: 15px;float: right;border-radius: 15px;margin-top: 25px;cursor: pointer;color: #FFFFFF;width: 100px;height: 30px;line-height: 30px;font-weight: bold;font-size: 15px;background-color: #0099FF;text-align: center;padding: 0;margin-right: 0;box-shadow: none;letter-spacing:4px;}
	.tableMenu .content-top .btn-del:hover{background-color: #3e58c9;}
	.tableMenu .content-top .btn-del .iconfont{float: none;}
  .tableMenu .content-top .btn-counts{position: relative;border: 1px solid #ccc;margin-left: 15px;float: right;border-radius: 5px;margin-top: 22px;cursor: pointer;color: #999;padding: 0 15px;height: 34px;line-height: 34px;font-weight: normal;font-size: 15px;background-color: #fff;text-align: center;margin-right: 0;box-shadow: none;}
  /*.tableMenu .content-top .btn-counts:hover{background-color: #09f;color:#fff}*/
	.clear{clear: both;}
</style>
