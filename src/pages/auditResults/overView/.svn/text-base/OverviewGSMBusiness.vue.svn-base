<!--集团短彩信总览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>集团短彩信</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>稽核总览
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" @click="exportExcel()" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="稽核点名称" v-model="audProintName" clearable></el-input>
				<el-input placeholder="稽核批次" v-model="auditBatch" clearable></el-input>
				<el-date-picker
					v-model="auditTime"
					type="month"
					align="left"
			      	placeholder="稽核日期"
			      	value-format="yyyyMM">
			    </el-date-picker>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核时间" width='100px'></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
			    <el-table-column label="稽核点名称">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.AUDIT_POINT_NAME}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column label="平台(参与比对总数)" width='100px'>
			    	<template slot-scope="scope">
			        	<div v-if="scope.row.REPORT_LINK_PLATE == ''">
						  	{{scope.row.TOTAL_NUMB}}
						</div>
						<div v-else-if="scope.row.REPORT_LINK_PLATE == null">
						  	{{scope.row.TOTAL_NUMB}}
						</div>
						<div v-else>
						  	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.TOTAL_NUMB}}</el-button>
						</div>
			      	</template>
			    </el-table-column>
			    <el-table-column label="CRM参与比对总条数" width='100px'>
			    	<template slot-scope="scope">
			        	<div v-if="scope.row.REPORT_LINK_CRM == ''">
						  	{{scope.row.TOTAL_NUM}}
						</div>
						<div v-else-if="scope.row.REPORT_LINK_CRM == null">
						  	{{scope.row.TOTAL_NUM}}
						</div>
						<div v-else>
						  	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.TOTAL_NUM}}</el-button>
						</div>
			      	</template>
			    </el-table-column>
			    <el-table-column label="A单边(CRM)" width='100px'>
			    	<template slot-scope="scope">
			        	<div v-if="scope.row.REPORT_LINKA == ''">
						  	{{scope.row.ERRORA}}
						</div>
						<div v-else-if="scope.row.REPORT_LINKA == null">
						  	{{scope.row.ERRORA}}
						</div>
						<div v-else>
						  	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
						</div>
			      	</template>
			    </el-table-column>
			    <el-table-column label="B单边(平台)" width='100px'>
			    	<template slot-scope="scope">
			        	<div v-if="scope.row.REPORT_LINKB == ''">
						  	{{scope.row.ERRORB}}
						</div>
						<div v-else-if="scope.row.REPORT_LINKB == null">
						  	{{scope.row.ERRORB}}
						</div>
						<div v-else>
						  	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
						</div>
			      	</template>
			    </el-table-column>
			    <el-table-column label="不一致条数" width='100px'>
			      	<template slot-scope="scope">
			        	<div v-if="scope.row.REPORT_LINKU == ''">
						  	{{scope.row.UNEQUAL}}
						</div>
						<div v-else-if="scope.row.REPORT_LINKU == null">
						  	{{scope.row.UNEQUAL}}
						</div>
						<div v-else>
						  	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
						</div>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)" width='100px'></el-table-column>
			    <el-table-column prop="LINK_RELATIVE_RATIO" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="ERROR_NUM" label="差异总数" width='80px'></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="新增差异数" width='100px'></el-table-column>
			    <el-table-column prop="OVER_LAP_DEFF" label="重复差异数" width='100px'></el-table-column>
			    <el-table-column prop="INCREMENT_RATIO" label="新增差异占比" width='120px'></el-table-column>
			    <el-table-column label="分类汇总" fixed="right" width='80px'>
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
	import { getGroupBusinessShort as getGroupBusinessShort } from '@/api/Api'
	import { exportOverViewGSM as exportOverViewGSM } from '@/api/Api'
	import { testPost as testPost } from '@/api/Api'
	
	export default{
		name: 'OverviewGSM',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		created(){
	   		this.getList('0');
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		auditTime:'',
	    		auditBatch:'',
	    		audProintName:'',
	    		fileName:'',
	    		name:'',
	    		tableData: []
	    	}
	  	},
	  	methods: {
	  		backRouter(){
				this.$router.back(-1);
			},
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				getGroupBusinessShort(
					{
						auditTime:self.auditTime,
			    	    auditBatch:self.auditBatch,
			    	    audProintName:self.audProintName,
			    	    busiType:'0020',
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			handleClick(row,column){
				let routeName;
				let param = {
					'auditTime':row.AUDIT_DATE,
					'auditBatch':row.AUDIT_BATCH,
					'auditPointId':row.AUDIT_POINT,
					'serviceIds':row.NEW_TYPE_ID,
					'topicId':row.TOPIC_ID,
					'resultTypeName':column.label
				}
				console.log(column.label);
				this.$store.dispatch('setParamasInfo',param);
				if (column.label==='分类汇总') {
					routeName='GroupShortMessageCheck'
				}else if(column.label==='稽核点名称'){
					routeName='GroupShortMessageName'
				}else if(column.label==='A单边(CRM)'){
					routeName='GroupShortMessageA'
				}else if(column.label==='B单边(平台)'){
					routeName='GroupShortMessageB'
				}else if(column.label==='平台(参与比对总数)'){
					routeName='GroupShortMessagePlate'
				}else if(column.label==='CRM参与比对总条数'){
					routeName='GroupShortMessageCrm'
				}else{
					routeName='GroupShortMessageN'
				}
				this.$router.push({name:routeName});
			},
	      	handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getList('0');
	      	},
			exportExcel(){
				exportOverViewGSM(
					{
						fileName:'20181018_110326_exportExcel.csv'
						
					}
				).then(res=>{
					let aTag = document.createElement('a');
					let blob = new Blob([res.data]);　　// 这个content是下载的文件内容，自己修改
					aTag.download = "稽核总览.csv";　　　　　　// 下载的文件名
					aTag.href = URL.createObjectURL(blob);
					aTag.click();　　　　　　　　　　　　　　
					URL.revokeObjectURL(blob);
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			testPost(){
				testPost(
					{
						name:'测试post传参',
						nameUrl:'url测试'
					}
				).then(res=>{
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			}
	    }
	}
</script>

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>