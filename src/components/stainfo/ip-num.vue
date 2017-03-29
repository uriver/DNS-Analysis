<template>
	<div>
		<div id="IP-num1">
		</div>
		<div class="IP-line"></div>
		<div id="IP-num2">
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
			var num1Chart = echarts.init(document.getElementById('IP-num1'),'macarons');
            num1Chart.setOption({
                title: { text: '当前恶意域名在线IP与离线IP数量显示', x:'center' },
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
                    data: ["Online","Offline"]
                },
                yAxis: {},
                series: [{
                    name: '状态',
                    type: 'bar',
                    barWidth : 80,
                    data: [380, 570]
                }]
            });

            var num2Chart = echarts.init(document.getElementById('IP-num2'),'macarons');
            num2Chart.setOption({
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
			        data:["Online","Offline"]
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
			            name:'比例展示',
			            type:'pie',
			            radius : '55%',
			            center : ['50%', '50%'],
			            // roseType : 'radius',
			            data:[
			                {value:380, name:'Online'},
			                {value:570, name:'Offline'},
			            ]
			        }
			   ]
            })
            window.onresize = num1Chart.resize; 
        }	
	}
</script>

<style>
	#IP-num1{
		margin-top: 80px;
		width: 52%;
		height: 600px;
		float: left;
	}
	.IP-line{
		height: 600px;
		float: left;
		margin-left: 30px;
		width: 5px;
		margin-top: 80px;
		border-left: 1px solid #cccccc;
	}
	#IP-num2{
		margin-top: 80px;
		width: 42%;
		height: 600px;
		float: left;
	}
</style>