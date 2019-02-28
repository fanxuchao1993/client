<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/dataAnalysis'}">数据分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>集团分析</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>集团分析
				</div>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="baseAnalysisData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="COMPARETABLESOURCESYSTEM" label="业务名称" width="120px">
			    	<template slot-scope="scope">
				       	<el-button @click="handleClick(scope.row)" type="text" size="small">{{scope.row.COMPARETABLESOURCESYSTEM}}</el-button>
				    </template>
			    </el-table-column>
			    <el-table-column prop="AUDITDATE" label="稽核日期"></el-table-column>
			    <el-table-column prop="CT" label="差异数"></el-table-column>
			    <el-table-column label="一致率(%)">
			    	<template slot-scope="scope">
				       	{{scope.row.CONSISRATIO}}%
				    </template>
			    </el-table-column>
			    <el-table-column prop="CTNEW" label="新增差异数"></el-table-column>
			    <el-table-column prop="CTOLD" label="重复差异数"></el-table-column>
			    <el-table-column label="新增差异三个月平均占比(%)">
			    	<template slot-scope="scope">
				       	{{scope.row.AVGTHREERATIO}}%
				    </template>
			    </el-table-column>
			    <el-table-column label="新增差异占比(%)">
			    	<template slot-scope="scope">
				       	{{scope.row.CTRATIO}}%
				    </template>
			    </el-table-column>
			    <el-table-column label="新增差异环比上月(%)">
			    	<template slot-scope="scope">
				       	{{scope.row.LASTLINKRELATIVERATIO}}%
				    </template>
			    </el-table-column>
			    <el-table-column label="新增差异环比三个月(%)">
			    	<template slot-scope="scope">
				       	{{scope.row.THREELINKRELATIVE}}%
				    </template>
			    </el-table-column>
			    <el-table-column prop="VIPRELANUM" label="重点客户数">
			    	<template slot-scope="scope">
				       	<el-button @click="handleClickVipCust(scope.row)" type="text" size="small">{{scope.row.VIPRELANUM}}</el-button>
				    </template>
			    </el-table-column>
			    <el-table-column label="重点客户占比(%)">
			    	<template slot-scope="scope">
				       	{{scope.row.VIPRELANUMRATIO}}%
				    </template>
			    </el-table-column>
		  </el-table>
		</div>
		<div class="tableMenu chartMenu" style="height:400px">
			<ColumnarLine ref="child1" :chartConfig="chartConfig" :contentConfig="contentConfig" :name="headerLabel" :chartName="chartName[0]" :chartData="chartData[0]"/>
			<PieEchars ref="child2" :chartConfig="chartConfig" :contentConfig="contentConfig"  :name="headerLabel" :chartName="chartName[1]" :chartData="chartData[1]"/>
			<BarChars ref="child3" :chartConfig="chartConfig" :contentConfig="contentConfig"  :name="headerLabel" :chartName="chartName[2]" :chartData="chartData[2]"/>
		</div> 		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getGroupDifferAnalyseSum as getGroupDifferAnalyseSum } from '@/api/Api'
	import ColumnarLine from "@/components/echarts/columnarLine"
	import PieEchars from "@/components/echarts/pieEchars"
	import BarChars from "@/components/echarts/barChars"
	
	export default{
		name: 'GroupAnalysisMain',
		components: {
			ColumnarLine,
			PieEchars,
			BarChars
		},
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		data () {
			return {
	    		baseAnalysisData:[],
	    		chartName:"",
	    		headerLabel:'',
	    		chartConfig:{
	    			width: '100%',
	    			height:'300px'
	    		},
	    		contentConfig:{
	    			width: '30%',
	    			'float':'left',
	    			height:'400px',
	    			'text-align':'center'
	    		},
	    		chartData:[],
	    		busiType:''
	    	}
	  	},
	  	created(){
	  		this.getList("0");
	   	},
		methods: {
			getList(obj){
				let self = this;
				getGroupDifferAnalyseSum(
					{busiType:self.busiType}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.baseAnalysisData = res.data.response.rslist;
					if(obj ==="0"){
						self.headerLabel = self.baseAnalysisData[0].COMPARETABLESOURCESYSTEM;
						this.busiType = self.baseAnalysisData[0].SERIALNUMBER;
					}
					self.chartData = [
						{
				        	xAxisData:res.data.response.auditData,
				        	seriesData:[
				        		{
				        			name:'总差异数',
				        			data:res.data.response.allDeffNum
				        		},
				        		{
				        			name:'新增差异数',
				        			data:res.data.response.newIncreamentDeffNum
				        		},
				        		{
				        			name:'一致率指标',
				        			data:res.data.response.consis
				        		}
				        	]
			    		},
			    		{
				        	xAxisData:[],
				        	seriesData:[
				        		res.data.response.errorTypeList
				        	]
			    		},
			    		{
				        	xAxisData:["新增差异率(%)"],
				        	seriesData:[
					        	{
					        		name:res.data.response.kipName,
					        		data:res.data.response.contriRation
					        	}
				        	]
			    		}
					];
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})	
			},
			handleClickVipCust(row){
				let params = this.getParamas;
				let busiType;
				busiType = {busiType:row.SERIALNUMBER}				
				
				this.$store.dispatch('setParamasInfo',Object.assign({},params,busiType));
				this.$router.push({name:"GroupAnalysisCust"});
			},
			handleClick(row) {
				this.headerLabel = row.COMPARETABLESOURCESYSTEM;
				this.busiType = row.SERIALNUMBER;
				this.getList(row.COMPARETABLESOURCESYSTEM);
			
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