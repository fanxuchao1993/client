import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Root from '@/pages/Root'

/**********************************************   首页    **********************************************/
//首页
import Home from '@/pages/home/Home'
//首页>个人主页
import LeaderPage from '@/pages/home/leaderPage/LeaderPage'
//首页>个人主页
import StaffPage from '@/pages/home/staffPage/StaffPage'

/********************************************** 稽核结果 **********************************************/
//稽核结果
import AuditResults from '@/pages/auditResults/AuditResults'

//稽核结果>概览
import Overview from '@/pages/auditResults/Overview'

//稽核结果>个人工单
import WorkList from '@/pages/auditResults/WorkList'

//稽核结果>多方稽核报表
import AuditReports from '@/pages/auditResults/auditReports/AuditReports'
//稽核结果>多方稽核报表>总览
import OverviewAR from '@/pages/auditResults/auditReports/OverviewAR'
//稽核结果>多方稽核报表>差异性属性
import DifferenceAttribute from '@/pages/auditResults/auditReports/DifferenceAttribute'
//稽核结果>多方稽核报表>差异性属性明细
import DifferenceAttributeDetails from '@/pages/auditResults/auditReports/DifferenceAttributeDetails'
//稽核结果>多方稽核报表>差异性订购
import DifferenceOrder from '@/pages/auditResults/auditReports/DifferenceOrder'
//稽核结果>多方稽核报表>差异性订购>差异性订购明细
import DifferenceOrderTypeADetails from '@/pages/auditResults/auditReports/DifferenceOrderTypeADetails'
//稽核结果>多方稽核报表>差异性订购>差异性订购明细
import DifferenceOrderTypeBDetails from '@/pages/auditResults/auditReports/DifferenceOrderTypeBDetails'

//稽核结果>稽核规则
import AuditRules from '@/pages/auditResults/AuditRules'

/**********************************************基础业务稽核**********************************************/
//基础业务稽核
import BasicBusiness from '@/pages/basicBusiness/BasicBusiness'

//基础业务稽核>CRM-BOSS增量稽核
import CrmBossIncrement from '@/pages/basicBusiness/crmBossIncrement/CrmBossIncrement'
//基础业务稽核>CRM-BOSS增量稽核>总览
import OverviewCBI from '@/pages/basicBusiness/crmBossIncrement/OverviewCBI'
//基础业务稽核>CRM-BOSS增量稽核>总览>A单边B单边不一致
import CrmBossIncrementABN from '@/pages/basicBusiness/crmBossIncrement/CrmBossIncrementABN'
//基础业务稽核>CRM-BOSS增量稽核>总览>查看
import CrmBossIncrementCheck from '@/pages/basicBusiness/crmBossIncrement/CrmBossIncrementCheck'
//基础业务稽核>CRM-BOSS增量稽核>总览>查看>详情
import CrmBossIncrementCheckDetails from '@/pages/basicBusiness/crmBossIncrement/CrmBossIncrementCheckDetails'

//基础业务稽核>CRM-HLR稽核
import CrmHlrAudit from '@/pages/basicBusiness/crmHlrAudit/CrmHlrAudit'
//基础业务稽核>CRM-HLR稽核>总览
import OverviewCHA from '@/pages/basicBusiness/crmHlrAudit/OverviewCHA'
//基础业务稽核>CRM-HLR稽核>总览>A单边B单边不一致
import CrmHlrAuditABN from '@/pages/basicBusiness/crmHlrAudit/CrmHlrAuditABN'
//基础业务稽核>CRM-HLR稽核>总览>查看
import CrmHlrAuditCheck from '@/pages/basicBusiness/crmHlrAudit/CrmHlrAuditCheck'
//基础业务稽核>CRM-HLR稽核>总览>查看>业务类型
import CrmHlrCheckBusiness from '@/pages/basicBusiness/crmHlrAudit/CrmHlrCheckBusiness'
//基础业务稽核>CRM-HLR稽核>总览>查看>业务类型>A单边B单边不一致
import CrmHlrCheckBusinessABN from '@/pages/basicBusiness/crmHlrAudit/CrmHlrCheckBusinessABN'

