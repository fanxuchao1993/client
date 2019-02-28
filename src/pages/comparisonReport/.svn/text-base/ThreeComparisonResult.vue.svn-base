<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>三方比对结果</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>三方比对结果
				</div>
				<div class="divStyle2">
					<div class="divStyle">
						<el-input v-model="auditBatch" placeholder="稽核批次" clearable></el-input>
					</div>
					<div class="divStyle">
						<el-select v-model="resultType" clearable placeholder="比对结果类型">
						   	<el-option 
						   		v-for="item in options" 
						   		:key="item.RESULT_TYPE_ID" 
						   		:label="item.RESULT_TYPE_NAME"
					      		:value="item.RESULT_TYPE_ID">
					    	</el-option>
						</el-select>
					</div>
					<div class="divStyle">
						<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
					</div>
			   	</div>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="threeComparisonData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核时间"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题名称"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点名称"></el-table-column>
			    <el-table-column prop="DA" label="CRM系统参与比对数"></el-table-column>
			    <el-table-column prop="DB" label="MISC系统参与比对数"></el-table-column>
			    <el-table-column prop="DC" label="平台参与比对数"></el-table-column>
			    <el-table-column prop="RESULT_TYPE_NAME" label="比对结果类型"></el-table-column>
			    <el-table-column label="数量" fixed="right">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.TOTAL}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column label="分类汇总" fixed="right">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">查看</el-button>
			      	</template>
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
	import { getCompareSum as getCompareSum } from '@/api/Api'
	export default{
		name: 'ThreeComparisonResult',
		computed:{
		 	...mapGetters(['getParamas']) 
//		    getUser:function() {
//		      // 通过vuex的getters方法来获取state里面的数据
//		      return this.$store.getters.getParamas;
//		    }
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		resultType:'',
	    		auditBatch:'',
	    		threeComparisonData:[],
	    		options: [
		    		{
			          	RESULT_TYPE_ID: '',
			          	RESULT_TYPE_NAME: ''
			        }
		        ]
	    	}
	  	},

	  	created(){
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
				getCompareSum(
					{
						auditBatch:self.auditBatch,
						resultType:self.resultType,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.threeComparisonData = res.data.response.reList;
					self.options = res.data.response.resultTypeList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
			},
			handleClick(row,column) {
				let nameRoute;
				if(column.label =="数量"){
					nameRoute = "ThreeComparisonResultDetail";
				}else{
					nameRoute = "ThreeComparisonResultLook";
				}
				let params = {
					'auditBatch':row.AUDIT_BATCH,
					'topicId':row.TOPIC_ID,
					'auditPoint':row.AUDIT_POINT,
					'resultTypeId':row.RESULT_TYPE_ID
				}
				this.$store.dispatch('setParamasInfo',Object.assign({},params));
				
				this.$router.push({name:nameRoute});
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
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
</style>