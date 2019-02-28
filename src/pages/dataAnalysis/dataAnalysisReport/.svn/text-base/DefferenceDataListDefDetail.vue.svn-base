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
				<i class="iconfont icon-biaotishutiao6x25"></i>{{compareTableSourceSystem}}>>{{resultTypeName}}>>{{busiTypeName}}>>时间:{{time}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				
			    <el-select v-model="timeMark" clearable  placeholder="时间分类">
				   	<el-option 
				   		v-for="item in options" 
				   		:key="item.TIME_ID" 
				   		:label="item.TIME_NAME"
			      		:value="item.TIME_ID">
			    	</el-option>
				</el-select>
				
				<div class="clear"></div>
			</div>
			<el-table
			    :data="differenceData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 40%;"
		    >
		    	<el-table-column :label="data" v-for="(data,key) in tableName" :key="key">
		    		<el-table-column prop="PROD_NAME" label="业务名称"/>
		    		<el-table-column prop="PROD_TOTAL_NUM" label="单边条数">
	    				<template slot-scope="scope">
				        	<el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.PROD_TOTAL_NUM}}</el-button>
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
	import { getDifferenceList as getDifferenceList } from '@/api/Api'
	export default{
		name: 'DefferenceDataListDefDetail',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
	    	return {
	    		header:[],
	    		tableName:[],
	    		resultType:'',
	    		tableHeadName:'',
	    		compareTableSourceSystem:'',
	    		resultTypeName:'',
	    		busiTypeName:'',
	    		busiType:'',
	    		userState:'',
	    		timeMark:'',
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		orderA:true,
	    		orderB:true,
	    		time:'',
	    		auditBatch:'',
	    		plateOrderStatus:'',
	    		prodState:'',
	    		differenceData:[
	    			{
	    				PROD_NAME:'',
	    				PROD_TOTAL_NUM:'',
	    				PROD_ID:''
	    			}
	    		],
		        options: [
		    		{
			          	TIME_ID: '',
			          	TIME_NAME: ''
			       }
		        ]
	    	}
	  	},

	  	created(){
	  		const params = this.getParamas;
	  		this.plateOrderStatus = params.plateOrderStatus;
	  		this.prodState = params.prodState,
	  		this.time = params.time;
	  		this.userState = params.userState;
	  		this.resultTypeName = params.resultTypeName;
	  		this.busiTypeName = params.busiTypeName;
	  		this.busiType = params.busiType;
	  		this.compareTableSourceSystem = params.compareTableSourceSystem;
	  		this.resultType = params.resultType;
	  		if(params.resultType == "U"){
	  			this.resultTypeName = "不一致"	
	  		}
	  		this.tableHeadName = this.compareTableSourceSystem + "-" + "差异数据业务分析"+ "(" + this.resultTypeName + ")";
	  		this.tableName.push(this.tableHeadName);
	   		if(this.resultType == 'A'){
	   			this.options = [{TIME_ID: '1',TIME_NAME: '产品受理时间'},{TIME_ID: '2',TIME_NAME: '产品生效时间'},{TIME_ID: '3',TIME_NAME: '用户受理时间'}];
	   		}else if(this.resultType == "U"){
	   			this.options = [{TIME_ID: '1',TIME_NAME: '产品受理时间'},{TIME_ID: '2',TIME_NAME: '产品生效时间'},{TIME_ID: '3',TIME_NAME: '用户受理时间'},{TIME_ID: '4',TIME_NAME: '平台受理时间'},{TIME_ID: '5',TIME_NAME: '平台生效时间'}];
	   		}else{
	   			this.options = [{TIME_ID: '4',TIME_NAME: '平台受理时间'},{TIME_ID: '5',TIME_NAME: '平台生效时间'}];
	   		}
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
				getDifferenceList(
					{
						compareTableSourceSystem:self.compareTableSourceSystem,
						resultType:self.resultType,
						auditBatch:self.auditBatch,
						plateOrderStatus:self.plateOrderStatus,
						userState:self.userState,
						prodState:self.prodState,
						busiType:self.busiType,
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    time:self.time,
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.differenceData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
					for(let i=0;i<(res.data.response.rsHeaderlist).length;i++){
						self.header.push(res.data.response.rsHeaderlist[i].TIME_NAME);
						if(res.data.response.rsHeaderlist[i].TIME_NAME == self.time){
							self.auditBatch = res.data.response.rsHeaderlist[i].AUDIT_BATCH;
						}
					}
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			backRouter(){
				this.$router.back(-1);
			},
	      	handleClick(row) {
	        	let params = this.getParamas;
				let orderParams = {
					'compareTableSourceSystem':this.compareTableSourceSystem,
					'auditBatch':this.auditBatch,
					'resultType':this.resultType,
					'busiType':this.busiType,
					'userState':this.userState,
					'prodId':row.PROD_ID,
					'plateOrderStatus':this.plateOrderStatus,
					'prodState':this.prodState,
					'timeTypeId':'',
					'prodName':row.PROD_NAME
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				this.$router.push({
			    	'name':'DefferenceDataListEnd'
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