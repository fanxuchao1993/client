<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>数据导入</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>数据导入总览
				</div>
				</br>
				<el-form ref="form" :model="form" label-width="130px">
					<div style="float:left;margin-top:-30px;height:400px;">
						<div style="float:left;">
							<label style="float:left;color:#606266;font-weight: 300;">导入类别:</label>
							<el-select v-model="category" clearable placeholder="导入类别">
						   		<el-option 
							   		v-for="item in optionsCategory"
							   		:key="item.categoryId" 
							   		:label="item.categoryName"
						      		:value="item.categoryId">
						    	</el-option>
							</el-select>
						</div>
						<div style="float:left;margin-top:20px;color:#606266;font-weight: 300;" class="selectSty">
							<el-form-item label="字段是否有引用">
							    <el-radio-group v-model="form.resource">
							      	<el-radio label="是"></el-radio>
							      	<el-radio label="否"></el-radio>
							    </el-radio-group>
							</el-form-item>
						</div>
						<div style="float:left;margin-left:0px;">
							<label style="float:left;color:#606266;font-weight: 300;">选择导入文件</label>
							<input type="file" />
						</div>
						<div style="float:left;margin-left:10px;">
							<label style="float:left;color:#606266;font-weight: 300;">字段分隔符:</label>
							<el-select v-model="seprate" clearable placeholder="字段分隔符">
						   		<el-option 
							   		v-for="item in optionsSeprate"
							   		:key="item.seprateId" 
							   		:label="item.seprateName"
						      		:value="item.seprateId">
						    	</el-option>
							</el-select>
						</div>
						<div style="float:left;margin-left:20px;">
							<span class="btn-del" title="查询" @click="getList('1')">导入</span>
						</div>
						
					</div>
				</el-form>
				
					
				
			</div>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Qs from 'qs'
	export default{
		name: 'DataImport',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		taskUrl:'',
	    		category:'',
	    		seprate:'',
	    		form:{
	    			resource:'否'
	    		},
	    		optionsSeprate:[
	    			{
			          	seprateId: ',',
			          	seprateName: '逗号(,)'
			      	},
			      	{
			          	seprateId: '\\\\|',
			          	seprateName: '竖线(|)'
			        }
	    		],
	    		optionsCategory:[
	    			{
			          	categoryId: 'p_mcas_user',
			          	categoryName: 'MCAS用户'
			      	},
			      	{
			          	categoryId: 'p_mcas_user_order',
			          	categoryName: 'MCAS用户订单'
			        },
			        {
			          	categoryId: 'p_misc_user_order',
			          	categoryName: 'MISC用户订单'
			        },
			        {
			          	categoryId: 'p_139_user_order',
			          	categoryName: '139用户订单'
			        }
	    		]
	    		
	    		
	    	}
	  	},
	  	created(){
	  		
	   	},
		methods: {
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
</style>