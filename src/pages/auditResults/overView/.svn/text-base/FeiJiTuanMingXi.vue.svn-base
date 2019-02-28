<!--稽核规则-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/overview'}">稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/overview'}">概览</el-breadcrumb-item>
			  	<el-breadcrumb-item :to="{path:'/auditResults/overview/FeiJiTuanBusiness'}">治理业务</el-breadcrumb-item>
			  	<el-breadcrumb-item>明细</el-breadcrumb-item>
			  <!--	<el-breadcrumb-item>{{currentTab}}</el-breadcrumb-item>-->
			</el-breadcrumb>
		</div>
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>明细
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="查询"  @click="getList2"><i class="iconfont icon-search"></i>查询</span>
				<el-select v-model="value" placeholder="增存量">
				    <el-option
				      	v-for="item in options"
				      	:key="item.newTypeId"
				      	:label="item.name"
				      	:value="item.newTypeId">
				    </el-option>
			  	</el-select>
			   	<div class="clear"></div>				
			</div>
			<el-table
			    :data="tabledata"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="nodeId" label="网元编号" width='100px'></el-table-column>
			    <el-table-column prop="auditDate" label="稽核日期" width='100px'></el-table-column>
			    <el-table-column prop="auditBatch" label="稽核批次"></el-table-column>
			    <el-table-column prop="trend" label="差异类型"></el-table-column>
			    <el-table-column prop="billId" label="手机号码"></el-table-column>
			    <el-table-column prop="userCreateDate" label="入网时间"></el-table-column>
			    <el-table-column prop="userOpId" label="入网渠道"></el-table-column>
			    <el-table-column prop="prodDoneDate" label="受理日期"></el-table-column>
			    <el-table-column prop="prodEffectiveDate" label="生效时间"></el-table-column>
			    <el-table-column prop="prodExpireDate" label="失效时间"></el-table-column>
			    <el-table-column prop="mainOrderEffectiveDate" label="产品生效时间"></el-table-column>
			    <el-table-column prop="mainOrderExpireDate" label="产品失效时间"></el-table-column>

			    <el-table-column prop="serviceId" label="服务类型">
			    	<template slot-scope="scope">
                                    <div v-if="scope.row.serviceId==-3">234G协同</div>
                                    <div v-if="scope.row.serviceId==-4">不限量套餐开4G</div>
                                    <div v-if="scope.row.serviceId==-5">停机开4G</div>
                                    <div v-if="scope.row.serviceId==-6">停机开GPRS</div>
                                    <div v-if="scope.row.serviceId==-7">VPMN功能</div>
                                    <div v-if="scope.row.serviceId==100">2/3G在线计费标识</div>
                                    <div v-if="scope.row.serviceId==101">2/3G/4G在线计费标识</div>
                                    <div v-if="scope.row.serviceId==14">GPRS功能</div>
                                    <div v-if="scope.row.serviceId==37">4G功能</div>
                                    <div v-if="scope.row.serviceId==38">4G国漫</div>
                                    <div v-if="scope.row.serviceId==40">VOLTE功能</div>
                                    <div v-if="scope.row.serviceId==8">国际及港澳台漫游</div>
                    </template>
			    </el-table-column>
			    <el-table-column prop="custType" label="客户类型"></el-table-column>
			    <el-table-column prop="resultType" label="差异类型">
			         <template slot-scope="scope">
			    	                <div v-if="scope.row.resultType=='A'">CRM单边</div>
                                    <div v-if="scope.row.resultType=='B'">平台单边</div>
                                    <div v-if="scope.row.resultType=='U'">不一致</div>
			          </template>
			    </el-table-column>
			    <el-table-column prop="busiType" label="业务类型"></el-table-column>
			    
			    <el-table-column prop="userState" label="当前用户状态">
			    	 <template slot-scope="scope">
			    	                <div v-if="scope.row.userState=='-1'">未知</div>
                                    <div v-if="scope.row.userState=='1'">在用</div>
                                    <div v-if="scope.row.userState=='2'">账务预销</div>
                                    <div v-if="scope.row.userState=='3'">营业预销</div>
                                    <div v-if="scope.row.userState=='4'">预开户</div>
                                    <div v-if="scope.row.userState=='5'">营业销户</div>
                                    <div v-if="scope.row.userState=='6'">帐务销户</div>
                                    <div v-if="scope.row.userState=='7'">套卡销户</div>
                                    <div v-if="scope.row.userState=='8'">保号期</div>
                                    <div v-if="scope.row.userState=='9'">保留期</div>
                                     
			          </template>
			    </el-table-column>
			    
			    <el-table-column prop="preUserState" label="上月用户状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.preUserState=='-1'">未知</div>
                                    <div v-if="scope.row.preUserState=='1'">在用</div>
                                    <div v-if="scope.row.preUserState=='2'">账务预销</div>
                                    <div v-if="scope.row.preUserState=='3'">营业预销</div>
                                    <div v-if="scope.row.preUserState=='4'">预开户</div>
                                    <div v-if="scope.row.preUserState=='5'">营业销户</div>
                                    <div v-if="scope.row.preUserState=='6'">帐务销户</div>
                                    <div v-if="scope.row.preUserState=='7'">套卡销户</div>
                                    <div v-if="scope.row.preUserState=='8'">保号期</div>
                                    <div v-if="scope.row.preUserState=='9'">保留期</div>
                                     
			          </template>
			    </el-table-column>
			    
			    <el-table-column prop="calcUserState" label="用户状态是否变更">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.calcUserState=='Y'">是</div>
                                    <div v-if="scope.row.calcUserState=='N'">否</div>
			          </template>
			    </el-table-column>
			    
			    <el-table-column prop="userOsState" label="当前用户停开机状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.userOsState=='0'">正常</div>
                                    <div v-if="scope.row.userOsState=='1'">申停</div>
                                    <div v-if="scope.row.userOsState=='2'">客服停机</div>
                                    <div v-if="scope.row.userOsState=='3'">黑户停机</div>
                                    <div v-if="scope.row.userOsState=='4'">催U停机</div>
                                    <div v-if="scope.row.userOsState=='5'">催U申停</div>
                                    <div v-if="scope.row.userOsState=='6'">托收欠费</div>
                                    <div v-if="scope.row.userOsState=='7'">担保人停机</div>
                                    <div v-if="scope.row.userOsState=='8'">催U单向停机</div>
                                    <div v-if="scope.row.userOsState=='9'">漫游高额单向停机</div>
                                    <div v-if="scope.row.userOsState=='10'">累计高额单向停机</div>
                                    <div v-if="scope.row.userOsState=='11'">漫游高额停机</div>
                                    <div v-if="scope.row.userOsState=='12'">累计高额停机</div>
                                    <div v-if="scope.row.userOsState=='13'">预注销</div>
                                    <div v-if="scope.row.userOsState=='14'">测试号码到期停机</div>
                                    <div v-if="scope.row.userOsState=='15'">欠费停机</div>
                                    <div v-if="scope.row.userOsState=='16'">申销停</div>
                                    <div v-if="scope.row.userOsState=='17'">自动停机(1860)</div>
                                    <div v-if="scope.row.userOsState=='18'">监控停机(300元)</div>
                                    <div v-if="scope.row.userOsState=='19'">监控停机(1000元)</div>
                                    <div v-if="scope.row.userOsState=='20'">过期停</div>
                                    <div v-if="scope.row.userOsState=='21'">预付费集团欠费停机</div>
                                    <div v-if="scope.row.userOsState=='22'">大众卡保留期停机</div>
                                    <div v-if="scope.row.userOsState=='23'">欠费停主叫</div>
                                    <div v-if="scope.row.userOsState=='24'">保留期停机</div>
                                    <div v-if="scope.row.userOsState=='25'">不良信息停机</div>
                                    <div v-if="scope.row.userOsState=='26'">测试号码监控停机</div>
                                    <div v-if="scope.row.userOsState=='27'">欠销预注销</div>
                                    <div v-if="scope.row.userOsState=='28'">预付费反向单停</div>
                                    <div v-if="scope.row.userOsState=='29'">电话不符</div>
                                    <div v-if="scope.row.userOsState=='30'">资料不符</div>
                                    <div v-if="scope.row.userOsState=='31'">欠费</div>
                                    <div v-if="scope.row.userOsState=='32'">卡丢失</div>
                                    <div v-if="scope.row.userOsState=='33'">黑户停机</div>
                                    <div v-if="scope.row.userOsState=='34'">其他</div>
                                    <div v-if="scope.row.userOsState=='35'">后付费集团欠费停机</div>
                                    <div v-if="scope.row.userOsState=='36'">停机保号</div>
                                    <div v-if="scope.row.userOsState=='37'">神B停机保号</div>
                                    <div v-if="scope.row.userOsState=='38'">反向/正向400预销户（按停机处理）</div>
                                    <div v-if="scope.row.userOsState=='39'">集团终端停开机</div>
                                    <div v-if="scope.row.userOsState=='40'">授信额度单停</div>
			          </template>
			    </el-table-column>
			    
			    <el-table-column prop="preUserOsState" label="上月用户停开机状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.preUserOsState=='0'">正常</div>
                                    <div v-if="scope.row.preUserOsState=='1'">申停</div>
                                    <div v-if="scope.row.preUserOsState=='2'">客服停机</div>
                                    <div v-if="scope.row.preUserOsState=='3'">黑户停机</div>
                                    <div v-if="scope.row.preUserOsState=='4'">催U停机</div>
                                    <div v-if="scope.row.preUserOsState=='5'">催U申停</div>
                                    <div v-if="scope.row.preUserOsState=='6'">托收欠费</div>
                                    <div v-if="scope.row.preUserOsState=='7'">担保人停机</div>
                                    <div v-if="scope.row.preUserOsState=='8'">催U单向停机</div>
                                    <div v-if="scope.row.preUserOsState=='9'">漫游高额单向停机</div>
                                    <div v-if="scope.row.preUserOsState=='10'">累计高额单向停机</div>
                                    <div v-if="scope.row.preUserOsState=='11'">漫游高额停机</div>
                                    <div v-if="scope.row.preUserOsState=='12'">累计高额停机</div>
                                    <div v-if="scope.row.preUserOsState=='13'">预注销</div>
                                    <div v-if="scope.row.preUserOsState=='14'">测试号码到期停机</div>
                                    <div v-if="scope.row.preUserOsState=='15'">欠费停机</div>
                                    <div v-if="scope.row.preUserOsState=='16'">申销停</div>
                                    <div v-if="scope.row.preUserOsState=='17'">自动停机(1860)</div>
                                    <div v-if="scope.row.preUserOsState=='18'">监控停机(300元)</div>
                                    <div v-if="scope.row.preUserOsState=='19'">监控停机(1000元)</div>
                                    <div v-if="scope.row.preUserOsState=='20'">过期停</div>
                                    <div v-if="scope.row.preUserOsState=='21'">预付费集团欠费停机</div>
                                    <div v-if="scope.row.preUserOsState=='22'">大众卡保留期停机</div>
                                    <div v-if="scope.row.preUserOsState=='23'">欠费停主叫</div>
                                    <div v-if="scope.row.preUserOsState=='24'">保留期停机</div>
                                    <div v-if="scope.row.preUserOsState=='25'">不良信息停机</div>
                                    <div v-if="scope.row.preUserOsState=='26'">测试号码监控停机</div>
                                    <div v-if="scope.row.preUserOsState=='27'">欠销预注销</div>
                                    <div v-if="scope.row.preUserOsState=='28'">预付费反向单停</div>
                                    <div v-if="scope.row.preUserOsState=='29'">电话不符</div>
                                    <div v-if="scope.row.preUserOsState=='30'">资料不符</div>
                                    <div v-if="scope.row.preUserOsState=='31'">欠费</div>
                                    <div v-if="scope.row.preUserOsState=='32'">卡丢失</div>
                                    <div v-if="scope.row.preUserOsState=='33'">黑户停机</div>
                                    <div v-if="scope.row.preUserOsState=='34'">其他</div>
                                    <div v-if="scope.row.preUserOsState=='35'">后付费集团欠费停机</div>
                                    <div v-if="scope.row.preUserOsState=='36'">停机保号</div>
                                    <div v-if="scope.row.preUserOsState=='37'">神B停机保号</div>
                                    <div v-if="scope.row.preUserOsState=='38'">反向/正向400预销户（按停机处理）</div>
                                    <div v-if="scope.row.preUserOsState=='39'">集团终端停开机</div>
                                    <div v-if="scope.row.preUserOsState=='40'">授信额度单停</div>
			          </template>
			    </el-table-column>
			    
			    <el-table-column prop="calcUserOsState" label="当月用户停开机状态是否变更">
			          <template slot-scope="scope">
			    	                <div v-if="scope.row.calcUserOsState=='Y'">是</div>
                                    <div v-if="scope.row.calcUserOsState=='N'">否</div>
			          </template>
			     </el-table-column>     
			    <el-table-column prop="calcAorderStatus" label="是否A侧状态发生变化">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.calcAorderStatus=='Y'">是</div>
                                    <div v-if="scope.row.calcAorderStatus=='N'">否</div>
			          </template>
			    </el-table-column>
			    
			    <el-table-column prop="aOrderStatus" label="当月A侧状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.aOrderStatus=='-1'">未知</div>
                                    <div v-if="scope.row.aOrderStatus=='1'">在用</div>
                                    <div v-if="scope.row.aOrderStatus=='2'">账务预销</div>
                                    <div v-if="scope.row.aOrderStatus=='3'">营业预销</div>
                                    <div v-if="scope.row.aOrderStatus=='4'">预开户</div>
                                    <div v-if="scope.row.aOrderStatus=='5'">营业销户</div>
                                    <div v-if="scope.row.aOrderStatus=='6'">帐务销户</div>
                                    <div v-if="scope.row.aOrderStatus=='7'">套卡销户</div>
                                    <div v-if="scope.row.aOrderStatus=='8'">保号期</div>
                                    <div v-if="scope.row.aOrderStatus=='9'">保留期</div>
                                     
			          </template>
			    </el-table-column>
			    <el-table-column prop="preAorderStatus" label="上月A侧状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.preAorderStatus=='-1'">未知</div>
                                    <div v-if="scope.row.preAorderStatus=='1'">在用</div>
                                    <div v-if="scope.row.preAorderStatus=='2'">账务预销</div>
                                    <div v-if="scope.row.preAorderStatus=='3'">营业预销</div>
                                    <div v-if="scope.row.preAorderStatus=='4'">预开户</div>
                                    <div v-if="scope.row.preAorderStatus=='5'">营业销户</div>
                                    <div v-if="scope.row.preAorderStatus=='6'">帐务销户</div>
                                    <div v-if="scope.row.preAorderStatus=='7'">套卡销户</div>
                                    <div v-if="scope.row.preAorderStatus=='8'">保号期</div>
                                    <div v-if="scope.row.preAorderStatus=='9'">保留期</div>
                                     
			          </template>
			    </el-table-column>
			    <el-table-column prop="calcBorderStatus" label="是否B侧状态发生变化">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.calcBorderStatus=='Y'">是</div>
                                    <div v-if="scope.row.calcBorderStatus=='N'">否</div>
			          </template>
			    </el-table-column>
			    <el-table-column prop="bOrderStatus" label="当月B侧状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.bOrderStatus=='-1'">未知</div>
                                    <div v-if="scope.row.bOrderStatus=='1'">在用</div>
                                    <div v-if="scope.row.bOrderStatus=='2'">账务预销</div>
                                    <div v-if="scope.row.bOrderStatus=='3'">营业预销</div>
                                    <div v-if="scope.row.bOrderStatus=='4'">预开户</div>
                                    <div v-if="scope.row.bOrderStatus=='5'">营业销户</div>
                                    <div v-if="scope.row.bOrderStatus=='6'">帐务销户</div>
                                    <div v-if="scope.row.bOrderStatus=='7'">套卡销户</div>
                                    <div v-if="scope.row.bOrderStatus=='8'">保号期</div>
                                    <div v-if="scope.row.bOrderStatus=='9'">保留期</div>
                                     
			          </template>
			    </el-table-column>
			    <el-table-column prop="preBorderStatus" label="上月B侧状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.preBorderStatus=='-1'">未知</div>
                                    <div v-if="scope.row.preBorderStatus=='1'">在用</div>
                                    <div v-if="scope.row.preBorderStatus=='2'">账务预销</div>
                                    <div v-if="scope.row.preBorderStatus=='3'">营业预销</div>
                                    <div v-if="scope.row.preBorderStatus=='4'">预开户</div>
                                    <div v-if="scope.row.preBorderStatus=='5'">营业销户</div>
                                    <div v-if="scope.row.preBorderStatus=='6'">帐务销户</div>
                                    <div v-if="scope.row.preBorderStatus=='7'">套卡销户</div>
                                    <div v-if="scope.row.preBorderStatus=='8'">保号期</div>
                                    <div v-if="scope.row.preBorderStatus=='9'">保留期</div>
                                     
			          </template>
			    </el-table-column>
			    
			    <el-table-column prop="brandId" label="当月品牌"></el-table-column>
			    <el-table-column prop="preBrandId" label="上月品牌"></el-table-column>
			    <el-table-column prop="REPAIRDATASUCCESSRATE" label="本月是否变更套餐"></el-table-column>
			    <el-table-column prop="mainOrderName" label="当月主套餐"></el-table-column>
			    <el-table-column prop="preMainOrderName" label="上月主套餐"></el-table-column>
			    <el-table-column prop="auditDesc" label="描述"></el-table-column>
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
	import { getFeiJiTuanMingXiList as getFeiJiTuanMingListXi } from '@/api/Api'
	export default{
		
		name: 'FeiJiTuanMingListXi',
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
	   		this.getList();
	   },
		methods: {
		  backRouter(){
				this.$router.back(-1);
			},
			getList(){
			
				let self = this;
				const params = this.getParamas;
//				self.value=params.serviceName;
				getFeiJiTuanMingListXi(
					{
						auditBatch:params.auditBatch,
						serviceIds:params.serviceId,
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT',
			    	    classSumFlag:'',
			    	    pageFrom:'',
			    	    isJump:'',
			    	    trendIds:''
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tabledata = res.data.response.reList;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			getList2(){
				let self = this;
				const params = this.getParamas;
				getFeiJiTuanMingListXi(
					{
						serviceIds:params.serviceId,
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT',
			    	    busyTypeIds:'',
			    	    classSumFlag:'',
			    	    pageFrom:'',
			    	    trendIds:self.value
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tabledata = res.data.response.reList;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
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
	        	this.getList();
	      	}
	    },
	  	data () {
	    	return {
	    		options: [
		    		{
			          	name:'存量',
			          	newTypeId:'K'	
			       },
			       {
			       	name:'新增',
			        newTypeId:'A'
			       }
		        ],
		       
		        currentPage: 1,
		        pageSize:10,
		        busyTypeIds:'',
		        serviceIds:'37',
		        value:'',
		        totalCount:0,
		        tabledata:[
	    			{
	    				    nodeId:'',
                            auditDate:'',
                            auditBatch:'',
                            trend:'',
                            billId:'',
                            userCreateDate:'',
                            userOpId:'',
                            prodDoneDate:'',
                            prodEffectiveDate:'',
                            prodExpireDate:'',
                            mainOrderEffectiveDate:'',
                            mainOrderExpireDate:'',
                            serviceId:'',
                            custType:'',
                            resultType:'',
                            busiType:'',
                            userState:'',
                            preUserState:'',
                            calcUserState:'',	
                            userOsState:'',
                            preUserOsState:'',
                            calcUserOsState:'',
                            calcAorderStatus:'',
                            aOrderStatus:'',
                            preAorderStatus:'',
                            calcBorderStatus:'',
                            bOrderStatus:'',
                            preBorderStatus:'',
                            brandId:'',
                            preBrandId:'',
                            REPAIRDATASUCCESSRATE:'',
                            mainOrderName:'',
                            preMainOrderName:'',
                            auditDesc:''
	    			}
	    		]
	    	}
	  	}
	}
</script>

<style scoped>
	.block{text-align: right;margin-top: 15px;}
	.content-top-child{position: absolute;top: 55px;right: 0;}
</style>
