<!--CRM-BOSS日增量稽核总览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness'}">基础业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>CRM-BOSS日增量稽核</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>数据总览
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="批次" v-model="auditBatches" clearable></el-input>
				<el-date-picker
					v-model="auditMonth"
					type="month"
					align="left"
					value-format="yyyyMM"
			      	placeholder="稽核日期">
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
			    <el-table-column prop="UPLOAD_DATE" label="稽核时间" width='100px'></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题名称" width='120px'></el-table-column>
			    <el-table-column prop="SOURCE_SYSTEM" label="平台(参与比对总数)" width='170px'>
			    	<template slot-scope="scope">
			        	{{scope.row.SOURCE_SYSTEM + "(" + scope.row.TOTAL_NUM_B +")"}}
			      	</template>
			    </el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边(CRM)" width='110px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="ERRORB" label="B单边(平台)" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致" width='80px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>	
			    </el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数" width='100px'></el-table-column>
			    <el-table-column label="一致率(%)" width='100px'>
			    	<template slot-scope="scope">
			        	{{scope.row.CONSIS_RATIO}}%
			      	</template>
			    </el-table-column>
			    <el-table-column prop="TOTAL_DEF" label="总差异数" width='80px'></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="新增差异数" width='100px'></el-table-column>
			    <el-table-column prop="OVER_LAP_DEF" label="重复差异数" width='100px'></el-table-column>
			    <el-table-column label="新增差异占比(%)" width='130px'>
			    	<template slot-scope="scope">
			        	{{scope.row.DEF_RATIO}}%
			      	</template>
			    </el-table-column>
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
	import { getCRMList as getCRMList } from '@/api/Api'
	export default{
		name: 'OvuerviewCBI',
		computed:{
		 	...mapGetters(['getParamas']) 
//		    getUser:function() {
//		      // 通过vuex的getters方法来获取state里面的数据
//		      return this.$store.getters.getParamas;
//		    }
		},
		created(){
	   		this.getList("0");
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		auditMonth:'',
	    		auditBatches:'',
	    		totalCount:0,
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
				getCRMList(
					{
						auditMonth:self.auditMonth,
			    	    auditBatches:self.auditBatches,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    sourceSystem:'BOSSADD'
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
				let crmParams = {
					'auditTime':row.UPLOAD_DATE,
					'auditBatche':row.AUDIT_BATCH,
					'topicId':row.TOPIC
				};
				let resultType;
				let name;
				if (column.label == 'A单边(CRM)') {
					resultType = {resultType:'A'}
				} else if (column.label == 'B单边(平台)') {
					resultType = {resultType:'B'}
				} else if (column.label == '不一致') {
					resultType = {resultType:'U'}
				}
				name = {name:column.label}
				this.$store.dispatch('setParamasInfo',Object.assign({},crmParams,resultType,name));
				console.log(Object.assign({},crmParams,resultType));
				column.label==='分类汇总'?routeName='CrmBossIncrementCheck':routeName='CrmBossIncrementABN';
				this.$router.push({name:routeName});
			},
	      	handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getList("0");
	      	}
	    }
	}
</script>

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>