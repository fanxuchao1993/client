<!--集团短彩信稽核点名称-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness/groupShortMessage'}">集团短彩信</el-breadcrumb-item>
			  	<el-breadcrumb-item>稽核点名称</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>稽核点名称
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="serviceIds" placeholder="业务" clearable>
				    <el-option
				      	v-for="item in options"
				      	:key="item.SERVICEIDS"
				      	:label="item.NAME"
				      	:value="item.SERVICEIDS">
				    </el-option>
			  	</el-select>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="COMPARE_TABLE_SOURCE_SYSTEM" label="业务"></el-table-column>
			    <el-table-column prop="AUDIT_DATE" label="稽核完成日期" width='120px'></el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="总对比数(CRM侧参与比对)" width='200px'></el-table-column>
			    <el-table-column prop="TOTAL_PLATE" label="平台参与比对总数" width='140px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率指标" width='100px'></el-table-column>
			    <el-table-column label="总差异数" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.CT}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column label="新增差异数" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.CT_NEW}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column label="重复差异数" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.CT_OLD}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="CT_RATIO" label="新增差异占比" width='110px'></el-table-column>
			    <el-table-column label="A单边" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column label="B单边" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column label="不一致" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="NEW_3" label="新增差异三个月平均占比" width='200px'></el-table-column>
			    <el-table-column prop="RELATIVE_RATIO" label="环比上月" width='100px'></el-table-column>
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
		<div class="tableMenu chartMenu">
			<ColumnarLine ref="child" :chartConfig="chartConfig" :contentConfig="contentConfig"  :name="headerLabel" :chartName="chartName[0]" :chartData="chartData[0]"/>
		</div> 
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getGroupBusinessAuditPoint as getGroupBusinessAuditPoint } from '@/api/Api'
	import { getBusinessType2 as getBusinessType2 } from '@/api/Api'
	import ColumnarLine from "@/components/echarts/columnarLine"
	export default{
		name: 'GroupShortMessageName',
		components: {
			ColumnarLine
		},
		computed:{
		 	...mapGetters(['getParamas'])
		},
		created(){
			const params = this.getParamas;
			this.serviceIds = params.serviceIds;
			this.getType();
			this.getList('0');
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		serviceIds:'',
	    		chartName:"",
	    		headerLabel:'',
	    		chartConfig:{
	    			width: '100%',
	    			height:'300px'
	    		},
	    		contentConfig:{
	    			width: '100%',
	    			height:'400px',
	    			'text-align':'center'
	    		},
	    		chartData:[],
	    		tableData: [],
		        options: [
		    		{
			          	SERVICEIDS: '',
			          	NAME: ''
			        }
		        ]
	    	}
	  	},
	  	mounted(){
			
		},
	  	methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				getGroupBusinessAuditPoint(
					{
			    	    serviceIds:self.serviceIds,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
					self.chartData = [
						{
				        	xAxisData:res.data.response.auditData,
				        	seriesData:[
				        		{
					        		name:'总差异数',
					        		data:res.data.response.allDeffNum	
				        		},
				        		{
					        		name:'新增差异数',
					        		data:res.data.response.newIncreamentDeffNum
				        		},
				        		{
					        		name:'一致率指标',
					        		data:res.data.response.consis	
				        		}
				        	]
			    		}
					];
					console.log(self.chartData);
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			getType(){
				getBusinessType2(
					{
						busiType:'0020'
					}
				).then(res=>{
					/*console.log('请求成功！'+JSON.stringify(res.data.response));*/
					this.options = res.data.response.reList;
					/*this.serviceIds = this.getParamas.serviceIds;*/
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			backRouter(){
				this.$router.back(-1);
			},
			handleClick(row,column){
				let trend = "";
				if(column.label == "新增差异数"){
					trend = {trend:"A"};
				}else if(column.label == "重复差异数"){
					trend = {trend:"K"};
				}else{
					trend = {trend:""};
				}
				
				let groupParams = {
					'auditTime':row.AUDIT_DATE,
					'auditBatch':row.AUDIT_BATCH,
					'auditPointId':row.AUDIT_POINT,
					'serviceIds':this.serviceIds,
					'pageType':column.label
				};
				console.log(groupParams);
				let resultType;
				if (column.label == 'A单边') {
					resultType = {resultType:'A'}
				} else if (column.label == 'B单边') {
					resultType = {resultType:'B'}
				} else if (column.label == '不一致') {
					resultType = {resultType:'U'}
				} else {
					resultType = {resultType:''}
				}
				
				this.$store.dispatch('setParamasInfo',Object.assign({},groupParams,resultType,trend));
				this.$router.push({name:"GroupShortMessageNameDetails"});
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

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>