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
                    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['line', 'bar']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
                xAxis: {
                    data: ["1天","2天","3天","5天","7天","9天","11天","15天","20天","25天","30天","40天","50天","60天","更多"]
                },
                yAxis: {},
                series: [{
                    name: '数量',
                    type: 'bar',
                    barWidth : 40,
                    data: [80, 70, 98, 126, 98, 87, 87, 64, 77, 89, 75, 64, 70, 64, 45]
                }]
            });
            window.onresize = upChart.resize; 
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