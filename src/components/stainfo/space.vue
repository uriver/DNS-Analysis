<template>
  <div>
    <div id="charts">
      <div id="main" :style="{width:'600px',height:'400px'}"></div>
    </div>
  </div>
</template>
<script>
    import echarts from "echarts/lib/echarts";
    // import "echarts/lib/chart/bar";
    // import "echarts/lib/chart/lines";
    // import "echarts/lib/component/tooltip";
    // import "echarts/lib/component/title";
    // import "echarts/lib/component/toolbox";

    export default{
        data(){
            return {};
        },
        methods: {},
        mounted() {
            let myChart = echarts.init(document.getElementById('main'));
            myChart.setOption({
                title: {text: 'ECharts 入门示例'},
                tooltip: {},
                xAxis: {
                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        },
        components: {}
    }
</script>