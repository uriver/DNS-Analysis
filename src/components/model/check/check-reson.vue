<template>
  <div id='checkreson'>
		<h2>拓扑结构</h2>
  </div>
</template>
<script>
    import echarts from "echarts/lib/echarts";
	import "echarts/theme/macarons.js";
    export default{
      data () {
        return{}
      },
      mounted() {

        function showreson(json) {
          let CheckRes = echarts.init(document.getElementById('checkreson'));
          CheckRes.showLoading();
            CheckRes.hideLoading();
            CheckRes.setOption(
              {
                title: {
                    text: '拓扑结构'
                },
                animationDurationUpdate: 1500,
                animationEasingUpdate: 'quinticInOut',
                series : [
                    {
                        type: 'graph',
                        layout: 'none',
                        // progressiveThreshold: 700,
                        data: json.node.map(function (node) {
                            return {
                                x: node.x,
                                y: node.y,
                                id: node.id,
                                name: node.label,
                                symbolSize: node.size,
                                itemStyle: {
                                    normal: {
                                        color: node.color
                                    }
                                }
                            };
                        }),
                        edges: json.edges.map(function (edge) {
                            return {
                                source: edge.sourceID,
                                target: edge.targetID
                            };
                        }),
                        label: {
                            emphasis: {
                                position: 'right',
                                show: true
                            }
                        },
                        roam: true,
                        focusNodeAdjacency: true,
                        lineStyle: {
                            normal: {
                                width: 0.5,
                                curveness: 0.3,
                                opacity: 0.7
                            }
                        }
                    }
                ]
            }, true);
        };
        $.ajax(
            {
                url:"/static/reson.json",
                dataType:"json",
                type:'GET',
                success:function (result) {
                    showreson(result);
                }
            });
    }
}
</script>

<style>
#checkreson{
		//margin-top: 30px;
		//margin-left: 50px;
		width: 660px;
		height: 420px;
}

</style>
