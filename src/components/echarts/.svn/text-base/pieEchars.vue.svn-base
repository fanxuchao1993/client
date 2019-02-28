<template>
	<!--<div ref="columnarLineChart"  style="width: 100%;height: 400px;"></div>-->
	<div class="chartDiv" :style="contentConfig">
		<div class="content-top" >
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
		</div>
		<div ref="pieEchars" :style="chartConfig"></div>
	</div>
</template>

<script>
	export default{
		name:'pieEchars',
		data(){
			return{
				info:'饼图',
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
			        return { width: '30%','float': 'left',height: '400px'}
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
				for (let item of arr) {
					this.nameArr.push(item.name);
					let itmeObj = {
							name:'信息',
				            type: 'pie',
				            radius : '55%',
				            center: ['50%', '60%'],
				            data:item,
				            itemStyle: {
				                emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				                }
				            }
					}
					this.dataArr.push(itmeObj);
				}
			},
		    drawBar(){
		         // 基于准备好的dom，初始化echarts实例
		        this.echartDiv = this.$echarts.init(this.$refs.pieEchars);
		        let option = {
				    tooltip : {
				        trigger: 'item',
				        formatter: "{a} <br/>{b} : {c} ({d}%)"
				    },
				    legend: {
				        orient: 'vertical',
				        left: 'left',
				        data: this.nameArr[0]
				    },
				     series:this.dataArr
				}
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