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
import Overview from '@/pages/auditResults/overView/Overview'

//概述>稽核平台
import CommSchool from '@/pages/auditResults/overView/CommSchool'

//概述>稽核平台>查看
import overViewList from '@/pages/auditResults/overView/overViewList'

//概述>业务治理>集团业务
import ZhiBusiness from '@/pages/auditResults/overView/ZhiBusiness'

//概述>业务治理>非集团业务
import FeiJiTuanBusiness from '@/pages/auditResults/overView/FeiJiTuanBusiness'

//概述>业务治理>非集团业务>明细
import FeiJiTuanMingXi from '@/pages/auditResults/overView/FeiJiTuanMingXi'

//概述>业务治理>非集团业务>汇总
import FeiJiTuanHuiZong from '@/pages/auditResults/overView/FeiJiTuanHuiZong'

//概述>业务治理>非集团业务>AB不一致
import FeiJiTuanABU from '@/pages/auditResults/overView/FeiJiTuanABU'



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
//集团业务稽核>集团短彩信>A单边条数
import GroupShortMessageA from '@/pages/groupBusiness/groupShortMessage/GroupShortMessageA'
//集团业务稽核>集团短彩信>B单边条数
import GroupShortMessageB from '@/pages/groupBusiness/groupShortMessage/GroupShortMessageB'
//集团业务稽核>集团短彩信>CRM参与比对条数
import GroupShortMessageCrm from '@/pages/groupBusiness/groupShortMessage/GroupShortMessageCrm'
//集团业务稽核>集团短彩信>平台（参与比对条数）
import GroupShortMessagePlate from '@/pages/groupBusiness/groupShortMessage/GroupShortMessagePlate'


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
//个人业务稽核>本地WLAN>总览
import OverviewLW from '@/pages/personalBusiness/localWlan/OverviewLW'
//个人业务稽核>本地WLAN>总览>查看
import LocalWlanCheck from '@/pages/personalBusiness/localWlan/LocalWlanCheck'
//个人业务稽核>本地WLAN>总览>查看>A单边B单边不一致
import LocalWlanCheckABN from '@/pages/personalBusiness/localWlan/LocalWlanCheckABN'
//个人业务稽核>本地WLAN>总览>分析
import LocalWlanAnalysis from '@/pages/personalBusiness/localWlan/LocalWlanAnalysis'

//个人业务稽核>香港一卡多号
import SimMaxHongKong from '@/pages/personalBusiness/simMaxHongKong/SimMaxHongKong'
//个人业务稽核>香港一卡多号>总览
import OverviewSMHK from '@/pages/personalBusiness/simMaxHongKong/OverviewSMHK'
//个人业务稽核>香港一卡多号>总览>查看
import SimMaxHKCheck from '@/pages/personalBusiness/simMaxHongKong/SimMaxHKCheck'
//个人业务稽核>香港一卡多号>总览>查看>A单边B单边不一致
import SimMaxHKCheckABN from '@/pages/personalBusiness/simMaxHongKong/SimMaxHKCheckABN'

//个人业务稽核>CRM-WLAN稽核
import CrmWlan from '@/pages/personalBusiness/crmWlan/CrmWlan'

//个人业务稽核>副号码
import ViceNumber from '@/pages/personalBusiness/viceNumber/ViceNumber'
//个人业务稽核>副号码>总览
import OverviewVN from '@/pages/personalBusiness/viceNumber/OverviewVN'
//个人业务稽核>副号码>总览>查看
import ViceNumberCheck from '@/pages/personalBusiness/viceNumber/ViceNumberCheck'
//个人业务稽核>副号码>总览>查看>A单边B单边不一致
import ViceNumberCheckABN from '@/pages/personalBusiness/viceNumber/ViceNumberCheckABN'

//个人业务稽核通用>总览
import CommonPBOverview from '@/pages/personalBusiness/CommonPBOverview'
//个人业务稽核通用>总览>A单边B单边不一致
import CommonPBABN from '@/pages/personalBusiness/CommonPBABN'
//个人业务稽核通用>总览>查看
import CommonPBCheck from '@/pages/personalBusiness/CommonPBCheck'
//个人业务稽核通用>总览>查看>业务类型
import CommonPBCheckType from '@/pages/personalBusiness/CommonPBCheckType'
//个人业务稽核通用>总览>查看>业务类型>A单边B单边不一致
import CommonPBCheckTypeABN from '@/pages/personalBusiness/CommonPBCheckTypeABN'

/********************************************** 数据分析 **********************************************/


