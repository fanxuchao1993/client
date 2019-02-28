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
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>
				<span class="btn-del" title="查询"  @click="getList2"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="value" placeholder="业务">
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
			    <el-table-column prop="CT" label="总差异数"></el-table-column>
			    <el-table-column prop="CT_NEW" label="新增差异数"></el-table-column>
			    <el-table-column prop="CT_OLD" label="重复差异数"></el-table-column>
			    <el-table-column prop="CT_RATIO" label="新增差异占比"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边"></el-table-column>
			    <el-table-column prop="ERRORB" label="B单边"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致"></el-table-column>
			    <el-table-column prop="NEW_3" label="新增差异三个月平均占比(%)"></el-table-column>
			    <el-table-column prop="RELATIVERATIO" label="环比上月(%)"></el-table-column>
			    
			 <!--   <el-table-column prop="incrementRatio" label="新增环比上月(%)"></el-table-column>
			    <el-table-column prop="new_Huanbishangyue" label="修复总数"></el-table-column>
			    <el-table-column prop="new_Huanbishangyue" label="修复成功数"></el-table-column>
			    <el-table-column prop="new_Huanbishangyue" label="修复成功率"></el-table-column>
			    -->
			    <el-table-column  label="汇总">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">查看</el-button>
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
		</div>
	</div>
</template>


<script>
	import { mapGetters } from 'vuex'
	import { getZhiBusinessList as getZhiBusinessList } from '@/api/Api'
	export default{
		name: 'ZhiBusiness',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
	   		this.getList();
	   },
		methods: {
			 backRouter(){
				this.$router.back(-1);
			},
	      handleClick(tab) {
	        this.currentTab = tab.label;
	        this.busyTypeIds= tab.name;
	        this.getList();
	      },
			getList(){
			
				let self = this;
				const params = this.getParamas;
				self.value=params.serviceName;
				getZhiBusinessList(
					{
						serviceIds:params.serviceId,
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
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			getList2(){
				let self = this;
				getZhiBusinessList(
					{
						serviceIds:self.value,
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
	    		
	    		options: [
		    		{
			          	NAME:'',
			          	NEWTYPEID:''	
			          
			       }, 
		        ],
		        currentPage: 1,
		        pageSize:10,
		        busyTypeIds:'',
		        serviceIds:'37',
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
			         	UNEQUAL:''
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
