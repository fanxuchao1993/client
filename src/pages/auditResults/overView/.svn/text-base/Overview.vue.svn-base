<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>稽核结果</el-breadcrumb-item>
			  	<el-breadcrumb-item>概览</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>概览(平台)
				<span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="overviewData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDITMONTH" label="稽核时间"></el-table-column>
			    <el-table-column prop="PLATFORMNAME" label="稽核平台">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.PLATFORMNAME}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CLASSNAME" label="业务类型"></el-table-column>
			    <el-table-column prop="CONSISRATIO" label="一致率(%)"></el-table-column>
			    <el-table-column prop="LASTCONSISRATIO" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="ERRORALL" label="总差异数"></el-table-column>
			    <el-table-column prop="ERRORNEW" label="新增差异数"></el-table-column>
			    <el-table-column prop="OVERLAPDEFF" label="重复差异数"></el-table-column>
			    <el-table-column prop="ERRORNEWRATIO" label="新增差异占比(%)"></el-table-column>
		  	</el-table>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<i class="iconfont icon-biaotishutiao6x25"></i>重点业务治理
				<span @click="exportExcel" class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-daochu"></i>导出</span>
				<div class="clear"></div>
			</div>
			<el-table
			    :data="importData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="AUDITDATE" label="稽核时间"></el-table-column>
			    <el-table-column prop="PLATFORMNAME" label="稽核平台"></el-table-column>
			    <el-table-column prop="COMPARETALBESOURCESYSTEM" label="治理业务">
			    	<template slot-scope="scope">
			        	<el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.COMPARETALBESOURCESYSTEM}}</el-button>
			      	</template>
			    </el-table-column>
			    <el-table-column prop="CONSISRATIO" label="一致率(%)"></el-table-column>
			    <el-table-column prop="LASTLINKRELATIVERATIO" label="一致率环比上月(%)"></el-table-column>
			    <el-table-column prop="CT" label="总差异数"></el-table-column>
			    <el-table-column prop="CTNEW" label="新增差异数"></el-table-column>
			    <el-table-column prop="OVERLAPDEFF" label="重复差异数"></el-table-column>
			    <el-table-column prop="CTRATIO" label="新增差异占比(%)"></el-table-column>
			    <el-table-column prop="NEW_HUANBISHANGYUE" label="新增环比上月(%)"></el-table-column>
			    <el-table-column prop="REPAIRALLCOUNT" label="修复总数"></el-table-column>
			    <el-table-column prop="INTERFACESUCCESSCOUNT" label="修复成功数"></el-table-column>
			    <el-table-column prop="REPAIRDATASUCCESSRATE" label="修复成功率(%)"></el-table-column>
		  	</el-table>
		  	</el-table>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { getResultList as getResultList } from '@/api/Api'
	export default{
		name: 'Overview',
		computed:{
		 	...mapGetters(['getParamas']) 
//		    getUser:function() {
//		      // 通过vuex的getters方法来获取state里面的数据
//		      return this.$store.getters.getParamas;
//		    }
		},
		data () {
	    	return {
	    		overviewData:[
	    			{
	    				AUDITMONTH: '',
			            PLATFORMNAME: '',
			            CLASSNAME: '',
			            CONSISRATIO: '',
			            LASTLINKRELATIVERATIO: '',
			            CT: '',
			            CTNEW: '',
			            OVERLAPDEFF: '',
			            CTRATIO: '',
			            NEW_HUANBISHANGYUE:'',
			            REPAIRALLCOUNT:'',
			            INTERFACESUCCESSCOUNT:'',
			            REPAIRDATASUCCESSRATE:'',
			            REPORTLINK:''
	    			}
	    		],
	    		importData: [
		    		{
			          AUDITMONTH: '',
			          PLATFORMNAME: '',
			          CLASSNAME: '',
			          COMPARETALBESOURCESYSTEM: '',
			          CONSISRATIO: '',
			          LASTLINKRELATIVERATIO:'',
			          LASTCONSISRATIO: '',
			          ERRORALL: '',
			          ERRORNEW: '',
			          OVERLAPDEFF: '',
			          ERRORNEWRATIO: '',
			          CT:'',
			          CTNEW:'',
			          CTRATIO:'',
			          REPAIRALLCOUNT:'',
			          NEW_HUANBISHANGYUE:'',
			          INTERFACESUCCESSCOUNT:'',
			          REPAIRDATASUCCESSRATE:'',		
			          SERIALNUMBER:''
			      	}
		        ],
		        BUSITYPE:''
	    	}
	  	},
	  	created(){
	   		this.getList();
			//console.log('测试打印'+JSON.stringify(this.getParamas));
	   	},
		methods: {
			getList(){
				let self = this;
				getResultList(
					{
						accOrigin: 'BJYD_YZXGKPT'
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.overviewData = res.data.response.generaList;
					self.importData = res.data.response.emphasesList;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
	      	handleClick(row,column) {
	      		
	      		if(column.label==='稽核平台'){
	      			
	      		this.BUSITYPE=row.REPORTLINK.split('=')[1];
				let auditInfo = {
					'BUSITYPE':this.BUSITYPE,
					'Flag':'1'
				};
				if(this.BUSITYPE==='0012'){//亲情通
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'OverviewFKBusiness'
			       });
			      }else if(this.BUSITYPE==='0102'){//家庭宽带
			      	
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'OverviewFBBusiness'
			       });
			      
			      }else if(this.BUSITYPE==='0020'){//集团短彩
			      	
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'OverviewGSMBusiness'
			       });
			      
			      }else if(this.BUSITYPE==='0031'){//校讯通
			      	let auditInfog = {
					'BUSITYPE':this.BUSITYPE,
					'sourceSystem':'校训通'
				};
			      	
				this.$store.dispatch('setParamasInfo',auditInfog);
					this.$router.push({
			    	    name:'CommonGBOverviewBusiness'
			       });
			      
			      }else if(this.BUSITYPE==='BOSS'){//BOSS
			      	
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'OverviewCBABusiness'
			       });
			      
			      }else if(this.BUSITYPE==='HLR'){//HLR
			      	
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'OverviewCHABusiness'
			       });
			      
			      }else if(this.BUSITYPE==='0014'){//wlan
			      	
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'OverviewLWBusiness'
			       });
			      
			      }else if(this.BUSITYPE==='0032'){//香港一卡多号
			      	
				this.$store.dispatch('setParamasInfo',auditInfo);
					this.$router.push({
			    	    name:'OverviewSMHKBusiness'
			       });
			      
			      }else if(this.BUSITYPE==='139'){//139
			      	let auditInfok = {
					'BUSITYPE':this.BUSITYPE,
					'sourceSystem':'CRM-139邮箱稽核'
				};
				this.$store.dispatch('setParamasInfo',auditInfok);
					this.$router.push({
			    	    name:'CommonPBOverviewBusiness'
			       });
			      
			      }else if(this.BUSITYPE==='MCAS'){//mcas
			      	let auditInfoy = {
					'BUSITYPE':this.BUSITYPE,
					'sourceSystem':'CRM-MCAS稽核'
				};
			      	this.$store.dispatch('setParamasInfo',auditInfoy);
					this.$router.push({
			    	    name:'CommonPBOverviewBusiness'
			       });
			      }else if(this.BUSITYPE==='MISC'){//misc 
			      	let auditInfoz = {
					'BUSITYPE':this.BUSITYPE,
					'sourceSystem':'CRM-MISC稽核'
				};
			      	this.$store.dispatch('setParamasInfo',auditInfoz);
					this.$router.push({
			    	    name:'CommonPBOverviewBusiness'
			       });
			      }else if(this.BUSITYPE==='5000'){
			      	let auditInfoj = {
					'BUSITYPE':this.BUSITYPE,
					'sourceSystem':'集团彩铃'
				};
			      	
			      	this.$store.dispatch('setParamasInfo',auditInfoj);
					this.$router.push({
			    	    name:'CommonGBOverviewBusiness'
			       });
			      }	
	      }else {
	      		this.SERIALNUMBER=row.SERIALNUMBER;
	      		this.serviceName=row.COMPARETALBESOURCESYSTEM;
	      		if(this.SERIALNUMBER>=17 && this.SERIALNUMBER <=32 ||this.SERIALNUMBER ===37){
	      			let businessInfo = {
					'serviceIds':this.SERIALNUMBER,
					/*'serviceName':this.serviceName*/
				};
				    this.$store.dispatch('setParamasInfo',businessInfo);
					this.$router.push({
			    	    name:'GroupShortMessageName'
			      });	
	      		}else{
	      			let businessInfo = {
					'serviceId':this.SERIALNUMBER,
					'serviceName':this.serviceName
				};
				    this.$store.dispatch('setParamasInfo',businessInfo);
					this.$router.push({
			    	    name:'FeiJiTuanBusiness'
			       });
	      		}
	      	}
			      },
	      	//导出Excel	
	      	
			exportExcel(){
				const th = ['稽核时间', '稽核平台', '业务类型', '一致率(%)','一致率环比上月(%)','总差异数','新增差异数','重复差异数','新增差异占比(%)']
		      	const filterVal = ['date', 'name', 'type', 'sameRatio','monthRatio','allNum','newNum','sameNum','newRatio']
		      	const data = this.importData.map(v => filterVal.map(k => v[k]))
		      	const [fileName, fileType, sheetName] = ['重点业务治理', 'xlsx', '重点业务治理']
		      	this.$jsonExportExcel({th, data, fileName, fileType, sheetName})
			}
	   	}
	}
</script>

<style>
	
</style>