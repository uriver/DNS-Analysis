<template>
  <div>
    <!--核心的表格内容-->
    <h1 class="head">非法域名的whois信息概览</h1>
    <el-table
      :data="whoisAll"
      height="700"
      style=":width:100%"
      >
     
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline="" class="demo-table-expand">
            <el-form-item label="一级服务器">
              <span>{{ props.row.first }}</span>
            </el-form-item>
            <el-form-item label="二级服务器">
              <span>{{ props.row.second }}</span>
            </el-form-item>
            <el-form-item label="原始whois信息">
              <span>{{ props.row.origin }}</span>
            </el-form-item>
            <el-form-item label="注册者">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="注册者电话">
              <span>{{ props.row.tel }}</span>
            </el-form-item>
            <el-form-item label="注册者邮箱">
              <span>{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="whois注册时间">
              <span>{{ props.row.signin }}</span>
            </el-form-item>
            <el-form-item label="whois到期时间">
              <span>{{ props.row.duetime }}</span>
            </el-form-item>
            <el-form-item label="whois更新时间">
              <span>{{ props.row.update }}</span>
            </el-form-item>
              <el-form-item label="注册服务器">
              <span>{{ props.row.servers }}</span>
            </el-form-item>
            <el-form-item label="插入时间">
              <span>{{ props.row.inserttime }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      
      <el-table-column
        prop="tld"
        label="顶级域"
        width="120">
      </el-table-column>
      <el-table-column
      prop="condition"
      label="域名状态"
      style="width:5%">
      </el-table-column>
      <el-table-column
        prop="business"
        label="注册商"
        style="width:45%">
      </el-table-column>
      <el-table-column
        prop="firm"
        label="注册公司"
        style="width:15%">
      </el-table-column>
      <el-table-column
        prop="domain"
        label="域名"
        style="width:15%">
      </el-table-column>
    </el-table>
    
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        v-on:current-change="pageIndexChange"
        :current-page="PageIndex"
        :page-size="10"
        layout="total,prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default{
  data () {
  return{
  whoisAll: [],
  total:1200
  }
  },

  //分页功能
  methods: {
  handleCurrentChange(q) {
  $.ajax({
  url:"http://172.29.152.3:8000/stainfo/whois/whoisall?value="+q,
  dataType:"json",
  type:'GET',
  success:function (result)
  {
  //表格填充
  var res=[];
  var i = 0;
  var len=result.whoisall.length;
  for (i = 0; i < len; i++)
   {
     res.push({
        first:result.whoisall[i].first,
        second:result.whoisall[i].second,
        origin:result.whoisall[i].origin,
        name:result.whoisall[i].name, 
        tel:result.whoisall[i].tel,
        email: result.whoisall[i].email,
        signin:result.whoisall[i].signin,
        duetime:result.whoisall[i].duetime,
        update:result.whoisall[i].update,
        servers:result.whoisall[i].servers,
        inserttime :result.whoisall[i].inserttime,  
        tld:result.whoisall[i].tld,
        condition:result.whoisall[i].condition,
        business:result.whoisall[i].business,
        firm:result.whoisall[i].Firm,
        domain:result.whoisall[i].domain,
     })
  }  
  this.whoisAll=res;
  }.bind(this),
  error:function()
  {
  alert("访问服务器失败");
  }
  });
  }
  },
  mounted(){
  $.ajax({
  url:"http://172.29.152.3:8000/stainfo/whois/whoisall?value=1",
  dataType:"json",
  type:'GET',
  success:function (result)
  {
  //表格填充
  var res=[];
  var i = 0;
  var len=result.whoisall.length;
  for (i = 0; i < len; i++)
   {
     res.push({
        first:result.whoisall[i].first,
        second:result.whoisall[i].second,
        origin:result.whoisall[i].origin,
        name:result.whoisall[i].name, 
        tel:result.whoisall[i].tel,
        email: result.whoisall[i].email,
        signin:result.whoisall[i].signin,
        duetime:result.whoisall[i].duetime,
        update:result.whoisall[i].update,
        servers:result.whoisall[i].servers,
        inserttime :result.whoisall[i].inserttime,  
        tld:result.whoisall[i].tld,
        condition:result.whoisall[i].condition,
        business:result.whoisall[i].business,
        firm:result.whoisall[i].Firm,
        domain:result.whoisall[i].domain,
     })
  }  
  this.whoisAll=res;
  }.bind(this),
  error:function()
  {
  alert("访问服务器失败");
  }
  });
  }
  }
</script>

<style>
  .head{
  color:#08a9f2;
  text-align:center;
  }
  .demo-table-expand {
  font-size: 0;
  }
  .demo-table-expand label {
  width: 90px;
  color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width:30%
  }


</style>
