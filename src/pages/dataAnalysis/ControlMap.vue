<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>管控地图</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>管控地图总览
				</div>
				<span class="btn-del" title="查询" @click="getList()"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="treekpi" clearable  placeholder="管控指标">
				   	<el-option 
				   		v-for="item in optionsKpi" 
				   		:key="item.KPI_ID" 
				   		:label="item.KPI_NAME"
			      		:value="item.KPI_ID">
			    	</el-option>
				</el-select>
				<el-select v-model="treearea" clearable  placeholder="业务">
				   	<el-option 
				   		v-for="item in optionsTreearea" 
				   		:key="item.AREA_ID" 
				   		:label="item.AREA_NAME"
			      		:value="item.AREA_ID">
			    	</el-option>
				</el-select>
				<el-select v-model="treedate" clearable  placeholder="时间">
				   	<el-option 
				   		v-for="item in optionsTreedate" 
				   		:key="item.AUDIT_DATE" 
				   		:label="item.AUDIT_DATE"
			      		:value="item.AUDIT_DATE">
			    	</el-option>
				</el-select>
				<!--<div id="sample2" style="scrolling:auto;position:relative;top:70%;bottom:0;">-->
				<div class="sample-box" style="height:500px;">
					<div id="sample2" style="scrolling:auto;position:relative;top:20%;bottom:0;">
					</div>
				</div>
			</div>
			
		</div>
		
	</div>
	
</template>

