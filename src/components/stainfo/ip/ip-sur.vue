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
                    data: ["3h","5h","8h","12h","18h","1天","2天","3天","4天","5天","7天","10天","15天","20天","更多"]
                },
                yAxis: {},
                series: [{
                    name: '数量',
                    type: 'bar',
                    barWidth : 40,
                    data: [41, 60, 98, 146, 188, 177, 167, 144, 117, 89, 79, 90, 110, 98, 125]
                }]
            });
            window.onresize = surChart.resize; 
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