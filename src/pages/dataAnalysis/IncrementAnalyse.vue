<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>增量分析报表</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>增量分析报表
				</div>
				<div class="divStyle2">
					<div class="divStyle">
						<el-select v-model="busiTypelist" clearable placeholder="业务">
						   	<el-option 
						   		v-for="item in options" 
						   		:key="item.NEWTYPEID" 
						   		:label="item.NAMES"
					      		:value="item.NEWTYPEID">
					    	</el-option>
						</el-select>
					</div>
					<div class="divStyle">
						<el-date-picker
						v-model="auditDateStart"
						type="date"
						align="left"
				      	placeholder="稽核日期"
				      	format="yyyyMMdd"
				      	value-format="yyyyMMdd">
				   	</el-date-picker>
					</div>
					<div class="divStyle">
						<span style="margin-left: 15px;">至</span>
					</div>
					<div class="divStyle">
						<el-date-picker
							v-model="auditDateEnd"
							type="date"
							align="left"
					      	placeholder="稽核日期"
					      	format="yyyyMMdd"
					      	value-format="yyyyMMdd">
					   	</el-date-picker>
					</div>
					<div class="divStyle">
						<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
					</div>
			   	</div>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="incrementAnalysisData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="COMPARE_TABLE_SOURCE_SYSTEM" label="业务"></el-table-column>
			    <el-table-column prop="AUDIT_DATE" label="稽核完成日期"></el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="总比对数(CRM侧参与比对)"></el-table-column>
			    <el-table-column prop="TOTAL_PLATE" label="平台参与比对总数"></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率指标"></el-table-column>
			    <el-table-column prop="CT" label="总差异数"></el-table-column>
			    <el-table-column prop="CT_NEW" label="新增差异数"></el-table-column>
			    <el-table-column prop="CT_RATIO" label="新增差异占比"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边"></el-table-column>
			    <el-table-column prop="ERRORB" label="B单边"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="不相等"></el-table-column>
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
	import { getIncrementAnalyseSum as getIncrementAnalyseSum } from '@/api/Api'
	export default{
		name: 'IncrementAnalyse',
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
	    		busiTypelist:'',
	    		auditDateStart:'',
	    		auditDateEnd:'',
	    		incrementAnalysisData:[],
	    		options: [
		    		{
			          	NEWTYPEID: '',
			          	NAMES: ''
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
				getIncrementAnalyseSum(
					{
						auditDateStart:self.auditDateStart,
						auditDateEnd:self.auditDateEnd,
						loginId:'',
						busiType:self.busiTypelist,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
						accOrigin: 'BJYD_YZXGKPT'
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.incrementAnalysisData = res.data.response.rslist;
					self.options = res.data.response.busiTypelist;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
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