//基础业务稽核>CRM-BOSS稽核
import CrmBossAudit from '@/pages/basicBusiness/crmBossAudit/CrmBossAudit'
//基础业务稽核>CRM-BOSS稽核>总览
import OverviewCBA from '@/pages/basicBusiness/crmBossAudit/OverviewCBA'
//基础业务稽核>CRM-Boss稽核>总览>A单边B单边不一致
import CrmBossAuditABN from '@/pages/basicBusiness/crmBossAudit/CrmBossAuditABN'
//基础业务稽核>CRM-Boss稽核>总览>查看
import CrmBossAuditCheck from '@/pages/basicBusiness/crmBossAudit/CrmBossAuditCheck'
//基础业务稽核>CRM-Boss稽核>总览>查看>业务类型
import CrmBossCheckBusiness from '@/pages/basicBusiness/crmBossAudit/CrmBossCheckBusiness'
//基础业务稽核>CRM-Boss稽核>总览>查看>业务类型>A单边B单边不一致
import CrmBossCheckBusinessABN from '@/pages/basicBusiness/crmBossAudit/CrmBossCheckBusinessABN'

/**********************************************集团业务稽核**********************************************/
//集团业务稽核
import GroupBusiness from '@/pages/groupBusiness/GroupBusiness'

//集团业务稽核>集团短彩信
import GroupShortMessage from '@/pages/groupBusiness/groupShortMessage/GroupShortMessage'
//集团业务稽核>集团短彩信>总览
import OverviewGSM from '@/pages/groupBusiness/groupShortMessage/OverviewGSM'
//集团业务稽核>集团短彩信>稽核点名称
import GroupShortMessageName from '@/pages/groupBusiness/groupShortMessage/GroupShortMessageName'
//集团业务稽核>集团短彩信>稽核点名称>详情
import GroupShortMessageNameDetails from '@/pages/groupBusiness/groupShortMessage/GroupShortMessageNameDetails'
//集团业务稽核>集团短彩信>查看
import GroupShortMessageCheck from '@/pages/groupBusiness/groupShortMessage/GroupShortMessageCheck'
//集团业务稽核>集团短彩信>查看>A单边B单边不一致
import GroupShortMessageCheckABN from '@/pages/groupBusiness/groupShortMessage/GroupShortMessageCheckABN'
//集团业务稽核>集团短彩信>不一致条数
import GroupShortMessageN from '@/pages/groupBusiness/groupShortMessage/GroupShortMessageN'

//集团业务稽核>集团彩铃
import GroupColorBell from '@/pages/groupBusiness/groupColorBell/GroupColorBell'
//集团业务稽核>集团彩铃>查看>业务名称>详情
import GroupColorBellNameDetails from '@/pages/groupBusiness/groupColorBell/GroupColorBellNameDetails'
//集团业务稽核>校讯通
import SchoolSignal from '@/pages/groupBusiness/schoolSignal/SchoolSignal'
//集团业务稽核>校讯通>查看>业务名称>详情
import SchoolSignalNameDetails from '@/pages/groupBusiness/schoolSignal/SchoolSignalNameDetails'
//集团业务稽核>物联网
import InternetOfThings from '@/pages/groupBusiness/internetOfThings/InternetOfThings'
//集团业务稽核>物联网>查看>业务名称>详情
import InternetOfThingsNameDetails from '@/pages/groupBusiness/internetOfThings/InternetOfThingsNameDetails'

