<template>
	<div class="current-container">
		<div id="cur-chart1">
		</div>
		<div class="cur-line"></div>
		<div id="cur-chart2">
			<div id="cur-pie1"></div>
			<div id="cur-pie2"></div>
			<div style="clear:both"></div>
			<div id="cur-pie3"></div>
			<div id="cur-pie4"></div>
		</div>
		<div style="clear:both"></div>
	</div>
	
</template>

<script>
	import echarts from "echarts/lib/echarts";
	import "echarts/theme/macarons.js";
	export default{
		data () {
			return{

			}
		},
		mounted () {
			var myChart = echarts.init(document.getElementById('cur-chart1'),'macarons');
            myChart.setOption({
                title: { text: '信息维度展示', x:'center' },
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
                    data: ["恶意注册人","注册电话","注册商","DNS服务器"]
                },
                yAxis: {},
                series: [{
                    name: '数量',
                    type: 'bar',
                    data: [50, 20, 12, 32]
                }]
            });

            var myPie = echarts.init(document.getElementById('cur-chart2'),'macarons');
            myPie.setOption({
            	  title : {
			        text: '按比例展示',
			        x:'center'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        x : 'center',
			        y : 'bottom',
			        data:['恶意注册人','注册电话','注册商','DNS服务器']
			    },
			    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {
			                show: true,
			                type: ['pie', 'funnel']
			            },
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
			    series : [
			        {
			            name:'半径模式',
			            type:'pie',
			            radius : '65%',
			            center : ['50%', '50%'],
			            roseType : 'radius',
			            data:[
			                {value:50, name:'恶意注册人'},
			                {value:20, name:'注册电话'},
			                {value:12, name:'注册商'},
			                {value:32, name:'DNS服务器'},
			            ]
			        }
			   ]
            })
            window.onresize = myChart.resize; 
        }	
	}
</script>

<style>
	#cur-chart1{
		margin-top: 80px;
		width: 52%;
		height: 600px;
		float: left;
	}
	.cur-line{
		height: 600px;
		float: left;
		margin-left: 30px;
		width: 5px;
		margin-top: 80px;
		border-left: 1px solid #cccccc;
	}
	#cur-chart2{
		margin-top: 80px;
		width: 42%;
		height: 600px;
		float: left;
	}
</style>