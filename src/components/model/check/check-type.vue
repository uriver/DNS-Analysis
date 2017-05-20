<template>
  <div id="checktype">
    <h1 style="font-weight: bold;">域名画像评估报告</h1>
    <p></p>
    <div class="tab1">
      <h2>域名性质：{{illtype}} </h2>
      <h2>评估分数: {{score}}</h2>
    </div>
  </div>
</template>
<script>
export default{
  data:function(){
    return{
      illtype:"",
      score:""
    }
  },
  created:function(){
    $.ajax({
        url:"/static/all.json",
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
</script>
