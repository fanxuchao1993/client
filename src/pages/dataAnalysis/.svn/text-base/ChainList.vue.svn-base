<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>数据趋势分析</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>数据趋势分析
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input v-model="busiName" placeholder="业务名称" clearable></el-input>
				<el-input v-model="busiCode" placeholder="业务编码" clearable></el-input>
			       
			    <el-select v-model="busiType" clearable  placeholder="业务类型">
				   	<el-option 
				   		v-for="item in options" 
				   		:key="item.BUSI_TYPE" 
				   		:label="item.BUSI_TYPE_NAME"
			      		:value="item.BUSI_TYPE">
			    	</el-option>
				</el-select>
				<el-select v-model="sourceSystemList" @change="businessType()" clearable  placeholder="平台">
				   	<el-option 
				   		v-for="item in optionsPlat" 
				   		:key="item.SYSTEM_ID" 
				   		:label="item.SYSTEM_NAME"
			      		:value="item.SYSTEM_ID">
			    	</el-option>
				</el-select>
				<div class="clear"></div>
			</div>
			<div class="descriptionCss">
				<p>
					一致率相对波动性环比：当月一致率 - 前一个月的一致率
				</p>
				<p>
					差异数绝对波动性环比：当月的差异数(A单边+B单边) - 前一个月的差异数 
				</p>
			</div>
			<el-table
			    :data="chainListData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column   fixed prop="SOURCE_SYSTEM" label="平台"></el-table-column>
			    <el-table-column fixed prop="BUSI_TYPE_NAME" label="业务类型"></el-table-column>
			    <el-table-column fixed prop="CODE" label="业务编码"></el-table-column>
			    <el-table-column fixed prop="NAME" label="业务名称"></el-table-column>
			    <el-table-column fixed prop="CONSIS_RATIO_CHAIN" label="一致率环比变化(%)"></el-table-column>
			    <el-table-column fixed prop="ERROR_NUM_CHAIN" label="差异数环比变化"></el-table-column>
			    <el-table-column label="一致率(%)">
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
			            	{{data_consistent[scope.$index][key]}}
			            </template>
			       </el-table-column>
			    </el-table-column>
			    <el-table-column label="CRM参与比对总数">
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
			            	{{datacrm[scope.$index][key]}}
			            </template>
			       </el-table-column>
			    </el-table-column>
			    <el-table-column label="CRM参与比对总数">
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
			            	{{dataplat[scope.$index][key]}}
			            </template>
			       </el-table-column>
			    </el-table-column>
			    <el-table-column label="CRM单边">
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
			            	{{dataA[scope.$index][key]}}
			            </template>
			       </el-table-column>
			    </el-table-column>
			    <el-table-column label="平台单边">
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
			            	{{dataB[scope.$index][key]}}
			            </template>
			       </el-table-column>
			    </el-table-column>
			    <el-table-column label="不一致">
			    	<el-table-column  :label="data" v-for="(data,key) in header" :key="key">
			            <template slot-scope="scope">
			            	{{dataU[scope.$index][key]}}
			            </template>
			       </el-table-column>
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
	import { getChainList as getChainList } from '@/api/Api'
	import { toHeaderlist as toHeaderlist } from '@/api/Api'
	import { getSourceSystemList as getSourceSystemList } from '@/api/Api'
	import { businessType as businessType } from '@/api/Api'
	
	export default{
		name: 'ChainList',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
	    	return {
	    		header:[],
                data_consistent:['','','','','',''],
                datacrm:['','','','','',''],
				dataplat:['','','','','',''],
				dataA:['','','','','',''],
				dataB:['','','','','',''],
				dataU:['','','','','',''],
                busiName:'',
                busiCode:'',
	    		auditDateStart:'',
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		busiType:'',
	    		sourceSystemList:'',
	    		chainListData:[],
	    		optionsPlat: [
		    		{
			          	SYSTEM_NAME: 'BOSS系统',
			          	SYSTEM_ID: 'BOSS'
			        }
		        ],
		        options: [
		    		{
			          	BUSI_TYPE: '',
			          	BUSI_TYPE_NAME: ''
			        }
		        ]
	    	}
	  	},

	  	created(){
	  		this.sourceSystemList="BOSS";
	   		this.getSourceSystemList();//查询平台
	   		this.getHeaderlist();
	   		this.businessType();//查询业务
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
				getChainList(
					{
						sourceSystem:self.sourceSystemList,
						busiType:self.busiType,
						busiCode:self.busiCode,
						busiName:self.busiName,
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize,
						accOrigin: 'BJYD_YZXGKPT'
					}
				).then(res=>{
					//console.log('请求成功！'+JSON.stringify(res.data.response));
					self.chainListData = res.data.response.reList;
					self.data_consistent = res.data.response.data_consistent;
					self.datacrm = res.data.response.datacrm;
					self.dataplat = res.data.response.dataplat;
					self.dataA = res.data.response.dataA;
					self.dataB = res.data.response.dataB;
					self.dataU = res.data.response.dataU;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			getHeaderlist(){
				let self = this;
				toHeaderlist(
					{
						sourceSystem: self.sourceSystemList
					}
				).then(res=>{
					//console.log('请求成功！'+JSON.stringify(res.data.response));
					for(let i=0;i<(res.data.response.reList).length;i++){
						self.header.push(res.data.response.reList[i].TIME_NAME);
						
					}
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			getSourceSystemList(){
				let self = this;
				
				getSourceSystemList(
					{
						systemId: 'HLR,WLAN,BOSS,MCAS,MISC,139'
					}
				).then(res=>{
					//console.log('请求成功！'+JSON.stringify(res.data.response));
					self.optionsPlat = res.data.response.reList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
			},
			businessType(){
				let self = this;
				businessType(
					{
						sourceSystem: self.sourceSystemList
					}
				).then(res=>{
					//console.log('请求成功！'+JSON.stringify(res.data.response));
					self.options = res.data.response.reList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
				
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
	.descriptionCss{color:red;}
	.block{text-align: right;margin-top: 15px;}
</style>