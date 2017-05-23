<template>
  <div id="checktype">
    <h1 style="font-weight: bold;">域名画像评估报告</h1>
    <p></p>
    <div class="tab1">
      <h2>域名性质：{{illtype}}</h2>
      <h2>评估分数: {{score}}</h2>
    </div>
  </div>
</template>
<script>
export default{
  data:function(){
    return{
      illtype:"",
      score:"",
      urlData:''
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
        url:"http://172.29.152.3:8000/check?value="+this.urlData,
        dataType:"json",
        async :false,
        type:'GET',
        success:function (samedata) {
            this.illtype=samedata.base_info.area;
            this.score=samedata.base_info.score;
        }.bind(this),
        error:function(){
            alert('获取数据失败！')
        },
    });
    }
  }
}
</script>
