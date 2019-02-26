<template>
  <div>
    <!--面包屑-->
    <div class="pageLocal">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item >个人主页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--数据表格-->
    <div class="tableMenu">
      <div class="content-top">
        <i class="iconfont icon-biaotishutiao6x25"></i>稽核总览
        <!--<el-badge :value="1" :max="99" class="btn-counts">-->
          <!--告警-->
        <!--</el-badge>-->
        <!--<el-badge :value="99" :max="99" class="btn-counts">-->
          <!--待处理-->
        <!--</el-badge>-->
        <div class="clear"></div>
      </div>
      <el-table
        :data="tableData"
        stripe
        border
        :header-cell-style="{backgroundColor:'#f5f7fa'}"
        style="width: 100%"
      >
        <el-table-column prop="AUDIT_BATCH" label="号码"></el-table-column>
        <el-table-column prop="AUDITTABLENUM" label="产品"></el-table-column>
        <el-table-column prop="CHECKNAME" label="渠道"></el-table-column>
        <el-table-column prop="CHECKNAME" label="时间"></el-table-column>
        <el-table-column prop="CHECKNAME" label="CRM状态"></el-table-column>
        <el-table-column prop="CHECKNAME" label="HLR状态"></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size.sync="pageSize"
          layout="prev, pager, next, total"
          :total='86'>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "StaffPage",
    data(){
      return{
        currentPage: 1,
        pageSize:10,
        tableData: [
        ]
      }
    },
    created(){
      this.getList()
    },
    methods: {
      getList(){
        //根据this.pageName判断页面传参类型
        // if (this.pageName==='物联网') this.tableData = [];
      },
      handleClick(row){
        // this.$router.push({path:this.$route.matched[2].path+'/commonGBCheck'});
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.getList();
      }
    }
  }
</script>

<style scoped>
  .block{text-align: right;margin-top: 15px;}
  .content-top-child{position: absolute;top: 55px;right: 0;}
</style>
