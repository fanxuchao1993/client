<!--CRM-BOSS稽核查看业务类型A单边B单边不一致-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness'}">基础业务稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness/crmBossAudit'}">CRM-BOSS稽核</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness/crmBossAudit/crmBossAuditCheck'}">查看</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/basicBusiness/crmBossAudit/crmBossCheckBusiness'}">业务类型</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="resultType" placeholder="稽核结果类型" clearable>
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
				v-if="pageType=='A'"
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核日期" width="100px"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width="100px"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="稽核专题" width="100px"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点" width="100px"></el-table-column>
			    <el-table-column prop="RESULT_TYPE" label="稽核结果类型" width="120px"></el-table-column>
			    <el-table-column prop="AUDIT_TABLES" label="A表名称" width="100px"></el-table-column>
			    <el-table-column label="A表主键列名称" width='500px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_COLUMN1?scope.row.AUDIT_TABLE_PK_COLUMN1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column label="A表主键列值" width='500px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_VALUE1?scope.row.AUDIT_TABLE_PK_VALUE1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="AUDIT_COLUMN" label="A表稽核列名称" width="120px"></el-table-column>
			    <el-table-column prop="AUDIT_DATA" label="A表稽核列值" width="120px"></el-table-column>
			    <el-table-column prop="REPAIR_STATUS_NAME" label="修复状态" width="100px"></el-table-column>
		  	</el-table>
		  	<el-table
				v-else-if="pageType=='B'"
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核日期" width="100px"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width="100px"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="稽核专题" width="100px"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点" width="100px"></el-table-column>
			    <el-table-column prop="RESULT_TYPE" label="稽核结果类型" width="120px"></el-table-column>
			    <el-table-column prop="COMPARE_TABLES" label="B表名称" width="100px"></el-table-column>
			    <el-table-column label="B表主键列名称" width='500px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_COLUMN1?scope.row.COMPARE_TABLE_PK_COLUMN1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column label="B表主键列值" width='500px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_VALUE1?scope.row.COMPARE_TABLE_PK_VALUE1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="COMPARE_COLUMN" label="B表稽核列名称" width="120px"></el-table-column>
			    <el-table-column prop="COMPARE_DATA" label="B表稽核列值" width="120px"></el-table-column>
			    <el-table-column prop="REPAIR_STATUS_NAME" label="修复状态" width="100px"></el-table-column>
		  	</el-table>
		  	<el-table
				v-else
			    :data="tableData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核日期" width="100px"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width="100px"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="稽核专题" width="100px"></el-table-column>
			    <el-table-column prop="CHECK_NAME" label="稽核点" width="100px"></el-table-column>
			    <el-table-column prop="RESULT_TYPE" label="稽核结果类型" width="120px"></el-table-column>
			    <el-table-column prop="AUDIT_TABLES" label="A表名称" width="100px"></el-table-column>
			    <el-table-column label="A表主键列名称" width='500px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_COLUMN1?scope.row.AUDIT_TABLE_PK_COLUMN1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column label="A表主键列值" width='500px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_VALUE1?scope.row.AUDIT_TABLE_PK_VALUE1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="AUDIT_COLUMN" label="A表稽核列名称" width="120px"></el-table-column>
			    <el-table-column prop="AUDIT_DATA" label="A表稽核列值" width="120px"></el-table-column>
			    <el-table-column prop="COMPARE_TABLES" label="B表名称" width="100px"></el-table-column>
			    <el-table-column label="B表主键列名称" width='500px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_COLUMN1?scope.row.COMPARE_TABLE_PK_COLUMN1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column label="B表主键列值" width='500px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_VALUE1?scope.row.COMPARE_TABLE_PK_VALUE.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="COMPARE_COLUMN" label="B表稽核列名称" width="120px"></el-table-column>
			    <el-table-column prop="COMPARE_DATA" label="B表稽核列值" width="120px"></el-table-column>
			    <el-table-column prop="REPAIR_STATUS_NAME" label="修复状态" width="100px"></el-table-column>
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
	import { mapGetters } from 'vuex'
	import { getDetailBossList as getDetailBossList } from '@/api/Api'
	export default{
		name: 'CrmBossCheckBusinessABN',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			this.resultType = this.getParamas.resultType;
	   		this.getList();
	   	},
	  	data () {
	    	return {
	    		name:'A单边B单边不一致',
	    		currentPage: 1,
	    		pageSize:10,
	    		resultType:'',
	    		pageType:'A',
	    		tableData: [
		    		{
		    			RESULTSUMID:'aabbcc',
		    			AUDIT_DATE:'1601476',
			          	AUDIT_BATCH: '201808111',
			          	AUDITTABLENUM: '1185030',
			          	TOPIC_NAME: '账户信息对比',
			         	GATEWAYTOTALNUM: '100.03%',
			          	CONSISNUM: 10086,
			          	ERRORNUM: 1000,
			          	CRMTOTALNUM: '每日上限',
			          	AUDIT_TABLE_PK_COLUMN1: "aaaaa,bbbbbb,cccccc,dddddd,eeeeee",
			          	AUDIT_TABLE_PK_VALUE1: "aaa,bbbb,cccc,dddd,eeee",
			          	REPORTLINK: 'ATTRIBUTE'
			     	}
		        ],
		        options: [
		    		{
			          	RESULTTYPEID: 'A',
			          	RESULTTYPEMULTINAME: 'A单边(BOSS)'
			        }, 
			        {
			          	RESULTTYPEID: 'B',
			          	RESULTTYPEMULTINAME: 'B单边(BOSS)'
			        }, 
			        {
			          	RESULTTYPEID: 'U',
			          	RESULTTYPEMULTINAME: '不一致(BOSS)'
			        }
		        ]
	    	}
	  	},
	  	methods: {
			getList(){
				let self = this;
				//根据类型渲染不同的页面
				self.pageType = self.resultType;
				//根据类型请求接口
				const params = this.getParamas;
				getDetailBossList(
					{
						auditTime:params.auditTime,
			    	    auditBatch:params.auditBatch,
			    	    topicId:params.topicId,
			    	    resultType:self.resultType,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    sourceSystem:'BOSS'
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			backRouter(){
				this.$router.back(-1);
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