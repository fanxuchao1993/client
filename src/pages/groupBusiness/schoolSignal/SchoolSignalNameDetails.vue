<!--校讯通看业务名称详情-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
				<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/groupBusiness'}">集团业务稽核</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/groupBusiness/schoolSignal'}">校讯通</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/groupBusiness/schoolSignal/commonGBCheck'}">查看</el-breadcrumb-item>
				<el-breadcrumb-item :to="{path:'/groupBusiness/schoolSignal/commonGBCheckName'}">业务名称</el-breadcrumb-item>
				<el-breadcrumb-item>{{pageType}}</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>{{pageType}}
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-back"></i>返回</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<template v-if="busiType == '0031'">
					<template v-if="resultType == ''">
					</template>
					<template v-if="resultType == 'A'">
						<template v-if="serviceIds == '31'">
							<el-input placeholder="CRM侧CA" v-model="serviceId" clearable></el-input>		
						</template>
						<template v-else-if="serviceIds == '32'">
							<el-input placeholder="CRM侧CA" v-model="serviceId" clearable></el-input>
							<el-input placeholder="CRM侧电话号码" v-model="bullId" clearable></el-input>
						</template>
					</template>
					<template v-if="resultType == 'B'">
						<template v-if="serviceIds == '31'">
							<el-input placeholder="平台侧CA" v-model="serviceId" clearable></el-input>		
						</template>
						<template v-else-if="serviceIds == '32'">
							<el-input placeholder="平台侧CA" v-model="serviceId" clearable></el-input>
							<el-input placeholder="平台侧电话号码" v-model="bullId" clearable></el-input>
						</template>
					</template>
				</template>
				<template v-else-if="busiType == '0020'">
					<el-input placeholder="ENTCODE" v-model="bullId" clearable></el-input>
				</template>
				<template v-else-if="busiType == '0004'">
					<el-input placeholder="主号码" v-model="bullId" clearable></el-input>
				</template>
				<template v-else>
					<el-input placeholder="手机号" v-model="bullId" clearable></el-input>
				</template>
				
				<div class="clear"></div>
			</div>
			<el-table :data="tableData" v-if="busiType === '0004'" stripe border :header-cell-style="{backgroundColor:'#f5f7fa'}" style="width: 100%">
				<el-input placeholder="AUDIT_TIME" v-model="稽核时间" clearable></el-input>
				<el-input placeholder="AUDIT_BATCH" v-model="稽核批次" clearable></el-input>
				<el-input placeholder="BULL_ID" v-model="主号码" clearable></el-input>
				<el-input placeholder="SECONDARY_MSISDN" v-model="副号码" clearable></el-input>
				<el-input placeholder="SECONDARY_MSISDN_IMSI" v-model="副号码IMSI" clearable></el-input>
				<el-input placeholder="BUSI_TYPE_NAME" v-model="业务类型" clearable></el-input>
				<el-input placeholder="BOPERATOR_NAME" v-model="业务名称" clearable></el-input>
				<el-input placeholder="RESULT_TYPE1" v-model="比对结果类型" clearable></el-input>
				<el-input placeholder="DUSER_STATE_NAME" v-model="CRM用户状态" clearable></el-input>
				<el-input placeholder="OS_STATE" v-model="CRM停开机状态" clearable></el-input>
				<template v-if="resultType == 'A'">
					<el-input placeholder="PROD_EFFECTIVE_DATE" v-model="CRM订购时间" clearable></el-input>
					<el-input placeholder="PROD_STATE1" v-model="CRM侧订购状态" clearable></el-input>
				</template>
				<template v-if="resultType == 'B'">
					<el-input placeholder="PLATE_ORDER_EFFECTIVE_DATE" v-model="平台订购时间" clearable></el-input>
				</template>
				<template v-if="resultType == 'U'">
					<el-input placeholder="PROD_EFFECTIVE_DATE" v-model="CRM订购时间" clearable></el-input>
					<el-input placeholder="PROD_STATE1" v-model="CRM侧订购状态" clearable></el-input>
					<el-input placeholder="PLATE_ORDER_EFFECTIVE_DATE" v-model="平台订购时间" clearable></el-input>
					<el-input placeholder="PLATE_ORDER_STATUS" v-model="平台侧订购状态" clearable></el-input>
				</template>
				<template v-if="resultType == ''">
					<el-input placeholder="PROD_EFFECTIVE_DATE" v-model="CRM订购时间" clearable></el-input>
					<el-input placeholder="PROD_STATE1" v-model="CRM侧订购状态" clearable></el-input>
					<el-input placeholder="PLATE_ORDER_EFFECTIVE_DATE" v-model="平台订购时间" clearable></el-input>
					<el-input placeholder="PLATE_ORDER_STATUS" v-model="平台侧订购状态" clearable></el-input>
				</template>
			</el-table>
			<el-table :data="tableData" v-if="busiType === '0020'" stripe border :header-cell-style="{backgroundColor:'#f5f7fa'}" style="width: 100%">
				<el-table-column prop="AUDIT_TIME" label="稽核时间" width='110px'></el-table-column>
				<el-table-column prop="AUDIT_BATCH" label="稽核批次" width='110px'></el-table-column>
				<el-table-column prop="CHECK_NAME" label="稽核点名称" width='110px'></el-table-column>
				<el-table-column prop="BOPERATOR_NAME" label="业务名称" width='110px'></el-table-column>
				<el-table-column prop="RESULT_TYPE" label="比对结果类型" width='110px'></el-table-column>
				<el-table-column prop="TREND" label="新增/历史" width='110px'></el-table-column>
				<el-table-column prop="BULL_ID" label="ENTCODE" width='110px'></el-table-column>
				<template v-if="resultType == 'A'">
					<el-table-column prop="ECHANNEL_TYPE_NAME" label="订购渠道" width='110px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="CRM开始时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="CRM结束时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_STATE" label="CRM订购状态" width='110px'></el-table-column>
				</template>
				<template v-if="resultType == 'B'">
					<el-table-column prop="PLATE_ORDER_EFFECTIVE_DATE" label="平台开始时间" width='110px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台订购状态" width='110px'></el-table-column>
				</template>
				<template v-if="resultType == 'U'">
					<el-table-column prop="ECHANNEL_TYPE_NAME" label="订购渠道" width='110px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="CRM开始时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="CRM结束时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_STATE" label="CRM订购状态" width='110px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_EFFECTIVE_DATE" label="平台开始时间" width='110px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台订购状态" width='110px'></el-table-column>
				</template>
				<template v-if="resultType == ''">
					<el-table-column prop="ECHANNEL_TYPE_NAME" label="订购渠道" width='110px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="CRM开始时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="CRM结束时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_STATE" label="CRM订购状态" width='110px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_EFFECTIVE_DATE" label="平台开始时间" width='110px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台订购状态" width='110px'></el-table-column>
				</template>
				<el-table-column prop="FAILORDER_ID" label="近三个月失败订单" width='110px'></el-table-column>
			</el-table>
			<el-table :data="tableData" v-if="busiType === '0031'" stripe border :header-cell-style="{backgroundColor:'#f5f7fa'}" style="width: 100%">
				<el-table-column prop="AUDIT_TIME" label="稽核日期" width='100px'></el-table-column>
				<el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
				<el-table-column prop="BOPERATOR_NAME" label="业务名称" width='110px'></el-table-column>
				<template v-if="resultType == ''">
					<el-table-column prop="RESULT_TYPE2" label="稽核结果类型" width='110px'></el-table-column>
				</template>
				
				<template v-if="resultType == 'A'">
					<el-table-column prop="RESULT_TYPE1" label="稽核结果类型" width='110px'></el-table-column>
				</template>
				<template v-if="resultType == 'B'">
					<el-table-column prop="RESULT_TYPE1" label="稽核结果类型" width='110px'></el-table-column>
				</template>
				<template v-if="resultType == 'U'">
					<el-table-column prop="RESULT_TYPE1" label="稽核结果类型" width='110px'></el-table-column>
				</template>
				<template v-if="resultType == 'A'">
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="业务生效时间" width='110px'>></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="业务失效时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_DONE_DATE" label="业务最后变更时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE_ATTR" label="生效时间属性"></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE_ATTR" label="失效时间属性" width='140px'></el-table-column>
					<el-table-column prop="SERVICE_ID" label="CRM侧CA" width='140px'></el-table-column>
					<template v-if="serviceIds == '32'">
						<el-table-column prop="BULL_ID" label="CRM侧电话号码"></el-table-column>
					</template>
					<el-table-column prop="CUST_ID" label="CRM侧ENTCODE" width='140px'></el-table-column>
				</template>
				<template v-if="resultType == 'B'">
					<el-table-column prop="SCHOOL_NAME" label="学校名称"></el-table-column>
					<el-table-column prop="SERVICE_ID" label="平台侧CA" width='110px'></el-table-column>
					<template v-if="serviceIds == '32'">
						<el-table-column prop="BULL_ID" label="平台侧电话号码"></el-table-column>
					</template>
					<el-table-column prop="CUST_ID" label="平台侧ENTCODE" width='140px'></el-table-column>
				</template>
				<template v-if="resultType == 'U'">
					<el-table-column prop="SCHOOL_NAME" label="学校名称"></el-table-column>
					<el-table-column prop="SERVICE_ID" label="CRM侧CA" width='80px'></el-table-column>
					<el-table-column prop="SERVICE_ID" label="平台侧CA" width='80px'></el-table-column>
					<template v-if="serviceIds == '32'">
						<el-table-column prop="BULL_ID" label="CRM侧电话号码"></el-table-column>
						<el-table-column prop="BULL_ID" label="平台侧电话号码"></el-table-column>
					</template>
					<el-table-column prop="CUST_ID" label="CRM侧ENTCODE" width='140px'></el-table-column>
					<el-table-column prop="CUST_ID" label="平台侧ENTCODE" width='140px'></el-table-column>
				</template>
				<template v-if="resultType == ''">
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="业务生效时间" width='110px'>></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="业务失效时间" width='110px'></el-table-column>
					<el-table-column prop="PROD_DONE_DATE" label="业务最后变更时间" width='110px'>></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE_ATTR" label="生效时间属性" width='110px'>></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE_ATTR" label="失效时间属性" width='140px'></el-table-column>
					<el-table-column prop="SCHOOL_NAME" label="学校名称" width='280px'>></el-table-column>
					<el-table-column prop="SERVICE_ID" label="CA" width='110px'></el-table-column>
					<el-table-column prop="BULL_ID" label="电话号码" width='130px'></el-table-column>
					<el-table-column prop="CUST_ID" label="ENTCODE" width='140px'></el-table-column>
					<!--<el-table-column prop="SERVICE_ID" label="平台侧CA" width='110px'></el-table-column>
					<el-table-column prop="BULL_ID" label="CRM侧电话号码" width='130px'></el-table-column>
					<el-table-column prop="CUST_ID" label="平台侧ENTCODE	" width='140px'></el-table-column>-->
				</template>
			</el-table>
			<el-table :data="tableData" v-if="busiType === '0014'" stripe border :header-cell-style="{backgroundColor:'#f5f7fa'}" style="width: 100%">
				<el-table-column prop="AUDIT_TIME" label="稽核时间" width='140px'></el-table-column>
				<el-table-column prop="AUDIT_BATCH" label="稽核批次" width='140px'></el-table-column>
				<el-table-column prop="BULL_ID" label="手机号码" width='140px'></el-table-column>
				<el-table-column prop="BUSI_TYPE_NAME" label="业务类型" width='140px'></el-table-column>
				<el-table-column prop="SP_CODE" label="企业代码" width='140px'></el-table-column>
				<el-table-column prop="OPERATOR_CODE" label="业务代码" width='140px'></el-table-column>
				<el-table-column prop="BOPERATOR_NAME" label="业务名称" width='140px'></el-table-column>
				<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='140px'></el-table-column>
				<el-table-column prop="DUSER_STATE_NAME" label="用户状态" width='140px'></el-table-column>
				<el-table-column prop="OS_STATE" label="停开机状态" width='140px'></el-table-column>
				<template v-if="resultType == 'A'">
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="CRM订购时间" width='140px'></el-table-column>
					<el-table-column prop="ECHANNEL_TYPE_NAME" label="订购渠道" width='140px'></el-table-column>
					<el-table-column prop="PROD_STATE1" label="CRM侧订购状态" width='140px'></el-table-column>
					
				</template>
				<template v-if="resultType == 'B'">
					<el-table-column prop="PLATE_ORDER_EFFECTIVE_DATE" label="平台订购时间" width='140px'></el-table-column>
					<el-table-column prop="ECHANNEL_TYPE_NAME" label="订购渠道" width='140px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台侧订购状态" width='140px'></el-table-column>
				</template>
				<template v-if="resultType == 'U'">
					<el-table-column prop="CUST" label="CRM订购时间" width='140px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="平台订购时间" width='140px'></el-table-column>
					<el-table-column prop="ECHANNEL_TYPE_NAME" label="订购渠道" width='140px'></el-table-column>
					<el-table-column prop="PROD_STATE1" label="CRM侧订购状态" width='140px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台侧订购状态" width='140px'></el-table-column>
				</template>
				<template v-if="resultType == ''">
					<el-table-column prop="CUST" label="CRM订购时间" width='140px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="平台订购时间" width='140px'></el-table-column>
					<el-table-column prop="ECHANNEL_TYPE_NAME" label="订购渠道" width='140px'></el-table-column>
					<el-table-column prop="PROD_STATE1" label="CRM侧订购状态" width='140px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台侧订购状态" width='140px'></el-table-column>
				</template>
				<el-table-column label="近三个月失败订单" width='140px'>查看</el-table-column>
			</el-table>	
			<el-table :data="tableData" v-if="busiType === '0032'" stripe border :header-cell-style="{backgroundColor:'#f5f7fa'}" style="width: 100%">
				<el-table-column prop="AUDIT_TIME" label="稽核时间" width='100px'></el-table-column>
				<el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
				<el-table-column prop="CHECK_NAME" label="稽核点名称" width='100px'></el-table-column>
				<el-table-column prop="BOPERATOR_NAME" label="业务名称" width='100px'></el-table-column>
				<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
				<el-table-column prop="TREND" label="新增/历史" width='100px'></el-table-column>
				<el-table-column prop="BULL_ID" label="手机号码" width='100px'></el-table-column>
				<template v-if="resultType == 'A'">
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="CRM开始时间" width='100px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="CRM结束时间" width='100px'></el-table-column>
					<el-table-column prop="SUB_BILL" label="CRMIMSI" width='100px'></el-table-column>
					<el-table-column prop="PROD_STATE1" label="CRM订购状态" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == 'B'">
					<el-table-column prop="PLATE_ORDER_EFFECTIVE_DATE" label="平台开始时间" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_EXPIRE_DATE" label="平台结束" width='100px'></el-table-column>
					<el-table-column prop="PLATE_IMSI" label="平台IMSI" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台订购状态" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == 'U'">
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="CRM开始时间" width='100px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="CRM结束时间" width='100px'></el-table-column>
					<el-table-column prop="SUB_BILL" label="CRMIMSI" width='100px'></el-table-column>
					<el-table-column prop="PROD_STATE1" label="CRM订购状态" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_EFFECTIVE_DATE" label="平台开始时间" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_EXPIRE_DATE" label="平台结束" width='100px'></el-table-column>
					<el-table-column prop="PLATE_IMSI" label="平台IMSI" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台订购状态" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == ''">
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="CRM开始时间" width='100px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="CRM结束时间" width='100px'></el-table-column>
					<el-table-column prop="SUB_BILL" label="CRMIMSI" width='100px'></el-table-column>
					<el-table-column prop="PROD_STATE1" label="CRM订购状态" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_EFFECTIVE_DATE" label="平台开始时间" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_EXPIRE_DATE" label="平台结束" width='100px'></el-table-column>
					<el-table-column prop="PLATE_IMSI" label="平台IMSI" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台订购状态" width='100px'></el-table-column>
				</template>
			</el-table>
			<el-table :data="tableData" v-if="busiType === '0102'" stripe border :header-cell-style="{backgroundColor:'#f5f7fa'}" style="width: 100%">
				<el-table-column prop="AUDIT_TIME" label="稽核时间" width='100px'></el-table-column>
				<el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
				<el-table-column prop="BULL_ID" label="手机号码" width='100px'></el-table-column>
				<template v-if="resultType == 'A'">
					<el-table-column prop="USER_ID" label="用户ID" width='100px'></el-table-column>
					<el-table-column prop="OPERATOR_CODE" label="业务代码" width='100px'></el-table-column>
					<el-table-column prop="BOPERATOR_NAME" label="业务名称" width='100px'></el-table-column>
					<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
					<el-table-column prop="DUSER_STATE_NAME" label="用户状态" width='100px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="订购生效时间" width='100px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="订购失效时间" width='100px'></el-table-column>
					<el-table-column prop="PROD_STATE1" label="CRM停开机状态" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == 'B'">
					<el-table-column prop="OPERATOR_CODE" label="业务代码" width='100px'></el-table-column>
					<el-table-column prop="BOPERATOR_NAME" label="业务名称" width='100px'></el-table-column>
					<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="平台侧停开机状态" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == 'U'">
					<el-table-column prop="USER_ID" label="用户ID" width='100px'></el-table-column>
					<el-table-column prop="BOPERATOR_NAME" label="CRM业务名称" width='100px'></el-table-column>
					<el-table-column prop="PLATE_OPERATOR_NAME" label="平台业务名称" width='100px'></el-table-column>
					<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
					<el-table-column prop="DUSER_STATE_NAME" label="用户状态" width='100px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="订购生效时间" width='100px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="订购失效时间" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="停开机状态" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == ''">
					<el-table-column prop="USER_ID" label="用户ID" width='100px'></el-table-column>
					<el-table-column prop="BOPERATOR_NAME" label="CRM业务名称" width='100px'></el-table-column>
					<el-table-column prop="PLATE_OPERATOR_NAME" label="平台业务名称" width='100px'></el-table-column>
					<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
					<el-table-column prop="DUSER_STATE_NAME" label="用户状态" width='100px'></el-table-column>
					<el-table-column prop="PROD_EFFECTIVE_DATE" label="订购生效时间" width='100px'></el-table-column>
					<el-table-column prop="PROD_EXPIRE_DATE" label="订购失效时间" width='100px'></el-table-column>
					<el-table-column prop="PLATE_ORDER_STATUS" label="停开机状态" width='100px'></el-table-column>
				</template>
				<el-table-column label="近三个月失败订单" width='100px'>查看</el-table-column>
			</el-table>
			<el-table :data="tableData" v-if="busiType === '0101'" stripe border :header-cell-style="{backgroundColor:'#f5f7fa'}" style="width: 100%">
				<el-table-column prop="AUDIT_TIME" label="稽核时间" width='100px'></el-table-column>
				<el-table-column prop="AUDIT_BATCH" label="稽核批次" width='100px'></el-table-column>
				<el-table-column prop="PBOSS_ID" label="SUBSID" width='100px'></el-table-column>
				<el-table-column prop="BULL_ID" label="手机号码" width='100px'></el-table-column>
				<template v-if="resultType == 'A'">
					<el-table-column prop="USER_ID" label="用户ID" width='100px'></el-table-column>
					<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
					<el-table-column prop="DUSER_STATE_NAME" label="用户状态" width='100px'></el-table-column>
					<el-table-column prop="USER_EFFECTIVE_DATE" label="用户生效时间" width='100px'></el-table-column>
					<el-table-column prop="USER_EXPIRE_DATE" label="用户失效时间" width='100px'></el-table-column>
					<el-table-column prop="OS_STATE1" label="CRM停开机状态" width='100px'></el-table-column>
					<el-table-column prop="CUST_SERVICE_ID" label="CA" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == 'B'">
					<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
					<el-table-column prop="PLATE_USER_STATE" label="平台侧用户状态" width='100px'></el-table-column>
					<el-table-column prop="PLATE_USER_EFFECTIVE_DATE" label="平台侧用户生效时间" width='100px'></el-table-column>
					<el-table-column prop="PLATE_USER_EXPIRE_DATE" label="平台侧用户失效时间" width='100px'></el-table-column>
					<el-table-column prop="CUST_SERVICE_ID" label="CA" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == 'U'">
					<el-table-column prop="USER_ID" label="用户ID" width='100px'></el-table-column>
					<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
					<el-table-column prop="DUSER_STATE_NAME" label="用户状态" width='100px'></el-table-column>
					<el-table-column prop="USER_EFFECTIVE_DATE" label="用户生效时间" width='100px'></el-table-column>
					<el-table-column prop="USER_EXPIRE_DATE" label="用户失效时间" width='100px'></el-table-column>
					<el-table-column prop="OS_STATE1" label="CRM停开机状态" width='100px'></el-table-column>
					<el-table-column prop="PLATE_USER_STATE" label="平台侧用户状态" width='100px'></el-table-column>
				</template>
				<template v-if="resultType == ''">
					<el-table-column prop="USER_ID" label="用户ID" width='100px'></el-table-column>
					<el-table-column prop="RESULT_TYPE1" label="比对结果类型" width='100px'></el-table-column>
					<el-table-column prop="DUSER_STATE_NAME" label="用户状态" width='100px'></el-table-column>
					<el-table-column prop="USER_EFFECTIVE_DATE" label="用户生效时间" width='100px'></el-table-column>
					<el-table-column prop="USER_EXPIRE_DATE" label="用户失效时间" width='100px'></el-table-column>
					<el-table-column prop="OS_STATE1" label="CRM停开机状态" width='100px'></el-table-column>
					<el-table-column prop="PLATE_USER_STATE" label="平台侧用户状态" width='100px'></el-table-column>
				</template>
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
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getGroupBusinessDetail } from '@/api/Api'
	export default{
		name: 'SchoolSignalNameDetails',
		computed: {
			...mapGetters(['getParamas'])
		},
		created() {
			this.pageType = this.getParamas.pageType;
			this.serviceIds = this.getParamas.serviceIds;
			this.busiType = this.getParamas.busiType;
			this.resultType = this.getParamas.resultType;
			console.log(this.resultType);
			this.trendId = this.getParamas.trend;
			
			this.getList('0');
		},
	  	data () {
	    	return {
	    		resultType:'',
	    		serviceId:'',
	    		pageType: '',
				currentPage: 1,
				pageSize: 10,
				totalCount:0,
				bullId: '',
				trendId: '',
				busiType:'',
				tableData: [],
				options: [
					{
				      	NEWTYPEID: 'A',
				      	NAME: '增量'
			        },
			        {
				      	NEWTYPEID: 'K',
				      	NAME: '存量'
			        }
		        ]
	    	}
  		},
  		methods: {
			getList(pageObj){
				let self = this;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				const params = this.getParamas;
				getGroupBusinessDetail(
					{
						auditTime:params.auditTime,
						auditBatch:params.auditBatch,
						auditPointId:params.auditPointId,
						busiType:self.busiType,
						serviceId:self.serviceId,
						resultType:params.resultType,
			    	    serviceIds:params.serviceIds,
			    	    operatorCode:params.operatorCode,
			    	    topicId:params.topicId,
			    	    trend:self.trendId,
			    	    /*bullId:self.bullId,*/
			    	    start:self.currentPage-1,
			    	    limit:self.pageSize
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tableData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			backRouter(){
				this.$router.back(-1);
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

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>