<template>
	<div>
		<div id="surChart"></div>
	</div>
</template>

<script>
  import echarts from "echarts/lib/echarts";
  import "echarts/theme/macarons.js";

  export default{
  mounted () {
  var surChart = echarts.init(document.getElementById('surChart'),'macarons');
  surChart.setOption({
  title: { text: 'IP存活时长对应的数量图', x:'center' },
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
  window.onresize = surChart.resize;
  $.ajax({
  url:"http://172.29.152.3:8000/stainfo/ip/ipsur",
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
    surChart.setOption
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
	#surChart{
		width: 95%;
		height: 700px;
		margin-top: 30px;
		margin-left: 30px;
	}
</style>