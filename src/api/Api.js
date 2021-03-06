import { sendRequest } from '@/api/Request'

//登陆页登陆
export const getLoginMessage = (params) => sendRequest({method:'get',url:'/lbdp-server/login/loginIsvalid.do',params:params})

//获取登陆人信息
export const userMessage = (params) => sendRequest({method:'get',url:'/lbdp-server/login/getUserMessage.do',params:params})

//修改登录密码
export const validatePassword = (params) => sendRequest({method:'post',url:'/lbdp-server/login/updatePassword.do',params:params})

//退出登陆
export const LogOut = (params) => sendRequest({method:'get',url:'/lbdp-server/login/logOut.do',params:params}) 

// 概览(平台)和重点业务治理信息查询
export const getResultList = (params) => sendRequest({method:'get',url:'/lbdp-server/overViewReport/getResultList.do',params:params})


// 概览(平台)稽核平台明细
export const getCommSchoolResultList = (params) => sendRequest({method:'get',url:'/lbdp-server/commSchool/getResultSum.do',params:params})

// 重点业务治理-治理业务(集团业务)
export const getZhiBusinessList = (params) => sendRequest({method:'get',url:'/lbdp-server/differAnalyseReport/getDifferCustBlocSum.do',params:params})

//重点业务治理-治理业务(非集团业务)
export const getJiTuanBusinessList = (params) => sendRequest({method:'get',url:'lbdp-server/differAnalyseReport/getDifferCustSum.do',params:params})

//重点业务治理-治理业务(非集团业务)>明细
export const getFeiJiTuanMingXiList = (params) => sendRequest({method:'get',url:'lbdp-server/differAnalyseReport/getDifferDetailQuery.do',params:params})

//重点业务治理-治理业务(非集团业务)>汇总
export const getFeiJiTuanHuiZongList = (params) => sendRequest({method:'get',url:'lbdp-server/differAnalyseReport/getDifferTypeSum.do',params:params})

//稽核规则报表
export const getAuditRulesList = (params) => sendRequest({method:'get',url:'/lbdp-server/auditRule/getRuleResult.do',params:params})

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
export const getClassSumList = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/getClassSum.do',params:params})

//CRM-HLR稽核A单边、B单边、不一致
export const getHLRDetailList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetail.do',params:params})

//CRM-HLR稽核->查看
export const getClassSumTypesList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getClassSumTypes.do',params:params})

//CRM-BOSS稽核->A单边、B单边、不一致
export const getDetailBossList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailBoss.do',params:params})

//集团短彩业务->概览
export const getGroupBusinessShort = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/groupBusinessShortRing.do',params:params})

//集团短彩业务->稽核点名称
export const getGroupBusinessAuditPoint = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/groupBusinessAuditPoint.do',params:params})

//获取业务类型
export const getBusinessType = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getBusinessType.do',params:params})
export const getBusinessType2 = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getBusinessType2.do',params:params})


//集团短彩业务->稽核点名称->明细数据
export const getGroupBusinessDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailGroupBusiness.do',params:params})

//集团短彩业务->不一致条数
export const getPropertyDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/propertyDetail.do',params:params})
//集团短彩业务->A单边条数
export const getCrmDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getCrmDetail.do',params:params})
//集团短彩业务->B单边条数
export const getPlateDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getPlateDetail.do',params:params})
//集团短彩业务->CRM参与比对数
export const getcrmCollateDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getcrmCollateDetail.do',params:params})
//集团短彩业务->平台（参与比对条数）
export const getplateCollateDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getplateCollateDetail.do',params:params})
//集团短彩业务->查看
export const getResultSumType = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/getResultSumType.do',params:params})

//重点业务差异分析汇总
export const getDifferCustBlocSum = (params) => sendRequest({method:'get',url:'/lbdp-server/differAnalyseReport/getDifferCustBlocSum.do',params:params})

//日账分析->总览
export const getDayBillAnalysisList = (params) => sendRequest({method:'get',url:'/lbdp-server/feeDayAnalysisReport/getFeeDayAnalysisSum.do',params:params})

