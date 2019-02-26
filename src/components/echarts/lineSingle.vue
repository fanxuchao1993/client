<template>
	<div class="chartDiv">
		<div class="content-top" >
			<i class="iconfont icon-biaotishutiao6x25"></i>{{name+chartName}}
		</div>
		<div ref="lineSingleChart" :style="chartConfig"></div>
	</div>	
</template>

<script>
	export default{
		name:'lineSingle',
		data(){
			return{
				echartDiv:null,
				nameArr:[],
				dataArr:[]
			}
		},
		props:{
			chartConfig:{
				type: Object,
			    default: function () {
			        return { width: '100%',height: '400px'}
			    }
			},
			name:{
				type: String,
				default: '某某'
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
		    this.drawLine();
		},
		watch:{
			'chartData.seriesData'(){
				this.echartDiv.clear();
				this.getOpitonLegend(this.chartData.seriesData);
	    		this.drawLine();
			}
		},
		methods: {
			getOpitonLegend(arr){
				this.nameArr = [];
				this.dataArr = [];
				for (let item of arr) {
					this.nameArr.push(item.name);
					let itmeObj = {
			            name:item.name,
			            type:'line',
			            symbol:'none',//emptyCircle
			            smooth:true,
			            itemStyle: {
			                normal: {
			                    lineStyle: {
			                        width: 2,
			                        shadowColor : 'rgba(204,204,204,0.8)',
			                        shadowBlur: 10,
			                        shadowOffsetX: 5,
			                        shadowOffsetY: 5
			                    }
			                },
			                emphasis : {
			                    label : {show: true}
			                }
			            },
			            data:item.data
		           	}
					this.dataArr.push(itmeObj);
				}
			},
		    drawLine(){
		        this.echartDiv = this.$echarts.init(this.$refs.lineSingleChart);
		        // 绘制图表
		        let option = {
		        	color: ['#09f','#8b75d9','#de809a','#b89fe3','#5bb0f0'],
				    tooltip: {trigger: 'axis',axisPointer:{show: true,type: 'cross',lineStyle: {type: 'dashed',width: 2}}},
				    legend: {data:this.nameArr,x: 'right',y: '30px'},
				    calculable : true,
				    grid: {borderWidth: 0,x2: 0,x: 45,y2: 25,y: 80},
				    xAxis: [{type: 'category',boundaryGap : true,data: this.chartData.xAxisData,axisTick: {show:false},axisLine: {show: false,lineStyle: {color: '#aaa'}},splitLine: {show: false},splitArea: {show: false}}],
				    yAxis: [{type: 'value',nameTextStyle: {color:'#09f'},axisTick: {show:false},axisLine: {show:false,lineStyle: {color: '#aaa'}},splitLine: {show: true,lineStyle:{width: 2,color:'#efefef'}},splitArea : {show : false}}],
				    series:this.dataArr
				};
				this.echartDiv.setOption(option);
    		},
		    resize(){
		    	this.echartDiv.resize();
		    }
		}
	}
</script>

<style scoped>
	.chartDiv{position: relative;}
	.content-top{height: 80px;line-height: 80px;font-size: 15px;font-weight: bold;color: #09f;position: absolute;top: 0;left: 0;z-index: 999;}
</style>