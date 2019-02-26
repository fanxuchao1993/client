import { sendRequest } from '@/api/Request'

// 概览(平台)和重点业务治理信息查询
export const getResultList = (params) => sendRequest({method:'get',url:'/lbdp-server/overViewReport/getResultList.do',params:params})

//多方稽核报表汇总
export const getAuditReportSummaryList = (params) => sendRequest({method:'get',url:'/lbdp-server/multiAuditReport/getResultSum.do',params:params})

//多方稽核差异数量按订购查询
export const getDifferenceCountList = (params) => sendRequest({method:'get',url:'/lbdp-server/multiAuditReport/getDifferenceSumOrder.do',params:params})

//多方稽核差异数量按属性查询
export const getAuditDifferenceCountList = (params) => sendRequest({method:'get',url:'/lbdp-server/multiAuditReport/getDifferenceSum.do',params:params})

//多方稽核差异数量按订购查询明细typeA
export const getAuditTypeADetail = (params) => sendRequest({method:'get',url:'/lbdp-server/multiAuditReport/getDifferenceDetailOrder.do',params:params})

//多方稽核差异数量按订购查询明细typeB
export const getAuditTypeBDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/multiAuditReport/getDifferenceDetail.do',params:params})

//获取基础业务稽核-CRM-BOSS日增量稽核、CRM-HLR稽核、CRM-BOSS稽核列表
export const getCRMList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getResultSum.do',params:params})

//基础业务稽核-CRM-BOSS日增量稽核A单边、B单边、不一致
export const getBossAddList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailBossAdd.do',params:params})

//CRM-BOSS日增量稽核->查看功能列表
export const getClassSumList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getClassSum.do',params:params})

//CRM-HLR稽核A单边、B单边、不一致
export const getHLRDetailList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetail.do',params:params})

//CRM-HLR稽核->查看
export const getClassSumTypesList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getClassSumTypes.do',params:params})

//CRM-BOSS稽核->A单边、B单边、不一致
export const getDetailBossList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailBoss.do',params:params})

//集团短彩业务->概览
export const getGroupBusinessShort = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/groupBusinessShortRing.do',params:params})

//集团短彩业务->稽核点名称
export const getGroupBusinessAuditPoint = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/groupBusinessAuditPoint.do',params:params})

//获取业务类型
export const getBusinessType = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getBusinessType.do',params:params})

//集团短彩业务->稽核点名称->明细数据
export const getGroupBusinessDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailGroupBusiness.do',params:params})

//集团短彩业务->不一致条数
export const getPropertyDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/propertyDetail.do',params:params})

//集团短彩业务->查看
export const getResultSumType = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getResultSumType.do',params:params})

//重点业务差异分析汇总
export const getDifferCustBlocSum = (params) => sendRequest({method:'get',url:'/lbdp-server/differAnalyseReport/getDifferCustBlocSum.do',params:params})

//日账分析->总览
export const getDayBillAnalysisList = (params) => sendRequest({method:'get',url:'/lbdp-server/feeDayAnalysisReport/getFeeDayAnalysisSum.do',params:params})

//日账分析->总览>详情
export const getDayBillAnalysisDetails = (params) => sendRequest({method:'get',url:'/lbdp-server/feeDayAnalysisReport/getFeeDayAnalysisSubject.do',params:params})

//集团短彩业务->查看->A单边、B单边、不一致
export const getDetailStatus = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailStatus.do',params:params})