//集团业务稽核通用>总览
import CommonGBOverview from '@/pages/groupBusiness/CommonGBOverview'
//集团业务稽核通用>查看
import CommonGBCheck from '@/pages/groupBusiness/CommonGBCheck'
//集团业务稽核通用>查看>业务名称
import CommonGBCheckName from '@/pages/groupBusiness/CommonGBCheckName'
//集团业务稽核通用>查看>A单边B单边不一致条数
import CommonGBCheckABN from '@/pages/groupBusiness/CommonGBCheckABN'

/**********************************************家庭业务稽核**********************************************/
//家庭业务稽核
import FamilyBusiness from '@/pages/familyBusiness/FamilyBusiness'

//家庭业务稽核>家庭宽带
import FamilyBroadband from '@/pages/familyBusiness/familyBroadband/FamilyBroadband'
//家庭业务稽核>家庭宽带>总览
import OverviewFB from '@/pages/familyBusiness/familyBroadband/OverviewFB'
//家庭业务稽核>家庭宽带>总览>查看业务
import FamilyBroadbandServiceCheck from '@/pages/familyBusiness/familyBroadband/FamilyBroadbandServiceCheck'
//家庭业务稽核>家庭宽带>总览>查看业务>不一致条数
import BroadbandServiceCheckN from '@/pages/familyBusiness/familyBroadband/BroadbandServiceCheckN'
//家庭业务稽核>家庭宽带>总览>查看状态
import FamilyBroadbandStatusCheck from '@/pages/familyBusiness/familyBroadband/FamilyBroadbandStatusCheck'
//家庭业务稽核>家庭宽带>总览>查看状态>A单边B单边不一致
import BroadbandStatusCheckABN from '@/pages/familyBusiness/familyBroadband/BroadbandStatusCheckABN'

//家庭业务稽核>亲情通
import FamilyKinship from '@/pages/familyBusiness/familyKinship/FamilyKinship'
//家庭业务稽核>亲情通>总览
import OverviewFK from '@/pages/familyBusiness/familyKinship/OverviewFK'
//家庭业务稽核>亲情通>总览>查看
import FamilyKinshipCheck from '@/pages/familyBusiness/familyKinship/FamilyKinshipCheck'
//家庭业务稽核>亲情通>总览>查看>A单边B单边不一致
import FamilyKinshipCheckABN from '@/pages/familyBusiness/familyKinship/FamilyKinshipCheckABN'

/**********************************************个人业务稽核**********************************************/
//个人业务稽核
import PersonalBusiness from '@/pages/personalBusiness/PersonalBusiness'
//个人业务稽核>CRM-139邮箱稽核
import CrmMail139 from '@/pages/personalBusiness/crmMail139/CrmMail139'
//个人业务稽核>CRM-MISC稽核
import CrmMisc from '@/pages/personalBusiness/crmMisc/CrmMisc'
//个人业务稽核>手机视频
import MobileVideo from '@/pages/personalBusiness/mobileVideo/MobileVideo'
//个人业务稽核>CRM-MCAS稽核
import CrmMcas from '@/pages/personalBusiness/crmMcas/CrmMcas'
//个人业务稽核>本地WLAN
import LocalWlan from '@/pages/personalBusiness/localWlan/LocalWlan'
//个人业务稽核>香港一卡多号
import SimMaxHongKong from '@/pages/personalBusiness/simMaxHongKong/SimMaxHongKong'
//个人业务稽核>CRM-WLAN稽核
import CrmWlan from '@/pages/personalBusiness/crmWlan/CrmWlan'
//个人业务稽核>副号码
import ViceNumber from '@/pages/personalBusiness/viceNumber/ViceNumber'

//个人业务稽核通用>总览
import CommonPBOverview from '@/pages/personalBusiness/CommonPBOverview'
//个人业务稽核通用>总览>A单边B单边不一致
import CommonPBABN from '@/pages/personalBusiness/CommonPBABN'
//个人业务稽核通用>总览>查看
import CommonPBCheck from '@/pages/personalBusiness/CommonPBCheck'

/********************************************** 数据分析 **********************************************/
//数据分析
import DataAnalysis from '@/pages/dataAnalysis/DataAnalysis'

