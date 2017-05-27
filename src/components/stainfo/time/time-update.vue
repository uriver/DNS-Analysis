<template>
	<div>
		<div id="upChart"></div>
	</div>
</template>

<script>
  import echarts from "echarts/lib/echarts";
  import "echarts/theme/macarons.js";

  export default{
  mounted () {
  var upChart = echarts.init(document.getElementById('upChart'),'macarons');
  upChart.setOption({
  title: { text: '域名更新时间频率图', x:'center' },
  tooltip: {},
  xAxis: {
  data: []
  },
  yAxis: {},
  series: [{
  name: '数量',
  type: 'bar',
  barWidth : 40,
  data: []
  }]
  });
  window.onresize = upChart.resize;

  //ajax后台处理数据
  $.ajax({
  url:this.myURL+"/stainfo/time/updatefrequency",
  dataType:"json",
  type:'GET',
  success:function (result)
  {
  var xValue=new Array();
  var yValue=new Array();
  var i = 0;
  var len =result.info.length;
  //将信息合并到一个数组里面
  for (i = 0; i < len; i++)
    {
       xValue[i]=result.info[i].x;
       yValue[i]=result.info[i].y;
    }
    upChart.setOption
    ({
       xAxis:{
             data: xValue,
             },
       series: [{
            name: '数量',
            type: 'bar',
            barWidth : 40,
            data:yValue
             }]
     });
   }
});
        }
	}
</script>

<style>
	#upChart{
		width: 95%;
		height: 700px;
		margin-top: 30px;
		margin-left: 30px;
	}
</style>