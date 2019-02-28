<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>基础分析</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>重点客户
				</div>
				<span class="btn-del" title="返回" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="返回" @click="toRepair">跳转修复页面</span>
				<el-select v-model="busiType" @change="busiTypeChange" placeholder="业务选择" clearable>
				    <el-option
				      	v-for="item in options"
				      	:key="item.ID"
				      	:label="item.NAME"
				      	:value="item.ID">
				    </el-option>
			  	</el-select>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="custNum"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDITDATE" label="稽核日期"></el-table-column>
			    <el-table-column prop="BILLID" label="手机号码"></el-table-column>
			    <el-table-column prop="RESULTTYPENAME" label="差异类型"></el-table-column>
			    <el-table-column prop="BRANDNAME" label="品牌"></el-table-column>
			    <el-table-column prop="USERSTATENAME" label="用户状态"></el-table-column>
			    <el-table-column prop="NODEID" label="网元"></el-table-column>
			    <el-table-column prop="REPAIRSTATUSNAME" label="修复状态"></el-table-column>
			    <el-table-column prop="FAILORDER_ID" label="失败订单关联"></el-table-column>
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
	import { getGroupEmphasisCustmer as getGroupEmphasisCustmer } from '@/api/Api'
	
	export default{
		name: 'BaseAnalysisCust',
		components: {
		},
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
			return {
	    		custNum:[],
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		busiType:'',
	    		options: [
	    			{
		      			ID: '',
		      			NAME: ''
        			}
	    		]
	    	}
	  	},
	  	created(){
	  		let params = this.getParamas;
	  		this.busiType = params.busiType;
	  		this.getList();
	   	},
		methods: {
			getList(){
				let self = this;
				getGroupEmphasisCustmer(
					{
						busiType:self.busiType,
						flog:'',
						start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.custNum = res.data.response.rslist;
					self.options = res.data.response.busiTypeList;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})	
			},
			backRouter(){
				this.$router.back(-1);
			},
			toRepair(){
				alert("修复页面还没又开发");
			},
			handleClick(row) {
				this.headerLabel = row.COMPARETABLESOURCESYSTEM;
				this.busiType = row.SERIALNUMBER;
				this.getList(row.COMPARETABLESOURCESYSTEM);
			
	      	},
	      	busiTypeChange(){
	      		this.getList();
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

<style>
	.el-range-separator{line-height: 21px !important;}
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
</style>