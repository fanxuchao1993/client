<!--家庭业务稽核家庭宽带-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/familyBusiness'}">家庭业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item>家庭宽带</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>稽核总览
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>	
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
			    <el-table-column prop="AUDIT_POINT_NAME" label="稽核点名称"></el-table-column>
			    <el-table-column prop="TOTAL_NUMB" label="平台(参与比对总数)"></el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与比对总条数"></el-table-column>
			    <el-table-column prop="ERRORA" label="A单边(CRM)" width='110px'></el-table-column>
			    <el-table-column prop="ERRORB" label="B单边(平台)" width='100px'></el-table-column>
			    <el-table-column prop="UNEQUAL" label="不一致条数" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)" width='100px'></el-table-column>
			    <el-table-column prop="LINK_RELATIVE_RATIO" label="一致率环比上月(%)" width='100px'></el-table-column>
			    <el-table-column prop="ERROR_NUM" label="差异总数" width='80px'></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="新增差异数" width='100px'></el-table-column>
			    <el-table-column prop="OVER_LAP_DEFF" label="重复差异数" width='100px'></el-table-column>
			    <el-table-column prop="INCREMENT_RATIO" label="新增差异占比" width='120px'></el-table-column>
			    <el-table-column prop="NEW_HUAN_BI_SHANG_YUE" label="新增差异环比" width='120px'></el-table-column>
			    <el-table-column label="分类汇总" width='80px' fixed="right">
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
	export default{
		name: 'OverviewFB',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		created(){
	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		tableData: []
	    	}
	  	},
	  	methods: {
			getList(){
				let self = this;
				getGroupBusinessShort(
					{
			    	    busiType:'0102',
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
			handleClick(row){
				let routeName;
				//业务和状态不同的页面
				row.AUDIT_POINT_NAME==="家庭宽带业务"?routeName="FamilyBroadbandServiceCheck":routeName="FamilyBroadbandStatusCheck";
				let param = {
					'auditTime':row.AUDIT_DATE,
					'auditBatch':row.AUDIT_BATCH,
					'auditPointId':row.AUDIT_POINT,
					'serviceIds':row.NEW_TYPE_ID,
					'topicId':row.TOPIC_ID
				}
				this.$store.dispatch('setParamasInfo',param);
				this.$router.push({name:routeName});
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