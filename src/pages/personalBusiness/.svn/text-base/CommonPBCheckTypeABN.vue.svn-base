<!--个人业务稽核通用查看业务类型A单边B单边不一致-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
		        <el-breadcrumb-item :to="{path:'/personalBusiness'}">个人业务稽核</el-breadcrumb-item>
		        <el-breadcrumb-item :to="this.$route.matched[2].path">{{this.$route.matched[2].meta.title}}</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="this.$route.matched[2].path+'/commonPBCheck'">查看</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="this.$route.matched[2].path+'/commonPBCheckType'">业务类型</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input placeholder="手机号" v-model="billId" clearable></el-input>
				<el-select v-model="trend" placeholder="稽核结果类型" clearable>
				    <el-option
				      	v-for="item in optionsType"
				      	:key="item.RESULTTYPEID"
				      	:label="item.RESULTTYPEMULTINAME"
				      	:value="item.RESULTTYPEID">
				    </el-option>
			    </el-select>
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
			    <el-table-column prop="AUDIT_TABLES" label="A表名称" width="150px"></el-table-column>
			    <el-table-column label="A表主键列名称" width='350px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_COLUMN1?scope.row.AUDIT_TABLE_PK_COLUMN1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_COLUMN2?scope.row.AUDIT_TABLE_PK_COLUMN2.split(','):''" :key="index+'-lable'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_COLUMN3?scope.row.AUDIT_TABLE_PK_COLUMN3.split(','):''" :key="index+'-lable3'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column label="A表主键列值" width='150px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_VALUE1?scope.row.AUDIT_TABLE_PK_VALUE1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_VALUE2?scope.row.AUDIT_TABLE_PK_VALUE2.split(','):''" :key="index+'-lable'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_VALUE3?scope.row.AUDIT_TABLE_PK_VALUE3.split(','):''" :key="index+'-lable3'" :class="{childCell:index}">
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
			    <el-table-column prop="COMPARE_TABLES" label="B表名称" width="150px"></el-table-column>
			    <el-table-column label="B表主键列名称" width='350px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_COLUMN1?scope.row.COMPARE_TABLE_PK_COLUMN1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_COLUMN2?scope.row.COMPARE_TABLE_PK_COLUMN2.split(','):''" :key="index+'-lable'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_COLUMN3?scope.row.COMPARE_TABLE_PK_COLUMN3.split(','):''" :key="index+'-lable3'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column label="B表主键列值" width='150px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_VALUE1?scope.row.COMPARE_TABLE_PK_VALUE1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_VALUE2?scope.row.COMPARE_TABLE_PK_VALUE2.split(','):''" :key="index+'-lable'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_VALUE3?scope.row.COMPARE_TABLE_PK_VALUE3.split(','):''" :key="index+'-lable3'" :class="{childCell:index}">
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
			    <el-table-column prop="AUDIT_TABLES" label="A表名称" width="150px"></el-table-column>
			    <el-table-column label="A表主键列名称" width='350px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_COLUMN1?scope.row.AUDIT_TABLE_PK_COLUMN1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_COLUMN2?scope.row.AUDIT_TABLE_PK_COLUMN2.split(','):''" :key="index+'-lable'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_COLUMN3?scope.row.AUDIT_TABLE_PK_COLUMN3.split(','):''" :key="index+'-lable3'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column label="A表主键列值" width='150px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_VALUE1?scope.row.AUDIT_TABLE_PK_VALUE1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_VALUE2?scope.row.AUDIT_TABLE_PK_VALUE2.split(','):''" :key="index+'-lable'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.AUDIT_TABLE_PK_VALUE2?scope.row.AUDIT_TABLE_PK_VALUE3.split(','):''" :key="index+'-lable3'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="AUDIT_COLUMN" label="A表稽核列名称" width="120px"></el-table-column>
			    <el-table-column prop="AUDIT_DATA" label="A表稽核列值" width="120px"></el-table-column>
			    <el-table-column prop="COMPARE_TABLES" label="B表名称" width="150px"></el-table-column>
			    <el-table-column label="B表主键列名称" width='350px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_COLUMN1?scope.row.COMPARE_TABLE_PK_COLUMN1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_COLUMN2?scope.row.COMPARE_TABLE_PK_COLUMN2.split(','):''" :key="index+'-lable'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_COLUMN3?scope.row.COMPARE_TABLE_PK_COLUMN3.split(','):''" :key="index+'-lable3'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			      	</template>
			    </el-table-column>
			    <el-table-column label="B表主键列值" width='150px'>
			    	<template slot-scope="scope">
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_VALUE1?scope.row.COMPARE_TABLE_PK_VALUE1.split(','):''" :key="index" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_VALUE2?scope.row.COMPARE_TABLE_PK_VALUE2.split(','):''" :key="index+'-lable'" :class="{childCell:index}">
			    			{{item}}
			    		</span>
			    		<br />
			    		<span v-for="(item,index) in scope.row.COMPARE_TABLE_PK_VALUE3?scope.row.COMPARE_TABLE_PK_VALUE3.split(','):''" :key="index+'-lable3'" :class="{childCell:index}">
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
			      :total=totalCount>
			    </el-pagination>
		  	</div>
		</div>	
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getDetailBossList as getDetailBossList } from '@/api/Api'
	export default{
		name: 'CommonPBCheckTypeABN',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			this.resultType = this.getParamas.resultType;		
	   		this.getList('0');
	   	},
	  	data () {
	    	return {
	    		name:'A单边B单边不一致',
	    		pageName:this.$route.matched[2].meta.title,
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		trend:'',
	    		resultType:'',
	    		billId:'',
	    		spCode:'',
	    		pageType:'A',
	    		tableData: [],
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
		        ],
		        optionsType:[
		        	{
			          	RESULTTYPEID: 'A',
			          	RESULTTYPEMULTINAME: '增量'
			        }, 
			        {
			          	RESULTTYPEID: 'B',
			          	RESULTTYPEMULTINAME: '存量'
			        }
		        ]
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
				this.pageType = this.resultType;
				let sourceSystem;
				//根据this.pageName判断页面传参类型
				if (this.pageName==='CRM-139邮箱稽核') {
					sourceSystem = '139';
				} else if (this.pageName==='CRM-MISC稽核') {
					sourceSystem = 'MISC';
				} else if (this.pageName==='手机视频') {
					/*sourceSystem = 'SJSP';*/
					sourceSystem = 'MISC';
				} else if (this.pageName==='CRM-MCAS稽核') {
					sourceSystem = 'MCAS';
				} else if (this.pageName==='CRM-WLAN稽核') {
					sourceSystem = 'WLAN';
				}
				const params = this.getParamas;
				getDetailBossList(
					{
						auditTime:params.auditTime,
			    	    auditBatch:params.auditBatch,
			    	    topicId:params.topicId,
			    	    resultType:self.resultType,
			    	    spCode:params.spCode,
			    	    auditPointId:params.auditPointId,
			    	    operatorCode:params.operatorCode,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    trend:self.trend,
			    	    billId:self.billId,
			    	    sourceSystem:sourceSystem
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.selectType = self.resultType;
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