<template>
  <div id="checktype">
    <h1 style="font-weight: bold;">域名画像评估报告</h1>
    <p></p>
    <div class="tab1">
      <h2>域名性质：{{illtype}}</h2>
      <h2>评估分数评估</h2>
      <el-table
      :data="scoreData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="locateScore"
        label="位置分数"
        >
      </el-table-column>
      <el-table-column
        prop="whoisScore"
        label="Whois分数"
        >
      </el-table-column>
      <el-table-column
        prop="contentScore"
        label="内容分数"
        >
      </el-table-column>
      <el-table-column
        prop="score"
        label="总分"
        >
      </el-table-column>
    </el-table>
    </div>
  </div>
</template>
<script>
export default{
  data:function(){
    return{
      illtype:"",
      score:"",
      urlData:'',
      scoreData:[{}]
    }
  },
  mounted:function(){
    var aUrl = document.URL;
    if(aUrl.indexOf("value=")!=-1){
        var str = aUrl.split("value=");
      }
      this.urlData = str[1];
      this.getData();
    },
  methods:{
    getData:function(){
    $.ajax({
        url:this.myURL+"/check?value="+this.urlData,
        dataType:"json",
        async :false,
        type:'GET',
        success:function (samedata) {
            this.illtype=samedata.base_info.area;
            this.scoreData[0]=samedata.base_info;
        }.bind(this),
        error:function(){
            alert('获取数据失败！')
        },
    });
    }
  }
}
</script>
