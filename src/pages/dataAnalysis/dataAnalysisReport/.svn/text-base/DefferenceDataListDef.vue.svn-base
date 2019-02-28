<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis/dataAnalysisReport'}">数据分析报表</el-breadcrumb-item>
			  	<el-breadcrumb-item>差异类型</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{compareTableSourceSystem}}>>{{resultTypeName}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				
			    <el-select v-model="busiType" clearable  placeholder="业务类型">
				   	<el-option 
				   		v-for="item in options" 
				   		:key="item.BUSI_TYPE_ID" 
				   		:label="item.BUSI_TYPE_NAME"
			      		:value="item.BUSI_TYPE_ID">
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
		    		<el-table-column   fixed prop="BUSI_TYPE_NAME" label="差异类型">
		    			<template slot-scope="scope">
				        	<el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.BUSI_TYPE_NAME}}</el-button>
				      	</template>
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
	import { getBusinessList as getBusinessList } from '@/api/Api'
	
	export default{
		name: 'DefferenceDataListDef',
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
	    		busiType:'',
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		differenceData:[
	    			{
	    				BUSI_TYPE_NAME:'',
	    				BUSI_TYPE:''
	    				
	    			}
	    		],
		        options: [
		    		{
			          	BUSI_TYPE_ID: '',
			          	BUSI_TYPE_NAME: ''
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
	  		this.tableHeadName =  params.compareTableSourceSystem + "-业务类型分类" + "(" + this.resultTypeName + ")";  
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
				getBusinessList(
					{
						compareTableSourceSystem:self.compareTableSourceSystem,
						resultType:self.resultType,
						start:self.currentPage-1,
			    	    limit:self.pageSize
						
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.differenceData = res.data.response.reList;
					self.dataDiff = res.data.response.dataDiff;
					self.totalCount = res.data.response.totalCount;
					self.options = res.data.response.rsTypelist;
					for(let i=0;i<(res.data.response.rsHeaderlist).length;i++){
						self.header.push(res.data.response.rsHeaderlist[i].TIME_NAME);
					}
					self.header = self.header.reverse();
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
					'busiTypeName':row.BUSI_TYPE_NAME,
					'resultType':this.resultType,
					'busiType':row.BUSI_TYPE,
					'resultTypeName':this.resultTypeName,
					'compareTableSourceSystem':this.compareTableSourceSystem
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},params,orderParams));
				if(this.resultType == "A" || this.resultType == "B"){
					this.$router.push({
			    		'name':'DefferenceDataListAB'
			    	});
				}else{
					this.$router.push({
				    	'name':'DefferenceDataListU'
				    });
				}
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
	.block{text-align: right;margin-top: 15px;}
	.el-ange-separator{line-height: 21px !important;}
</style>