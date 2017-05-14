<template>
  <div id='checkspace'>
		<h2>位置信息</h2>
    <div id="checkmap"></div>
  </div>
</template>
<script>
    import echarts from "echarts/lib/echarts";
    import "echarts/map/js/china"


    export default{
      data () {
        return{}
      },
        methods: {
        },
        mounted() {
        	$.ajax({
		        url:"/static/check-space.json",
		        dataType:"json",
		        type:'GET',
		        success:function (ajaxdata) {
		            var data=ajaxdata.position;
		            var geoCoordMap = ajaxdata.geoCoordMap;
					function convertData(data) {
					 var res = [];
					 for (var i = 0; i < data.length; i++) {
							 var geoCoord = geoCoordMap[data[i].name];
							 if (geoCoord) {
									 res.push({
											 name: data[i].name,
											 value: geoCoord.concat(data[i].value)
									 });
							 }
					 }
					 return res;
					};
					function randomValue() {
						return Math.round(Math.random()*1000);
					}
            let CheckMap = echarts.init(document.getElementById('checkmap'));
            CheckMap.setOption({
						    tooltip: {},
						    visualMap: {
						        min: 0,
						        max: 1500,
						        left: 'left',
						        top: 'bottom',
						        text: ['High','Low'],
						        seriesIndex: [1],
						        inRange: {
						            color: ['#e0ffff', '#006edd']
						        },
						        calculable : true
						    },
						    geo: {
						        map: 'china',
						        roam: true,
						        label: {
						            normal: {
						                show: true,
						                textStyle: {
						                    color: 'rgba(0,0,0,0.4)'
						                }
						            }
						        },
						        itemStyle: {
						            normal:{
						                borderColor: 'rgba(0, 0, 0, 0.2)'
						            },
						            emphasis:{
						                areaColor: null,
						                shadowOffsetX: 0,
						                shadowOffsetY: 0,
						                shadowBlur: 20,
						                borderWidth: 0,
						                shadowColor: 'rgba(0, 0, 0, 0.5)'
						            }
						        }
						    },
						    series : [
						       {
						           type: 'scatter',
						           coordinateSystem: 'geo',
						           data: convertData(data),
						           symbolSize: 10,
						           symbolRotate: 5,
						           label: {
						               normal: {
						                   formatter: '{b}',
						                   position: 'right',
						                   show: false
						               },
						               emphasis: {
						                   show: true
						               }
						           },
						           itemStyle: {
						               normal: {
						                    color: '#F06C00'
						               }
						           }
						        },
						        {
						            name: 'categoryA',
						            type: 'map',
						            geoIndex: 0,
						            // tooltip: {show: false},
						            data:[
						                {name: '北京', value: randomValue()},
						                {name: '天津', value: randomValue()},
						                {name: '上海', value: randomValue()},
						                {name: '重庆', value: randomValue()},
						                {name: '河北', value: randomValue()},
						                {name: '河南', value: randomValue()},
						                {name: '云南', value: randomValue()},
						                {name: '辽宁', value: randomValue()},
						                {name: '黑龙江', value: randomValue()},
						                {name: '湖南', value: randomValue()},
						                {name: '安徽', value: randomValue()},
						                {name: '山东', value: randomValue()},
						                {name: '新疆', value: randomValue()},
						                {name: '江苏', value: randomValue()},
						                {name: '浙江', value: randomValue()},
						                {name: '江西', value: randomValue()},
						                {name: '湖北', value: randomValue()},
						                {name: '广西', value: randomValue()},
						                {name: '甘肃', value: randomValue()},
						                {name: '山西', value: randomValue()},
						                {name: '内蒙古', value: randomValue()},
						                {name: '陕西', value: randomValue()},
						                {name: '吉林', value: randomValue()},
						                {name: '福建', value: randomValue()},
						                {name: '贵州', value: randomValue()},
						                {name: '广东', value: randomValue()},
						                {name: '青海', value: randomValue()},
						                {name: '西藏', value: randomValue()},
						                {name: '四川', value: randomValue()},
						                {name: '宁夏', value: randomValue()},
						                {name: '海南', value: randomValue()},
						                {name: '台湾', value: randomValue()},
						                {name: '香港', value: randomValue()},
						                {name: '澳门', value: randomValue()}
						            ]
						        }
						    ]
						});
				        }.bind(this),
				        error:function(){
				            alert('获取数据失败！');
				        }
				    })

        //window.onresize = myChart.resize;
        },
    }
</script>

<style>
#checkmap{
		//margin-top: 30px;
		//margin-left: 50px;
		width: 560px;
		height: 420px;
}

</style>