//日账分析->总览>详情
export const getDayBillAnalysisDetails = (params) => sendRequest({method:'get',url:'/lbdp-server/feeDayAnalysisReport/getFeeDayAnalysisSubject.do',params:params})

//集团彩铃->查看->业务->总差异数、新增差异数、重复差异数、 A单边、B单边、不一致
export const getColorBellDetail = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/consisZxDetailBlocRing.do',params:params})

//家庭宽带->业务查看->不一致
export const getDetailBusiness = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailBusiness.do',params:params})

//集团短彩业务->查看->A单边、B单边、不一致
export const getDetailStatus = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailStatus.do',params:params})

//本地wlan->查看->A单边、B单边、不一致
export const getDetailWlan = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getDetailWlan.do',params:params})

//本地wlan->套餐分析
export const getResultSumMeal = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getResultSumMeal.do',params:params})

//数据分析->增量分析报表
export const getIncrementAnalyseSum = (params) => sendRequest({method:'get',url:'/lbdp-server/incrementAnalyseReport/getIncrementAnalyseSum.do',params:params})
//数据分析->增量分析报表-部分表头查询
export const toHeaderlist = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/toHeaderlist.do',params:params})
//数据分析->增量分析报表-平台查询
export const getSourceSystemList = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/toSourceSystemList.do',params:params})
//数据分析-> 数据趋势分析
export const getChainList = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/getChainList.do',params:params})
//数据分析-> 数据分析报表
export const getDifferenceDataList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/toDifferenceDataList.do',params:params})
//数据分析-> 数据分析报表->ABU
export const getBusinessList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/toBusinessList.do',params:params})
//数据分析-> 数据分析报表->ABU-业务类型
export const getBusiTypeList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/toBusiTypeList.do',params:params})
//数据分析-> 数据分析报表->ABU-业务类型-用户状态toHeaderlist
export const getUserStateList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/toUserStateList.do',params:params})
//数据分析-> 数据分析报表->ABU-业务类型-用户状态
export const getOrderStatus = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/orderStatus.do',params:params})
//数据分析-> 数据分析报表->ABU-业务类型-时间分类
export const getTimeList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/toTimeList.do',params:params})
//数据分析-> 数据分析报表->ABU-业务类型-时间分类
export const getDifferenceList = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/toDifferenceList.do',params:params})
//数据分析-> 数据分析报表->ABU-业务类型-时间分类-业务明细展现
export const getDetailList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/toDetailList.do',params:params})
//数据分析->环比分析
export const getIncrementAnalyseSumHuanbi = (params) => sendRequest({method:'get',url:'/lbdp-server/incrementAnalyseReport/getIncrementAnalyseSum.do',params:params})
//数据分析->稽核结果标签
export const getLabelSum = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getLabelSum.do',params:params})
//数据分析->稽核结果标签>编写
export const getLabelOppRelation = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getLabelOppRelation.do',params:params})
//数据分析->稽核结果标签>编写>选择
export const getLabelQuery = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/getLabelQuery.do',params:params})
//数据分析->稽核结果标签>编写>选择>保存
export const getSaveLabel = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/getSaveLabel.do',params:params})

//数据分析->数据追溯
export const doListComResult = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/doListComResult.do',params:params})
//数据分析->数据平衡性-稽核日期
export const auditDateList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/auditDateList.do',params:params})
//数据分析->数据平衡性-专题
export const topicNameList = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/topicNameList.do',params:params})
//数据分析->数据平衡性-主页数据
export const doListDataBalance = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/doListDataBalance.do',params:params})
//基础分析->主页面数据
export const getBaseDifferAnalyseSum = (params) => sendRequest({method:'get',url:'/lbdp-server/baseDifferAnalyseReport/getBaseDifferAnalyseSum.do',params:params})
//基础分析->主页面数据->重点客户数
export const getGroupEmphasisCustmer = (params) => sendRequest({method:'get',url:'/lbdp-server/groupDifferAnalyseReport/getGroupEmphasisCustmer.do',params:params})
//集团分析->主页面数据
export const getGroupDifferAnalyseSum = (params) => sendRequest({method:'get',url:'/lbdp-server/groupDifferAnalyseReport/getGroupDifferAnalyseSum.do',params:params})