//数据分析
import DataAnalysis from '@/pages/dataAnalysis/DataAnalysis'
//数据分析>数据分析报表
import DataAnalysisReport from '@/pages/dataAnalysis/dataAnalysisReport/DataAnalysisReport'
//数据分析>增量分析报表
import IncrementAnalyse from '@/pages/dataAnalysis/IncrementAnalyse'
//数据分析>数据趋势分析
import ChainList from '@/pages/dataAnalysis/ChainList'
//数据分析>数据分析报表
import DefferenceDataList from '@/pages/dataAnalysis/dataAnalysisReport/DefferenceDataList'
//数据分析>数据分析报表>差异类型
import DefferenceDataListDef from '@/pages/dataAnalysis/dataAnalysisReport/DefferenceDataListDef'
//数据分析>数据分析报表>差异类型>A单边、B单边
import DefferenceDataListAB from '@/pages/dataAnalysis/dataAnalysisReport/DefferenceDataListAB'
//数据分析>数据分析报表>差异类型>不一致
import DefferenceDataListU from '@/pages/dataAnalysis/dataAnalysisReport/DefferenceDataListU'
//数据分析>数据分析报表>差异类型>不一致>时间分类
import DefferenceDataListTime from '@/pages/dataAnalysis/dataAnalysisReport/DefferenceDataListTime'
//数据分析>数据分析报表>差异类型>不一致>时间分类-差异数据业务分析
import DefferenceDataListDefDetail from '@/pages/dataAnalysis/dataAnalysisReport/DefferenceDataListDefDetail'
//数据分析>数据分析报表>差异类型>不一致>时间分类-差异数据业务分析-业务明细展现
import DefferenceDataListEnd from '@/pages/dataAnalysis/dataAnalysisReport/DefferenceDataListEnd'
//数据分析>环比分析报表
import ChainListHuanbi from '@/pages/dataAnalysis/ChainListHuanbi'
//数据分析>稽核结果标签
import AuditResultLable from '@/pages/dataAnalysis/auditResultLable/AuditResultLable'
//数据分析>稽核结果标签>详情
import AuditResultLableMain from '@/pages/dataAnalysis/auditResultLable/AuditResultLableMain'
//数据分析>稽核结果标签
import AuditResultLableDetail from '@/pages/dataAnalysis/auditResultLable/AuditResultLableDetail'
//数据分析>稽核结果标签>填写
import AuditResultLableFillIn from '@/pages/dataAnalysis/auditResultLable/AuditResultLableFillIn'
//数据分析>稽核结果标签>填写>选择
import AuditResultLableChoose from '@/pages/dataAnalysis/auditResultLable/AuditResultLableChoose'
//数据分析>数据追溯
import DataTraceable from '@/pages/dataAnalysis/DataTraceable'
//数据分析>数据平衡性
import DataBalance from '@/pages/dataAnalysis/DataBalance'
//数据分析>基础分析
import BaseAnalysis from '@/pages/dataAnalysis/baseAnalysis/BaseAnalysis'
//数据分析>基础分析主页面
import BaseAnalysisMain from '@/pages/dataAnalysis/baseAnalysis/BaseAnalysisMain'
//数据分析>基础分析主页面>重点客户占比
import BaseAnalysisCust from '@/pages/dataAnalysis/baseAnalysis/BaseAnalysisCust'

//数据分析>集团分析
import GroupAnalysis from '@/pages/dataAnalysis/groupAnalysis/GroupAnalysis'
//数据分析>集团分析主页面
import GroupAnalysisMain from '@/pages/dataAnalysis/groupAnalysis/GroupAnalysisMain'
//数据分析>集团分析主页面>重点客户占比
import GroupAnalysisCust from '@/pages/dataAnalysis/groupAnalysis/GroupAnalysisCust'
//数据分析>管控地图
import ControlMap from '@/pages/dataAnalysis/ControlMap'
//数据分析>数据分析
import AutomaticFetch from '@/pages/dataAnalysis/AutomaticFetch'


