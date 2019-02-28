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
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>				
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="批次" v-model="auditBatches" clearable></el-input>
				<el-date-picker
					v-model="auditMonth"
					type="month"
					align="left"
					value-format="yyyyMM"
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
			    <el-table-column prop="UPLOAD_DATE" label="稽核时间" width='100px'></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题名称" width='100px'></el-table-column>
			    <el-table-column prop="SOURCE_SYSTEM" label="平台(参与比对总数)" width='140px'>
			    	<template slot-scope="scope">
			        	{{scope.row.SOURCE_SYSTEM + "(" + scope.row.TOTAL_NUM_B +")"}}
			      	</template>
			    </el-table-column>
			    <el-table-column prop="TOTAL_NUM" label="CRM参与比对总条数" width='140px'></el-table-column>
			    <el-table-column label="A单边(CRM)" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORA}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column label="B单边(平台)" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.ERRORB}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column label="不一致" width='100px'>
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.UNEQUAL}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致性条数" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_RATIO" label="一致率(%)" width='100px'></el-table-column>
			    <el-table-column prop="CONSIS_HUANBI" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="TOTAL_DEF" label="总差异数" width='80px'></el-table-column>
			    <el-table-column prop="INCREMENT_NUM" label="新增差异数" width='100px'></el-table-column>
			    <el-table-column prop="OVER_LAP_DEF" label="重复差异数" width='100px'></el-table-column>
			    <el-table-column prop="DEF_RATIO" label="新增差异占比(%)" width='110px'></el-table-column>
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
	import { getCRMList as getCRMList } from '@/api/Api'
	export default{
		name: 'CommonPBOverview',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		created(){
	   		this.getList('0');
	   	},
	  	data () {
	    	return {
	    		name:'个人业务稽核通用总览',
	    		pageName:this.$route.matched[2].meta.title,
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		auditBatches:'',
	    		auditMonth:'',
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
				let sourceSystem;
				//根据this.pageName判断页面传参类型
				const params = this.getParamas;
				params.sourceSystem
				
				if (params.sourceSystem==='CRM-139邮箱稽核') {
					sourceSystem = '139';
				} else if (this.pageName==='CRM-MISC稽核') {
					sourceSystem = 'MISC';
				}
				/* else if (this.pageName==='手机视频') {
					sourceSystem = 'SJSP';
				} */
				 else if (this.pageName==='CRM-MCAS稽核') {
					sourceSystem = 'MCAS';
				} /*else if (this.pageName==='CRM-WLAN稽核') {
					sourceSystem = 'WLAN';
				}*/
				getCRMList(
					{
						auditMonth:self.auditMonth,
			    	    auditBatches:self.auditBatches,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    sourceSystem:sourceSystem
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
				let hlrParams = {
					'auditTime':row.UPLOAD_DATE,
					'auditBatch':row.AUDIT_BATCH,
					'topicId':row.TOPIC
				};
				if (column.label === '分类汇总') {
					this.$store.dispatch('setParamasInfo',hlrParams);
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
					console.log(Object.assign({},hlrParams,{'pageResult':pageResult}));
					this.$store.dispatch('setParamasInfo',Object.assign({},hlrParams,{'pageResult':pageResult}));
					this.$router.push({path:this.$route.matched[2].path+'/commonPBABN'});
				}

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
