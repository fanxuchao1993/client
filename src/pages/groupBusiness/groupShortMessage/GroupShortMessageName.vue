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
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-search"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="serviceIds" placeholder="业务" clearable>
				    <el-option
				      	v-for="item in options"
				      	:key="item.NEWTYPEID"
				      	:label="item.NAME"
				      	:value="item.NEWTYPEID">
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
			    <el-table-column prop="RELATIVERATIO" label="环比上月" width='100px'></el-table-column>
		  	</el-table>
			<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size.sync="pageSize"
			      layout="prev, pager, next, total"
			      :total='86'>
			    </el-pagination>
		  	</div>
		</div>
		<div class="tableMenu chartMenu">
			<BarSingle/>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getDifferCustBlocSum as getDifferCustBlocSum } from '@/api/Api'
	import BarSingle from "@/components/echarts/barSingle"
	export default{
		name: 'GroupShortMessageName',
		components: {
			BarSingle
		},
		computed:{
		 	...mapGetters(['getParamas'])
		},
		created(){
			this.serviceIds = this.getParamas.serviceIds;
	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		serviceIds:'',
	    		tableData: [
		    		{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'1601476',
			          	AUDIT_BATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: 'CRMHLR稽核',
			         	GATEWAYTOTALNUM: '100.03%',
			          	ERRORA: 10086,
			          	ERRORB: 999,
			          	UNEQUAL: 123231,
			          	CRMTOTALNUM: '每日上限',
			          	CONSISRATIO: '10.02%',
			          	REPORTLINK: 'ATTRIBUTE',
			          	CT:'aa',
			          	CT_NEW:'bb',
			          	CT_OLD:'19991'
			     	}
		        ],
		        options: [
		    		{
			          	NEWTYPEID: '37',
			          	NAME: '集团彩铃'
			        },{
			          	NEWTYPEID: '17',
			          	NAME: '集团短彩信_订购状态'
			        }
		        ]
	    	}
	  	},
	  	mounted(){
			let self = this;
			window.onresize = () =>{
				self.$router.go(0);
//				location.reload();
			};
		},
	  	methods: {
			getList(){
				let self = this;
				getDifferCustBlocSum(
					{
						accOrigin:'BJYD_YZXGKPT',
			    	    serviceIds:self.serviceIds,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    classSumFlag:'10',
			    	    pageFrom:'10'
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
					self.options = res.data.response.serviceList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			backRouter(){
				this.$router.back(-1);
			},
			handleClick(row,column){
				let bossParams = {
					'auditTime':row.UPLOAD_DATE,
					'auditBatch':row.AUDIT_BATCH,
					'topicId':row.TOPIC
				};
				this.$store.dispatch('setParamasInfo',Object.assign({},bossParams,{'pageType':column.label}));
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