/********************************************** 数据修复 **********************************************/
//数据修复
import DataRepair from '@/pages/dataRepair/DataRepair'
//数据修复>修复结果总览
import RepairResultOverView from '@/pages/dataRepair/RepairResultOverView'
//数据修复>修复结果总览>接口调用失败条数
import InterFaceCallFailCount from '@/pages/dataRepair/InterFaceCallFailCount'
//数据修复>23G功能修复
import FeaturesRepair from '@/pages/dataRepair/FeaturesRepair'
//数据修复>国漫修复
import GuoManRepair from '@/pages/dataRepair/GuoManRepair'
//数据修复>4G功能修复
import FourGFeaturesRepair from '@/pages/dataRepair/FourGFeaturesRepair'
//数据修复>23G在线计费修复
import TwoThreeGOnlineBillingRepair from '@/pages/dataRepair/TwoThreeGOnlineBillingRepair'
//数据修复>4G在线计费修复
import FourGOnlineBillingRepair from '@/pages/dataRepair/FourGOnlineBillingRepair'
//数据修复>234G协同修复
import TwoThreeGCollaborationRepair from '@/pages/dataRepair/TwoThreeGCollaborationRepair'
//数据修复>4G国漫修复
import FourGGuoManRepair from '@/pages/dataRepair/FourGGuoManRepair'
//数据修复>手机视频
import PhoneVideoRepair from '@/pages/dataRepair/PhoneVideoRepair'
//数据修复>进度监控
import ProgressMonitoring from '@/pages/dataRepair/ProgressMonitoring'
//数据修复>修复日志监控
import RepairLogMonitoring from '@/pages/dataRepair/RepairLogMonitoring'
//数据修复>接口日志
import InterFaceLog from '@/pages/dataRepair/InterFaceLog'
//数据修复>任务日志
import TaskLog from '@/pages/dataRepair/TaskLog'
//数据修复>MCAS数据修复报表
import MCASDataRepairReport from '@/pages/dataRepair/mCASDataRepairReport/MCASDataRepairReport'
//数据修复>MCAS数据修复报表
import MCASDataRepairReportMain from '@/pages/dataRepair/mCASDataRepairReport/MCASDataRepairReportMain'
//数据修复>MCAS数据修复报表--查看
import MCASDetail from '@/pages/dataRepair/mCASDataRepairReport/MCASDetail'
//数据修复>MCAS数据修复报表--查看--已修复记录数和修复失败记录数
import MCASDetailRecord from '@/pages/dataRepair/mCASDataRepairReport/MCASDetailRecord'
/********************************************** 调度管理 **********************************************/
//调度管理
import DispatchManage from '@/pages/dispatchManage/DispatchManage'
//调度管理>流程配置
import ProcessConfiguration from '@/pages/dispatchManage/ProcessConfiguration'
//调度管理>流程监控
import ProcessMonitoring from '@/pages/dispatchManage/ProcessMonitoring'
//调度管理>脚本日志
import ScriptLog from '@/pages/dispatchManage/ScriptLog'
//调度管理>数据导入
import DataImport from '@/pages/dispatchManage/DataImport'






/**********************************************规则库管理**********************************************/
//规则库管理
import RuleBaseManage from '@/pages/ruleBaseManage/RuleBaseManage'
//规则库管理>白名单管理
import WhiteList from '@/pages/ruleBaseManage/WhiteList'
//规则库管理>规则管理
import RuleManage from '@/pages/ruleBaseManage/RuleManage'
//规则库管理>采集规则
import CollectionRule from '@/pages/ruleBaseManage/CollectionRule'
//规则库管理>预处理规则
import PretreatmentRule from '@/pages/ruleBaseManage/PretreatmentRule'
//规则库管理>映射规则
import MappingRule from '@/pages/ruleBaseManage/MappingRule'
//规则库管理>值表规则
import ValueTableRule from '@/pages/ruleBaseManage/ValueTableRule'
//规则库管理>稽核规则
import AuditTopic from '@/pages/ruleBaseManage/AuditTopic'
//规则库管理>局数据刷新
import BureauDataRefresh from '@/pages/ruleBaseManage/BureauDataRefresh'
//规则库管理>文档查询
import DocumentQuery from '@/pages/ruleBaseManage/DocumentQuery'
//规则库管理>文档管理
import DocumentManege from '@/pages/ruleBaseManage/DocumentManege'
//规则库管理>告警规则
import AlarmRule from '@/pages/ruleBaseManage/AlarmRule'
//规则库管理>数据标签
import DataLableManege from '@/pages/ruleBaseManage/DataLableManege'
//规则库管理>业务标签
import BusiLableManege from '@/pages/ruleBaseManage/BusiLableManege'










/********************************************** 安全管理 **********************************************/
//安全管理
import SecurityManage from '@/pages/securityManage/SecurityManage'
//安全管理>用户管理
import UserManage from '@/pages/securityManage/UserManage'
//安全管理>角色管理
import RoleManagement from '@/pages/securityManage/RoleManagement'
//安全管理>应用系统管理
import ApplicationManagement from '@/pages/securityManage/ApplicationManagement'
//安全管理>ETL权限管理
import ETLManagement from '@/pages/securityManage/ETLManagement'
//安全管理>系统资源管理
import SystemResourseManagement from '@/pages/securityManage/SystemResourseManagement'
//安全管理>日志管理
import LoggerManagement from '@/pages/securityManage/LoggerManagement'
//安全管理>用户扩展属性管理
import UserExpansionManagement from '@/pages/securityManage/UserExpansionManagement'
//安全管理>公告管理
import NoticeManagement from '@/pages/securityManage/NoticeManagement'
//安全管理>源资源管理
import SourseResourseManagement from '@/pages/securityManage/SourseResourseManagement'
//安全管理>数据平台中心
import DataPlateCenter from '@/pages/securityManage/DataPlateCenter'
//安全管理>告警日志
import AlarmLogger from '@/pages/securityManage/AlarmLogger'




/**********************************************数据质量平台**********************************************/
//数据质量平台
import DataQualityPlatform from '@/pages/dataQualityPlatform/DataQualityPlatform'
//数据质量平台
import DataQualityPlatformDetail from '@/pages/dataQualityPlatform/DataQualityPlatformDetail'

