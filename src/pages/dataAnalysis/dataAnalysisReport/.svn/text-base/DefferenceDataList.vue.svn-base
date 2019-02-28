<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>数据分析报表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>数据分析报表
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				
			    <el-select v-model="compareTableSourceSystem" clearable  placeholder="系统来源">
				   	<el-option 
				   		v-for="item in options" 
				   		:key="item.compareTableSourceSystem" 
				   		:label="item.compareTableSourceSystemName"
			      		:value="item.compareTableSourceSystem">
			    	</el-option>
				</el-select>
				
				<div class="clear"></div>
			</div>
			<el-table
			    :data="differenceData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
		    	<el-table-column label="差异类型分类">
		    		<el-table-column   fixed prop="RESULT_TYPE_NAME" label="差异类型">
		    			<template slot-scope="scope">
				        	<el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.RESULT_TYPE_NAME}}</el-button>
				      	</template>
		    		</el-table-column>
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
			            	{{dataDiff[scope.$index][key]}}
			            </template>
			       </el-table-column>
		    	</el-table-column>
		  </el-table>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getDifferenceDataList as getDifferenceDataList } from '@/api/Api'
	export default{
		name: 'DefferenceDataList',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
	    	return {
	    		header:[],
	    		dataDiff:['','','','','',''],
	    		differenceData:[
	    			{
	    				RESULT_TYPE_NAME:''
	    			}
	    		],
		        options: [
		    		{
			          	compareTableSourceSystem: '139',
			          	compareTableSourceSystemName: '139邮箱'
			       },
			       {
			          	compareTableSourceSystem: 'MCAS',
			          	compareTableSourceSystemName: 'MCAS'
			       },
			       {
			          	compareTableSourceSystem: 'WLAN',
			          	compareTableSourceSystemName: 'WLAN'
			       },
			       {
			          	compareTableSourceSystem: 'MISC',
			          	compareTableSourceSystemName: 'MISC'
			        }
		        ]
	    	}
	  	},

	  	created(){
	  		this.compareTableSourceSystem="139";
	  		this.getList();
	   	},
		methods: {
			getList(){
				let self = this;
				getDifferenceDataList(
					{
						compareTableSourceSystem:self.compareTableSourceSystem
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.differenceData = res.data.response.reList;
					self.dataDiff = res.data.response.dataDiff;
					for(let i=0;i<(res.data.response.rsHeaderlist).length;i++){
						self.header.push(res.data.response.rsHeaderlist[i].TIME_NAME);	
					}
					self.header = self.header.reverse();
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
	      	handleClick(row) {
	        	let params = this.getParamas;
				let orderParams = {
					'resultType':row.RESULT_TYPE,
					'resultTypeName':row.RESULT_TYPE_NAME,
					'compareTableSourceSystem':this.compareTableSourceSystem
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'DefferenceDataListDef'
			    });
	      	}
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
</style>