<template>
	<div class="chartDiv">
		<div class="content-top" >
			<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
		</div>
		<div ref="lineSingleChart" :style="chartConfig"></div>
	</div>
</template>

<script>
	export default{
		name:'lineDouble',
		data(){
			return{
				info:'双折线图组件',
				echartDiv:null
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
				default:"名称"
			}
		},
		mounted(){
		    this.drawLine();
		},
		methods: {
		    drawLine(){
		        this.echartDiv = this.$echarts.init(this.$refs.lineSingleChart);
//		        this.echartDiv = this.$echarts.init(this.$el.querySelector('.lineSingleChart'), 'macarons');
		        // 绘制图表
		        let option = {
		        	color: ['#09f','#8b75d9','#de809a','#5bb0f0','#b89fe3'],
//		        	title: {
//				        subtext: '单位：人',
//				        subtextStyle:{
//				        	color:'#f00',
//				        	verticalAlign:'middle'
//				        }
//				    },
				    tooltip : {
				        trigger: 'axis',
//				        backgroundColor: 'rgba(255,255,255,0.7)',
//				        textStyle: 	{ color:'#09f' },
				        axisPointer:{
				            show: true,
				            type : 'cross',
				            lineStyle: {
				                type : 'dashed',
				                width : 2
				            }
				        },
				    },
				    legend: {
				        data:['最高最高最高最高','最低','当前'],
				        x: 'right',
				        y: '30px'
				    },
				    calculable : true,
				    grid: {
				    	borderWidth : 0,
					    x2: 0,
					    x: 45,
					    y2: 25,
					    y: 80
				    },
				    xAxis : [
				        {
				            type : 'category',
				            boundaryGap : true,
				            data : ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'],
				            axisTick : {show:false},
            				axisLine : {
            					show:false,
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
				            nameTextStyle : {color:'#09f'},
				            axisTick : {
              					show:false			// 轴标记
            				},
            				axisLine : {    // 轴线
            					show:false,
				                lineStyle: {
				                    color: '#aaa'
				                }
				            },
				            splitLine:{show: true,lineStyle: {            // 系列级个性化折线样式，横向渐变描边
				                        width: 2,
				                        color:'#efefef'
				                    }},//去除网格线
                    		splitArea : {show : false}//保留网格区域
				        }
				    ],
				    series : [
				        {
				            name:'最高最高最高最高',
				            type:'line',
				            symbol:'emptyCircle',
				            smooth:true,
				            itemStyle: {
				                normal: {
				                    lineStyle: {            // 系列级个性化折线样式，横向渐变描边
				                        width: 3,
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
				            data:[Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]
				        },
				        {
				            name:'最低',
				            type:'line',
				            symbol:'emptyCircle',
				            smooth:true,
				            itemStyle: {
				                normal: {
				                    lineStyle: {            // 系列级个性化折线样式，横向渐变描边
				                        width: 3,
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
				            data:[Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]
				        },
				        {
				            name:'当前',
				            type:'line',
				            symbol:'emptyCircle',
				            smooth:true,
				            itemStyle: {
				                normal: {
				                    lineStyle: {            // 系列级个性化折线样式，横向渐变描边
				                        width: 3,
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
				            data:[Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100), Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100),Math.round(Math.random()*100)]
				        }
				    ]
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
