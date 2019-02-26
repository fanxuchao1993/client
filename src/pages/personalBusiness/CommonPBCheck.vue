<!--CRM-BOSS稽核查看-->
<template>
  <div>
    <!--面包屑-->
    <div class="pageLocal">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{path:'/home'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path:'/personalBusiness'}">个人业务稽核</el-breadcrumb-item>
        <el-breadcrumb-item :to="this.$route.matched[2].path">{{this.$route.matched[2].meta.title}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <!--数据表格-->
    <div class="tableMenu">
      <div class="content-top">
        <i class="iconfont icon-biaotishutiao6x25"></i>{{name}}
        <span class="btn-del" title="返回上级菜单" @click="backRouter"><i class="iconfont icon-search"></i>返回</span>
        <span class="btn-del" title="导出全部数据为Excel"><i class="iconfont icon-search"></i>导出</span>
        <span class="btn-del" title="查询" @click="getList"><i class="iconfont icon-search"></i>查询</span>
        <el-select v-model="selectType" placeholder="业务名称" clearable>
          <el-option
            v-for="item in options"
            :key="item.RESULTTYPEID"
            :label="item.RESULTTYPEMULTINAME"
            :value="item.RESULTTYPEID">
          </el-option>
        </el-select>
        <div class="clear"></div>
      </div>
      <el-table
        :data="tableData"
        stripe
        border
        :header-cell-style="{backgroundColor:'#f5f7fa'}"
        style="width: 100%"
      >
        <<el-table-column prop="AUDIT_BATCH" label="稽核时间" width='100px'></el-table-column>
        <el-table-column prop="AUDITTABLENUM" label="稽核批次" width='100px'></el-table-column>
        <el-table-column prop="AUDITTABLENUM" label="稽核点名称"></el-table-column>
        <el-table-column label="业务名称">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row,scope.column)" type="text" size="small">{{scope.row.CHECKNAME}}</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="UNEQUAL" label="平台(参与比对总数)"></el-table-column>
        <el-table-column prop="UNEQUAL" label="CRM参与比对总条数"></el-table-column>
        <el-table-column label="A单边(CRM)"></el-table-column>
        <el-table-column label="B单边(平台)"></el-table-column>
        <el-table-column label="不一致条数" width='100px'></el-table-column>
        <el-table-column prop="UNEQUAL" label="一致性条数" width='100px'></el-table-column>
        <el-table-column prop="UNEQUAL" label="一致率(%)" width='90px'></el-table-column>
        <el-table-column prop="UNEQUAL" label="一致率环比上月(%)"></el-table-column>
        <el-table-column prop="UNEQUAL" label="总差异数" width='80px'></el-table-column>
        <el-table-column prop="UNEQUAL" label="新增差异数" width='100px'></el-table-column>
        <el-table-column prop="UNEQUAL" label="重复差异数" width='100px'></el-table-column>
        <el-table-column prop="UNEQUAL" label="新增差异占比(%)" width='130px'></el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size.sync="pageSize"
          layout="prev, pager, next, total"
          :total='1'>
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'CommonPBCheck',
    created(){
    },
    data () {
      return {
        name:'查看',
        currentPage: 1,
        pageSize:10,
        selectType:'',
        tableData: [
          {
            RESULTSUMID:'aabbcc',
            AUDIT_DATE:'1601476',
            AUDIT_BATCH: '201808111',
            AUDITTABLENUM: '1185030',
            TOPIC_NAME: '账户信息对比',
            GATEWAYTOTALNUM: '100.03%',
            CONSISNUM: 10086,
            ERRORNUM: 1000,
            CRMTOTALNUM: '每日上限',
            AUDIT_TABLE_PK_COLUMN1: "aaaaa,bbbbbb,cccccc,dddddd,eeeeee",
            AUDIT_TABLE_PK_VALUE1: "aaa,bbbb,cccc,dddd,eeee",
            REPORTLINK: 'ATTRIBUTE'
          }
        ],
        options: [
          {
            RESULTTYPEID: 'A',
            RESULTTYPEMULTINAME: '139邮箱'
          }
        ]
      }
    },
    methods: {
      getList(){
      },
      backRouter(){
        this.$router.back(-1);
      },
      handleClick(row,column){
        if (column.label === '分类汇总') {
          this.$router.push({path:this.$route.matched[2].path+'/commonPBCheck'});
        }
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
