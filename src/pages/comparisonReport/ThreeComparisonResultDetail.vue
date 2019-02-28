<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/comparisonReport/threeComparisonResult'}">三方比对结果</el-breadcrumb-item>
			  	<el-breadcrumb-item>数量</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>数量
				</div>
				<div class="divStyle2">
					<div class="divStyle">
						<el-input v-model="telephone" placeholder="手机号" clearable></el-input>
						<el-input v-model="operatorName" placeholder="业务名称" clearable></el-input>
						<el-input v-model="operatorCode" placeholder="业务代码" clearable></el-input>
						<el-input v-model="spCode" placeholder="企业代码" clearable></el-input>
					</div>
					<div class="divStyle">
						<el-select v-model="busiTypes" clearable placeholder="业务类型">
						   	<el-option 
						   		v-for="item in optionsBusi" 
						   		:key="item.BUSI_TYPE" 
						   		:label="item.BUSI_TYPE_NAME"
					      		:value="item.BUSI_TYPE">
					    	</el-option>
						</el-select>
					</div>
					<div class="divStyle">
						<el-select v-model="resultTypeIds" clearable placeholder="稽核结果类型">
						   	<el-option 
						   		v-for="item in options" 
						   		:key="item.RESULT_TYPE_ID" 
						   		:label="item.RESULT_TYPE_NAME"
					      		:value="item.RESULT_TYPE_ID">
					    	</el-option>
						</el-select>
					</div>
				</div>
				<div class="divStyle2">	
					<div class="divStyle">
						<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
						<span class="btn-del" title="查询" @click="show">图例</span>
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
			    <el-table-column prop="RESULT_TYPE_NAME" label="比对结果类型"></el-table-column>
			    <el-table-column prop="BUSI_TYPE_NAME" label="业务类型"></el-table-column>
			    <el-table-column prop="TELEPHONE" label="计费号(手机号)"></el-table-column>
			    <el-table-column prop="ENTERPRISE_CODE" label="企业代码"></el-table-column>
			    
			    <el-table-column prop="BUSI_CODE" label="业务代码"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称"></el-table-column>
			    
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
		  	<el-dialog :visible.sync="dialogVisible" width="70%">
				<img src="../../assets/report/image/img1.jpg" style=""/>
				<img src="../../assets/report/image/img2.jpg" style=""/>
			</el-dialog>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getDetailThreeComparison as getDetailThreeComparison} from '@/api/Api'
	export default{
		name: 'ThreeComparisonResultDetail',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		auditBatch:'',
	    		topicId:'',
	    		auditPoint:'',
	    		resultTypeIds:'',
	    		spCode:'',
	    		operatorCode:'',
	    		operatorName:'',
	    		busiTypes:'',
	    		telephone:'',
	    		threeComparisonData:[],
	    		dialogVisible:false,
	    		options: [
		    		{
			          	RESULT_TYPE_ID: '',
			          	RESULT_TYPE_NAME: ''
			        }
		        ],
		        optionsBusi: [
		    		{
			          	BUSI_TYPE: '',
			          	BUSI_TYPE_NAME: ''
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
				let param = this.getParamas;
				getDetailThreeComparison(
					{
						auditBatch:param.auditBatch,
						topicId:param.topicId,
						auditPoint:param.auditPoint,
						resultTypeIds:self.resultTypeIds,
						spCode:self.spCode,
						operatorCode:self.operatorCode,
						operatorName:self.operatorName,
						busiTypes:self.busiTypes,
						telephone:self.telephone,
						
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.threeComparisonData = res.data.response.reList;
					self.optionsBusi = res.data.response.operTypeList;
					self.options = res.data.response.resultTypeList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
			},
			show(){
				this.dialogVisible = true;
			},
			backRouter(){
				this.$router.back(-1);
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