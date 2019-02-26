<!--集团彩铃查看业务名称详情-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/groupBusiness/groupColorBell'}">集团彩铃</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/groupBusiness/groupColorBell/commonGBCheck'}">查看</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/groupBusiness/groupColorBell/commonGBCheckName'}">业务名称</el-breadcrumb-item>
				<el-breadcrumb-item>{{pageType}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{pageType}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="手机号码" v-model="phoneNum" clearable></el-input>
				<el-select v-model="serviceIds" placeholder="新增或存量" clearable>
			    <el-option
			      	v-for="item in options"
			      	:key="item.NEWTYPEID"
			      	:label="item.NAME"
			      	:value="item.NEWTYPEID">
			    </el-option>
		  	</el-select>
				<div class="clear"></div>
			</div>
			<el-table :data="tableData" stripe border :header-cell-style="{backgroundColor:'#f5f7fa'}" style="width: 100%">
				<el-table-column prop="UPLOAD_DATE" label="稽核时间"></el-table-column>
				<el-table-column prop="AUDIT_BATCH" label="稽核批次"></el-table-column>
				<el-table-column prop="CHECKNAME" label="稽核点名称"></el-table-column>
				<el-table-column prop="CHECKNAME" label="用户号码"></el-table-column>
				<el-table-column prop="SOURCE_SYSTEM" label="IMSI号"></el-table-column>
				<el-table-column prop="CONSIS_NUM" label="增存量" width='80px'></el-table-column>
				<el-table-column prop="CONSIS_NUM" label="比对结果类型"></el-table-column>
				<el-table-column prop="CONSIS_RATIO" label="品牌"></el-table-column>
				<el-table-column prop="CONSIS_RATIO" label="用户状态"></el-table-column>
				<el-table-column prop="CONSIS_HUANBI" label="产品生效时间" width='140px'></el-table-column>
				<el-table-column prop="TOTAL_DEF" label="产品失效时间" width='140px'></el-table-column>
				<el-table-column prop="INCREMENT_NUM" label="停开机状态"></el-table-column>
				<el-table-column prop="OVER_LAP_DEF" label="CRM侧集团编码" width='140px'></el-table-column>
				<el-table-column prop="DEF_RATIO" label="平台侧集团编码" width='140px'></el-table-column>
				<el-table-column prop="DEF_RATIO" label="描述" width='80px'></el-table-column>
			</el-table>
			<div class="block">
				<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage" :page-size.sync="pageSize" layout="prev, pager, next, total" :total='86'>
				</el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		name: 'GroupColorBellNameDetails',
		computed: {
			...mapGetters(['getParamas'])
		},
		created() {
			this.pageType = this.getParamas.pageType;
		},
		data() {
			return {
				name: '集团彩铃查看业务名称详情',
				pageType: '',
				currentPage: 1,
				pageSize: 10,
				pageType: '',
				phoneNum: '',
				serviceIds: '',
				tableData: [{
					RESULTSUMID: 'aabbcc',
					UPLOAD_DATE: '1601476',
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
					SOURCE_SYSTEM: 'aa',
					TOTAL_NUM_B: 'bb',
					TOPIC: '19991'
				}],
				options: [{
	      	NEWTYPEID: '37',
	      	NAME: '新增'
        },{
	      	NEWTYPEID: '17',
	      	NAME: '存量'
        }]
			}
		},
		methods: {
			getList(){
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