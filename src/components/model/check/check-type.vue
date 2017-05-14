<template>
  <div id="checktype">
    <h2>恶意评估结果</h2>
    <div class="tab1">
      <h2>{{illtype}} : {{score}}</h2>
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
        url:"/static/same.json",
        dataType:"json",
        async :false,
        type:'GET',
        date:{"name":123},
        success:function (samedata) {
            this.illtype=samedata.samen;
            this.score=samedata.samet;

        }.bind(this),
        error:function(){
            alert('获取数据失败！')
        },
    });
  }
}
</script>
