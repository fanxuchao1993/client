<!--公共导航组件-->
<template>
	<div class="nav">
		<!--导航Logo-->
		<img class="logo" src="@/assets/imgs/main_logo.png" height="54px" alt="Logo"/>
		<!--导航-->
		<div class="main-nav">
			<!-- swiper -->
		    <swiper class="top-nav" :options="swiperOption">		    	
		        <swiper-slide v-for="(item,index) in navData" :key="index">
		        	<router-link tag='span' :to="item.route">{{item.name}}</router-link>
		        </swiper-slide>
		    </swiper>
			<!--<ul class="top-nav">
				<router-link  tag='li' v-for="(item,index) in navData" :key="index" :to="item.route">{{item.name}}</router-link>
			</ul>-->
		</div>
		<!--导航右侧装饰-->
		<div class="right-menu">
			<div class="rotate-widget"></div>
			<div class="rotate-widget-small"></div>
		</div>
		<!--账号-->
		<div class="user-menu">
			<span>欢迎您：{{username}}&nbsp;</span>
			<span><i class="iconfont icon-gonggao"></i> 公告</span><i class="iconfont icon-shutiao"></i>
			<!--<span @click="updatePass">修改密码</span>-->
			<span @click="dialogFormVisible = true">修改密码</span>	
			<i class="iconfont icon-shutiao"></i>
			<i class="iconfont icon-logout" @click="logOutCallBack" title="注销"></i>
		</div>
		<div>
		<el-dialog title="修改密码" :visible.sync="dialogFormVisible">
					<div>
						<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
						  <el-form-item label="旧密码" prop="passOld">
						    <el-input  type="password" size="medium" v-model="ruleForm2.passOld" autocomplete="off"></el-input>
						  </el-form-item>
						  <el-form-item label="新密码" prop="pass">
						    <el-input type="password" size="medium" v-model="ruleForm2.pass" autocomplete="off"></el-input>
						  </el-form-item>
						  <el-form-item label="确认新密码" prop="checkPass">
						    <el-input type="password" size="medium" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
						  </el-form-item>
						  <el-button type="primary" @click="updatePass">提交</el-button>
						  <el-button @click="resetForm('ruleForm2')">重置</el-button>
						</el-form>
						<!--<div slot="footer" class="dialog-footer">
							
						</div>	-->
					</div>
				</el-dialog>
		</div>		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import 'swiper/dist/css/swiper.min.css'
	import { LogOut as LogOut } from '@/api/Api'
	import { userMessage as userMessage } from '@/api/Api'
	import { validatePassword as validatePassword } from '@/api/Api'
	
	import { MessageBox } from 'element-ui';
	import { Dialog } from 'element-ui';
	import Vue from 'vue';
	import { Alert } from 'element-ui';
	import { Input } from 'element-ui';
	import { Button } from 'element-ui';
	import { Form } from 'element-ui';
	import { FormItem } from 'element-ui';
	
	Vue.use(Dialog);
	Vue.use(Input);
	Vue.use(Button);
	Vue.use(Form);
	Vue.use(FormItem);
	
	
	export default{
		name:'headerNav',
		components: {
			
		    swiper,
		    swiperSlide
		    
		},
		computed:{
		 	...mapGetters(['getParamas']) 
		},
		created(){
			this.ruleForm2.passOld = this.getParamas.passOld;
			this.ruleForm2.pass = this.getParamas.pass;
			this.ruleForm2.checkPass = this.getParamas.checkPass;
	   		this.loginUserName();
	   	},
		data(){
			var validatePassOld = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入旧密码'));
		        } else {
//		          if (this.ruleForm2.passOld !== '') {
//		            this.$refs.ruleForm2.validateField('passOld');
//		          }
		          callback();
		        }
		      };
		      var validatePass = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请输入新密码'));
		        } else {
		          if (this.ruleForm2.checkPass !== '') {
		            this.$refs.ruleForm2.validateField('checkPass');
		          }
		          callback();
		        }
		      };
		      var validatePass2 = (rule, value, callback) => {
		        if (value === '') {
		          callback(new Error('请再次输入新密码'));
		        } else if (value !== this.ruleForm2.pass) {
		          callback(new Error('两次输入的新密码不一致!'));
		        } else {
		          callback();
		        }
		      };
			return{
				swiperOption: {
		          	slidesPerView: 'auto',
		          	slideToClickedSlide: true
		       	},

		        rules2: {
		          passOld: [
		            { validator: validatePassOld, trigger: 'blur' }
		          ],
		          pass: [
		            { validator: validatePass, trigger: 'blur' }
		          ],
		          checkPass: [
		            { validator: validatePass2, trigger: 'blur' }
		          ]
		          
		        },
        		dialogFormVisible: false,
        		ruleForm2: {
	        		passOld:'',
	        		pass:'',
	        		checkPass:''
        		},
				username:'',
				navData:[
					{
						name:'首页',
						route:'/home'
					},
					{
						name:'稽核结果',
						route:'/auditResults'
					},
					{
						name:'基础业务稽核',
						route:'/basicBusiness'
					},
					{
						name:'集团业务稽核',
						route:'/groupBusiness'
					},
					{
						name:'家庭业务稽核',
						route:'/familyBusiness'
					},
					{
						name:'个人业务稽核',
						route:'/personalBusiness'
					},
					{
						name:'数据分析',
						route:'/dataAnalysis'
					},
					{
						name:'数据修复',
						route:'/dataRepair'
					},
					{
						name:'调度管理',
						route:'/dispatchManage'
					},
					{
						name:'规则库管理',
						route:'/ruleBaseManage'
					},
					{
						name:'安全管理',
						route:'/securityManage'
					},
					{
						name:'数据质量平台',
						route:'/dataQualityPlatform'
					},
					{
						name:'三方比对报表',
						route:'/comparisonReport'
					},
					{
						name:'日账分析',
						route:'/dayBillAnalysis'
					}
				]
			}
		},
		methods:{
			loginUserName(){
				var self = this;
				
				const params = this.getParamas;
				userMessage(
	  					{
	  						//console.log('请求参数！'+JSON.stringify(this.$route.params.userId));
	  						//alert(this.$route.params.userId);
	  						userId:params.userId
	  						
	  					}
	  			).then(res=>{
	  					
	  					self.username=res.data.response.user.USERNAME;
	  					
	  			}).catch(err=>{
	  				
	  				
	  				
	  			})	
				
				
			},
			resetForm(formName) {
        		this.$refs[formName].resetFields();
     		},
			updatePass(){
				var self = this;
				alert(self.ruleForm2.passOld);
	  			alert(self.ruleForm2.pass);
				validatePassword(
	  					{
	  						
	  						oldPassword:self.ruleForm2.passOld,
	  						newPassword:self.ruleForm2.pass
	  					}
	  			).then(res=>{
	  					
	  			}).catch(err=>{
	  				
	  			})	

			},
			logOutCallBack(){
				var self = this;
				self.$router.push({
					name:'Login'
				});

//				
//				LogOut(
//	  					{
//	  						
//	  					}
//	  			).then(res=>{
//	  					
//	  					
//	  			}).catch(err=>{
//	  				
//	  				
//	  				
//	  			})	
				
			}
			
		}
	}
