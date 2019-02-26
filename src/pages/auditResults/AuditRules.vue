<!--稽核规则-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item>稽核规则</el-breadcrumb-item>
			  	<el-breadcrumb-item>{{currentTab}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="tableMenu">
			<div class="content-top">
				<span class="btn-del" title="查询"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="value" placeholder="业务">
				    <el-option
				      	v-for="item in options"
				      	:key="item.value"
				      	:label="item.label"
				      	:value="item.value">
				    </el-option>
			  	</el-select>
			   	<div class="clear"></div>				
			</div>
			<el-tabs style="height: 500px;" @tab-click="handleClick">
			    <el-tab-pane label="CRM-EDSMP">
			    	<div>
			    		<table width="100%">
					       	<tr>
					           	<td>
					        		CRM侧:     
					         	</td>
					      	</tr>
					      	<tr>
					           <td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									1、OFFER_ID: 112000800001 112000900001 112001100001 112001900001 112002000001 112008800001 112008900001 112009200001 112011700001 112012500001 112012500001 112031400001 112032700001 112032900001  
								</td>
						    </tr>
						    <tr>
						        <td>
						           	&nbsp;&nbsp;&nbsp;&nbsp;
						       		2、生效时间和失效时间过滤 
						        </td>
						    </tr>
						    <tr>
						        <td>
						       		EDSMP侧：
						        </td>
						    </tr>
						    <tr>
						        <td>
						           	&nbsp;&nbsp;&nbsp;&nbsp;
						       		1、OFFER_ID: 112000800001 112000900001 112001100001 112001900001 112002000001 112008800001 112008900001 112009200001 112011700001 112012500001 112012500001 112031400001 112032700001 112032900001 
						        </td>
						    </tr>
					        <tr>
					           	<td>
					           		&nbsp;&nbsp;&nbsp;&nbsp;
					      			2、生效时间和失效时间过滤
					        	</td>
					    	</tr>
					    	<tr>
					           	<td>
					           		&nbsp;&nbsp;&nbsp;&nbsp;
					      			3、subscode和entcode不为null 
					        	</td>
					    	</tr>
					    	<tr>
					           	<td>
					           		&nbsp;&nbsp;&nbsp;&nbsp;
					      			4、剔除未竣工数据 
					        	</td>
					    	</tr>
					    	<tr>
					           	<td>
					           		&nbsp;&nbsp;&nbsp;&nbsp;
					      			5、剔除原标准版数据 
					        	</td>
					    	</tr>
					   	</table>  
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="CRM-HLR">
			    	<div>
			    		<table width="100%">
					       	<tr>
					           	<td>
					        		CRM侧：        
					         	</td>
					      	</tr>
					      	<tr>
					           <td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									1、具有服务ID为141000010755(4G移动数据流量产品4G功能)的用户，排除服务ID为141000011469(4G移动数据流量暂停)或服务ID为141000011470(4G移动数据流量产品4G功能)的用户 
					         	</td>
						    </tr>
						    <tr>
						        <td>
						           	&nbsp;&nbsp;&nbsp;&nbsp;
						       		2、用户状态state not in('5','6','7')
						        </td>
						    </tr>
						    <tr>
						        <td>
						       		HLR： 
						        </td>
						    </tr>
						    <tr>
						        <td>
						           	&nbsp;&nbsp;&nbsp;&nbsp;
						       		 华为 ：EPSSER有值 并且 LOCK不存在EPSLOCK 
						        </td>
						    </tr>
					        <tr>
					           	<td>
					           		&nbsp;&nbsp;&nbsp;&nbsp;
					      			诺西 ：EPS_APN有值 并且 的EPSLOCK为FALSE
					        	</td>
					    	</tr>
					   	</table>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="家庭宽带">
			    	<div>
			    		<table width="100%">
					       	<tr>
					           	<td>
					        		CRM侧：        
					         	</td>
					      	</tr>
					      	<tr>
					           <td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									1、策划表（INS_OFFER）范围： offer_type = 'OFFER_PLAN_BROADBAND';  
					         	</td>
						    </tr>
						    <tr>
						        <td>
						           	&nbsp;&nbsp;&nbsp;&nbsp;
						       		2、用户表（INS_USER）范围： prod_catalog_id='171000000004'，用户状态不提取2、3的数据;
						        </td>
						    </tr>
						    <tr>
						        <td>
						           	&nbsp;&nbsp;&nbsp;&nbsp;
						       		3、bill_id末尾如有“_NET”则去掉; 
						        </td>
						    </tr>
					        <tr>
					           	<td>
					           		&nbsp;&nbsp;&nbsp;&nbsp;
					      			4、停开机状态映射关系：正常为Os_status是0 ，暂停为Os_status非全0。
					        	</td>
					    	</tr>
					   	</table>
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="CRM-MCAS">
			    	<div>
			    		<table width="100%">
					       	<tr>
					           	<td>
					        		CRM侧：        
					         	</td>
					      	</tr>
					      	<tr>
					           <td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									提取策划表和产品表、用户表有效时间范围业务数据，业务集为A_SYS_OFFER_RELA_PLATE表里SYSTEM_ID为MCAS，DELETE_FLAG=1的数据；用户状态state not in (2,3)不重复数据。  
					         	</td>
						    </tr>
						    <tr>
					           	<td>
					        		MCAS平台侧：         
					         	</td>
					      	</tr>
					      	<tr>
					           	<td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									提取订购状态不为02和08的有效时间内的数据。
					         	</td>
						    </tr>
						    <tr>
					           	<td>
					        		比对主键：        
					         	</td>
					      	</tr>
					      	<tr>
					           	<td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									手机号　业务代码　企业代码 
					         	</td>
						    </tr>
						    <tr>
					           	<td>
					        		比对属性：
					         	</td>
					      	</tr>
					      	<tr>
					           	<td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									订购状态   
					         	</td>
						    </tr>
						</table>        
			    	</div>
			    </el-tab-pane>
			    <el-tab-pane label="CRM-MISC">
			    	<div>
			    		<table width="100%">
					       	<tr>
					           	<td>
					        		CRM侧：        
					         	</td>
					      	</tr>
					      	<tr>
					           	<td>
									&nbsp;&nbsp;&nbsp;&nbsp;
						        	提取策划表和产品表、用户表有效时间范围业务数据，业务集为A_SYS_OFFER_RELA_PLATE表里SYSTEM_ID为MISC，DELETE_FLAG=1的数据；用户状态state not in (2,3)不重复数据。  					         	
					           	</td>
						    </tr>
						    <tr>
					           	<td>
					        		MISC平台侧：           
					         	</td>
					      	</tr>
					      	<tr>
					           	<td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									提取订购状态不为02的有效时间内的数据。
					         	</td>
						    </tr>
						    <tr>
					           	<td>
					        		比对主键：
					         	</td>
					      	</tr>
					      	<tr>
					           	<td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									手机号　业务代码　企业代码 
					         	</td>
						    </tr>
						    <tr>
					           	<td>
					        		比对属性：
					         	</td>
					      	</tr>
					      	<tr>
					           	<td>
									&nbsp;&nbsp;&nbsp;&nbsp;
									订购状态   
					         	</td>
						    </tr>
						</table>
			    	</div>
			    </el-tab-pane>
			</el-tabs>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'AuditRules',
		components: {
//			Building
		},
		methods: {
	      handleClick(tab) {
	        this.currentTab = tab.label;
	      }
	    },
	  	data () {
	    	return {
	    		currentTab:'CRM-EDSMP',
	    		options: [
		    		{
			          	value: '选项1',
			          	label: '集团短彩信'
			        }, 
			        {
			          	value: '选项2',
			          	label: '双皮奶'
			        }, 
			        {
			          	value: '选项3',
			          	label: '蚵仔煎'
			        }, 
			        {
			          	value: '选项4',
			          	label: '龙须面'
			        }, 
			        {
			          	value: '选项5',
			          	label: '北京烤鸭'
			        }
		        ],
		        value: '集团短彩信'
	    	}
	  	}
	}
</script>

<style scoped>
	.tableMenu{position: relative;}
	.content-top{position: absolute;top: 0;right: 30px;z-index: 999;}
</style>