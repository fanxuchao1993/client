<!--稽核规则-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/overview'}">稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/overview'}">概览</el-breadcrumb-item>
			  	<el-breadcrumb-item>治理业务</el-breadcrumb-item>
			  <!--	<el-breadcrumb-item>{{currentTab}}</el-breadcrumb-item>-->
			</el-breadcrumb>
		</div>
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>治理业务
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>
				<span class="btn-del" title="查询"  @click="getList2"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="serviceId" placeholder="业务">
				    <el-option
				      	v-for="item in options"
				      	:key="item.newTypeId"
				      	:label="item.name"
				      	:value="item.newTypeId">
				    </el-option>
			  	</el-select>
			   	<div class="clear"></div>				
			</div>
			<el-table
			    :data="tabledata"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="COMPARE_TABLE_SOURCE_SYSTEM" label="业务" width='100px'></el-table-column>
			    <el-table-column prop="AUDIT_DATE" label="稽核完成日期" width='100px'></el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="总比对数(CRM侧参与比对)"></el-table-column>
			    <el-table-column prop="TOTAL_PLATE" label="平台参与比对总数"></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率指标"></el-table-column>
			    <el-table-column prop="CT" label="总差异数">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClickZongChaYi(scope.row,scope.column)" type="text" size="small">{{scope.row.CT}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="CT_NEW" label="新增差异数">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClickAddChaYi(scope.row,scope.column)" type="text" size="small">{{scope.row.CT_NEW}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CT_OLD" label="重复差异数">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClickOldChaYi(scope.row,scope.column)" type="text" size="small">{{scope.row.CT_OLD}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CT_RATIO" label="新增差异占比"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClickABU(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="ERRORB" label="B单边">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClickABU(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClickABU(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="CONSIS_HUANBITHREE" label="新增差异三个月平均占比(%)"></el-table-column>
			    <el-table-column prop="CONSIS_HUANBI" label="环比上月(%)"></el-table-column>
			    <el-table-column prop="NEW_HUANBISHANGYUE" label="新增环比上月(%)"></el-table-column>
			    <el-table-column prop="REPAIRALLCOUNT" label="修复总数"></el-table-column>
			    <el-table-column prop="INTERFACESUCCESSCOUNT" label="修复成功数"></el-table-column>
			    <el-table-column prop="REPAIRDATASUCCESSRATE" label="修复成功率"></el-table-column>
			    
			    <el-table-column  label="汇总">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClickHuiZong(scope.row,scope.column)" type="text" size="small">查看</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column  label="明细">
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
		  	<div>
		  		<ColumnarLine ref="child" :chartConfig="chartConfig" :contentConfig="contentConfig"  :name="headerLabel" :chartName="chartName[0]" :chartData="chartData[0]"/>
		  	</div>
		</div>
	</div>
</template>


<script>
	import { mapGetters } from 'vuex'
	import { getJiTuanBusinessList as getJiTuanBusinessList } from '@/api/Api'
	import ColumnarLine from "@/components/echarts/columnarLine"
	export default{	
		name: 'FeiJiTuanBusiness',
		components: {
			ColumnarLine
		},
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			this.serviceId = this.getParamas.serviceId;	
	   		this.getList();
	   },
		methods: {
			handleClickZongChaYi(row,column){
			    const params = this.getParamas;
				let routeName;
				let self=this;
				let hlrParams = {
					'auditTime':row.AUDIT_DATE,
					'auditBatche':row.AUDITBATCH,
					'topicId':row.TOPIC,
					'serviceId':self.serviceId	
				};
				let resultType='';
				let name;
				name={name:column.label};
				console.log(Object.assign({},hlrParams,resultType));
				this.$store.dispatch('setParamasInfo',Object.assign({},hlrParams,resultType,name));
				routeName='FeiJiTuanABU';
				this.$router.push({name:routeName});				

			},
			handleClickAddChaYi(row,column){
				const params = this.getParamas;
				let routeName;
				let self=this;
				let hlrParams = {
					'auditTime':row.AUDIT_DATE,
					'auditBatche':row.AUDITBATCH,
					'topicId':row.TOPIC,
					'serviceId':self.serviceId,
					'trend':'A',
					};
				let resultType='';
				let name;
				name={name:column.label};
				console.log(Object.assign({},hlrParams,resultType));
				this.$store.dispatch('setParamasInfo',Object.assign({},hlrParams,resultType,name));
				routeName='FeiJiTuanABU';
				this.$router.push({name:routeName});
			},
			handleClickOldChaYi(row,column){
				const params = this.getParamas;
				let routeName;
				let self=this;
				let hlrParams = {
					'auditTime':row.AUDIT_DATE,
					'auditBatche':row.AUDITBATCH,
					'topicId':row.TOPIC,
					'serviceId':self.serviceId,
					'trend':'K'
				};
				let resultType='';
				let name;
				name={name:column.label};
				console.log(Object.assign({},hlrParams,resultType));
				this.$store.dispatch('setParamasInfo',Object.assign({},hlrParams,resultType,name));
				routeName='FeiJiTuanABU';
				this.$router.push({name:routeName});
			},
			handleClickABU(row,column){
			    const params = this.getParamas;
				let routeName;
				let self=this;
				let hlrParams = {
					'auditTime':row.AUDIT_DATE,
					'auditBatche':row.AUDITBATCH,
					'topicId':row.TOPIC,
					'serviceId':self.serviceId
				};
				let resultType;
				let name;
				if (column.label == 'A单边') {
					resultType = {resultType:'A'}
				} else if (column.label == 'B单边') {
					resultType = {resultType:'B'}
				} else if (column.label == '不一致') {
					resultType = {resultType:'U'}
				}
				name={name:column.label};
				console.log(Object.assign({},hlrParams,resultType));
				this.$store.dispatch('setParamasInfo',Object.assign({},hlrParams,resultType,name));
				routeName='FeiJiTuanABU';
				this.$router.push({name:routeName});				

			},
		  backRouter(){
				this.$router.back(-1);
			},
	      handleClick(row,column) {
	      	    const params = this.getParamas;
	      	    this.serviceId = params.serviceId;
	            this.auditBatch=row.AUDITBATCH;
				let auditInfo = {
					'serviceId':this.serviceId,
					'auditBatch': this.auditBatch,
				};
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'FeiJiTuanMingXi'
			      });			      
	      },
	      handleClickHuiZong(row,column) {
	      	    const params = this.getParamas;
	      	    this.serviceId = params.serviceId;
	            this.auditBatch=row.AUDITBATCH;
				let auditInfo = {
					'serviceId':this.serviceId,
					'auditBatch': this.auditBatch,
				};
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'FeiJiTuanHuiZong'
			      });			      
	      },
			getList(){
			
				let self = this;
				const params = this.getParamas;
				self.value=params.serviceName;
				/*alert(self.value);
				alert(params.serviceId);*/
				getJiTuanBusinessList(
					{
						serviceIds:self.serviceId,
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT',
			    	    busyTypeIds:'',
			    	    classSumFlag:'',
			    	    pageFrom:''
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tabledata = res.data.response.reList;
					self.options= res.data.response.serviceList;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
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
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			getList2(){
				let self = this;
				getJiTuanBusinessList(
					{
						serviceIds:self.serviceId,
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT',
			    	    busyTypeIds:'',
			    	    classSumFlag:'',
			    	    pageFrom:''	    	 
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tabledata = res.data.response.reList;
					self.options= res.data.response.serviceList;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
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
	        	this.getList();
	      	}
	    },
	  	data () {
	    	return {
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
			          	name:'',
			          	
			          	newTypeId:''	
			          
			       }, 
		        ],
		        currentPage: 1,
		        pageSize:10,
		        busyTypeIds:'',
		        serviceIds:'',
		        serviceId:'',
		        value:'',
		        totalCount:0,
		        tabledata:[
	    			{
	    				TOTAL_PLATE: '',
			          	CONSIS_RATIO: '',
			          	BUSI_TYPE: '',
			         	SERIAL_NUMBER: '',
			         	AUDITBATCH:'',
			         	CT:'',
			         	CT_RATIO:'',
			         	AUDITPOINT:'',
			         	TOTAL_NUM:'',
			         	NEW_3:'',
			         	REPORTLINKU:'',
			         	CT_NEW:'',
			         	AUDIT_DATE:'',
			         	RELATIVERATIO:'',
			         	REPORTLINKA:'',
			         	ERRORB	:'',
			         	ERRORA:'',
			         	CT_OLD:'',
			         	COMPARE_TABLE_SOURCE_SYSTEM:'',
			         	REPORTLINKB:'',
			         	UNEQUAL:'',
			         	CONSIS_HUANBITHREE:'',
			         	CONSIS_HUANBI:'',
			         	NEW_HUANBISHANGYUE:'',
			         	REPAIRALLCOUNT:'',
			         	INTERFACESUCCESSCOUNT:'',
			         	REPAIRDATASUCCESSRATE:''
			         	
	    			}
	    		]
	    	}
	  	}
	}
</script>

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>
