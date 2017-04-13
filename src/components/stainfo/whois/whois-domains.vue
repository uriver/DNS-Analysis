<template>
	<div>
		<div id="signChart"></div>
		<div class="whois-line"></div>
		<div id="signPlan"></div>
	</div>
</template>

<script>
	import echarts from "echarts/lib/echarts";
	import "echarts/theme/macarons.js";

	export default{
		mounted () {
			var signChart = echarts.init(document.getElementById('signChart'),'macarons');
            signChart.setOption({
                title: { text: '恶意域名注册商分布图TOP10', x:'center' },
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
                    data: ["A","B","C","D","E","F","G","H","I","J"]
                },
                yAxis: {},
                series: [{
                    name: '数量',
                    type: 'bar',
                    barWidth : 40,
                    data: [180, 170, 98, 96, 92, 87, 87, 64, 57, 49,]
                }]
            });

					var signPlan = echarts.init(document.getElementById('signPlan'),'macarons');
          signPlan.setOption({
            	  title : {
			        text: '恶意域名注册商分布图TOP10',
			        subtext:' ',
			        x:'left'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        x : 'center',
			        y : 'bottom',
			        data: ["A","B","C","D","E","F","G","H","I","J","others"]
			    },
			    calculable : true,
			    series : [
			        {
			            name:'模式',
			            type:'pie',
			            radius : '70%',
			            center : ['50%', '50%'],
			            //roseType : 'area',
			            data:[
			                {value:180, name:'A'},
			                {value:170, name:'B'},
			                {value:98, name:'C'},
			                {value:96, name:'D'},
			                {value:92, name:'E'},
											{value:87, name:'F'},
											{value:87, name:'G'},
											{value:64, name:'H'},
											{value:57, name:'I'},
											{value:49, name:'J'},
											{value:4401, name:'others'},
			            ]
			        }
			   ]
            })
            window.onresize = signChart.resize;
        }
	}
</script>

<style>
#signChart{
	width: 50%;
	height: 700px;
	margin-top: 20px;
	margin-left: 10px;
	float: left;
}
	.whois-line{
		height: 700px;
		margin-top: 20px;
		margin-left: 20px;
		width: 1px;
		border-left: 1px solid #cccccc;
		float: left;
	}
	#signPlan{
		width: 42%;
		height: 700px;
		margin-top: 20px;
		margin-left: 20px;
		float:left ;
	}
</style>
