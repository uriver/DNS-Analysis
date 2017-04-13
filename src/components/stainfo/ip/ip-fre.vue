<template>
	<div>
		<div id="freChart"></div>
	</div>
</template>

<script>
	import echarts from "echarts/lib/echarts";
	import "echarts/theme/macarons.js";

	export default{
		mounted () {
			var freChart = echarts.init(document.getElementById('freChart'),'macarons');
            freChart.setOption({
                title: { text: 'IP更换频率图', x:'center' },
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
                    data: [95, 73, 78, 86, 118, 127, 97, 84, 117, 79, 65, 64, 70, 54, 45]
                }]
            });
            window.onresize = freChart.resize; 
        }
	}
</script>

<style>
	#freChart{
		width: 95%;
		height: 700px;
		margin-top: 30px;
		margin-left: 30px;
	}
</style>