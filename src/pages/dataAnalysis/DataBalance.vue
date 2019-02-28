<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>数据平衡性</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>数据平衡性
				</div>
				<div class="divStyle2">
					<div class="divStyle">
						<el-select v-model="topicName" clearable placeholder="专题">
						   	<el-option 
						   		v-for="item in topic" 
						   		:key="item.TOPIC_NAME" 
						   		:label="item.TOPIC_NAME"
					      		:value="item.TOPIC_NAME">
					    	</el-option>
						</el-select>
						<el-select v-model="auditDate" clearable placeholder="稽核日期">
						   	<el-option 
						   		v-for="item in options" 
						   		:key="item.AUDIT_DATE" 
						   		:label="item.AUDIT_DATE"
					      		:value="item.AUDIT_DATE">
					    	</el-option>
						</el-select>
					</div>
					<div class="divStyle">
						<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
					</div>
			   	</div>
				<div class="clear"></div>
			</div>
			<!--:span-method="objectSpanMethod"-->
			<el-table
			    :data="dataBalance"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核日期" width="90px"></el-table-column>
			    <el-table-column prop="AUDIT_BATCH" label="稽核批次" width="90px"></el-table-column>
			    <el-table-column prop="TOPIC_NAME" label="专题" width="90px"></el-table-column>
			    <el-table-column prop="SOURCE_SYSTEM_NAME" label="平台" width="90px"></el-table-column>
			    <el-table-column prop="TABLE_NAME" label="源数据名" width="90px"></el-table-column>
			    <el-table-column prop="DATAFILE_NUM" label="数据文件记录数" width="90px"></el-table-column>
			    <el-table-column prop="ERROR_ROW" label="错误记录数" width="90px"></el-table-column>
			    <el-table-column prop="RIGHT_ROW" label="入库记录数" width="90px"></el-table-column>
			    <el-table-column prop="PRE_NUM" label="中间层数量" width="90px"></el-table-column>
			    <el-table-column prop="DELETE_NUM" label="重复数量" width="90px"></el-table-column>
			    <el-table-column prop="LEFT_NUM" label="参与比对数量" width="90px"></el-table-column>
			    <el-table-column prop="SINGLE_SIDE_NUM" label="单边数据" width="90px"></el-table-column>
			    <el-table-column prop="CONSIS_NUM" label="一致数据" width="90px"></el-table-column>
			    <el-table-column prop="UNCONSIS_NUM" label="不一致数据" width="90px"></el-table-column>
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
	import { auditDateList as auditDateList } from '@/api/Api'
	import { topicNameList as topicNameList } from '@/api/Api'
	import { doListDataBalance as doListDataBalance } from '@/api/Api'
	
	export default{
		name: 'DataTraceable',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		auditDate:'',
	    		topicName:'',
	    		dataBalance:[],
	    		flagKey:0,
	    		flagValue:'',
	    		options: [
		    		{
			          	AUDIT_DATE: ''
			       	}
		        ],
		        topic:[
		        	{
			          	TOPIC_NAME: ''
			       	}
		        ]
		        
	    	}
	  	},

	  	created(){
	  		/*this.auditDateFun();
	  		this.topicNameFun();*/
	  		this.getList('0');
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				doListDataBalance(
					{
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
						auditDate: self.auditDate,
						topicName:self.topicName
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.dataBalance = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
					self.topic = res.data.response.rsTopIcNamelist;
					self.options = res.data.response.rsAuditDatelist;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})	
			},
			objectSpanMethod({ row, column, rowIndex, columnIndex }) {
				this.flagKey++;
				if(rowIndex === 0){
					this.flagValue = row.AUDIT_BATCH;
				}
				if (columnIndex === 2) {
					if(row.AUDIT_BATCH === this.flagValue){
						/*console.log("00");*/
						return {
		              		rowspan: 0,
		              		colspan: 0
		            	};
					}else{
						return {
              				rowspan: this.flagKey,
              				colspan: 1
            			};
            			this.flagKey = 0,
            			this.flagValue = row.AUDIT_BATCH;	
					}
				}
				/*console.log(row);*/
				/*console.log(row.AUDIT_BATCH);*/
				/*console.log(columnIndex);
				if (columnIndex === 2) {
					if(){
						
					}
				}*/
			/*	console.log(column);
				console.log(rowIndex);
				console.log(columnIndex);*/
        		/*if (columnIndex === 2) {
          			if (rowIndex % 2 === 0) {
            			return {
              				rowspan: 2,
              				colspan: 1
            			};
          			} else {
	            		return {
		              		rowspan: 0,
		              		colspan: 0
		            	};
          			}
        		}*/
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

<style>
	.el-range-separator{line-height: 21px !important;}
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
</style>