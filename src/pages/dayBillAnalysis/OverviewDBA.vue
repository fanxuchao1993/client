<!--CRM-HLR稽核A单边B单边不一致-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/dayBillAnalysis'}">日账分析</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{name}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
    <!--固定三个不滑动-->
    <div class="EchartsMenu">
      <div class="EchartsItem">
        <LineSingle ref="child1" :chartConfig="chartConfig" :name="headerLabel" :chartName="chartName[0]" :chartData="chartData[0]"/>
      </div>
      <div class="EchartsItem">
        <LineSingle ref="child2" :chartConfig="chartConfig" :name="headerLabel" :chartName="chartName[2]" :chartData="chartData[2]"/>
      </div>
      <div class="EchartsItem">
        <LineSingle ref="child3" :chartConfig="chartConfig" :name="headerLabel" :chartName="chartName[1]" :chartData="chartData[1]"/>
      </div>
      <div class="clear"></div>
    </div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
				<span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
				<el-date-picker
					v-model="auditMonth"
					type="month"
					align="center"
					value-format="yyyyMM"
			      	placeholder="选择月份">
			    </el-date-picker>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="tableData"
			    stripe
			    border
			    @header-click="headerClick"
			    :header-cell-style="headerCellStyle"
			    style="width: 100%"
		    >
			    <el-table-column prop="FEE_DAY" label="日期" ></el-table-column>
			    <el-table-column v-for="(item,index) in tableHeaderData" :key="index" :prop="item.COLINDEX" :label="item.COL"></el-table-column>
			    <el-table-column label="分类汇总">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
			      	</template>
			    </el-table-column>
		  	</el-table>
		</div>
		<!-- 数量不固定 左右拖动 -->
	    <!--<swiper class="EchartsMenu" :options="swiperOption">
	        <swiper-slide>
	        	<div class="EchartsItem2">
					<LineSingle :chartConfig="chartConfig2" :name="headerLabel"/>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="EchartsItem2">
					<LineSingle :chartConfig="chartConfig2" :name="headerLabel"/>
				</div>
	        </swiper-slide>
	        <swiper-slide>
	        	<div class="EchartsItem2">
					<LineSingle :chartConfig="chartConfig2" :name="headerLabel"/>
				</div>
	        </swiper-slide>
	    </swiper>-->
	</div>
</template>

