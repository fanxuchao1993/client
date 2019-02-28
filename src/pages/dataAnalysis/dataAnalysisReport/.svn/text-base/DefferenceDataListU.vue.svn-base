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
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				
			    <el-select v-model="userState" clearable  placeholder="用户状态">
				   	<el-option 
				   		v-for="item in options" 
				   		:key="item.USER_STATE_ID" 
				   		:label="item.USER_STATE_NAME"
			      		:value="item.USER_STATE_ID">
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
		    	<el-table-column :label="data" v-for="(data,key) in tableName" :key="key">
		    		<el-table-column label="差异细分">
		    			<el-table-column   prop="PROD_STATE_NAME" label="订购状态">
		    			</el-table-column>
		    			<el-table-column   prop="USER_STATE_NAME" label="用户状态">
						<template slot-scope="scope">
					      	<el-button @click="handleClick(scope.row,data)" type="text" size="small">{{scope.row.USER_STATE_NAME}}</el-button>
					    </template>		    				
		    			</el-table-column>
		    		</el-table-column>
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
			            	{{dataDiff[scope.$index][key]}}
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
	import { getOrderStatus as getOrderStatus } from '@/api/Api'
	import { getUserStateList as getUserStateList } from '@/api/Api'
	import { toHeaderlist as toHeaderlist } from '@/api/Api'
	
	export default{
		name: 'DefferenceDataListU',
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
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		differenceData:[
	    			{
	    				ORDER_STATUS_NAME:'',
	    				PROD_STATE_NAME:'',
	    				PROD_STATE:'',
	    				PLATE_ORDER_STATUS:'',
	    				USER_STATE_NAME:'',
	    				USER_STATE:''
	    				
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
	  		this.resultTypeName = params.resultTypeName;
	  		this.busiTypeName = params.busiTypeName;
	  		this.busiType = params.busiType;
	  		this.resultType = params.resultType;
	  		if(params.resultType == "U"){
	  			this.resultTypeName = "不一致"	
	  		}
	  		this.tableHeadName = params.compareTableSourceSystem + "-" + params.busiTypeName + "业务差异细分"+ "(" + this.resultTypeName + ")";
	  		this.compareTableSourceSystem = params.compareTableSourceSystem;
	  		this.tableName.push(this.tableHeadName);
	  		this.getList('0');
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				getOrderStatus(
					{
						compareTableSourceSystem:self.compareTableSourceSystem,
						resultType:self.resultType,
						busiType:self.busiType,
						userState:self.userState,
						start:self.currentPage-1,
			    	    limit:self.pageSize			    	    
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.options = res.data.response.rsUserStateList;
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
			userStateList(){
				let self = this;
				getUserStateList(
					{
						compareTableSourceSystem: self.compareTableSourceSystem,
						resultType:self.resultType,
						busiType:self.busiType
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.options = res.data.response.reList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
			},
			getHeaderlist(){
				let self = this;
				toHeaderlist(
					{
						sourceSystem: self.compareTableSourceSystem
					}
				).then(res=>{
					//console.log('请求成功！'+JSON.stringify(res.data.response));
					for(let i=0;i<(res.data.response.reList).length;i++){
						self.header.push(res.data.response.reList[i].TIME_NAME);
						
					}
					self.header = self.header.reverse();
					this.getList();
	   				this.userStateList();
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
					'compareTableSourceSystem':this.compareTableSourceSystem,
					'resultType':this.resultType,
					'time':time,
			    	'userState':row.USER_STATE,
					'prodState':row.PROD_STATE,
					'plateOrderStatus':row.PLATE_ORDER_STATUS
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'DefferenceDataListTime'
			    });
	      	},
	      	handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getList('0');
	      	}
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.block{text-align: right;margin-top: 15px;}
</style>