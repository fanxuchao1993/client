<!--个人业务稽核通用查看业务类型-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
		        <el-breadcrumb-item :to="{path:'/personalBusiness'}">个人业务稽核</el-breadcrumb-item>
		        <el-breadcrumb-item :to="this.$route.matched[2].path">{{this.$route.matched[2].meta.title}}</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="this.$route.matched[2].path+'/commonPBCheck'">查看</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="业务名称" v-model="operatorNames" clearable></el-input>
				<el-input placeholder="业务代码" v-model="operatorCodes" clearable></el-input>
				<el-input placeholder="企业代码" v-model="spCodes" clearable></el-input>
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
			    <el-table-column prop="TOPIC_NAME" label="专题名称" width='100px'></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点名称" width='150px'></el-table-column>
			    <el-table-column prop="BUSI_TYPE_NAME" label="业务类型"></el-table-column>
			    <el-table-column prop="SP_CODE" label="企业代码" width='100px'></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="业务代码" width='100px'></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称" width='100px'></el-table-column>
			    <el-table-column label="平台(参与比对总数)" width='160px'>
			    	<template slot-scope="scope">
			        	{{scope.row.SOURCE_SYSTEM}}({{scope.row.TOTAL_NUMB}})
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与总对比数" width='140px'></el-table-column>
			    <el-table-column label="A单边(CRM)" width='120px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column label="B单边(平台)" width='120px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column label="不一致" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数" width='120px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)" width='120px'></el-table-column>
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
	import { getClassSumList as getClassSumList } from '@/api/Api'
	export default{
		name: 'CommonGPBCheckType',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
	   		this.getList('0');
	   	},
	  	data () {
	    	return {
	    		name:'业务类型',
	    		pageName:this.$route.matched[2].meta.title,
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		operatorNames:'',
	    		operatorCodes:'',
	    		spCodes:'',
	    		tableData: []
	    	}
	  	},
	  	methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				let sourceSystem;
				//根据this.pageName判断页面传参类型
				if (this.pageName==='CRM-139邮箱稽核') {
					sourceSystem = '139';
				} else if (this.pageName==='CRM-MISC稽核') {
					sourceSystem = 'MISC';
				} else if (this.pageName==='手机视频') {
					sourceSystem = 'SJSP';
				} else if (this.pageName==='CRM-MCAS稽核') {
					sourceSystem = 'MCAS';
				} else if (this.pageName==='CRM-WLAN稽核') {
					sourceSystem = 'WLAN';
				}
				const params = this.getParamas;
				console.log(params.operatorType);
				getClassSumList(
					{
			    	    auditBatch:params.auditBatch,
			    	    topicId:params.topicId,
			    	    sourceSystem:sourceSystem,
			    	    operatorType:params.operatorType,
			    	    auditPointId:params.auditPointId,
			    	    operatorName:self.operatorNames,
			    	    operatorCode:self.operatorCodes,
			    	    spCodes:self.spCodes,
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
			backRouter(){
				this.$router.back(-1);
			},
			handleClick(row,column){
				let params = this.getParamas;
				let resultType;
				let spCode = {spCode:row.SP_CODE};
				let auditPointId = {auditPointId:row.AUDIT_POINTID};
				let operatorCode = {operatorCode:row.OPERATOR_CODE};
				
				if (column.label === 'A单边(CRM)') {
					resultType = {resultType:'A'}
				} else if (column.label === 'B单边(平台)') {
					resultType = {resultType:'B'}
				} else if (column.label === '不一致') {
					resultType = {resultType:'U'}
				} else {
					resultType = {resultType:''}
				}
				
				console.log(Object.assign({},params,resultType));
				this.$store.dispatch('setParamasInfo',Object.assign({},params,resultType,spCode,auditPointId,operatorCode));
				this.$router.push({path:this.$route.matched[2].path+'/commonPBCheckTypeABN'});
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

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>