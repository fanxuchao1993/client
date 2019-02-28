<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>告警日志</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>告警日志总览
				</div>
				<div class="divStyle2">
					<div class="divStyle">
						<el-date-picker
						v-model="DateStart"
						type="datetime"
						align="left"
				      	placeholder="告警时间"
				      	format="yyyyMMddHHmm"
				      	value-format="yyyyMMddHHmm" style="width:180px;">
				   	</el-date-picker>
					</div>
					<div class="divStyle">
						<span style="margin-left: 15px;">至</span>
					</div>
					<div class="divStyle">
						<el-date-picker
							v-model="DateEnd"
							type="datetime"
							align="left"
					      	placeholder="告警时间"
					      	format="yyyyMMddHHmm"
					      	value-format="yyyyMMddHHmm" style="width:180px;">
					   	</el-date-picker>
					</div>
					<div class="divStyle">
						<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
					</div>
			   	</div>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="dataLoggerData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="ALARM_ID" label="告警ID"></el-table-column>
			    <el-table-column prop="LEVEL_NAME" label="告警级别名称"></el-table-column>
			    <el-table-column prop="CREATE_TIME" label="告警生成时间"></el-table-column>
			    <el-table-column prop="RNAME" label="规则名称"></el-table-column>
			    <el-table-column prop="SCOPE_OBJECT" label="作用域对象"></el-table-column>
			    <el-table-column prop="CAUTION_NOW" label="告警值"></el-table-column>
			    <el-table-column prop="START_END" label="作用域"></el-table-column>
			    <el-table-column prop="SCOPE_UNIT" label="作用域单位"></el-table-column>
			    <el-table-column prop="CNAME" label="告警内容"></el-table-column>
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
	import { getSumList as getSumList } from '@/api/Api'
	
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
	    		DateEnd:'',
	    		DateStart:'',
	    		dataLoggerData:[]
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
				getSumList(
					{
						DateStart:self.DateStart,
						DateEnd:self.DateEnd,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.dataLoggerData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
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