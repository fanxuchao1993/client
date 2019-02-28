<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>4G在线计费修复</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>4G在线计费修复总览
				</div>
				<div class="">
						<el-select v-model="impBatchId" clearable placeholder="修复源名称">
						   	<el-option 
						   		v-for="item in optionsImpBatch"
						   		:key="item.IMP_BATCH_ID" 
						   		:label="item.IMP_BATCH_NAME"
					      		:value="item.IMP_BATCH_ID">
					    	</el-option>
						</el-select>
						<el-select v-model="repairCheckId" clearable placeholder="验证结果">
						   	<el-option 
						   		v-for="item in optionsRepairCheck"
						   		:key="item.REPAIR_CHECK" 
						   		:label="item.REPAIR_CHECK_NAME"
					      		:value="item.REPAIR_CHECK">
					    	</el-option>
						</el-select>
						<el-select v-model="repairStatus" clearable placeholder="修复状态">
						   	<el-option 
						   		v-for="item in optionsRepairStatus"
						   		:key="item.REPAIR_STATUS" 
						   		:label="item.REPAIR_STATUS_NAME"
					      		:value="item.REPAIR_STATUS">
					    	</el-option>
						</el-select>
						<el-select v-model="brandId" clearable placeholder="用户品牌">
						   	<el-option 
						   		v-for="item in optionsBrand"
						   		:key="item.BRAND_ID" 
						   		:label="item.BRAND_NAME"
					      		:value="item.BRAND_ID">
					    	</el-option>
						</el-select>
						<el-select v-model="resultTypeId" clearable placeholder="结果类型">
						   	<el-option 
						   		v-for="item in optionsResultType" 
						   		:key="item.RESULT_TYPE_ID" 
						   		:label="item.RESULT_TYPE_NAME"
					      		:value="item.RESULT_TYPE_ID">
					    	</el-option>
						</el-select>
						<el-input placeholder="手机号码" v-model="billId" clearable></el-input>
						
					<div class="divStyle2">
						<el-checkbox v-model="switchFlag">说明:默认不勾选.(勾选:显示白名单数据;不勾选:白名单数据剔除;)</el-checkbox>
						<span class="btn-width" title="导出" @click="getList('1')">导出</span>
						<span class="btn-width" title="导入" @click="getList('1')">导入</span>
						<span class="btn-width" title="批量验证" @click="batchCheck()">批量验证</span>
						<span class="btn-width" title="批量修复" @click="batchRepair()">批量修复</span>
					</div>
					<div class="divStyle3">
						<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
						<span class="btn-width" title="HLR侧单边修复流程" @click="dialogHLR()">HLR侧单边修复流程</span>
						<span class="btn-width" title="CRM侧单边修复流程" @click="dialogCRM()">CRM侧单边修复流程</span>
					</div>
			   	</div>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="dataList"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDIT_DATE" label="稽核日期"></el-table-column>
			    <el-table-column prop="IMP_BATCH_NAMES" label="修复源名称"></el-table-column>
			    <el-table-column prop="OPERATOR_NAME" label="业务类型"></el-table-column>
			    <el-table-column prop="BILL_ID" label="手机号码"></el-table-column>
			    <el-table-column prop="RESULT_TYPE_NAME" label="结果类型"></el-table-column>
			    <el-table-column prop="BRAND_NAME" label="用户品牌"></el-table-column>
			    <el-table-column prop="USER_STATE_NAME" label="用户状态"></el-table-column>
			    <el-table-column prop="USER_EFFECTIVE_DATE" label="用户生效日期"></el-table-column>
			    <el-table-column prop="USER_OSSTATE_NAME" label="用户停复状态"></el-table-column>
			    <el-table-column prop="ORDER_NAME" label="主套餐名称"></el-table-column>
			    <el-table-column prop="NODE_ID" label="网元"></el-table-column>
			    <el-table-column prop="TREND" label="增存量"></el-table-column>
			    <el-table-column prop="REPAIR_STATUS_NAME" label="修复状态"></el-table-column>
			    <el-table-column prop="REPAIR_CHECK" label="验证结果"></el-table-column>
			    <el-table-column label="操作" fixed="right">
			    	<template slot-scope="scope">
				        <el-button @click="repair(scope.row)" type="text" size="small">[修复]</el-button>
				        <el-button @click="repairCheck(scope.row)" type="text" size="small">[验证]</el-button>
				    </template>
			    </el-table-column>
		  	</el-table>
		  	<div class="block">
			    <el-pagination
			      @size-change="handleSizeChange"
			      @current-change="handleCurrentChange"
			      :current-page.sync="currentPage"
			      :page-size.sync="pageSize"
			      layout="prev, pager, next, total"
			      :total=totalCount>
			    </el-pagination>
		  	</div>
		  	<el-dialog :visible.sync="dialogTableVisible" width="80%">
			  <label>电话号码：{{diaPhone}}</label>
			  <el-table
			    :data="gridData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    	<el-table-column prop="CRMINTERFACENAME" label="接口名称(CRM侧)"></el-table-column>
			    	<el-table-column prop="CRMINTERFACEFUNC" label="接口功能(CRM侧)"></el-table-column>
			    	<el-table-column prop="CRMBACKVALUE" label="返回值(CRM侧)"></el-table-column>
			    	<el-table-column prop="PLATINTERFACENAME" label="接口名称(HLR侧)"></el-table-column>
			    	<el-table-column prop="PLATINTERFACEFUNC" label="接口功能(HLR侧)"></el-table-column>
			    	<el-table-column prop="PLATBACKVALUE" label="返回值(HLR侧)"></el-table-column>
				</el-table>
			</el-dialog>
			
			<el-dialog :visible.sync="dialogCRMVisible" width="80%">
				<img v-if="operatorCode === '8'" src="../../assets/imgs/flow/Rom_A.jpg" style=""/>
				<img v-if="operatorCode === '37'" src="../../assets/imgs/flow/4G_A.jpg" style=""/>
				<img v-if="operatorCode === '100'" src="../../assets/imgs/flow/23GLine_A.jpg" style=""/>
				<img v-if="operatorCode === '101'" src="../../assets/imgs/flow/4GLine_A.jpg" style=""/>
				<img v-if="operatorCode === '-3'" src="../../assets/imgs/flow/234Gxietong_A.jpg" style=""/>
				<img v-if="operatorCode === '38'" src="../../assets/imgs/flow/4GRom_A.jpg" style=""/>
				<img v-if="operatorCode === '51'" src="../../assets/imgs/flow/Sjspgn_A.jpg" style=""/>
				<img v-if="operatorCode === '14'" src="../../assets/imgs/flow/Sjspgn_A.jpg" style=""/>
			</el-dialog>
			<el-dialog :visible.sync="dialogHLRVisible" width="80%">
				<img v-if="operatorCode === '8'" src="../../assets/imgs/flow/Rom_B.jpg" style=""/>
				<img v-if="operatorCode === '37'" src="../../assets/imgs/flow/4G_B.jpg" style=""/>
				<img v-if="operatorCode === '38'" src="../../assets/imgs/flow/4GRom_B.jpg" style=""/>
				<img v-if="operatorCode === '14'" src="../../assets/imgs/flow/23G_B.jpg" style=""/>
			</el-dialog>
			<el-dialog :visible.sync="batchRepairVisible" width="60%" height="400">
				<div style="height:400px;">
					
					<div style="margin-top:-30px;width:100%;text-align:center;color:red;font-size:14px;">
						<h3 >批量修复设置</h3>	
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100px;">
							<label style="float:left;">修复任务名称:</label>
						</div>
						<el-input placeholder="修复任务名称" style="margin-top:-30px;width:60%;margin-left:5px;float:left;" v-model="batchFileName" clearable></el-input>
						<label style="float:left;color:red;font-size:18px;">*</label>
					</div>
					<div style="float:left;margin-top:20px;width:100%;" class="selectSty">
						<div style="float:left;width:100px;">
							<label style="float:left;">修复源名称:</label>
						</div>
						<div style="float:left;margin-top:-30px;margin-left:-10px;">
							<el-select v-model="impBatchIdDialog" clearable placeholder="修复源名称">
							   	<el-option 
							   		v-for="item in optionsImpBatchDialog" 
							   		:key="item.IMP_BATCH_ID" 
							   		:label="item.IMP_BATCH_NAME"
						      		:value="item.IMP_BATCH_ID">
						    	</el-option>
							</el-select>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:48%">
							<label style="float:left;">业务类型:</label>
							<span style='color:red;'>{{serviceName}}</span>
						</div>
						<div style="float:left;width:48%">
							<label style="float:left;">结果类型:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="resultTypeIdDialog" clearable placeholder="结果类型">
								   	<el-option 
								   		v-for="item in optionsResultTypeIdDialog" 
								   		:key="item.RESULT_TYPE_ID" 
								   		:label="item.RESULT_TYPE_NAME"
							      		:value="item.RESULT_TYPE_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:48%">
							<label style="float:left;">用户品牌:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="brandIdDialog" clearable placeholder="用户品牌">
								   	<el-option 
								   		v-for="item in optionsBrandIdDialog" 
								   		:key="item.BRAND_ID" 
								   		:label="item.BRAND_NAME"
							      		:value="item.BRAND_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
						<div style="float:left;width:48%">
							<label style="float:left;">用户状态:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="statusId" clearable placeholder="用户状态">
								   	<el-option 
								   		v-for="item in optionsStatusId" 
								   		:key="item.STATUS_ID" 
								   		:label="item.STATUS_NAME"
							      		:value="item.STATUS_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:48%">
							<label style="float:left;">用户停复状态:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="userOsId" clearable placeholder="用户停复状态">
								   	<el-option 
								   		v-for="item in optionsUserOsId" 
								   		:key="item.USER_OS_ID" 
								   		:label="item.USER_OS_NAME"
							      		:value="item.USER_OS_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
						<div style="float:left;width:48%">
							<label style="float:left;">网元:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="nodeId" clearable placeholder="网元">
								   	<el-option 
								   		v-for="item in optionsNodeId" 
								   		:key="item.NODE_ID" 
								   		:label="item.NODE_NAME"
							      		:value="item.NODE_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100%">
							<label style="float:left;">修复状态:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="repairStatusDialog" clearable placeholder="修复状态">
								   	<el-option 
								   		v-for="item in optionsRepairStatusDialog" 
								   		:key="item.REPAIR_STATUS" 
								   		:label="item.REPAIR_STATUS_NAME"
							      		:value="item.REPAIR_STATUS">
							    	</el-option>
								</el-select>
							</div>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100%">
							<label style="float:left;">限制修复量:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" >
								<el-input placeholder="限制修复量" style="margin-left:15px;float:left;" v-model="repairTotal" clearable></el-input>
							</div>
							<div style="float:left;margin-left:0px;" >
								(条)
							</div>
							
							<label style="float:left;margin-left:10px;">异常退出阈值:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" >
								<el-input placeholder="异常退出阈值" style="margin-left:15px;float:left;" v-model="timeoutCount" clearable></el-input>
							</div>
							<div style="float:left;margin-left:0px;" >
								(次)<span style="color:red;font-size:16px;">*</span>
							</div>
							
							<label style="float:left;margin-left:10px;">超时丢弃阈值:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" >
								<el-input placeholder="超时丢弃阈值" style="margin-left:15px;float:left;" v-model="timeoutTime" clearable></el-input>
							</div>
							<div style="float:left;margin-left:0px;" >
								(秒)<span style="color:red;font-size:16px;">*</span>
							</div>
						</div>
					</div>
					<div style="float:left;width:100%;" class="content-top">
						<div style="float:left;width:350px;margin-left:25%;margin-top:-20px;">
							<span class="btn-width" title="保存设置" @click="saveRepair()">保存设置</span>
							<span class="btn-width" title="查询修复数" @click="checkRepair()">查询修复数</span>
						</div>
					</div>
					
				</div>
			</el-dialog>
			<el-dialog :visible.sync="batchCheckVisible" width="60%" height="400">
				<div style="height:400px;">
					
					<div style="margin-top:-30px;width:100%;text-align:center;color:red;font-size:14px;">
						<h3 >批量验证设置</h3>	
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100px;">
							<label style="float:left;">验证任务名称:</label>
						</div>
						<el-input placeholder="修复任务名称" style="margin-top:-30px;width:60%;margin-left:5px;float:left;" v-model="batchFileName" clearable></el-input>
						<label style="float:left;color:red;font-size:18px;">*</label>
					</div>
					<div style="float:left;margin-top:20px;width:100%;" class="selectSty">
						<div style="float:left;width:100px;">
							<label style="float:left;">批量修复任务:</label>
						</div>
						<div style="float:left;margin-top:-30px;margin-left:-10px;">
							<el-select v-model="takeId" clearable placeholder="批量修复任务">
							   	<el-option 
							   		v-for="item in optionsTakeId" 
							   		:key="item.TAKE_ID" 
							   		:label="item.TAKE_NAME"
						      		:value="item.TAKE_ID">
						    	</el-option>
							</el-select>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:48%">
							<label style="float:left;">业务类型:</label>
							<span style='color:red;'>{{serviceName}}</span>
						</div>
						<div style="float:left;width:48%">
							<label style="float:left;">结果类型:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="resultTypeIdDialog" clearable placeholder="结果类型">
								   	<el-option 
								   		v-for="item in optionsResultTypeIdDialog" 
								   		:key="item.RESULT_TYPE_ID" 
								   		:label="item.RESULT_TYPE_NAME"
							      		:value="item.RESULT_TYPE_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:48%">
							<label style="float:left;">用户品牌:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="brandIdDialog" clearable placeholder="用户品牌">
								   	<el-option 
								   		v-for="item in optionsBrandIdDialog" 
								   		:key="item.BRAND_ID" 
								   		:label="item.BRAND_NAME"
							      		:value="item.BRAND_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
						<div style="float:left;width:48%">
							<label style="float:left;">用户状态:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="statusId" clearable placeholder="用户状态">
								   	<el-option 
								   		v-for="item in optionsStatusId" 
								   		:key="item.STATUS_ID" 
								   		:label="item.STATUS_NAME"
							      		:value="item.STATUS_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:48%">
							<label style="float:left;">用户停复状态:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="userOsId" clearable placeholder="用户停复状态">
								   	<el-option 
								   		v-for="item in optionsUserOsId" 
								   		:key="item.USER_OS_ID" 
								   		:label="item.USER_OS_NAME"
							      		:value="item.USER_OS_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
						<div style="float:left;width:48%">
							<label style="float:left;">网元:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="nodeId" clearable placeholder="网元">
								   	<el-option 
								   		v-for="item in optionsNodeId" 
								   		:key="item.NODE_ID" 
								   		:label="item.NODE_NAME"
							      		:value="item.NODE_ID">
							    	</el-option>
								</el-select>
							</div>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100%">
							<label style="float:left;">修复状态:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" class="selectSty1">
								<el-select v-model="repairStatusDialog" clearable placeholder="修复状态">
								   	<el-option 
								   		v-for="item in optionsRepairStatusDialog" 
								   		:key="item.REPAIR_STATUS" 
								   		:label="item.REPAIR_STATUS_NAME"
							      		:value="item.REPAIR_STATUS">
							    	</el-option>
								</el-select>
							</div>
						</div>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100%">
							<label style="float:left;">验证量:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" >
								<el-input placeholder="验证量" style="margin-left:15px;float:left;" v-model="repairTotal" clearable></el-input>
							</div>
							<div style="float:left;margin-left:0px;" >
								(条)
							</div>
							
							<label style="float:left;margin-left:10px;">异常退出阈值:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" >
								<el-input placeholder="异常退出阈值" style="margin-left:15px;float:left;" v-model="timeoutCount" clearable></el-input>
							</div>
							<div style="float:left;margin-left:0px;" >
								(次)<span style="color:red;font-size:16px;">*</span>
							</div>
							
							<label style="float:left;margin-left:10px;">超时丢弃阈值:</label>
							<div style="float:left;margin-top:-30px;margin-left:-10px;" >
								<el-input placeholder="超时丢弃阈值" style="margin-left:15px;float:left;" v-model="timeoutTime" clearable></el-input>
							</div>
							<div style="float:left;margin-left:0px;" >
								(秒)<span style="color:red;font-size:16px;">*</span>
							</div>
						</div>
					</div>
					<div style="float:left;width:100%;" class="content-top">
						<div style="float:left;width:350px;margin-left:25%;margin-top:-20px;">
							<span class="btn-width" title="保存设置" @click="saveCheck()">保存设置</span>
							<span class="btn-width" title="查询验证数" @click="checkNumber()">查询验证数</span>
						</div>
					</div>
					
				</div>
			</el-dialog>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getResult as getResult } from '@/api/Api'
	import { getResultRepair as getResultRepair } from '@/api/Api'
	import { repairCheck as repairCheck } from '@/api/Api'
	import { repair as repair} from '@/api/Api'
	import { passelRepairSet as passelRepairSet} from '@/api/Api'
	import { checkRepair as checkRepair} from '@/api/Api'
	import { saveRepair as saveRepair} from '@/api/Api'
	import { passelCheckSet as passelCheckSet} from '@/api/Api'
	import { checkNumber as checkNumber} from '@/api/Api'
	import { saveCheck as saveCheck} from '@/api/Api'
	
	
	export default{
		name: 'FourGOnlineBillingRepair',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		billId:'',
	    		repairStatus:'',
	    		repairStatusDialog:'',
	    		resultTypeId:'',
	    		resultTypeIdDialog:'',
	    		brandId:'',
	    		brandIdDialog:'',
	    		operatorCode:'101',
	    		impBatchId:'',
	    		repairCheckId:'',
	    		switchFlag:false,
	    		flagCust:'',
	    		dataList:[],
	    		gridData: [],
	    		dialogTableVisible:false,
	    		dialogCRMVisible:false,
	    		dialogHLRVisible:false,
	    		batchRepairVisible:false,
	    		batchCheckVisible:false,
	    		batchFileName:'',
	    		impBatchIdDialog:'',
	    		serviceName:'',
	    		statusId:'',
	    		userOsId:'',
	    		nodeId:'',
	    		repairTotal:'',
	    		timeoutCount:'',
	    		timeoutTime:'',
	    		diaPhone:'',
	    		takeId:'',
	    		optionsResultType: [
		    		{
			          	RESULT_TYPE_ID: '',
			          	RESULT_TYPE_NAME: ''
			        }
		        ],
	    		optionsBrand: [
		    		{
			          	BRAND_ID: '',
			          	BRAND_NAME: ''
			        }
		        ],
		        optionsRepairStatus: [
		    		{
			          	REPAIR_STATUS: '',
			          	REPAIR_STATUS_NAME: ''
			        }
		        ],
		        optionsRepairCheck: [
			       {
			          	REPAIR_CHECK: '0',
			          	REPAIR_CHECK_NAME: '未校验'
			       },
			       {
			          	REPAIR_CHECK: '-1',
			          	REPAIR_CHECK_NAME: '处理中'
			       },
			       {
			          	REPAIR_CHECK: '1',
			          	REPAIR_CHECK_NAME: '一致'
			       },
			       {
			          	REPAIR_CHECK: '2',
			          	REPAIR_CHECK_NAME: '不一致'
			       },
			       {
			          	REPAIR_CHECK: '3',
			          	REPAIR_CHECK_NAME: '校验失败'
			        }
		        ],
		        optionsImpBatch: [
		    		{
			          	IMP_BATCH_ID: '',
			          	IMP_BATCH_NAME: ''
			        }
		        ],
		        optionsImpBatchDialog: [
		    		{
			          	IMP_BATCH_ID: '',
			          	IMP_BATCH_NAME: ''
			        }
		        ],
		        optionsResultTypeIdDialog: [
		    		{
			          	RESULT_TYPE_ID: '',
			          	RESULT_TYPE_NAME: ''
			        }
		        ],
		        optionsBrandIdDialog: [
		    		{
			          	BRAND_ID: '',
			          	BRAND_NAME: ''
			        }
		        ],
		        optionsStatusId: [
		    		{
			          	STATUS_ID: '',
			          	STATUS_NAME: ''
			        }
		        ],
		        optionsUserOsId: [
		    		{
			          	USER_OS_ID: '',
			          	USER_OS_NAME: ''
			        }
		        ],
		        optionsNodeId: [
		    		{
			          	NODE_ID: '',
			          	NODE_NAME: ''
			        }
		        ],
		        optionsRepairStatusDialog: [
		    		{
			          	REPAIR_STATUS: '',
			          	REPAIR_STATUS_NAME: ''
			        }
		        ],
		        optionsTakeId: [
		    		{
			          	TAKE_ID: '',
			          	TAKE_NAME: ''
			        }
		        ]
		        
	    	}
	  	},

	  	created(){
	   		this.getList('0');
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				let switched = "";
			 	if(this.switchFlag){
			 		switched = "false";
			 	}else{
			 		switched="true";
			 	}
				getResult(
					{
						start:self.currentPage-1,
			    	    limit:self.pageSize,
						billId:self.billId,
						repairStatus:self.repairStatus,
			    		resultTypeId:self.resultTypeId,
			    		brandId:self.brandId,
			    		operatorCode:self.operatorCode,
			    		impBatchId:self.impBatchId,
			    		repairCheckId:self.repairCheckId,
			    		switched:switched,
			    		flagCust:self.flagCust
					}
				).then(res=>{
					/*console.log('请求成功！'+JSON.stringify(res.data.response));*/
					self.dataList = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
					self.optionsResultType = res.data.response.resultTypeList;
					self.optionsBrand = res.data.response.brandList;
					self.optionsRepairStatus = res.data.response.repairStatusList;
					self.optionsImpBatch = res.data.response.impBatchList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			repairCheck(row) {
				repairCheck(
					{
						resultDimId:row.RESULT_DIM_ID,
			    	    subBillId:row.SUB_BILL_ID,
						serviceId:row.SERVICE_ID,
						resultType:row.RESULT_TYPE,
			    		userId:'',
			    		bill_Id:row.BILL_ID,
			    		offerId:row.OFFER_ID,
			    		spCode:row.SP_CODE,
			    		operatorCode:row.OPERATOR_CODE
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					let successStr = res.data.response.successStr
					this.$message(successStr);
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	      	},
	      	saveRepair(){
	      		let switched = "";
				if(this.switchFlag){
					switched = "false";
				}else{
					switched="true";
				}
	      		if(this.batchFileName === ''){
	      			this.$message.error("任务名称不能为空!");
	      			return false;
	      		}else if(this.timeoutCount === ''){
	      			this.$message.error("EAI接口调用异常退出阈值不能为空!");
	      			return false;
	      		}else if(this.timeoutTime === ''){
	      			this.$message.error("EAI接口调用超时丢弃阈值不能为空!");
	      			return false;
	      		}else{
	      			saveRepair(
						{
							batchFileName:this.batchFileName,
							serviceId:this.serviceId,
							resultTypeId:this.resultTypeIdDialog,
							brandId:this.brandIdDialog,
							statusId:this.statusId,
				    		userOsId:this.userOsId,
				    		nodeId:this.nodeId,
							repairStatus:this.repairStatusDialog,
				    		impBatchId:this.impBatchIdDialog,
							repairTotal:this.repairTotal,
							timeoutCount:this.timeoutCount,
							timeoutTime:this.timeoutTime,
							impNumber:'',
							switched:switched,
							flagCust:'',
							isFlag:''
						}
					).then(res=>{
						console.log('请求成功！'+JSON.stringify(res.data.response));
						let successStr = res.data.response.msg;
						if(successStr === "success"){
							this.$message({
					          message: "保存成功,请到进度监控模块里查看信息!",
					          type: 'success'
					        });
						}else if(successStr === "errorMax"){
							this.$message.error("实际修复数量小于限制修复量,请重新设置:限制修复量!");
						}else if(successStr === "error"){
							this.$message.error("保存修复设置失败!");
						}else if(successStr === "errorName"){
							this.$message.error("修复任务名称重复,请重新命名!");
						}
					}).catch(err=>{
						console.log(err);
						console.log('请求失败！');
					})
	      		}
	      	},
	      	saveCheck(){
	      		let switched = "";
				if(this.switchFlag){
					switched = "false";
				}else{
					switched="true";
				}
	      		if(this.batchFileName === ''){
	      			this.$message.error("验证任务名称不能为空!");
	      			return false;
	      		}else if(this.timeoutCount === ''){
	      			this.$message.error("EAI接口调用异常退出阈值不能为空!");
	      			return false;
	      		}else if(this.timeoutTime === ''){
	      			this.$message.error("EAI接口调用超时丢弃阈值不能为空!");
	      			return false;
	      		}else{
	      			saveCheck(
						{
							batchFileName:this.batchFileName,
							serviceId:this.serviceId,
							resultTypeId:this.resultTypeIdDialog,
							brandId:this.brandIdDialog,
							statusId:this.statusId,
				    		userOsId:this.userOsId,
				    		nodeId:this.nodeId,
							repairStatus:this.repairStatusDialog,
				    		takeId:this.takeId,
							repairTotal:this.repairTotal,
							timeoutCount:this.timeoutCount,
							timeoutTime:this.timeoutTime,
							impNumber:'',
							switched:switched,
							flagCust:'',
							isFlag:''
						}
					).then(res=>{
						console.log('请求成功！'+JSON.stringify(res.data.response));
						let successStr = res.data.response.msg;
						if(successStr === "success"){
							this.$message({
					          message: "保存成功,请到进度监控模块里查看信息!",
					          type: 'success'
					        });
						}else if(successStr === "errorMax"){
							this.$message.error("实际查询验证数小于输入的验证量,请重新设置:验证量!");
						}else if(successStr === "error"){
							this.$message.error("保存验证失败!");
						}else if(successStr === "errorName"){
							this.$message.error("验证任务名称重复,请重新命名!");
						}
					}).catch(err=>{
						console.log(err);
						console.log('请求失败！');
					})
	      		}
	      	},
	      	repair(row) {
				repair(
					{
						resultDimId:row.RESULT_DIM_ID,
			    	    subBillId:row.SUB_BILL_ID,
						serviceId:row.SERVICE_ID,
						resultType:row.RESULT_TYPE,
			    		userId:'',
			    		bill_Id:row.BILL_ID,
			    		offerId:row.OFFER_ID,
			    		spCode:row.SP_CODE,
			    		operCode:row.OPERATOR_CODE
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					let successStr = res.data.response.successStr
					this.$message(successStr);
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	      	},
	      	dialogCRM(){
	      		this.dialogCRMVisible = true;
	      	},
	      	dialogHLR(){
	      		this.dialogHLRVisible = true;
	      	},
	      	batchRepair(){
	      		passelRepairSet(
					{
			    		operatorCode:this.operatorCode
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					this.batchRepairVisible = true;
					this.optionsImpBatchDialog = res.data.response.impBatchList;
					if(res.data.response.impBatchList.length > 0){
						this.impBatchIdDialog = res.data.response.impBatchList[0].IMP_BATCH_ID;	
					}
					this.serviceName = res.data.response.systemNameList[0].OPERATOR_NAME;	
					this.optionsResultTypeIdDialog = res.data.response.resultTypeList;
					this.resultTypeIdDialog = res.data.response.resultTypeList[0].RESULT_TYPE_ID;
					this.optionsBrandIdDialog = res.data.response.brandList;
					this.optionsStatusId = res.data.response.userStatusList;
					this.optionsUserOsId = res.data.response.ossStatusList;
					this.optionsNodeId = res.data.response.nodeList;
					this.optionsRepairStatusDialog = res.data.response.repairStatusList;
					this.timeoutCount = res.data.response.timeoutCount;
					this.timeoutTime = res.data.response.timeoutTime;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	      	},
	      	batchCheck(){
	      		passelCheckSet(
					{
			    		operatorCode:this.operatorCode
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					this.batchCheckVisible = true;
					this.optionsTakeId = res.data.response.takeIdList;
					if(res.data.response.takeIdList.length > 0){
						this.takeId = res.data.response.takeIdList[0].TAKE_ID;	
					}
					this.serviceName = res.data.response.systemNameList[0].OPERATOR_NAME;	
					this.optionsResultTypeIdDialog = res.data.response.resultTypeList;
					this.resultTypeIdDialog = res.data.response.resultTypeList[0].RESULT_TYPE_ID;
					this.optionsBrandIdDialog = res.data.response.brandList;
					this.optionsStatusId = res.data.response.userStatusList;
					this.optionsUserOsId = res.data.response.ossStatusList;
					this.optionsNodeId = res.data.response.nodeList;
					this.optionsRepairStatusDialog = res.data.response.repairStatusList;
					this.timeoutCount = res.data.response.timeoutCount;
					this.timeoutTime = res.data.response.timeoutTime;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	      	},
	      	checkRepair(){
	      		let switched = "";
				if(this.switchFlag){
					switched = "false";
				}else{
					switched="true";
				}
	      		checkRepair(
					{
			    		serviceId:this.operatorCode,
			    		resultTypeId:this.resultTypeIdDialog,
			    		brandId:this.brandIdDialog,
			    		statusId:this.statusId,
			    		userOsId:this.userOsId,
			    		nodeId:this.nodeId,
			    		repairStatus:this.repairStatusDialog,
			    		impBatchId:this.impBatchIdDialog,
			    		impNumber:'',
			    		switched:switched,
			    		flagCust:'',
			    		isFlag:''
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					let successStr = "根据条件查询的条件数为:"+res.data.response.getCount;
					this.$message({
			          message: successStr,
			          type: 'success'
			        });
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	      	},
	      	checkNumber(){
	      		let switched = "";
				if(this.switchFlag){
					switched = "false";
				}else{
					switched="true";
				}
	      		checkNumber(
					{
			    		serviceId:this.operatorCode,
			    		resultTypeId:this.resultTypeIdDialog,
			    		brandId:this.brandIdDialog,
			    		statusId:this.statusId,
			    		userOsId:this.userOsId,
			    		nodeId:this.nodeId,
			    		repairStatus:this.repairStatusDialog,
			    		takeId:this.takeId,
			    		impNumber:'',
			    		switched:switched,
			    		flagCust:'',
			    		isFlag:''
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					let successStr = "根据条件查询的验证数为:"+res.data.response.getCheckCount;
					this.$message({
			          message: successStr,
			          type: 'success'
			        });
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	      	},
	      	handleSizeChange(val) {
	        	console.log(`每页 ${val} 条`);
	      	},
	      	handleCurrentChange(val) {
	        	console.log(`当前页: ${val}`);
	        	this.getList('0');
	      	}
	   	}
	}
</script>

<style>
	.el-range-separator{line-height: 21px !important;}
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.divStyle3{float:right;margin-top:-30px;}
	.block{text-align: right;margin-top: 15px;}
</style>