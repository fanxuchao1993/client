<template>
	<!--<div ref="columnarLineChart"  style="width: 100%;height: 400px;"></div>-->
	<div class="chartDiv" :style="contentConfig">
		<div class="content-top" >
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
		</div>
		<div ref="columnarLineChart" :style="chartConfig"></div>
	</div>
</template>

<script>
	export default{
		name:'columnarLine',
		data(){
			return{
				info:'折柱混合',
				echartDiv:null,
				nameArr:[],
				dataArr:[],
				headerLabel:''
			}
		},
		props:{
			chartConfig:{
				type: Object,
			    default: function () {
			        return { width: '100%',height: '400px'}
			    }
			},
			contentConfig:{
				type: Object,
			    default: function () {
			        return { width: '30%',float: 'left',height: '400px'}
			    }
			},
			name:{
				type: String,
				default: '名称'
			},
			chartName:{
				type: String,
				default: '折线图'
			},
			chartData:{
				type: Object,
			    default: function () {
			        return {
			        	xAxisData:[],
			        	seriesData:[]
			        }
			    }
			}
		},
		mounted(){
			this.getOpitonLegend(this.chartData.seriesData);
		    this.drawBar();
		},
		watch:{
			'chartData.seriesData'(){
				this.echartDiv.clear();
				this.getOpitonLegend(this.chartData.seriesData);
	    		this.drawBar();
			}
		},
		methods: {
			getOpitonLegend(arr){
				this.nameArr = [];
				this.dataArr = [];
				let i=0;
				for (let item of arr) {
					this.nameArr.push(item.name);
					if(i=== 0){
						let itmeObj = {
				            name:this.nameArr[i],
				            type:'bar',
				            color:'#3B3BD3',
				            data:item.data
						}
						this.dataArr.push(itmeObj);
					}else if(i === 1){
						let itmeObj = {
							name:this.nameArr[i],
				            type:'bar',
				            color:'#DD1616',
				           	data:item.data
				        }
						this.dataArr.push(itmeObj);
					}else{
						let itmeObj = {
				            name:this.nameArr[i],
				            type:'line',
				            color:'#8BBA00',
				            yAxisIndex: 1,
				           	data:item.data
				        }
						this.dataArr.push(itmeObj);
					}
					i++;
				}
			},
		    drawBar(){
		         // 基于准备好的dom，初始化echarts实例
		        this.echartDiv = this.$echarts.init(this.$refs.columnarLineChart);
		        let option = {
				    tooltip : {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        },
				    },
				    grid: {
				    	borderWidth : 0,
					    x2: 45,
					    x: 45,
					    y2: 55,
					    y: 60
				    },
				    legend: {
				        data:this.nameArr
				    },
				    xAxis: [
				        {
				            type: 'category',
				            data: this.chartData.xAxisData,
				            axisPointer: {
				                type: 'shadow'
				            },
				            axisLabel: {
                               interval:0,
                               rotate:40
							}
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value',
				            name: '数量',
				           	'splitNumber':5 ,
				            axisLabel: {
				                formatter: '{value}'
				            }
				        },
				        {
				            type: 'value',
				            name: '比率',
				           'splitNumber':5 ,   
				            axisLabel: {
				                formatter: '{value} %'
				            }
				        }
				    ],
				    series:this.dataArr
				};
                    
		    	// 为echarts对象加载数据 
		   		this.echartDiv.setOption(option);
    		},
		    resize(){
		    	this.echartDiv.resize();
		    }
		}
	}
</script>

<style scoped>

</style>