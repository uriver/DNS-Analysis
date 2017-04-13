<template>
	<div>
		<div id="year-top"></div>
		<div id="year-left"></div>
		<!--div class="year-line"></div-->
		<div id="year-right"></div>
	</div>
</template>

<script>
	import echarts from "echarts/lib/echarts";
	import "echarts/theme/macarons.js";

	export default{
		data () {
			return{
		        value:''
			}
		},
		mounted () {
			var yearChart = echarts.init(document.getElementById('year-top'),'macarons');
            yearChart.setOption({
                title: { text: '创建/到期域名展示', x:'center' },
			    legend: {                                   // 图例配置
			        padding: 5,                             // 图例内边距，单位px，默认上下左右内边距为5
			        itemGap: 10,                            // Legend各个item之间的间隔，横向布局时为水平间隔，纵向布局时为纵向间隔
			        data: ['创建域名', '到期域名'],
			        x:'left'
			    },
                tooltip: {},
                    toolbox: {
			        show : true,
			        feature : {
			            mark : {show: true},
			            dataView : {show: true, readOnly: false},
			            magicType : {show: true, type: ['bar', 'line']},
			            restore : {show: true},
			            saveAsImage : {show: true}
			        }
			    },
			    calculable : true,
                xAxis: {
                    data: ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
                },
                yAxis: {},
                series: [{
                    name: '创建域名',
                    type: 'line',
                    data: [60, 77, 65, 83, 74, 95, 75, 82, 113, 78, 99, 100]
                },{
                	name: '到期域名',
                    type: 'line',
                    data: [74, 67, 85, 73, 79, 105, 95, 82, 103, 88, 69, 80]
                }]
            });
            var leftChart = echarts.init(document.getElementById('year-left'),'macarons');
            leftChart.setOption({
            	  title : {
			        text: '2003-2007年到期域名量显示',
			        subtext:'默认年份为2003年起',
			        x:'left'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        x : 'center',
			        y : 'bottom',
			        data:['2003','2004','2005','2006','2007']
			    },
			    calculable : true,
			    series : [
			        {
			            name:'半径模式',
			            type:'pie',
			            radius : '70%',
			            center : ['50%', '50%'],
			            roseType : 'radius',
			            data:[
			                {value:50, name:'2003'},
			                {value:20, name:'2004'},
			                {value:22, name:'2005'},
			                {value:32, name:'2006'},
			                {value:37, name:'2007'},
			            ]
			        }
			   ]
            });

          /*  var rightChart = echarts.init(document.getElementById('year-right'),'macarons');
            rightChart.setOption({
            	  title : {
			        text: '2003-2007年创建域名量显示',
			        subtext:'默认年份为2003年起',
			        x:'left'
			    },
			    tooltip : {
			        trigger: 'item',
			        formatter: "{a} <br/>{b} : {c} ({d}%)"
			    },
			    legend: {
			        x : 'center',
			        y : 'bottom',
			        data:['2003','2004','2005','2006','2007']
			    },
			    calculable : true,
			    series : [
			        {
			            name:'半径模式',
			            type:'pie',
			            radius : '70%',
			            center : ['50%', '50%'],
			            roseType : 'radius',
			            data:[
			                {value:43, name:'2003'},
			                {value:27, name:'2004'},
			                {value:22, name:'2005'},
			                {value:36, name:'2006'},
			                {value:44, name:'2007'},
			            ]
			        }
			   ]
       })*/
            window.onresize = yearChart.resize;
        }
	}
</script>

<style>
	#year-top{
		width: 95%;
		height: 420px;
		margin-left: 20px;
		margin-top: 0px;
		margin-bottom: 20px;
		border-bottom: 1px solid #cccccc;
	}
	#year-left{
		width: 42%;
		height: 300px;
		margin-left: 40px;
		float: left;
	}
	.year-line{
		height: 300px;
		margin-left: 20px;
		width: 1px;
		border-left: 1px solid #cccccc;
		float: left;
	}
	#year-right{
		width: 42%;
		height: 300px;
		margin-left: 20px;
		float: left;
	}
</style>
