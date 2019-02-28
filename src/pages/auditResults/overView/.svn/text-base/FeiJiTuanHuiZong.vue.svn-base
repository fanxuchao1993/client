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
			  	<el-breadcrumb-item>汇总</el-breadcrumb-item>
			  <!--	<el-breadcrumb-item>{{currentTab}}</el-breadcrumb-item>-->
			</el-breadcrumb>
		</div>
		<div class="tableMenu">
			<div class="content-top">
				
				<div style="width:100%;float:left;">
					<div style="float:left;">
						<i class="iconfont icon-biaotishutiao6x25"></i>明细
					</div>
					<div style="float:left;margin-left:20px;">
						<label>
							本月用户状态:
						</label>
						<el-select v-model="value" value-key="userID" placeholder="-请选择-">
					       <el-option
					       	v-for="item in options1"
					      	:key="item.USERSTATE"
					      	:label="item.USERSTATENAME"
					      	:value="item.USERSTATE">
					       </el-option>
				        </el-select> 
					</div>
					<div style="float:left;margin-left:20px;">
						<label>
							上月用户状态:
						</label>
						<el-select v-model="value1" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options2"
					      	:key="item.USERSTATE"
					      	:label="item.USERSTATENAME"
					      	:value="item.USERSTATE">
					       </el-option>
				        </el-select> 
					</div>
					<div style="float:left;margin-left:20px;">
						<label>
							本月停机状态:
						</label>
						<el-select v-model="value2" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options3"
					      	:key="item.osStatusId"
					      	:label="item.name"
					      	:value="item.osStatusId">
					       </el-option>
				        </el-select> 
					</div>
					
				<span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
				<span class="btn-del" title="查询"  @click="getList2"><i class="iconfont icon-search"></i>查询</span>
                </div> 
				    
				<div style="width:100%;float:left;margin-top:-40px;margin-bottom:5px;">
					<div style="float:left;margin-left:20px;">
						<label>
							A侧状态是否变更:
						</label>
						<el-select v-model="value3" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options4"
					      	:key="item.STATE"
					      	:label="item.NAME"
					      	:value="item.STATE">
					       </el-option>
				        </el-select> 
					</div>
					<div style="float:left;">
						<label>
							B侧状态是否变更:
						</label>
						<el-select v-model="value4" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options5"
					      	:key="item.STATE"
					      	:label="item.NAME"
					      	:value="item.STATE">
					       </el-option>
				        </el-select> 
					</div>
					<div style="float:left;">
						<label>
							本月是否变更套餐:
						</label>
						<el-select v-model="value5" placeholder="增存量">
					       <el-option
					      	v-for="item in options6"
					      	:key="item.STATE"
					      	:label="item.NAME"
					      	:value="item.STATE">
					       </el-option>
				        </el-select> 
					</div>
					<div style="float:left;">
						<label>
							上月停开机状态:
						</label>
						<el-select v-model="value6" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options7"
					      	:key="item.osStatusId"
					      	:label="item.name"
					      	:value="item.osStatusId">
					       </el-option>
				        </el-select> 
					</div>
					
					
				</div>   	
				<div style="width:100%;float:left;margin-top:-40px;margin-bottom:5px;">
					<div style="float:left;">
						<label>
							用户停开机状态是否变更:
						</label>
						<el-select v-model="value7" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options8"
					      	:key="item.STATE"
					      	:label="item.NAME"
					      	:value="item.STATE">
					       </el-option>
				        </el-select> 
					</div>
					<div style="float:left;">
						<label>
							用户状态是否变更: :
						</label>
						<el-select v-model="value8" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options9"
					      	:key="item.STATE"
					      	:label="item.NAME"
					      	:value="item.STATE">
					       </el-option>
				        </el-select> 
					</div>
					<div style="float:left;">
						<label>
							增存量:
						</label>
						<el-select v-model="value9" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options10"
					      	:key="item.STATE"
					      	:label="item.NAME"
					      	:value="item.STATE">
					       </el-option>
				        </el-select> 
					</div>
					<div style="float:left;">
						<label>
							单边类型:
						</label>
						<el-select v-model="value10" placeholder="-请选择-">
					       <el-option
					      	v-for="item in options11"
					      	:key="item.STATE"
					      	:label="item.NAME"
					      	:value="item.STATE">
					       </el-option>
				        </el-select> 
					</div>
				<div style="width:100%;float:left;margin-top:-40px;margin-bottom:5px;">	
					<div style="float:left;">
					<label>网元:</label>
					<el-input placeholder="网元" v-model="value11" clearable></el-input>
					</div>

				</div>	
					
				</div>  
				   
			  	
			   	<div class="clear"></div>				
			</div>
			<el-table
			    :data="tabledata"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="NODEID" label="网元" width='100px'></el-table-column>
			    <el-table-column prop="TREND" label=增存量" width='100px'></el-table-column>
			    <el-table-column prop="RESULTTYPE" label="单边类型">
			        <template slot-scope="scope">
			    	                <div v-if="scope.row.RESULTTYPE=='A'">CRM单边</div>
                                    <div v-if="scope.row.RESULTTYPE=='B'">平台单边</div>
                                    <div v-if="scope.row.RESULTTYPE=='U'">不一致</div>
			        </template>
			    </el-table-column>
			    <el-table-column prop="AUDITDESC" label="原因"></el-table-column>
			    <el-table-column prop="USERSTATE" label="本月用户状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.USERSTATE=='-1'">未知</div>
                                    <div v-if="scope.row.USERSTATE=='1'">在用</div>
                                    <div v-if="scope.row.USERSTATE=='2'">账务预销</div>
                                    <div v-if="scope.row.USERSTATE=='3'">营业预销</div>
                                    <div v-if="scope.row.USERSTATE=='4'">预开户</div>
                                    <div v-if="scope.row.USERSTATE=='5'">营业销户</div>
                                    <div v-if="scope.row.USERSTATE=='6'">帐务销户</div>
                                    <div v-if="scope.row.USERSTATE=='7'">套卡销户</div>
                                    <div v-if="scope.row.USERSTATE=='8'">保号期</div>
                                    <div v-if="scope.row.USERSTATE=='9'">保留期</div>
			        </template>
			    </el-table-column>
			    <el-table-column prop="PREUSERSTATE" label="上月用户状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.PREUSERSTATE=='-1'">未知</div>
                                    <div v-if="scope.row.PREUSERSTATE=='1'">在用</div>
                                    <div v-if="scope.row.PREUSERSTATE=='2'">账务预销</div>
                                    <div v-if="scope.row.PREUSERSTATE=='3'">营业预销</div>
                                    <div v-if="scope.row.PREUSERSTATE=='4'">预开户</div>
                                    <div v-if="scope.row.PREUSERSTATE=='5'">营业销户</div>
                                    <div v-if="scope.row.PREUSERSTATE=='6'">帐务销户</div>
                                    <div v-if="scope.row.PREUSERSTATE=='7'">套卡销户</div>
                                    <div v-if="scope.row.PREUSERSTATE=='8'">保号期</div>
                                    <div v-if="scope.row.PREUSERSTATE=='9'">保留期</div>
			        </template>
			    </el-table-column>
			    <el-table-column prop="USEROSSTATE" label="本月停开机状态">
			    	<template slot-scope="scope">
			    	                <div v-if="scope.row.USEROSSTATE=='0'">正常</div>
                                    <div v-if="scope.row.USEROSSTATE=='1'">申停</div>
                                    <div v-if="scope.row.USEROSSTATE=='2'">客服停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='3'">黑户停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='4'">催U停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='5'">催U申停</div>
                                    <div v-if="scope.row.USEROSSTATE=='6'">托收欠费</div>
                                    <div v-if="scope.row.USEROSSTATE=='7'">担保人停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='8'">催U单向停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='9'">漫游高额单向停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='10'">累计高额单向停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='11'">漫游高额停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='12'">累计高额停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='13'">预注销</div>
                                    <div v-if="scope.row.USEROSSTATE=='14'">测试号码到期停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='15'">欠费停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='16'">申销停</div>
                                    <div v-if="scope.row.USEROSSTATE=='17'">自动停机(1860)</div>
                                    <div v-if="scope.row.USEROSSTATE=='18'">监控停机(300元)</div>
                                    <div v-if="scope.row.USEROSSTATE=='19'">监控停机(1000元)</div>
                                    <div v-if="scope.row.USEROSSTATE=='20'">过期停</div>
                                    <div v-if="scope.row.USEROSSTATE=='21'">预付费集团欠费停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='22'">大众卡保留期停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='23'">欠费停主叫</div>
                                    <div v-if="scope.row.USEROSSTATE=='24'">保留期停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='25'">不良信息停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='26'">测试号码监控停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='27'">欠销预注销</div>
                                    <div v-if="scope.row.USEROSSTATE=='28'">预付费反向单停</div>
                                    <div v-if="scope.row.USEROSSTATE=='29'">电话不符</div>
                                    <div v-if="scope.row.USEROSSTATE=='30'">资料不符</div>
                                    <div v-if="scope.row.USEROSSTATE=='31'">欠费</div>
                                    <div v-if="scope.row.USEROSSTATE=='32'">卡丢失</div>
                                    <div v-if="scope.row.USEROSSTATE=='33'">黑户停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='34'">其他</div>
                                    <div v-if="scope.row.USEROSSTATE=='35'">后付费集团欠费停机</div>
                                    <div v-if="scope.row.USEROSSTATE=='36'">停机保号</div>
                                    <div v-if="scope.row.USEROSSTATE=='37'">神B停机保号</div>
                                    <div v-if="scope.row.USEROSSTATE=='38'">反向/正向400预销户（按停机处理）</div>
                                    <div v-if="scope.row.USEROSSTATE=='39'">集团终端停开机</div>
                                    <div v-if="scope.row.USEROSSTATE=='40'">授信额度单停</div>
			        </template>
			    </el-table-column>
			    <el-table-column prop="PREUSEROSSTATE" label="上月停开机状态">
			         <template slot-scope="scope">
			    	                <div v-if="scope.row.PREUSEROSSTATE=='0'">正常</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='1'">申停</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='2'">客服停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='3'">黑户停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='4'">催U停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='5'">催U申停</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='6'">托收欠费</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='7'">担保人停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='8'">催U单向停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='9'">漫游高额单向停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='10'">累计高额单向停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='11'">漫游高额停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='12'">累计高额停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='13'">预注销</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='14'">测试号码到期停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='15'">欠费停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='16'">申销停</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='17'">自动停机(1860)</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='18'">监控停机(300元)</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='19'">监控停机(1000元)</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='20'">过期停</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='21'">预付费集团欠费停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='22'">大众卡保留期停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='23'">欠费停主叫</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='24'">保留期停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='25'">不良信息停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='26'">测试号码监控停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='27'">欠销预注销</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='28'">预付费反向单停</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='29'">电话不符</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='30'">资料不符</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='31'">欠费</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='32'">卡丢失</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='33'">黑户停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='34'">其他</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='35'">后付费集团欠费停机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='36'">停机保号</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='37'">神B停机保号</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='38'">反向/正向400预销户（按停机处理）</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='39'">集团终端停开机</div>
                                    <div v-if="scope.row.PREUSEROSSTATE=='40'">授信额度单停</div>
			        </template>
			    </el-table-column>
			    <el-table-column prop="CALCUSEROSSTATE" label="用户停开机状态是否变更">
			    	<template slot-scope="scope">
			    		 <div v-if="scope.row.CALCUSEROSSTATE=='Y'">是</div>
                         <div v-if="scope.row.CALCUSEROSSTATE=='N'">否</div>
			    	</template>
			    </el-table-column>
			    <el-table-column prop="CALCUSERSTATE" label="用户状态是否变更">
			    	<template slot-scope="scope">
			    		 <div v-if="scope.row.CALCUSERSTATE=='Y'">是</div>
                         <div v-if="scope.row.CALCUSERSTATE=='N'">否</div>
			    	</template>
			    </el-table-column>
			    <el-table-column prop="CALCAORDERSTATUS" label="A侧状态是否变更">
			    	<template slot-scope="scope">
			    		 <div v-if="scope.row.CALCAORDERSTATUS=='Y'">是</div>
                         <div v-if="scope.row.CALCAORDERSTATUS=='N'">否</div>
			    	</template>
			    </el-table-column>
			    <el-table-column prop="CALCBORDERSTATUS" label="B侧状态是否变更">
			    	<template slot-scope="scope">
			    		 <div v-if="scope.row.CALCBORDERSTATUS=='Y'">是</div>
                         <div v-if="scope.row.CALCBORDERSTATUS=='N'">否</div>
			    	</template>
			    </el-table-column>

			    <el-table-column prop="CALCMAINORDERNAME" label="本月是否变更套餐"> 
			       <template slot-scope="scope">
			    		 <div v-if="scope.row.CALCMAINORDERNAME=='Y'">是</div>
                         <div v-if="scope.row.CALCMAINORDERNAME=='N'">否</div>
			    	</template>
			    </el-table-column>
			    <el-table-column prop="MAINORDEREFFECTIVEDATE" label="产品生效时间"></el-table-column>
			    <el-table-column prop="USEROPID" label="入网渠道"></el-table-column>
			    <el-table-column prop="USERCREATEDATE" label="入网时间"></el-table-column>			    
			    <el-table-column prop="MAINORDERNAME" label="当月主套餐"> </el-table-column>			    
			    <el-table-column prop="PRODEFFECTIVEDATE" label="生效时间"></el-table-column>			    
			    <el-table-column prop="SUMS" label="数量"></el-table-column>
			    
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
	import { getFeiJiTuanHuiZongList as getFeiJiTuanHuiZongList } from '@/api/Api'
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
				getFeiJiTuanHuiZongList(
					{
						auditBatch:params.auditBatch,
						serviceIds:params.serviceId,
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT',
			    	    classSumFlag:'',
			    	    pageFrom:'',
			    	    isJump:'',
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.tabledata = res.data.response.reList;
					self.totalCount = res.data.response.totalCount.TOTALCOUNT;
					self.options1=res.data.response.userStatusCurrList;
					self.options2=res.data.response.userStatusLastList;
					self.options3=res.data.response.userOsStatusCurrList;
					self.options7=res.data.response.userOsStatusLastList;
					
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			getList2(){
				let self = this;
				const params = this.getParamas;
				alert(self.value);
				alert(self.value1);
				getFeiJiTuanHuiZongList(
					{
						serviceIds:params.serviceId,
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    accOrigin:'BJYD_YZXGKPT',
			    	    busyTypeIds:'',
			    	    classSumFlag:'',
			    	    pageFrom:'',
			    	    trendIds:self.value9,
			    	    userStates:self.value,
			    	    preUserStates:self.value1,
			    	    userOsStates:self.value2,
			    	    preUserOsStates:self.value7,
			    	    calcAorderStatusSec:self.value3,
			    	    calcBorderStatusSec:self.value4,
			    	    calcMainOrderNames:self.value5,
			    	    calcUserOsStates:self.value6,
			    	    calcUserStates:self.value8,
			    	    resultTypes:self.value10,
			    	    nodeIds:self.value11
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
	    		options1: [
		    		{
			          	USERSTATENAME:'',
			          	USERSTATE:''	
			          
			       }, 
		        ],
		        options2: [
		    		{
			          	USERSTATENAME:'',
			          	USERSTATE:''	
			          
			       }, 
		        ],
		        options3: [
		    		{
			          	osStatusId:'',
			          	name:''	
			          
			       }, 
		        ],
		        options4: [
		    		{
			          	NAME:'是',
			          	STATE:'Y'	
			          
			       }, 
			       {
			          	NAME:'否',
			          	STATE:'N'	
			          
			       }
		        ],
		        options5: [
		    		{
			          	NAME:'是',
			          	STATE:'Y'	
			          
			       }, 
			       {
			          	NAME:'否',
			          	STATE:'N'	
			          
			       }
		        ],
		        options6: [
		    		{
			          	NAME:'是',
			          	STATE:'Y'	
			          
			       }, 
			       {
			          	NAME:'否',
			          	STATE:'N'	
			          
			       }
		        ],
		        options7: [
		    		{
			          	osStatusId:'',
			          	name:''		
			          
			       }, 
		        ],
		        options8: [
		    		{
			          	NAME:'是',
			          	STATE:'Y'	
			          
			       }, 
			       {
			          	NAME:'否',
			          	STATE:'N'	
			          
			       }
		        ],
		        options9: [
		    		{
			          	NAME:'是',
			          	STATE:'Y'	
			          
			       }, 
			       {
			          	NAME:'否',
			          	STATE:'N'	
			          
			       }
		        ],
		        options10: [
		    		{
			          	NAME:'存量',
			          	STATE:'K'	
			          
			       }, 
			       {
			          	NAME:'增量',
			          	STATE:'A'	
			          
			       }
		        ],
		        options11: [
		    		{
			          	NAME:'A单边',
			          	STATE:'A'	
			          
			       }, 
			       {
			          	NAME:'B单边',
			          	STATE:'B'	
			          
			       },
			       {
			       	    NAME:'不一致',
			          	STATE:'U'	
			       }
		        ],
		        currentPage: 1,
		        pageSize:10,
		        busyTypeIds:'',
		        serviceIds:'37',
		        value:'',
		        value1:'',
		        value2:'',
		        value3:'',
		        value4:'',
		        value5:'',
		        value6:'',
		        value7:'',
		        value8:'',
		        value9:'',
		        value10:'',
		        value11:'',		                 
		        totalCount:0,
		        tabledata:[
	    			{
	    				       NODEID:'',
                               TREND:'',
                               RESULTTYPE:'',
                               AUDITDESC:'',
                               USERSTATE:'',
                               PREUSERSTATE:'',
                               USEROSSTATE:'',
                               PREUSEROSSTATE:'',
                               CALCUSEROSSTATE:'',
                               CALCUSERSTATE:'',
                               CALCAORDERSTATUS:'',
                               CALCBORDERSTATUS:'',
                               CALCMAINORDERNAME:'',
                               MAINORDEREFFECTIVEDATE:'',
                               USEROPID:'',
                               USERCREATEDATE:'',
                               MAINORDERNAME:'',
                               PRODEFFECTIVEDATE:'',
                               SUMS:''
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
