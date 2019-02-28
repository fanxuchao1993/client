<!--稽核结果概览-->
<template>
	<div>
		<!--面包屑-->
		<div class="pageLocal">
			<el-breadcrumb separator-class="el-icon-arrow-right">
			  	<el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
			  	<el-breadcrumb-item>局数据刷新</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<!--数据表格-->
		<div class="tableMenu">
			<div class="content-top">
				<div class="divStyle">
					<i class="iconfont icon-biaotishutiao6x25"></i>局数据刷新总览
				</div>
				<span class="btn-del" title="下载白名单模板" @click="downWhiteLIstModelFun()">下载白名单模板</span>
				<span class="btn-del" title="添加白名单" @click="handleAdd()">添加白名单</span>
				<span class="btn-del" title="查询" @click="getList('1')"><i class="iconfont icon-search"></i>查询</span>
				<el-input v-model="billId" placeholder="手机号码" clearable></el-input>
			</div>
			<el-table
			    :data="auditData"
			    stripe
			    border
			    :header-cell-style="{backgroundColor:'#f5f7fa'}"
			    style="width: 100%"
		    >
			    <el-table-column prop="BILL_ID" label="手机号码"></el-table-column>
			    <el-table-column prop="PRIORITY" label="优先级说明"></el-table-column>
			    <el-table-column prop="CREATE_DATE" label="添加日期"></el-table-column>
			    <el-table-column prop="OPERATOR" label="操作员"></el-table-column>
			    <el-table-column prop="WHITE_COMMENT" label="备注"></el-table-column>
			    <el-table-column label="操作">
			    	<template slot-scope="scope">
				       	<el-button @click="handleEdit(scope.row,scope.column)" type="text" size="small">编辑</el-button>
				       	<el-button @click="delWhiteFun(scope.row,scope.column)" type="text" size="small">删除</el-button>
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
		  	<el-dialog :visible.sync="dialogWhiteVisible" width="40%">
		  		<div style="height:200px;">
		  			<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100px;">
							<label style="float:left;">电话号码:</label>
						</div>
						<el-input placeholder="电话号码" style="margin-top:-30px;width:60%;margin-left:5px;float:left;" v-model="billIdDialog" clearable></el-input>
						<span style="color:red;font-size:16px;">*</span>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100px;">
							<label style="float:left;">优先级说明:</label>
						</div>
						<el-input placeholder="优先级说明" style="margin-top:-30px;width:60%;margin-left:5px;float:left;" v-model="priority" clearable></el-input>
					</div>
					<div style="float:left;margin-top:20px;width:100%;">
						<div style="float:left;width:100px;">
							<label style="float:left;">备注:</label>
						</div>
						<el-input placeholder="备注" style="margin-top:-30px;width:60%;margin-left:5px;float:left;" v-model="white_comment" clearable></el-input>
						<span style="color:red;font-size:16px;">*</span>
					</div>
					<div style="float:left;width:100%;" class="content-top">
						<div style="float:left;width:350px;margin-top:-10px;">
							<span class="btn-width" title="保存" @click="saveWhiteList()">保存</span>
						</div>
					</div>
		  		</div>
			</el-dialog>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { whiteList as whiteList } from '@/api/Api'
	import { saveWhite as saveWhite } from '@/api/Api'
	import { delWhite as delWhite } from '@/api/Api'
	import { downLoadBillListModel as downLoadBillListModel } from '@/api/Api'
	
	export default{
		name: 'whiteList',
		computed:{
		 	...mapGetters(['getParamas'])
		},
		data () {
			return {
	    		currentPage: 1,
	    		pageSize:10,
	    		totalCount:0,
	    		billId:'',
	    		billIdDialog:'',
	    		auditData:[],
	    		dialogWhiteVisible:false,
	    		priority:'',
	    		white_comment:'',
	    		flag:'',
	    		repairNumberId:''
	    	}
	  	},

	  	created(){
	   		this.getList('0');
	   	},
		methods: {
			getList(pageObj){
				let self = this;
				let params = this.getParamas;
				if(pageObj === "1"){
					self.currentPage=1;
	    			self.pageSize=10;
	    			self.totalCount = 0;
				}
				whiteList(
					{
						start:self.currentPage-1,
			    	    limit:self.pageSize,
			    	    billId:self.billId
					}
				).then(res=>{
					console.log('请求成功！'+JSON.stringify(res.data.response));
					self.auditData = res.data.response.reList;
					self.totalCount = res.data.response.totalCount;
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
			},
			handleEdit(row,column) {
				this.dialogWhiteVisible = true;
				this.billIdDialog = row.BILL_ID;
				this.priority = row.PRIORITY;
				this.white_comment = row.WHITE_COMMENT;
				this.flag = 'edit';
				this.repairNumberId = row.REPAIR_NUMBER_ID;
	      	},
	      	handleAdd(){
	      		this.dialogWhiteVisible = true;
	      		this.billIdDialog = '';
				this.priority = '';
				this.white_comment = '';
				this.flag = 'save';
				this.repairNumberId = '';
	      	},
	      	delWhiteFun(row,column){
	      		delWhite(
					{
						repairNumberId:row.REPAIR_NUMBER_ID
					}
				).then(res=>{
					if(res.data.response.sucess =='sucess'){
						this.$message({message: '白名单删除成功！',type: 'success'});
						this.getList('0');	
					}else{
						this.$message.error("白名单删除失败！");
					}
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	      	},
	      	downWhiteLIstModelFun(){
	      		downLoadBillListModel(
					{
						/*fileName:'whiteListModel.xlsx'*/
						/*fileName:'test.xlsx',*/
						fileName:'1111.csv',
						responseType:'blob'
					}
				).then(res=>{
					let aTag = document.createElement('a');
					let blob = new Blob([res.data],{type:'application/ms-excel'});　　// 这个content是下载的文件内容，自己修改
					//aTag.download = "whiteListModel.xls";　　　　　　// 下载的文件名
					/*aTag.download = "test.xlsx";　　　　　　// 下载的文件名*/
					aTag.download = "1111.csv";　　　　　　// 下载的文件名
					aTag.href = URL.createObjectURL(blob);
					aTag.click();　　　　　　　　　　　　　　
					URL.revokeObjectURL(blob);
					/*let blob = new Blob([res.data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'});
					let downloadElement = document.createElement('a');
					let href = window.URL.createObjectURL(blob); //创建下载的链接
					downloadElement.href = href;
					downloadElement.download = 'text.xlsx'; //下载后文件名
					document.body.appendChild(downloadElement);
					downloadElement.click(); //点击下载
					document.body.removeChild(downloadElement); //下载完成移除元素
					window.URL.revokeObjectURL(href); //释放掉blob对象*/
				}).catch(err=>{
					console.log(err);
					console.log('请求失败！');
				})
	      	},
	      	saveWhiteList(){
	      		let self = this;
	      		if(this.billIdDialog.trim() == ''){
	      			this.$message.error("手机号码不能为空!");
	      			return false;
	      		}else if(this.white_comment.trim() == ''){
	      			this.$message.error("备注不能为空!");
	      			return false;
	      		}else{
	      			saveWhite(
						{
				    	    billId:self.billIdDialog,
				    	    priority:self.priority,
				    	    white_comment:self.white_comment,
				    	    userName:'测试工号',
				    	    flag:self.flag,
				    	    repairNumberId:self.repairNumberId
						}
					).then(res=>{
						/*console.log('请求成功！'+JSON.stringify(res.data.response));*/
						if(res.data.response.sucess =='sucess'){
							if(self.flag == 'save'){
								this.$message({message: '白名单添加成功！',type: 'success'});
							}else{
								this.$message({message: '白名单修改成功！',type: 'success'});
							}
							this.getList('0');	
						}else{
							this.$message.error("白名单修改失败！");
						}
					}).catch(err=>{
						console.log(err);
						console.log('请求失败！');
					})
	      		}
	      		
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

<style>
	.el-range-separator{line-height: 21px !important;}
	.divStyle{float:left;}
	.divStyle2{float:right;}
	.block{text-align: right;margin-top: 15px;}
	.el-input {
	    width: 300px;
	}
</style>