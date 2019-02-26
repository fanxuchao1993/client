<!--个人业务稽核通用总览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/personalBusiness'}">个人业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{pageName}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>稽核总览
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-search"></i>导出</span>
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="批次" v-model="auditBatches" clearable></el-input>
				<el-date-picker
					v-model="auditTime"
					type="month"
					align="left"
			      	placeholder="选择日期">
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
			    <el-table-column prop="AUDIT_BATCH" label="稽核时间" width='100px'></el-table-column>
			    <el-table-column prop="AUDITTABLENUM" label="稽核批次" width='100px'></el-table-column>
			    <el-table-column prop="CHECKNAME" label="专题名称"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="平台(参与比对总数)"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column label="A单边(CRM)" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column label="B单边(平台)" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column label="不一致" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="UNEQUAL" label="一致性条数" width='100px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="一致率(%)" width='100px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="UNEQUAL" label="总差异数" width='80px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="新增差异数" width='100px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="重复差异数" width='100px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="新增差异占比(%)" width='110px'></el-table-column>
			    <el-table-column label="分类汇总" width='80px'>
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
			      :total='86'>
			    </el-pagination>
		  	</div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'CommonPBOverview',
	  	data () {
	    	return {
	    		name:'个人业务稽核通用总览',
	    		pageName:this.$route.matched[2].meta.title,
	    		currentPage: 1,
	    		pageSize:10,
	    		auditBatches:'',
	    		auditTime:'',
	    		tableData: [
		    		{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'4',
			          	AUDIT_BATCH: '201808114',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: this.$route.matched[2].meta.title,
			         	GATEWAYTOTALNUM: '100.03%',
			          	ERRORA: 0,
			          	ERRORB: 0,
			          	UNEQUAL: 123231,
			          	CRMTOTALNUM: '每日上限',
			          	CONSISRATIO: '10.02%',
			          	REPORTLINK: 'ATTRIBUTE',
			          	SOURCE_SYSTEM:'aa',
			          	TOTAL_NUM_B:'bb',
			          	serviceIds:'37'
			     	},
			     	{
		    			RESULTSUMID:'aabbcc',
		    			UPLOAD_DATE:'4',
			          	AUDIT_BATCH: '201808114',
			          	AUDITTABLENUM: '1185030',
			          	CHECKNAME: this.$route.matched[2].meta.title,
			         	GATEWAYTOTALNUM: '100.03%',
			          	ERRORA: 0,
			          	ERRORB: 0,
			          	UNEQUAL: 123231,
			          	CRMTOTALNUM: '每日上限',
			          	CONSISRATIO: '10.02%',
			          	REPORTLINK: 'ATTRIBUTE',
			          	SOURCE_SYSTEM:'aa',
			          	TOTAL_NUM_B:'bb',
			          	serviceIds:'37'
			     	}
		    	]
	    	}
	  	},
	  	created(){
	  		this.getList()
	  	},
	  	methods: {
			getList(){
				//根据this.pageName判断页面传参类型
			},
			handleClick(row,column){
				if (column.label === '分类汇总') {
          this.$router.push({path:this.$route.matched[2].path+'/commonPBCheck'});
				}else{
					let pageResult;
					if (column.label==='A单边(CRM)') {
						pageResult = "A";
					}else if(column.label==='B单边(平台)'){
						pageResult = "B";
					}else{
						pageResult = "U";
					}
					this.$store.dispatch('setParamasInfo',{'pageResult':pageResult});
					this.$router.push({path:this.$route.matched[2].path+'/commonPBABN'});
				}

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
