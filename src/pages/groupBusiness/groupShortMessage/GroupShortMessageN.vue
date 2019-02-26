<!--集团短彩信不一致条数-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/groupBusiness/groupShortMessage'}">集团短彩信</el-breadcrumb-item>
			  	<el-breadcrumb-item>不一致条数</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>不一致条数
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-search"></i>导出</span>	
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="业务代码" v-model="businessCode" clearable></el-input>
				<el-select v-model="chooseType" placeholder="新增或存量" clearable>
				    <el-option
				      	v-for="item in options"
				      	:key="item.RESULTTYPEID"
				      	:label="item.RESULTTYPEMULTINAME"
				      	:value="item.RESULTTYPEID">
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
			    <el-table-column prop="UPLOAD_DATE" label="稽核时间" width='100px'></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
			    <el-table-column prop="CHECKNAME" label="稽核点名称" width='150px'></el-table-column>
			    <el-table-column prop="CHECKNAME" label="新增或存量" width='120px'></el-table-column>
			    <el-table-column prop="SOURCE_SYSTEM" label="接入号"></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="SUBSCODE" width='130px'></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="ENTCODE" width='130px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="业务代码" width='130px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="业务名称"></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="CRM侧值" width='130px'></el-table-column>
			    <el-table-column prop="CONSIS_HUANBI" label="ED侧值" width='80px'></el-table-column>
			    <el-table-column prop="TOTAL_DEF" label="网关侧值" width='80px'></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="品牌"></el-table-column>
			    <el-table-column prop="OVER_LAP_DEF" label="渠道" width='80px'></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="生效时间"></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="失效时间"></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="开通时间"></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="产品ID"></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="策划ID"></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="服务ID"></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="属性ID"></el-table-column>
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
		name: 'GroupShortMessageN',
	  	data () {
	    	return {
	    		currentPage: 1,
	    		pageSize:10,
	    		auditMonth:'',
	    		businessCode:'',
	    		chooseType:'',
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
			          	SOURCE_SYSTEM:'aa',
			          	TOTAL_NUM_B:'bb',
			          	TOPIC:'19991'
			     	}
		        ],
		        options: [
		    		{
			          	RESULTTYPEID: '选项1',
			          	RESULTTYPEMULTINAME: '新增'
			        }, 
			        {
			          	RESULTTYPEID: '选项2',
			          	RESULTTYPEMULTINAME: '存量'
			        }
		        ]
	    	}
	  	},
	  	methods: {
			getList(){
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
	        	this.getList();
	      	}
	    }
	}
</script>

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>