//数据分析->管控地图
export const mapTree = (params) => sendRequest({method:'get',url:'/lbdp-server/controlMap/mapTree.do',params:params})


//数据修复->修复结果总览
export const getRepairResultOverView = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/getRepairReport.do',params:params})
//数据修复->23G功能修复
export const getResult = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/getResult.do',params:params})
//数据修复->23G功能修复>查询
export const getResultRepair = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/getResultRepair.do',params:params})
//数据修复->23G功能修复>验证
export const repairCheck = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/repairCheck.do',params:params})
//数据修复->23G功能修复>修复
export const repair = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/repair.do',params:params})
//数据修复->23G功能修复>批量修复
export const passelRepairSet = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/passelRepairSet.do',params:params})
//数据修复->23G功能修复>查询修复数
export const checkRepair = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/checkRepair.do',params:params})
//数据修复->23G功能修复>保存批量修复设置
export const saveRepair = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/saveRepair.do',params:params})
//数据修复->23G功能修复>批量验证
export const passelCheckSet = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/passelCheckSet.do',params:params})
//数据修复->23G功能修复>查询验证数
export const checkNumber = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/checkNumber.do',params:params})
//数据修复->23G功能修复>保存验证设置
export const saveCheck = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/saveCheck.do',params:params})
//数据修复->修复日志监控
export const getRepairLog = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/getRepairLog.do',params:params})
//数据修复->MCAS数据修复日志
export const auditList = (params) => sendRequest({method:'get',url:'/lbdp-server/dataRepair/auditList.do',params:params})
//数据修复->MCAS数据修复日志-查看
export const getClassSumTypes = (params) => sendRequest({method:'post',url:'/lbdp-server/dataRepair/getClassSumTypes.do',params:params})
//数据修复->MCAS数据修复日志-查看-已修复记录数和未修复记录数
export const getDetail = (params) => sendRequest({method:'post',url:'/lbdp-server/dataRepair/getDetail.do',params:params})

//规则库管理->白名单管理
export const whiteList = (params) => sendRequest({method:'get',url:'/lbdp-server/controlMap/whiteList.do',params:params})
//规则库管理->白名单管理>保存白名单信息
export const saveWhite = (params) => sendRequest({method:'post',url:'/lbdp-server/controlMap/saveWhite.do',params:params})
//规则库管理->白名单管理>删除白名单信息
export const delWhite = (params) => sendRequest({method:'get',url:'/lbdp-server/controlMap/delWhite.do',params:params},{responseType: 'arraybuffer'})
//规则库管理->白名单管理>下载白名单导入模板
export const downLoadBillListModel = (params) => sendRequest({method:'post',url:'/lbdp-server/controlMap/downLoadBillListModel.do',params:params})

//安全管理->告警管理
export const getSumList = (params) => sendRequest({method:'get',url:'/lbdp-server/controlMap/getSumList.do',params:params})

//三方比对报表->三方比对结果查询
export const getCompareSum = (params) => sendRequest({method:'get',url:'/lbdp-server/controlMap/getCompareSum.do',params:params})
//三方比对报表->三方比对结果查询
export const getDetailThreeComparison = (params) => sendRequest({method:'post',url:'/lbdp-server/controlMap/getDetailThreeComparison.do',params:params})
//三方比对报表->三方比对结果查询>查看
export const getClassSumTypesThreeComparison = (params) => sendRequest({method:'get',url:'/lbdp-server/controlMap/getClassSumTypes.do',params:params})













export const businessType = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/businessType.do',params:params})
//按照系统来源获取业务类型

export const exportOverViewGSM = (params) => sendRequest({method:'get',url:'/lbdp-server/baseBusiness/exportOverViewGSM.do',params:params})
export const testPost = (params) => sendRequest({method:'post',url:'/lbdp-server/baseBusiness/testPost.do',params:params})