/********************************************** 数据修复 **********************************************/
//数据修复
import DataRepair from '@/pages/dataRepair/DataRepair'

/********************************************** 调度管理 **********************************************/
//调度管理
import DispatchManage from '@/pages/dispatchManage/DispatchManage'

/**********************************************规则库管理**********************************************/
//规则库管理
import RuleBaseManage from '@/pages/ruleBaseManage/RuleBaseManage'

/********************************************** 安全管理 **********************************************/
//安全管理
import SecurityManage from '@/pages/securityManage/SecurityManage'

/**********************************************数据质量平台**********************************************/
//数据质量平台
import DataQualityPlatform from '@/pages/dataQualityPlatform/DataQualityPlatform'

/**********************************************三方对比报表**********************************************/
//三方对比报表
import ComparisonReport from '@/pages/comparisonReport/ComparisonReport'

/********************************************** 日账分析 **********************************************/
//日账分析
import DayBillAnalysis from '@/pages/dayBillAnalysis/DayBillAnalysis'
//日账分析>总览
import OverviewDBA from '@/pages/dayBillAnalysis/OverviewDBA'
//日账分析>总览>详情
import DayBillAnalysisDetails from '@/pages/dayBillAnalysis/DayBillAnalysisDetails'

Vue.use(Router)

