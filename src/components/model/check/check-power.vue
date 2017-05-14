<template>
	<div id='checkpower'>
    <div v-if="Pow.seen">
		<h2>权威网站对此网站评价</h2>
    <div class='tab1'>
      <h3>域名标题</h3>
    </div>
    <div class='tab2'>
      <p>域名标题：{{Pow.dnstitle}}</p>
    </div>
    <div class='tab1'>
      <h3>域名关键词</h3>
    </div>
    <div class='tab2'>
      <p>域名标题：{{Pow.dnskey}}</p>
    </div>
    <div class='tab1'>
      <h3>权威网站检测结果分析</h3>
    </div>
    <div class='tab2'>
      <p>{{Pow.dnsanay}}</p>
    </div>
    <div class='tab1'>
      <h3>注册者信息</h3>
    </div>
    <div class='tab2'>
      <el-table
  		 :data="Pow.powerData"
  		 style="width: 100%">
  	    <el-table-column
  			 	prop="powername"
  			 	label="名称">
  		 	</el-table-column>
  	    <el-table-column
  				prop="powerinfo"
  				label="内容">
  			</el-table-column>
      </el-table>
    </div>
    <div class='tab1'>
      <h3>域名影响力热度</h3>
    </div>
    <div class='tab2'>
      <p>{{Pow.dnshot}}</p>
    </div>
    <div class='tab1'>
      <h3>域名排名&趋势</h3>
    </div>
    <div class='tab2'>
      <p>{{Pow.dnsno}}</p>
    </div>
    <div class='tab1'>
      <h3>在网络上出现的位置</h3>
    </div>
    <div class='tab2'>
      <p>{{Pow.dnsloc}}</p>
    </div>
    <div class='tab1'>
      <h3>包含的恶意链接与分类</h3>
    </div>
    <div class='tab2'>
      <p>{{Pow.dnsherf}}</p>
    </div>
  </div>
  </div>
</template>
<script>
	export default{
		data(){
			return{
        Pow:[]
			}
		},
		created: function(){
			$.ajax({
	        url:"/static/check-power.json",
	        dataType:"json",
	        type:'GET',
	        success:function (data) {
	            this.Pow=data[0];
	        }.bind(this),
	        error:function(){
	            alert('获取数据失败！')
	        },
	    });
		}
	}
</script>
<style>
.tab1{
  margin-left: 10px;
}
.tab2{
  margin-left: 40px;
}
</style>
