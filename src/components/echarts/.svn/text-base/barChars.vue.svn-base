<template>
	<!--<div ref="columnarLineChart"  style="width: 100%;height: 400px;"></div>-->
	<div class="chartDiv" :style="contentConfig">
		<div class="content-top" >
				<i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
		</div>
		<div ref="barChars" :style="chartConfig"></div>
	</div>
</template>

<script>
	export default{
		name:'barChars',
		data(){
			return{
				info:'横排柱状图',
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
				console.log(arr);
				this.nameArr = [];
				this.dataArr = [];
				for (let item of arr) {
					/*console.log(item);*/
					this.nameArr.push(item.name);
					let itmeObj = {
				            name: this.chartData.xAxisData[0],
				            type: 'bar',
				            data: item.data
					}
					this.dataArr.push(itmeObj);
				}
			},
			huanhang(params){
				let newParamsName = "";// 最终拼接成的字符串
                let paramsNameNumber = params.length;// 实际标签的个数
                let provideNumber = 12;// 每行能显示的字的个数
                let rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                /**
                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                 */
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                    /** 循环每一行,p表示行 */
                    for (let p = 0; p < rowNumber; p++) {
                        let tempStr = "";// 表示每一次截取的字符串
                        let start = p * provideNumber;// 开始截取的位置
                        let end = start + provideNumber;// 结束截取的位置
                        // 此处特殊处理最后一行的索引值
                        if (p == rowNumber - 1) {
                            // 最后一次不换行
                            tempStr = params.substring(start, paramsNameNumber);
                        } else {
                            // 每一次拼接字符串并换行
                            tempStr = params.substring(start, end) + "\n";
                        }
                        newParamsName += tempStr;// 最终拼成的字符串
                    }


                } else {
                    // 将旧标签的值赋给新标签
                    newParamsName = params;
                }
                //将最终的字符串返回
                return newParamsName;
			},
		    drawBar(){
		         // 基于准备好的dom，初始化echarts实例
		        this.echartDiv = this.$echarts.init(this.$refs.barChars);
		        let option = {
				    tooltip: {
				        trigger: 'axis',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    legend: {
				        data: this.chartData.xAxisData
				    },
				    grid: {
				        left: '3%',
				        right: '4%',
				        bottom: '3%',
				        containLabel: true
				    },
				    xAxis: {
				        type: 'value',
				        boundaryGap: [0, 0.01]
				    },
				    yAxis: {
				        type: 'category',
				        data: this.nameArr[0],
				        axisLabel:{
							interval:0,
							rotate:0,
							margin:2,
							textStyle:{
								color:"#222"
							},
							formatter:this.huanhang
                   		}
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