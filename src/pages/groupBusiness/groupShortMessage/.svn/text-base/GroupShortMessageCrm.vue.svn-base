<!--集团短彩信不一致条数-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness/groupShortMessage'}">集团短彩信</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{resultTypeName}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{resultTypeName}}条数
				
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="ENTCODE" v-model="entCode" clearable></el-input>
				<el-input placeholder="业务代码" v-model="operatorCodes" clearable></el-input>
				<el-input placeholder="SUBSCODE" v-model="subsCodes" clearable></el-input>
				<el-input placeholder="接入号" v-model="accessNumbers" clearable></el-input>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="DATA_BATCH" label="稽核批次" width='80px'></el-table-column>
			    <el-table-column prop="ACCESS_NUMBER" label="接入号" width='120px'></el-table-column>
			    <el-table-column prop="SUBSCODE" label="SUBSCODE" width='140px'></el-table-column>
			    <el-table-column prop="ENTCODE" label="ENTCODE" width='150px'></el-table-column>
			    <el-table-column prop="OPERATOR_CODE" label="业务代码" width='110px'></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务名称" width='120px'></el-table-column>
			    <el-table-column prop="EFFECTIVE_DATE" label="有效时间" width='100px'></el-table-column>
			    <el-table-column prop="EXPIRE_DATE" label="失效时间" width='130px'></el-table-column>
			    <el-table-column prop="BRAND_ID" label="品牌" width='80px'></el-table-column>
			    <el-table-column prop="CHANNEL_TYPE" label="渠道" width='60px'></el-table-column>
			    <el-table-column prop="OPER_STATE" label="业务状态" width='50px'></el-table-column>
			    <el-table-column prop="USER_STATE" label="用户状态" width='50px'></el-table-column>
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
	import { getcrmCollateDetail as getcrmCollateDetail } from '@/api/Api'
	import { mapGetters } from 'vuex'
	export default{
		name: 'GroupShortMessageCrm',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			const param = this.getParamas;
			this.resultTypeName = param.resultTypeName;
	   		this.getList('0');
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		operatorCodes:'',
	    		resultTypeName:'',
	    		accessNumbers:'',
	    		subsCodes:'',
	    		entCode:'',
	    		auditTime:'',
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
				let params = this.getParamas;
				
				getcrmCollateDetail(
					{
						accessNumbers:self.accessNumbers,
			    	    operatorCodes:self.operatorCodes,
			    	    subsCodes:self.subsCodes,
			    	    entCode:self.entCode,
			    	    auditTime:params.auditTime,
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
			handleClick(row){		
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