<script>
	import { mapGetters } from 'vuex'
	import { defaultcss } from '../../assets/controlMap/default.css'
	import { main } from '../../assets/controlMap/main.css'
	import { jQuery } from '../../assets/controlMap/jquery-1.8.0.min.js'
	import { ECOTreeCss } from '../../assets/controlMap/ECOTree/ECOTree.css'
	import { ECOTreeJs } from '../../assets/controlMap/ECOTree/ECOTree.js'
	import { mapTree as mapTree } from '@/api/Api'
	
	export default{
		name: 'ControlMap',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		taskUrl:'',
	    		t:'',
	    		treedata:'',
	    		treearea:'',
	    		treekpi:'',
	    		treekpiStr:'',
	    		treedateStr:[],
	    		treedate:'',
	    		optionsTreedate:[
	    			{
	    				AUDIT_DATE:''
	    			}
	    		],
	    		optionsTreearea:[
	    			{
	    				AREA_ID:'',
	    				AREA_NAME:''
	    			}
	    		],
	    		optionsKpi:[
	    			{
	    				KPI_ID:'',
	    				KPI_NAME:''
	    			}
	    		]
	    	}
	  	},
	  	created(){
	  		this.getList();
	   	},
		methods: {
	        getList(){
	        	let self = this;
	        	mapTree(
					{
						treedata:self.treedata,
						treearea:self.treearea,
						treekpi:self.treekpi
					}
				).then(res=>{
					/*console.log('请求成功！'+JSON.stringify(res.data.response));*/
					/*console.log(res.data.response.treedata);*/
					self.optionsTreedate = res.data.response.dateList;
					self.optionsTreearea = res.data.response.arealist;
					self.optionsKpi = res.data.response.kpilist;
					self.treedateStr = res.data.response.treedata;
					self.treedateStr = res.data.response.treelist;
					self.treekpiStr = res.data.response.treekpi;
					/*console.log(self.treedateStr);*/
					self.CreateTree();
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	        },
	        CreateTree:function(){
	        	let data = this.treedateStr;	
				this.t = new ECOTree('t','sample2');	
				this.t.config.iRootOrientation = ECOTree.RO_LEFT;
				this.t.config.defaultNodeWidth = 200;//200
				this.t.config.defaultNodeHeight = 140;//140
				this.t.config.iSubtreeSeparation = 1;
				this.t.config.iSiblingSeparation = 1;										
				this.t.config.linkType = 'M';//M/B
				this.t.config.useTarget = false;
				this.t.config.nodeFill = 1;  //0\1
				this.t.config.colorStyle = ECOTree.CS_LEVEL;//CS_NODE,CS_LEVEL
				this.t.config.levelColors = ["#fff","#fff","#fff","#fff"];
				this.t.config.levelBorderColors = ["#fff","#fff","#fff","#fff"];
				this.t.config.nodeColor = "#91ceed";
				this.t.config.nodeBorderColor = "#91ceed";
				this.t.config.linkColor = "#0099FF";
				for(let i=0;i<data.length;i++){
					let id = data[i].KPI_ID;
					let pid = data[i].P_KPI_ID;
					let level = data[i].KPI_RELA_LEVEL;
					let s_id = this.treekpiStr;
					if(id == s_id){
						pid = '-1';
					}
					let flag = data[i].LAST_ALERT_FLAG;//环比预警，1：预警，0：无预警
					if(flag == '1'){
						flag = 1;
					}else if(flag =='0'){
						flag = 2;
					}
					let rel_flag = data[i].KPI_RELA_TYPE;
					//＋－×÷
					if(rel_flag == '1'){
						rel_flag = "＋";
					}else if(rel_flag == '2'){
						rel_flag = "－";
					}else if(rel_flag == '3'){
						rel_flag = "×";
					}else if(rel_flag == '4'){
						rel_flag = "÷";
					}else{
						rel_flag = "";
					}
					//t.add(id,pid,text,width,height,bcolor);
					//参数说明：id:节点ID,pid:节点父ID,text:节点内容,width:节点宽度 如为空则为默认值,height:节点高度 如为空则为默认值,bcolor:节点边框颜色 此处没用边框，可随意写
					/*console.log(i);*/
					if(i==0){//根节点的内容
						//let text = '<div class="mapx" onclick="perspective('+data[i].KPI_ID+');"><h4 class="map-tit">'+rel_flag+''+data[i].KPI_NAME+'</h4><ul class="map-list"><li><strong>完成值</strong><a href="#this">'+data[i].CUR_VALUE+''+data[i].KPI_UNIT+'</a></li><li><strong>环比</strong><a href="#this">'+data[i].LAST_RATIO+'%</a></li><li><strong>环比预警</strong><span class="bar0'+flag+'"></span></li></ul></div>';
						let text;
						if(level=='6'){
							text = '<div class="mapx" onclick="perspective('+data[i].KPI_ID+');"><h4 class="map-tit">'+rel_flag+''+data[i].KPI_NAME+'</h4><ul class="map-list"><li><strong>差异数</strong><a href="#this">'+data[i].CUR_VALUE+''+data[i].KPI_UNIT+'</a></li><li><strong><a href="#" onclick="toExcel(this,'+data[i].KPI_ID+','+data[i].GATHER_DAY+','+data[i].AREA_ID+')">导出</a></strong></li><li><strong></strong></li></ul></div>';
						}else{
							let text = '<div class="mapx" onclick="perspective('+data[i].KPI_ID+');"><h4 class="map-tit">'+rel_flag+''+data[i].KPI_NAME+'</h4><ul class="map-list"><li><strong>差异数</strong><a href="#this">'+data[i].CUR_VALUE+''+data[i].KPI_UNIT+'</a></li><li><strong></strong></li><li><strong></strong></li></ul></div>';
						}
						this.t.add(id,pid,text,null,null,"#0099FF");
						
					}else{//其它节点的内容
						//let text = '<div class="mapx" onclick="perspective('+data[i].KPI_ID+');"><h4 class="map-tit">'+rel_flag+''+data[i].KPI_NAME+'</h4><ul class="map-list"><li><strong>完成值</strong><a href="#this">'+data[i].CUR_VALUE+''+data[i].KPI_UNIT+'</a></li><li><strong>环比</strong><a href="#this">'+data[i].LAST_RATIO+'%</a></li><li><strong>环比预警</strong><span class="bar0'+flag+'"></span></li><li><strong>贡献度</strong><a href="#this">'+data[i].CONTRI_RATIO+'%</a></li></ul></div>';
						let text;
						if(level=='6'){
							text = '<div class="mapx" onclick="perspective('+data[i].KPI_ID+');"><h4 class="map-tit">'+rel_flag+''+data[i].KPI_NAME+'</h4><ul class="map-list"><li><strong>差异数</strong><a href="#this">'+data[i].CUR_VALUE+''+data[i].KPI_UNIT+'</a></li><li><strong>差异率</strong><a href="#this">'+data[i].CONTRI_RATIO+'%</a></li><li><strong><a href="#" onclick="toExcel(this,'+data[i].KPI_ID+','+data[i].GATHER_DAY+','+data[i].AREA_ID+')">导出</a></strong></li><li><strong></strong></li></ul></div>';
						}else{
							text = '<div class="mapx" onclick="perspective('+data[i].KPI_ID+');"><h4 class="map-tit">'+rel_flag+''+data[i].KPI_NAME+'</h4><ul class="map-list"><li><strong>差异数</strong><a href="#this">'+data[i].CUR_VALUE+''+data[i].KPI_UNIT+'</a></li><li><strong>差异率</strong><a href="#this">'+data[i].CONTRI_RATIO+'%</a></li><li><strong></strong></li><li><strong></strong></li></ul></div>';
						}
						this.t.add(id,pid,text,null,null,"#0099FF");
						
					}
					let treelevel = data[i].KPI_RELA_LEVEL;//树的层级
					
					if(treelevel>=1){//如果层级为大于等于1，则收起
						//this.t.collapseNode(data[i].KPI_ID,false);
					}
				}
				this.t.UpdateTree();
	        }
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
	 v\:*{behavior:url(#default#VML);}  
              
         /* v\:RoundRect{  
          text-align:center;  
          position:relative;  
          }  
              
          v\:TextBox{  
          vertical-align:middle;  
          font-size:13px;  
          }  */
</style>