<script>
//	import { swiper, swiperSlide } from 'vue-awesome-swiper'
//	import 'swiper/dist/css/swiper.min.css'
	import { getDayBillAnalysisList } from '@/api/Api'
	import LineSingle from "@/components/echarts/lineSingle"
	import LineDouble from "@/components/echarts/lineDouble"
	export default{
		name: 'OverviewDBA',
		components: {
//			swiper,
//		    swiperSlide,
			LineSingle,
			LineDouble
		},
		mounted(){

		},
		created(){
//			this.headerLabel = this.tableHeaderData[0].COL;
			this.getList();
	   		window.onresize = () =>{
//	   			location.reload();
				this.$refs.child1.resize();
				this.$refs.child2.resize();
				this.$refs.child3.resize();
			}
	   	},
	  	data () {
	    	return {
//	    		swiperOption: {
//	    			grabCursor:true,
//	    			simulateTouch:true,
//	    			preventClicks:false,
//	    			preventClicksPropagation:false,
//	    			touchMoveStopPropagation:false,
//		          	slidesPerView: 3,
//		          	spaceBetween:30
////		          	allowTouchMove:false,
//		       	},
	    		name:'概览',
	    		currentPage: 1,
	    		pageSize:10,
	    		auditMonth:'',
	    		tableHeaderData:[],
	    		tableData: [
	    			{FEE_DAY:'1'}
	    		],
	    		headerLabel:'',
	    		chartConfig:{
	    			height:'270px'
	    		},
	    		chartName:[
	    			"用户数量走势图","用户数分类","平均日/月账走势"
	    		],
	    		chartData:[]
	    	}
	  	},
	  	methods: {
	  		//返回对应数组名字的单个数组
	  		getListArr(arr,listName){
	  			let commonArr = [];
				for (let item of arr) {
					if (listName==='MAXNUM') {
						commonArr.push(item.MAXNUM);
					}
					else if(listName==='TOTALNUM'){
						commonArr.push(item.TOTALNUM);
					}
					else if(listName==='MINNUM'){
						commonArr.push(item.MINNUM);
					}
					else if(listName==='TOTALNUM'){
						commonArr.push(item.TOTALNUM);
					}
					else if(listName==='NEWAVGDAYFEE'){
						commonArr.push(item.NEWAVGDAYFEE);
					}
					else if(listName==='NEWAVGMONFEE'){
						commonArr.push(item.NEWAVGMONFEE);
					}
					else{
						commonArr.push(item.FEE_DAY+'号');
					}
				}
				return commonArr;
	  		},
			getList(){
				let self = this;
				//根据点击列的名字查找索引 转义成 A:B:C:....
				let columnIndex;
				for (let i = 0; i < this.tableHeaderData.length; i++) {
					if (this.tableHeaderData[i].COL === this.headerLabel) {
						columnIndex = i;
						break;
					}
				}
				let assortType = String.fromCharCode(65+columnIndex)+': '+this.headerLabel;

				getDayBillAnalysisList(
					{
						billCycle:self.auditMonth,
						assortType:this.headerLabel?assortType:""
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					//初始化数据
					self.headerLabel = res.data.response.assortType.split(': ')[1];
					self.tableHeaderData = res.data.response.colList;
					self.tableData = res.data.response.monthList;
					self.auditMonth = res.data.response.billCycle;
					self.chartData = [
						{
				        	xAxisData:self.getListArr(res.data.response.maxList,'FEE_DAY'),
				        	seriesData:[
				        		{
				        			name:'最高',
				        			data:self.getListArr(res.data.response.maxList,'MAXNUM')
				        		},
				        		{
				        			name:'当前',
				        			data:self.getListArr(res.data.response.dayChargingList,'TOTALNUM')
				        		},
				        		{
				        			name:'最低',
				        			data:self.getListArr(res.data.response.minList,'MINNUM')
				        		}
				        	]
			    		},
			    		{
				        	xAxisData:self.getListArr(res.data.response.newUserList,'FEE_DAY'),
				        	seriesData:[
				        		{
				        			name:'第一次扣费',
				        			data:self.getListArr(res.data.response.newUserList,'TOTALNUM')
				        		},
				        		{
				        			name:'非第一次扣费',
				        			data:self.getListArr(res.data.response.oldUserList,'TOTALNUM')
				        		}
				        	]
			    		},
			    		{
				        	xAxisData:self.getListArr(res.data.response.avgDayList,'FEE_DAY'),
				        	seriesData:[
				        		{
				        			name:'日扣费均值',
				        			data:self.getListArr(res.data.response.avgDayList,'NEWAVGDAYFEE')
				        		}
				        		//,
				        		// {
				        		// 	name:'月均费用',
				        		// 	data:self.getListArr(res.data.response.avgMonthList,'NEWAVGMONFEE')
				        		// }
				        	]
			    		}
					]

				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');

				})
			},
			headerCellStyle({column}){
			    if(column.label === this.headerLabel){ //指定坐标
			        return {backgroundColor:"#09f",color:"#fff",cursor:"pointer"}
			    }else{
			    	if (column.label==='日期'||column.label==='分类汇总') {
			    		return {backgroundColor:"#f5f7fa"}
			    	} else{
			    		return {backgroundColor:"#f5f7fa",cursor:"pointer"}
			    	}
			    }
			},
//			cellStyle({column}){
//				if(column.label === this.headerLabel){
//			        return {color:"#09f"}
//			    }
//			},
			headerClick(column){
				if (column.label==='日期'||column.label==='分类汇总'||column.label==='汇总') return
				this.headerLabel = column.label;
				this.getList();
			},
			handleClick(row){
				let columnIndex;
				for (let i = 0; i < this.tableHeaderData.length; i++) {
					if (this.tableHeaderData[i].COL === this.headerLabel) {
						columnIndex = i;
						break;
					}
				}
				
				//let billCycle = row.FEE_DAY<10?(this.auditMonth.toString()+'0'+row.FEE_DAY):(this.auditMonth.toString()+row.FEE_DAY);
				let billCycle = row.FEE_DAY<10?(row.BILL_CYCLE+'0'+row.FEE_DAY):(row.BILL_CYCLE+row.FEE_DAY);
				let assortType = String.fromCharCode(65+columnIndex)+': '+this.headerLabel;
				let pageInfo = {
					'billCycle':billCycle,
					'assortType':this.headerLabel?assortType:""
				};
				this.$store.dispatch('setParamasInfo',pageInfo);
				this.$router.push({name:'DayBillAnalysisDetails'});
			},
			backRouter(){
				this.$router.back(-1);
			}
	    }
	}
</script>

<style scoped>
	.swiper-slide{/*width: fit-content;*/width: auto;}
	.EchartsMenu{margin: 0 80px 30px;}
	/*.EchartsItem2{padding: 0 30px 30px;background-color: #fff;box-shadow: 0 1px 4px 1px #e0e0e0;width: auto;z-index: 9999;}*/

	.EchartsItem{margin-right: 30px;padding: 0 30px 30px;background-color: #fff;box-shadow: 0 1px 4px 1px #e0e0e0;float: left;width: calc(33.33% - 80px);}
	.EchartsItem:nth-child(2){margin-right: 0;width: calc(33.34% - 80px);}
	.EchartsItem:nth-child(3){margin-right: 0;margin-left: 30px;}
</style>