//项目路由
export default new Router({
	linkActiveClass: 'current',
	routes: [{
			path: '',
			name: 'Login',
			component: Login
		},
		{
			path: '',
			name: 'Root',
			component: Root,
			redirect: '/home',
			children: [
			  {
					path: 'home',
					name: 'Home',
					component: Home,
          redirect: 'home/leaderPage',
          children: [
            {
              path: 'leaderPage',
              name: 'LeaderPage',
              component: LeaderPage
            },
            {
              path: 'staffPage',
              name: 'StaffPage',
              component: StaffPage
            }
          ]
				},
				{
					path: 'auditResults',
					name: 'AuditResults',
					component: AuditResults,
					redirect: '/auditResults/overview',
					children: [{
							path: 'overview',
							name: 'Overview',
							component: Overview
						},
						{
							path: 'workList',
							name: 'WorkList',
							component: WorkList
						},
						{
							path: 'auditReports',
							name: 'AuditReports',
							component: AuditReports,
							redirect: '/auditResults/auditReports/overviewAR',
							children: [{
									path: 'overviewAR',
									name: 'OverviewAR',
									component: OverviewAR
								},
								{
									path: 'differenceOrder',
									name: 'DifferenceOrder',
									component: DifferenceOrder
								},
								{
									path: 'differenceAttribute',
									name: 'DifferenceAttribute',
									component: DifferenceAttribute
								},
								{
									path: 'differenceAttributeDetails',
									name: 'DifferenceAttributeDetails',
									component: DifferenceAttributeDetails
								},
								{
									path: 'differenceOrderTypeADetails',
									name: 'DifferenceOrderTypeADetails',
									component: DifferenceOrderTypeADetails
								},
								{
									path: 'differenceOrderTypeBDetails',
									name: 'DifferenceOrderTypeBDetails',
									component: DifferenceOrderTypeBDetails
								}
							]
						},
						{
							path: 'auditRules',
							name: 'AuditRules',
							component: AuditRules
						}
					]
				},
				{
					path: 'basicBusiness',
					name: 'BasicBusiness',
					component: BasicBusiness,
					redirect: '/basicBusiness/crmBossIncrement',
					children: [{
							path: 'crmBossIncrement',
							name: 'CrmBossIncrement',
							component: CrmBossIncrement,
							redirect: '/basicBusiness/crmBossIncrement/overviewCBI',
							children:[
								{
									path:'overviewCBI',
									name:'OverviewCBI',
									component:OverviewCBI
								},
								{
									path:'crmBossIncrementABN',
									name:'CrmBossIncrementABN',
									component:CrmBossIncrementABN
								},
								{
									path:'crmBossIncrementCheck',
									name:'CrmBossIncrementCheck',
									component:CrmBossIncrementCheck
								},
								{
									path:'crmBossIncrementCheckDetails',
									name:'CrmBossIncrementCheckDetails',
									component:CrmBossIncrementCheckDetails
								}
							]
						},
						{
							path: 'crmHlrAudit',
							name: 'CrmHlrAudit',
							component: CrmHlrAudit,
							redirect: '/basicBusiness/crmHlrAudit/overviewCHA',
							children:[
								{
									path:'overviewCHA',
									name:'OverviewCHA',
									component:OverviewCHA
								},
								{
									path:'crmHlrAuditABN',
									name:'CrmHlrAuditABN',
									component:CrmHlrAuditABN
								},
								{
									path:'crmHlrAuditCheck',
									name:'CrmHlrAuditCheck',
									component:CrmHlrAuditCheck
								},
								{
									path:'crmHlrCheckBusiness',
									name:'CrmHlrCheckBusiness',
									component:CrmHlrCheckBusiness
								},
								{
									path:'crmHlrCheckBusinessABN',
									name:'CrmHlrCheckBusinessABN',
									component:CrmHlrCheckBusinessABN
								}
							]
						},
						{
							path: 'crmBossAudit',
							name: 'CrmBossAudit',
							component: CrmBossAudit,
							redirect: '/basicBusiness/crmBossAudit/overviewCBA',
							children:[
								{
									path:'overviewCBA',
									name:'OverviewCBA',
									component:OverviewCBA
								},
								{
									path:'crmBossAuditABN',
									name:'CrmBossAuditABN',
									component:CrmBossAuditABN
								},
								{
									path:'crmBossAuditCheck',
									name:'CrmBossAuditCheck',
									component:CrmBossAuditCheck
								},
								{
									path:'crmBossCheckBusiness',
									name:'CrmBossCheckBusiness',
									component:CrmBossCheckBusiness
								},
								{
									path:'crmBossCheckBusinessABN',
									name:'CrmBossCheckBusinessABN',
									component:CrmBossCheckBusinessABN
								}
							]
						}
					]
				},
				{
					path: 'groupBusiness',
					name: 'GroupBusiness',
					component: GroupBusiness,
					redirect: '/groupBusiness/groupShortMessage',
					children: [
						{
							path: 'groupShortMessage',
							name: 'GroupShortMessage',
							component: GroupShortMessage,
							redirect: '/groupBusiness/groupShortMessage/overviewGSM',
							children: [
								{
									path: 'overviewGSM',
									name: 'OverviewGSM',
									component: OverviewGSM
								},
								{
									path: 'groupShortMessageName',
									name: 'GroupShortMessageName',
									component: GroupShortMessageName
								},
								{
									path: 'groupShortMessageNameDetails',
									name: 'GroupShortMessageNameDetails',
									component: GroupShortMessageNameDetails
								},
								{
									path: 'groupShortMessageCheck',
									name: 'GroupShortMessageCheck',
									component: GroupShortMessageCheck
								},
								{
									path: 'groupShortMessageCheckABN',
									name: 'GroupShortMessageCheckABN',
									component: GroupShortMessageCheckABN
								},
								{
									path: 'groupShortMessageN',
									name: 'GroupShortMessageN',
									component: GroupShortMessageN
								}
							]
						},
						{
							path: 'groupColorBell',
							name: 'GroupColorBell',
							component: GroupColorBell,
							meta:{ title:'集团彩铃'},
							redirect: '/groupBusiness/groupColorBell/commonGBOverview',
							children: [
								{
									path: 'commonGBOverview',
									component: CommonGBOverview

								},
								{
									path: 'commonGBCheck',
									component: CommonGBCheck
								},
								{
									path: 'commonGBCheckName',
									component: CommonGBCheckName
								},
								{
									path: 'groupColorBellNameDetails',
									name: 'GroupColorBellNameDetails',
									component: GroupColorBellNameDetails
								},
								{
									path: 'commonGBCheckABN',
									component: CommonGBCheckABN
								}
							]
						},
						{
							path: 'schoolSignal',
							name: 'SchoolSignal',
							component: SchoolSignal,
							meta:{ title:'校讯通'},
							redirect: '/groupBusiness/schoolSignal/commonGBOverview',
							children: [
								{
									path: 'commonGBOverview',
									component: CommonGBOverview
								},
								{
									path: 'commonGBCheck',
									component: CommonGBCheck
								},
								{
									path: 'commonGBCheckName',
									component: CommonGBCheckName
								},
								{
									path: 'schoolSignalNameDetails',
									name: 'SchoolSignalNameDetails',
									component: SchoolSignalNameDetails
								},
								{
									path: 'commonGBCheckABN',
									component: CommonGBCheckABN
								}
							]
						},
						{
							path: 'internetOfThings',
							name: 'InternetOfThings',
							component: InternetOfThings,
							meta:{ title:'物联网'},
							redirect: '/groupBusiness/internetOfThings/commonGBOverview',
							children: [
								{
									path: 'commonGBOverview',
									component: CommonGBOverview
								},
								{
									path: 'commonGBCheck',
									component: CommonGBCheck
								},
								{
									path: 'commonGBCheckName',
									component: CommonGBCheckName
								},
								{
									path: 'internetOfThingsNameDetails',
									name: 'InternetOfThingsNameDetails',
									component: InternetOfThingsNameDetails
								},
								{
									path: 'commonGBCheckABN',
									component: CommonGBCheckABN
								}
							]
						}
					]
				},
				{
					path: 'familyBusiness',
					name: 'FamilyBusiness',
					component: FamilyBusiness,
					redirect: '/familyBusiness/familyBroadband',
					children: [
						{
							path: 'familyBroadband',
							name: 'FamilyBroadband',
							component: FamilyBroadband,
							redirect: '/familyBusiness/familyBroadband/overviewFB',
							children: [
								{
									path: 'overviewFB',
									name: 'OverviewFB',
									component: OverviewFB
								},
								{
									path: 'familyBroadbandServiceCheck',
									name: 'FamilyBroadbandServiceCheck',
									component: FamilyBroadbandServiceCheck
								},
								{
									path: 'broadbandServiceCheckN',
									name: 'BroadbandServiceCheckN',
									component: BroadbandServiceCheckN
								},
								{
									path: 'familyBroadbandStatusCheck',
									name: 'FamilyBroadbandStatusCheck',
									component: FamilyBroadbandStatusCheck
								},
								{
									path: 'broadbandStatusCheckABN',
									name: 'BroadbandStatusCheckABN',
									component: BroadbandStatusCheckABN
								}
							]
						},
						{
							path: 'familyKinship',
							name: 'FamilyKinship',
							component: FamilyKinship,
							redirect: '/familyBusiness/familyKinship/overviewFK',
							children: [
								{
									path: 'overviewFK',
									name: 'OverviewFK',
									component: OverviewFK
								},
								{
									path: 'familyKinshipCheck',
									name: 'FamilyKinshipCheck',
									component: FamilyKinshipCheck
								},
								{
									path: 'familyKinshipCheckABN',
									name: 'FamilyKinshipCheckABN',
									component: FamilyKinshipCheckABN
								}
							]
						}
					]
				},
				{
					path: 'personalBusiness',
					name: 'PersonalBusiness',
					component: PersonalBusiness,
					redirect: '/personalBusiness/crmMail139',
					children: [
						{
							path: 'crmMail139',
							name: 'CrmMail139',
							component: CrmMail139,
							meta:{ title:'CRM-139邮箱稽核'},
							redirect: '/personalBusiness/crmMail139/commonPBOverview',
							children: [
								{
									path: 'commonPBOverview',
									component: CommonPBOverview
								},
								{
									path: 'commonPBABN',
									component: CommonPBABN
								},
                {
                  path: 'commonPBCheck',
                  component: CommonPBCheck
                }
							]
						},
						{
							path: 'crmMisc',
							name: 'CrmMisc',
							component: CrmMisc,
							meta:{ title:'CRM-MISC稽核'},
							redirect: '/personalBusiness/crmMisc/commonPBOverview',
							children: [
								{
									path: 'commonPBOverview',
									component: CommonPBOverview
								},
								{
									path: 'commonPBABN',
									component: CommonPBABN
								},
                {
                  path: 'commonPBCheck',
                  component: CommonPBCheck
                }
							]
						},
						{
							path: 'mobileVideo',
							name: 'MobileVideo',
							component: MobileVideo,
							meta:{ title:'手机视频'},
							redirect: '/personalBusiness/mobileVideo/commonPBOverview',
							children: [
								{
									path: 'commonPBOverview',
									component: CommonPBOverview
								},
								{
									path: 'commonPBABN',
									component: CommonPBABN
								},
                {
                  path: 'commonPBCheck',
                  component: CommonPBCheck
                }
							]
						},
						{
							path: 'crmMcas',
							name: 'CrmMcas',
							component: CrmMcas,
							meta:{ title:'CRM-MCAS稽核'},
							redirect: '/personalBusiness/crmMcas/commonPBOverview',
							children: [
								{
									path: 'commonPBOverview',
									component: CommonPBOverview
								},
								{
									path: 'commonPBABN',
									component: CommonPBABN
								},
                {
                  path: 'commonPBCheck',
                  component: CommonPBCheck
                }
							]
						},
						{
							path: 'localWlan',
							name: 'LocalWlan',
							component: LocalWlan
						},
						{
							path: 'simMaxHongKong',
							name: 'SimMaxHongKong',
							component: SimMaxHongKong
						},
						{
							path: 'crmWlan',
							name: 'CrmWlan',
							component: CrmWlan,
							meta:{ title:'CRM-WLAN稽核'},
							redirect: '/personalBusiness/crmWlan/commonPBOverview',
							children: [
								{
									path: 'commonPBOverview',
									component: CommonPBOverview
								},
								{
									path: 'commonPBABN',
									component: CommonPBABN
								},
                {
                  path: 'commonPBCheck',
                  component: CommonPBCheck
                }
							]
						},
						{
							path: 'viceNumber',
							name: 'ViceNumber',
							component: ViceNumber
						}
					]
				},
				{
					path: 'dataAnalysis',
					name: 'DataAnalysis',
					component: DataAnalysis
				},
				{
					path: 'dataRepair',
					name: 'DataRepair',
					component: DataRepair
				},
				{
					path: 'dispatchManage',
					name: 'DispatchManage',
					component: DispatchManage
				},
				{
					path: 'ruleBaseManage',
					name: 'RuleBaseManage',
					component: RuleBaseManage
				},
				{
					path: 'securityManage',
					name: 'SecurityManage',
					component: SecurityManage
				},
				{
					path: 'dataQualityPlatform',
					name: 'DataQualityPlatform',
					component: DataQualityPlatform
				},
				{
					path: 'comparisonReport',
					name: 'ComparisonReport',
					component: ComparisonReport
				},
				{
					path: 'dayBillAnalysis',
					name: 'DayBillAnalysis',
					component: DayBillAnalysis,
					redirect: '/dayBillAnalysis/overviewDBA',
					children: [
						{
							path: 'overviewDBA',
							name: 'OverviewDBA',
							component: OverviewDBA
						},
						{
							path: 'dayBillAnalysisDetails',
							name: 'DayBillAnalysisDetails',
							component: DayBillAnalysisDetails
						}
					]
				}
			]
		}
	]
})
