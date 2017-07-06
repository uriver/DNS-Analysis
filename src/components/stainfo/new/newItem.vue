<template>
  <div>

    <h1 class="head">恶意域名概览</h1>
    <div id="spa-map"></div>
    <div id="myPie"></div>

  <!-- 表格部分 -->
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="province"
        label="省份"
        width="200">
      </el-table-column>
      <el-table-column
        prop="domain"
        label="域名"
        width="200"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        width="250"
        >
      </el-table-column>
      <el-table-column
        prop="nature"
        label="分类"
        width="250"
        >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width="250"
        >
      </el-table-column>
      <el-table-column
        prop="score"
        label="评价分数"
        width="150"
        >
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
        width="250"
        >
      </el-table-column>
    </el-table>

    <div>
      <el-pagination
        @current-change="pageIndexChange"
        :current-page="currentPage"
        :page-size="10"
        layout="total, prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>

  </div>
</template>
<script>
  import echarts from "echarts/lib/echarts";
  import "echarts/map/js/china"
  let SpaMap;
  export default{
    data(){
      return{
        badPie:'',
        tableData:[],
        currentPage:1,
        mes:{
          country:'',
          page:''
        }
      }
    },
    mounted(){
      this.createMap();
      this.createPie();
      this.getCountryData();
    },
    methods:{
      createMap:function(){
        var that = this;
        SpaMap = echarts.init(document.getElementById('spa-map'));
        var option = {
          tooltip: {
              trigger: 'item'
          },
          visualMap: {
              min: 0,
              max: 2500,
              left: 'left',
              top: 'bottom',
              text: ['高','低'],           // 文本，默认为数值文本
              calculable: true
          },
          series: [
              {
                  name: '恶意域名',
                  type: 'map',
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
                      {name: '北京',value: 1562,  },
                      {name: '天津',value: 1232 },
                      {name: '上海',value: 2341 },
                      {name: '重庆',value: 213 },
                      {name: '河北',value: 234 },
                      {name: '河南',value: 2334 },
                      {name: '云南',value: 534 },
                      {name: '辽宁',value: 654 },
                      {name: '黑龙江',value: 123 },
                      {name: '湖南',value: 543 },
                      {name: '安徽',value: 234 },
                      {name: '山东',value: 345 },
                      {name: '新疆',value: 564 },
                      {name: '江苏',value: 2344 },
                      {name: '浙江',value: 345 },
                      {name: '江西',value: 897 },
                      {name: '湖北',value: 764 },
                      {name: '广西',value: 785 },
                      {name: '甘肃',value: 967 },
                      {name: '山西',value: 234 },
                      {name: '内蒙古',value: 452 },
                      {name: '陕西',value: 562 },
                      {name: '吉林',value: 456 },
                      {name: '福建',value: 232 },
                      {name: '贵州',value: 645 },
                      {name: '广东',value: 2323 },
                      {name: '青海',value: 3453 },
                      {name: '西藏',value: 675 },
                      {name: '四川',value: 4546 },
                      {name: '宁夏',value: 563 },
                      {name: '海南',value: 342 },
                      {name: '台湾',value: 8765 },
                      {name: '香港',value: 756 },
                      {name: '澳门',value: 888 }
                  ]
              }
          ]
      };
      SpaMap.setOption(option);
      SpaMap.on('click', function (params) {
        that.mes.country = params.name;
        that.mes.page = params.value;
        that.currentPage = 1;
        that.getTable();
      });
      window.onresize = SpaMap.resize;
      },
      createPie:function(){
        var that = this;
        this.badPie = echarts.init(document.getElementById('myPie'));
        var option = {
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['合法域名','非法域名']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    label:{
                      normal:{
                        show:false ,
                        position : 'outside'
                      },
                      emphasis:{
                        show :false,
                      }
                    },
                    radius : '80%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'合法域名'},
                        {value:310, name:'非法域名'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        this.badPie.setOption(option);
        window.onresize = this.badPie.resize;
      },
      getTable:function(){
        var that = this;
        $.ajax({
        url:this.myURL+"/countrycondition",
        data:{"province":that.mes.country,"page":1},
        dataType:"json",
        type:"GET",
        success:function(result)
        {
          that.tableData = result.domainData;
        }
        //AJAX
        })
      },
      pageIndexChange:function(changePage){
        var that = this;
        $.ajax({
        url:this.myURL+"/countrycondition",
        data:{"province":that.mes.country,"page":changePage},
        dataType:"json",
        type:"GET",
        success:function(result)
        {
          that.tableData = result.domainData;
        }
        //AJAX
        });
      },
      getCountryData:function(){
        this.mes.country = "全国",
        this.getTable();
      }
    }
  }
</script>

<style>
  #spa-map{
  margin-top: 30px;
  margin-left: 50px;
  width: 75%;
  height: 720px;
  float: left;
  }
  #myPie{
  margin-top: 30px;
  margin-left: 50px;
  width: 15%;
  height: 520px;
  float: right;
  }
  .head{
  color:#08a9f2;
  text-align:center;
  }
</style>
