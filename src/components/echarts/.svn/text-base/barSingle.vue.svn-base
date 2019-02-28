<template>
	<div ref="barSingleChart" style="width: 100%;height: 400px;"></div>	
</template>

<script>
	export default{
		name:'barSingle',
		data(){
			return{
				info:'单柱状图',
				echartDiv:null
			}
		},
		mounted(){
		    this.drawBar();
		},
		methods: {
		    drawBar(){
		        // 基于准备好的dom，初始化echarts实例
		        this.echartDiv = this.$echarts.init(this.$refs.barSingleChart);
		        
		        const arrData = [Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100)];
				let compare = function (x, y) {
				    if (x < y) {
				        return 1;
				    } else if (x > y) {
				        return -1;
				    } else {
				        return 0;
				    }
				}; 
		        
		        let option = {
		        	color: ['#8994fe'],
				    tooltip : {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        },
				    },
				    legend: {
				        data:['已完成'],
				        x: 'right',
				        y: '30px'
				    },
				    grid: {
				    	borderWidth : 0,
					    x2: 0,
					    x: 45,
					    y2: 25,
					    y: 80
				    },
				    calculable : false,
				    xAxis : [
				        {
				            type : 'category',
				            data : [
				                "康平县", "法库县", "新民县", "沈北新区", "于洪区",
				                "皇姑区", "大东区", "铁西区", "和平区", "东陵区", 
				                "苏家屯区", "辽中县"
				            ],
				            axisTick : {
              					show:false			// 轴标记
            				},
            				axisLine : {    // 轴线
				                lineStyle: {
				                    color: '#aaa'
				                }
				            },
				            splitLine:{show: false},//去除网格线
                    		splitArea : {show : false}//保留网格区域
				        }
				    ],
				    yAxis : [
				        {
				            type : 'value',
				            axisTick : {    
              					show:false			// 轴标记
            				},
            				axisLine : {    // 轴线
				                lineStyle: {
				                    color: '#aaa'
				                }
				            },
				            splitLine:{show: false},//去除网格线
                    		splitArea : {show : false}//保留网格区域
				        }
				    ],
				    series : [
				        {
				            name:'已完成',
				            type:'bar',
				            data: arrData.sort(compare),	//降序排序
//				            barGap:0,
				            barCategoryGap:'60%',
			             	itemStyle:{
                                normal:{
                                    color:'#8994fe',
                                    barBorderRadius:[5, 5, 5, 5]
                                },
                                emphasis: {
			                        color:'#8994fe',
                                    barBorderRadius:[5, 5, 5, 5]
				                }
                            },
				            markLine : {
				                data : [
				                    {type : 'average', name: '平均值'}
				                ]
				            }
				        }		        
				    ]
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