<template>
  <div>
    <div class="year-data">
            <div class="year-font">请选择查看日期：</div>
            <el-select v-model="value" placeholder="请选择" style="margin-left:160px;">
                <el-option
                  v-for="item in years"
                  :label="item.label"
                  :value="item.value">
                </el-option>
          </el-select>
        </div>
    <div id="spa-map"></div>
  </div>
</template>
<script>
    import echarts from "echarts/lib/echarts";
    import "echarts/map/js/china"
    // import "echarts/lib/chart/bar";
    // import "echarts/lib/chart/lines";
    // import "echarts/lib/component/tooltip";
    // import "echarts/lib/component/title";
    // import "echarts/lib/component/toolbox";

    export default{
      data () {
        return{
          years:[{
            value: '选项1',
                label: '2007'
              }, {
                value: '选项2',
                label: '2008'
              }, {
                value: '选项3',
                label: '2009'
              }, {
                value: '选项4',
                label: '2010'
              }, {
                value: '选项5',
                label: '2011'
              }],
              value:''
        }
      },
        methods: {
        },
        mounted() {
            function randomData() {
                return Math.round(Math.random()*1000);
            }
            let SpaMap = echarts.init(document.getElementById('spa-map'));
            SpaMap.setOption({
                  title: {
                        text: '恶意域名数量分布图',
                        left: 'center',
                        textStyle:{
                            color: '#428BCA'
                        }
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data:['iphone3','iphone4','iphone5']
                    },
                    visualMap: {
                        min: 0,
                        max: 2500,
                        left: 'left',
                        top: 'bottom',
                        text: ['高','低'],           // 文本，默认为数值文本
                        calculable: true
                    },
                    toolbox: {
                        show: true,
                        orient: 'vertical',
                        left: 'right',
                        top: 'center',
                        feature: {
                            dataView: {readOnly: false},
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    series: [
                        {
                            name: '恶意域名',
                            type: 'map',
                            layoutCenter: ['50%', '50%'],
                            layoutSize: 900,
                            mapType: 'china',
                            roam: false,
                            label: {
                                normal: {
                                    show: true
                                },
                                emphasis: {
                                    show: true
                                }
                            },
                            data:[
                                {name: '北京',value: randomData() },
                                {name: '天津',value: randomData() },
                                {name: '上海',value: randomData() },
                                {name: '重庆',value: randomData() },
                                {name: '河北',value: randomData() },
                                {name: '河南',value: randomData() },
                                {name: '云南',value: randomData() },
                                {name: '辽宁',value: randomData() },
                                {name: '黑龙江',value: randomData() },
                                {name: '湖南',value: randomData() },
                                {name: '安徽',value: randomData() },
                                {name: '山东',value: randomData() },
                                {name: '新疆',value: randomData() },
                                {name: '江苏',value: randomData() },
                                {name: '浙江',value: randomData() },
                                {name: '江西',value: randomData() },
                                {name: '湖北',value: randomData() },
                                {name: '广西',value: randomData() },
                                {name: '甘肃',value: randomData() },
                                {name: '山西',value: randomData() },
                                {name: '内蒙古',value: randomData() },
                                {name: '陕西',value: randomData() },
                                {name: '吉林',value: randomData() },
                                {name: '福建',value: randomData() },
                                {name: '贵州',value: randomData() },
                                {name: '广东',value: randomData() },
                                {name: '青海',value: randomData() },
                                {name: '西藏',value: randomData() },
                                {name: '四川',value: randomData() },
                                {name: '宁夏',value: randomData() },
                                {name: '海南',value: randomData() },
                                {name: '台湾',value: randomData() },
                                {name: '香港',value: randomData() },
                                {name: '澳门',value: randomData() }
                            ]
                        }
                    ]
                });
        window.onresize = myChart.resize;
        },
        components: {}
    }
</script>

<style>
    #spa-map{
        margin-top: 30px;
        margin-left: 50px;
        width: 90%;
        height: 720px;
    }
</style>
