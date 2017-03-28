<template>
	<div class="current-container">
		<div id="cur-chart1">
			怎么给这块区域加一个echarts图表？
		</div>
		<div class="cur-chart2"></div>
		<div style="clear: both"></div>
	</div>
</template>

<script>
	import echarts from "echarts/lib/echarts";
	export default{
		data () {
			return{

			}
		},
		mounted () {
			var myChart = echarts.init(document.getElementById('cur-chart1'));
            myChart.setOption({
                title: { text: 'ECharts 入门示例' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }	
	}
</script>

<style>
	#cur-chart1{
		margin-top: 100px;
		width: 600px;
		height: 600px;
		border: 1px solid black;
	}

</style>