</script>

<style scoped>
	.swiper-slide{/*width: fit-content;*/width: auto;}
	/*导航*/
	.nav{background-color: #09f;width: calc(100% - 30px);height: 80px;padding: 0 15px;position: relative;overflow: hidden;}
	.nav .logo{margin: 13px 0;}
	
	/*导航菜单*/
	.nav .main-nav{position: absolute;left: calc(15% + 200px);right: 395px;top: 16px;line-height: 44px;color: #FFFFFF;font-weight: bold;}
	.nav .top-nav span.current{border-bottom: 3px solid #fff;}
	.nav .top-nav{list-style: none;width: 100%;}
	.nav .top-nav span{float: left;margin: 0 10px;padding: 0 5px;letter-spacing:2px;cursor: pointer;}
	.nav .top-nav span:hover{border-bottom: 3px solid #fff;}
	.nav .top-nav .swiper-slide:last-child span{margin-right: 60px;}
	
	.nav .right-menu{background-color: #3e58c9;width: 360px;position: absolute;right: 0;top: 0;height: 100%;z-index: 999;}
	.nav .right-menu .rotate-widget{transform: rotate(45deg);-webkit-transform:rotate(45deg);background: #3e58c9;width: 200px;height: 80px;position: absolute;right: 260px;z-index: ;}
	.nav .right-menu .rotate-widget-small{transform: rotate(45deg);-webkit-transform:rotate(45deg);background: #0086f1;width: 80px;height: 80px;position: absolute;top: -40px;right: 360px;}	

	.nav .user-menu{position: absolute;right: 20px;top: 0;line-height: 80px;font-size: 15px;font-weight: bold;color: #dfdfdf;letter-spacing:1px;z-index: 999;}
	.nav .user-menu span:first-child{margin-right: 10px;}
	.nav .user-menu span:hover{color: #FFFFFF;text-shadow: 0px 0px 1px 2px #FFFFFF;cursor: pointer;}
	.iconfont{font-size: 15px;font-weight: normal;}
	.icon-logout:hover{color: #FFFFFF;font-weight: bold;cursor: pointer;}
</style>