/**********************************************三方对比报表**********************************************/
//三方对比报表
import ComparisonReport from '@/pages/comparisonReport/ComparisonReport'
//三方对比报表
import ThreeComparisonResult from '@/pages/comparisonReport/ThreeComparisonResult'
//三方对比报表>按照数量数量
import ThreeComparisonResultDetail from '@/pages/comparisonReport/ThreeComparisonResultDetail'
//三方对比报表>按照数量查看
import ThreeComparisonResultLook from '@/pages/comparisonReport/ThreeComparisonResultLook'
//三方对比报表>查看>业务类型
import ThreeComparisonResultBusi from '@/pages/comparisonReport/ThreeComparisonResultBusi'
//三方对比报表>查看>数量
import ThreeComparisonResultNum from '@/pages/comparisonReport/ThreeComparisonResultNum'

/********************************************** 日账分析 **********************************************/
//日账分析
import DayBillAnalysis from '@/pages/dayBillAnalysis/DayBillAnalysis'
//日账分析>总览
import OverviewDBA from '@/pages/dayBillAnalysis/OverviewDBA'
//日账分析>总览>详情
import DayBillAnalysisDetails from '@/pages/dayBillAnalysis/DayBillAnalysisDetails'

import OverviewFBBusiness from '@/pages/auditResults/overView/OverviewFBBusiness'
import OverviewFKBusiness from '@/pages/auditResults/overView/OverviewFKBusiness'
import OverviewGSMBusiness from '@/pages/auditResults/overView/OverviewGSMBusiness'
import CommonGBOverviewBusiness from '@/pages/auditResults/overView/CommonGBOverviewBusiness'
import OverviewCBABusiness from '@/pages/auditResults/overView/OverviewCBABusiness'
import OverviewCHABusiness from '@/pages/auditResults/overView/OverviewCHABusiness'
import OverviewLWBusiness from '@/pages/auditResults/overView/OverviewLWBusiness'
import OverviewSMHKBusiness from '@/pages/auditResults/overView/OverviewSMHKBusiness'
import CommonPBOverviewBusiness from '@/pages/auditResults/overView/CommonPBOverviewBusiness'




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
			children: [{
					path: 'home',
					name: 'Home',
					component: Home,
					redirect: 'home/leaderPage',
					children: [{
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
							path: '/auditResults/overview/commSchool',
							name: 'CommSchool',
							component: CommSchool
						},
						{
							path: '/auditResults/overview/overViewList',
							name: 'overViewList',
							component: overViewList
						},
						{
							path:'/auditResults/overview/zhiBusiness',
							name:'ZhiBusiness',
							component:ZhiBusiness
						},
						{
							path:'/auditResults/overview/feiJiTuanBusiness',
							name:'FeiJiTuanBusiness',
							component:FeiJiTuanBusiness
						},
						{
							path:'/auditResults/overview/feiJiTuanMingXi',
							name:'FeiJiTuanMingXi',
							component:FeiJiTuanMingXi
						},
						{
							path:'/auditResults/overview/feiJiTuanHuiZong',
							name:'FeiJiTuanHuiZong',
							component:FeiJiTuanHuiZong
						},
						{
							path:'/auditResults/overview/feiJiTuanABU',
							name:'FeiJiTuanABU',
							component:FeiJiTuanABU
						},
						{
							path:'/auditResults/overview/overviewFBBusiness',
							name:'OverviewFBBusiness',
							component:OverviewFBBusiness
						},
						{
							path:'/auditResults/overview/overviewFKBusiness',
							name:'OverviewFKBusiness',
							component:OverviewFKBusiness
						},
						{
							path:'/auditResults/overview/overviewGSMBusiness',
							name:'OverviewGSMBusiness',
							component:OverviewGSMBusiness
						},
						{
							path:'/auditResults/overview/commonGBOverviewBusiness',
							name:'CommonGBOverviewBusiness',
							component:CommonGBOverviewBusiness
						},
						{
							path:'/auditResults/overview/overviewCBABusiness',
							name:'OverviewCBABusiness',
							component:OverviewCBABusiness
						},
						{
							path:'/auditResults/overview/overviewCHABusiness',
							name:'OverviewCHABusiness',
							component:OverviewCHABusiness
						},
						{
							path:'/auditResults/overview/overviewLWBusiness',
							name:'OverviewLWBusiness',
							component:OverviewLWBusiness
						},
						{
							path:'/auditResults/overview/overviewSMHKBusiness',
							name:'OverviewSMHKBusiness',
							component:OverviewSMHKBusiness
						},
						{
							path:'/auditResults/overview/commonPBOverviewBusiness',
							name:'CommonPBOverviewBusiness',
							component:CommonPBOverviewBusiness
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
							children: [{
									path: 'overviewCBI',
									name: 'OverviewCBI',
									component: OverviewCBI
								},
								{
									path: 'crmBossIncrementABN',
									name: 'CrmBossIncrementABN',
									component: CrmBossIncrementABN
								},
								{
									path: 'crmBossIncrementCheck',
									name: 'CrmBossIncrementCheck',
									component: CrmBossIncrementCheck
								},
								{
									path: 'crmBossIncrementCheckDetails',
									name: 'CrmBossIncrementCheckDetails',
									component: CrmBossIncrementCheckDetails
								}
							]
						},
						{
							path: 'crmHlrAudit',
							name: 'CrmHlrAudit',
							component: CrmHlrAudit,
							redirect: '/basicBusiness/crmHlrAudit/overviewCHA',
							children: [{
									path: 'overviewCHA',
									name: 'OverviewCHA',
									component: OverviewCHA
								},
								{
									path: 'crmHlrAuditABN',
									name: 'CrmHlrAuditABN',
									component: CrmHlrAuditABN
								},
								{
									path: 'crmHlrAuditCheck',
									name: 'CrmHlrAuditCheck',
									component: CrmHlrAuditCheck
								},
								{
									path: 'crmHlrCheckBusiness',
									name: 'CrmHlrCheckBusiness',
									component: CrmHlrCheckBusiness
								},
								{
									path: 'crmHlrCheckBusinessABN',
									name: 'CrmHlrCheckBusinessABN',
									component: CrmHlrCheckBusinessABN
								}
							]
						},
						{
							path: 'crmBossAudit',
							name: 'CrmBossAudit',
							component: CrmBossAudit,
							redirect: '/basicBusiness/crmBossAudit/overviewCBA',
							children: [{
									path: 'overviewCBA',
									name: 'OverviewCBA',
									component: OverviewCBA
								},
								{
									path: 'crmBossAuditABN',
									name: 'CrmBossAuditABN',
									component: CrmBossAuditABN
								},
								{
									path: 'crmBossAuditCheck',
									name: 'CrmBossAuditCheck',
									component: CrmBossAuditCheck
								},
								{
									path: 'crmBossCheckBusiness',
									name: 'CrmBossCheckBusiness',
									component: CrmBossCheckBusiness
								},
								{
									path: 'crmBossCheckBusinessABN',
									name: 'CrmBossCheckBusinessABN',
									component: CrmBossCheckBusinessABN
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
					children: [{
							path: 'groupShortMessage',
							name: 'GroupShortMessage',
							component: GroupShortMessage,
							redirect: '/groupBusiness/groupShortMessage/overviewGSM',
							children: [{
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
								},
								{
									path: 'groupShortMessageA',
									name: 'GroupShortMessageA',
									component: GroupShortMessageA
								},
								{
									path: 'groupShortMessageB',
									name: 'GroupShortMessageB',
									component: GroupShortMessageB
								},
								{
									path: 'groupShortMessageCrm',
									name: 'GroupShortMessageCrm',
									component: GroupShortMessageCrm
								},
								{
									path: 'groupShortMessagePlate',
									name: 'GroupShortMessagePlate',
									component: GroupShortMessagePlate
								}
							]
						},
						{
							path: 'groupColorBell',
							name: 'GroupColorBell',
							component: GroupColorBell,
							meta: {
								title: '集团彩铃'
							},
							redirect: '/groupBusiness/groupColorBell/commonGBOverview',
							children: [{
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
							meta: {
								title: '校讯通'
							},
							redirect: '/groupBusiness/schoolSignal/commonGBOverview',
							children: [{
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
							meta: {
								title: '物联网'
							},
							redirect: '/groupBusiness/internetOfThings/commonGBOverview',
							children: [{
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
					children: [{
							path: 'familyBroadband',
							name: 'FamilyBroadband',
							component: FamilyBroadband,
							redirect: '/familyBusiness/familyBroadband/overviewFB',
							children: [{
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
							children: [{
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
					children: [{
							path: 'crmMail139',
							name: 'CrmMail139',
							component: CrmMail139,
							meta: {
								title: 'CRM-139邮箱稽核'
							},
							redirect: '/personalBusiness/crmMail139/commonPBOverview',
							children: [{
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
								},
								{
									path: 'commonPBCheckType',
									component: CommonPBCheckType
								},
								{
									path: 'commonPBCheckTypeABN',
									component: CommonPBCheckTypeABN
								}
							]
						},
						{
							path: 'crmMisc',
							name: 'CrmMisc',
							component: CrmMisc,
							meta: {
								title: 'CRM-MISC稽核'
							},
							redirect: '/personalBusiness/crmMisc/commonPBOverview',
							children: [{
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
								},
								{
									path: 'commonPBCheckType',
									component: CommonPBCheckType
								},
								{
									path: 'commonPBCheckTypeABN',
									component: CommonPBCheckTypeABN
								}
							]
						},
						{
							path: 'mobileVideo',
							name: 'MobileVideo',
							component: MobileVideo,
							meta: {
								title: '手机视频'
							},
							redirect: '/personalBusiness/mobileVideo/commonPBOverview',
							children: [{
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
								},
								{
									path: 'commonPBCheckType',
									component: CommonPBCheckType
								},
								{
									path: 'commonPBCheckTypeABN',
									component: CommonPBCheckTypeABN
								}
							]
						},
						{
							path: 'crmMcas',
							name: 'CrmMcas',
							component: CrmMcas,
							meta: {
								title: 'CRM-MCAS稽核'
							},
							redirect: '/personalBusiness/crmMcas/commonPBOverview',
							children: [{
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
								},
								{
									path: 'commonPBCheckType',
									component: CommonPBCheckType
								},
								{
									path: 'commonPBCheckTypeABN',
									component: CommonPBCheckTypeABN
								}
							]
						},
						{
							path: 'localWlan',
							name: 'LocalWlan',
							component: LocalWlan,
							meta: {
								title: '本地WLAN'
							},
							redirect: '/personalBusiness/localWlan/overviewLW',
							children: [{
									path: 'overviewLW',
									name: 'OverviewLW',
									component: OverviewLW
								},
								{
									path: 'localWlanCheck',
									name: 'LocalWlanCheck',
									component: LocalWlanCheck
								},
								{
									path: 'localWlanCheckABN',
									name: 'LocalWlanCheckABN',
									component: LocalWlanCheckABN
								},
								{
									path: 'localWlanAnalysis',
									name: 'LocalWlanAnalysis',
									component: LocalWlanAnalysis
								}
							]
						},
						{
							path: 'simMaxHongKong',
							name: 'SimMaxHongKong',
							component: SimMaxHongKong,
							meta: {
								title: '香港一卡多号'
							},
							redirect: '/personalBusiness/simMaxHongKong/overviewSMHK',
							children: [{
									path: 'overviewSMHK',
									name: 'OverviewSMHK',
									component: OverviewSMHK
								},
								{
									path: 'simMaxHKCheck',
									name: 'SimMaxHKCheck',
									component: SimMaxHKCheck
								},
								{
									path: 'simMaxHKCheckABN',
									name: 'SimMaxHKCheckABN',
									component: SimMaxHKCheckABN
								}
							]
						},
						{
							path: 'crmWlan',
							name: 'CrmWlan',
							component: CrmWlan,
							meta: {
								title: 'CRM-WLAN稽核'
							},
							redirect: '/personalBusiness/crmWlan/commonPBOverview',
							children: [{
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
								},
								{
									path: 'commonPBCheckType',
									component: CommonPBCheckType
								},
								{
									path: 'commonPBCheckTypeABN',
									component: CommonPBCheckTypeABN
								}
							]
						},
						{
							path: 'viceNumber',
							name: 'ViceNumber',
							component: ViceNumber,
							meta: {
								title: '副号码'
							},
							redirect: '/personalBusiness/viceNumber/overviewVN',
							children: [{
									path: 'overviewVN',
									name: 'OverviewVN',
									component: OverviewVN
								},
								{
									path: 'viceNumberCheck',
									name: 'ViceNumberCheck',
									component: ViceNumberCheck
								},
								{
									path: 'viceNumberCheckABN',
									name: 'ViceNumberCheckABN',
									component: ViceNumberCheckABN
								}
							]
						}
					]
				},
				{
					path: 'dataAnalysis',
					name: 'DataAnalysis',					
					component: DataAnalysis,
					redirect: '/dataAnalysis/IncrementAnalyse',
					children: [
						{
							path: 'dataAnalysisReport',
							name: 'DataAnalysisReport',
							component: DataAnalysisReport,
							redirect: '/dataAnalysis/dataAnalysisReport/defferenceDataList',
							children: [
								{
									path:'defferenceDataList',
									name:'DefferenceDataList',
									component:DefferenceDataList
								},
								{
									path:'defferenceDataListDef',
									name:'DefferenceDataListDef',
									component:DefferenceDataListDef
									
								},
								{
									path:'defferenceDataListAB',
									name:'DefferenceDataListAB',
									component:DefferenceDataListAB
									
								},
								{
									path:'defferenceDataListU',
									name:'DefferenceDataListU',
									component:DefferenceDataListU
									
								},
								{
									path:'defferenceDataListTime',
									name:'DefferenceDataListTime',
									component:DefferenceDataListTime
									
								},
								{
									path:'defferenceDataListDefDetail',
									name:'DefferenceDataListDefDetail',
									component:DefferenceDataListDefDetail
									
								},
								{
									path:'defferenceDataListEnd',
									name:'DefferenceDataListEnd',
									component:DefferenceDataListEnd
									
								}		
							]
						},
						{
							path:'incrementAnalyse',
							name:'IncrementAnalyse',
							component:IncrementAnalyse
						},
						{
							path:'chainList',
							name:'ChainList',
							component:ChainList
						},
						{
							path:'chainListHuanbi',
							name:'ChainListHuanbi',
							component:ChainListHuanbi
						},
						{
							path:'auditResultLable',
							name:'AuditResultLable',
							component:AuditResultLable,
							redirect: '/dataAnalysis/auditResultLable/auditResultLableMain',
							children: [
								{
									path:'auditResultLableFillIn',
									name:'AuditResultLableFillIn',
									component:AuditResultLableFillIn
								},
								{
									path:'auditResultLableChoose',
									name:'AuditResultLableChoose',
									component:AuditResultLableChoose
								},
								{
									path:'auditResultLableMain',
									name:'AuditResultLableMain',
									component:AuditResultLableMain
								},
								{
									path:'auditResultLableDetail',
									name:'AuditResultLableDetail',
									component:AuditResultLableDetail
								}
								
							]
							
						},
						{
							path:'dataTraceable',
							name:'DataTraceable',
							component:DataTraceable
						},
						{
							path:'dataBalance',
							name:'DataBalance',
							component:DataBalance
						},
						{
							path:'baseAnalysis',
							name:'BaseAnalysis',
							component:BaseAnalysis,
							redirect: '/dataAnalysis/baseAnalysis/baseAnalysisMain',
							children: [
								{
									path:'baseAnalysisMain',
									name:'BaseAnalysisMain',
									component:BaseAnalysisMain
								},
								{
									path:'baseAnalysisCust',
									name:'BaseAnalysisCust',
									component:BaseAnalysisCust
								}
								
							]
							
						},
						{
							path:'groupAnalysis',
							name:'GroupAnalysis',
							component:BaseAnalysis,
							redirect: '/dataAnalysis/groupAnalysis/groupAnalysisMain',
							children: [
								{
									path:'groupAnalysisMain',
									name:'GroupAnalysisMain',
									component:GroupAnalysisMain
								},
								{
									path:'groupAnalysisCust',
									name:'GroupAnalysisCust',
									component:GroupAnalysisCust
								}
								
							]
						},
						{
							path: 'controlMap',
							name: 'ControlMap',
							component: ControlMap
						},
						{
							path: 'automaticFetch',
							name: 'AutomaticFetch',
							component: AutomaticFetch
						}
						
						
					]
				},
				{
					path: 'dataRepair',
					name: 'DataRepair',
					component: DataRepair,
					redirect: '/dataRepair/repairResultOverView',
					children: [
						{
							path: 'repairResultOverView',
							name: 'RepairResultOverView',
							component: RepairResultOverView
						},
						{
							path: 'interFaceCallFailCount',
							name: 'InterFaceCallFailCount',
							component: InterFaceCallFailCount
						},
						{
							path: 'featuresRepair',
							name: 'FeaturesRepair',
							component: FeaturesRepair
						},
						{
							path: 'guoManRepair',
							name: 'GuoManRepair',
							component: GuoManRepair
						},
						{
							path: 'fourGFeaturesRepair',
							name: 'FourGFeaturesRepair',
							component: FourGFeaturesRepair
						},
						{
							path: 'twoThreeGOnlineBillingRepair',
							name: 'TwoThreeGOnlineBillingRepair',
							component: TwoThreeGOnlineBillingRepair
						},
						{
							path: 'fourGOnlineBillingRepair',
							name: 'FourGOnlineBillingRepair',
							component: FourGOnlineBillingRepair
						},
						{
							path: 'twoThreeGCollaborationRepair',
							name: 'TwoThreeGCollaborationRepair',
							component: TwoThreeGCollaborationRepair
						},
						{
							path: 'fourGGuoManRepair',
							name: 'FourGGuoManRepair',
							component: FourGGuoManRepair
						},
						{
							path: 'phoneVideoRepair',
							name: 'PhoneVideoRepair',
							component: PhoneVideoRepair
						},
						{
							path: 'progressMonitoring',
							name: 'ProgressMonitoring',
							component: ProgressMonitoring
						},
						{
							path: 'repairLogMonitoring',
							name: 'RepairLogMonitoring',
							component: RepairLogMonitoring
						},
						{
							path: 'interFaceLog',
							name: 'InterFaceLog',
							component: InterFaceLog
						},
						{
							path: 'taskLog',
							name: 'TaskLog',
							component: TaskLog
						},
						{
							path: 'mCASDataRepairReport',
							name: 'MCASDataRepairReport',
							component: MCASDataRepairReport,
							redirect: '/dataRepair/mCASDataRepairReport/mCASDataRepairReportMain',
							children: [
								{
									path:'mCASDataRepairReportMain',
									name:'MCASDataRepairReportMain',
									component:MCASDataRepairReportMain
								},
								{
									path: 'mCASDetail',
									name: 'MCASDetail',
									component: MCASDetail
								},
								{
									path: 'mCASDetailRecord',
									name: 'MCASDetailRecord',
									component: MCASDetailRecord
								}
								
							]
							
						}
						
						
						
					]
				},
				{
					path: 'dispatchManage',
					name: 'DispatchManage',
					component: DispatchManage,
					redirect: '/dispatchManage/ProcessConfiguration',
					children: [
						{
							path:'processConfiguration',
							name:'ProcessConfiguration',
							component:ProcessConfiguration
						},
						{
							path:'processMonitoring',
							name:'ProcessMonitoring',
							component:ProcessMonitoring
						},
						{
							path:'scriptLog',
							name:'ScriptLog',
							component:ScriptLog
						},
						{
							path:'dataImport',
							name:'DataImport',
							component:DataImport
						}
						
						
					]
				},
				{
					path: 'ruleBaseManage',
					name: 'RuleBaseManage',
					component: RuleBaseManage,
					redirect: '/ruleBaseManage/WhiteList',
					children: [
						{
							path:'whiteList',
							name:'WhiteList',
							component:WhiteList
						},
						{
							path:'ruleManage',
							name:'RuleManage',
							component:RuleManage
						},
						{
							path:'collectionRule',
							name:'CollectionRule',
							component:CollectionRule
						},
						{
							path:'pretreatmentRule',
							name:'PretreatmentRule',
							component:PretreatmentRule
						},
						{
							path:'mappingRule',
							name:'MappingRule',
							component:MappingRule
						},
						{
							path:'valueTableRule',
							name:'ValueTableRule',
							component:ValueTableRule
						},
						{
							path:'auditTopic',
							name:'AuditTopic',
							component:AuditTopic
						},
						{
							path:'bureauDataRefresh',
							name:'BureauDataRefresh',
							component:BureauDataRefresh
						},
						{
							path:'documentQuery',
							name:'DocumentQuery',
							component:DocumentQuery
						},
						{
							path:'documentManege',
							name:'DocumentManege',
							component:DocumentManege
						},
						{
							path:'alarmRule',
							name:'AlarmRule',
							component:AlarmRule
						},
						{
							path:'dataLableManege',
							name:'DataLableManege',
							component:DataLableManege
						},
						{
							path:'busiLableManege',
							name:'BusiLableManege',
							component:BusiLableManege
						}
						
						
					]
					
				},
				{
					path: 'securityManage',
					name: 'SecurityManage',
					component: SecurityManage,
					redirect: '/securityManage/UserManage',
					children: [
						{
							path:'userManage',
							name:'UserManage',
							component:UserManage
						},
						{
							path:'roleManagement',
							name:'RoleManagement',
							component:RoleManagement
						},
						{
							path:'applicationManagement',
							name:'ApplicationManagement',
							component:ApplicationManagement
						},
						{
							path:'eTLManagement',
							name:'ETLManagement',
							component:ETLManagement
						},
						{
							path:'systemResourseManagement',
							name:'SystemResourseManagement',
							component:SystemResourseManagement
						},
						{
							path:'loggerManagement',
							name:'LoggerManagement',
							component:LoggerManagement
						},
						{
							path:'userExpansionManagement',
							name:'UserExpansionManagement',
							component:UserExpansionManagement
						},
						{
							path:'noticeManagement',
							name:'NoticeManagement',
							component:NoticeManagement
						},
						{
							path:'sourseResourseManagement',
							name:'SourseResourseManagement',
							component:SourseResourseManagement
						},
						{
							path:'dataPlateCenter',
							name:'DataPlateCenter',
							component:DataPlateCenter
						},
						{
							path:'alarmLogger',
							name:'AlarmLogger',
							component:AlarmLogger
						}
						
					]
				},
				{
					path: 'dataQualityPlatform',
					name: 'DataQualityPlatform',
					component: DataQualityPlatform,
					redirect: '/dataQualityPlatform/dataQualityPlatformDetail',
					children: [
						{
							path:'dataQualityPlatformDetail',
							name:'DataQualityPlatformDetail',
							component:DataQualityPlatformDetail
						}
					]
				},
				{
					path: 'comparisonReport',
					name: 'ComparisonReport',
					component: ComparisonReport,
					redirect: '/comparisonReport/threeComparisonResult',
					children: [
						{
							path:'threeComparisonResult',
							name:'ThreeComparisonResult',
							component:ThreeComparisonResult
						},
						{
							path:'threeComparisonResultDetail',
							name:'ThreeComparisonResultDetail',
							component:ThreeComparisonResultDetail
						},
						{
							path:'threeComparisonResultLook',
							name:'ThreeComparisonResultLook',
							component:ThreeComparisonResultLook
						},
						{
							path:'threeComparisonResultNum',
							name:'ThreeComparisonResultNum',
							component:ThreeComparisonResultNum
						},
						{
							path:'threeComparisonResultBusi',
							name:'ThreeComparisonResultBusi',
							component:ThreeComparisonResultBusi
						}
						
					]
					
				},
				{
					path: 'dayBillAnalysis',
					name: 'DayBillAnalysis',
					component: DayBillAnalysis,
					redirect: '/dayBillAnalysis/overviewDBA',
					children: [{
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