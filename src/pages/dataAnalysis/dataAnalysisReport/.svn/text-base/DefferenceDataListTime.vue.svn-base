<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/home'}">数据分析报表</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{resultTypeName}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{compareTableSourceSystem}}>>{{resultTypeName}}>>{{busiTypeName}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="differenceData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%;"
		    >
		    	<el-table-column :label="data" v-for="(data,key) in tableName" :key="key">
		    		<el-table-column   prop="TIME_TYPE" label="时间分类"/>
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
				        	<el-button @click="handleClick(scope.row,data)" type="text" size="small">{{dataDiff[scope.$index][key]}}</el-button>
			            </template>
			       </el-table-column>
		    	</el-table-column>
		  </el-table>
		  
		  <div class="block">
		    <el-pagination
		      @size-change="handleSizeChange"
		      @current-change="handleCurrentChange"
		      :current-page.sync="currentPage"
		      :page-size.sync="pageSize"
		      layout="prev, pager, next, total"
		      :total=totalCount>
		    </el-pagination>
	  	</div>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getTimeList as getTimeList } from '@/api/Api'
	
	export default{
		name: 'DefferenceDataListTime',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
	    	return {
	    		header:[],
	    		tableName:[],
	    		resultType:'',
	    		dataDiff:['','','','','',''],
	    		tableHeadName:'',
	    		compareTableSourceSystem:'',
	    		resultTypeName:'',
	    		busiTypeName:'',
	    		busiType:'',
	    		userState:'',
	    		time:'',
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		orderA:true,
	    		orderB:true,
	    		differenceData:[
	    			{
	    				TIME_TYPE:''
	    			}
	    		],
		        options: [
		    		{
			          	USER_STATE_ID: '',
			          	USER_STATE_NAME: ''
			       }
		        ]
	    	}
	  	},

	  	created(){
	  		const params = this.getParamas;
	  		this.resultType = params.resultType;
	  		if(params.resultType == "U"){
	  			this.resultTypeName = "不一致"	
	  		}
	  		this.resultTypeName = params.resultTypeName;
	  		this.busiTypeName = params.busiTypeName;
	  		this.busiType = params.busiType;
	  		this.tableHeadName = params.compareTableSourceSystem + "-" + "时间分类"+ "(" + this.resultTypeName + ")";
	  		this.compareTableSourceSystem = params.compareTableSourceSystem;
	  		this.tableName.push(this.tableHeadName);
	  		this.plateOrderStatus = params.plateOrderStatus;
	    	this.prodState = params.prodState;
	    	this.userState = params.userState;
	    	this.time = params.time;
	  		this.getList();
	   	},
		methods: {
			getList(){
				let self = this;
				getTimeList(
					{
						compareTableSourceSystem:self.compareTableSourceSystem,
						resultType:self.resultType,
						busiType:self.busiType,
						userState:self.userState,
						prodState:self.prodState,
						start:self.currentPage-1,
			    	    limit:self.pageSize			    	    
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					for(let i=0;i<(res.data.response.rsHeaderlist).length;i++){
						self.header.push(res.data.response.rsHeaderlist[i].TIME_NAME);
					}
					self.header = self.header.reverse();
					self.differenceData = res.data.response.reList;
					self.dataDiff = res.data.response.dataDiff;
					self.totalCount = res.data.response.totalCount;
					
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			backRouter(){
				this.$router.back(-1);
			},
	      	handleClick(row,time) {
	        	let params = this.getParamas;
				let orderParams = {
					'time':time,
					'userState':this.userState,
					'prodState':this.prodState,
					'plateOrderStatus':this.plateOrderStatus
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'DefferenceDataListDefDetail'
			    });
	      	},
	      	handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getList();
	      	}
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.block{text-align: right;margin-top: 15px;}
</style>