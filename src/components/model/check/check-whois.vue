<template>
	<div id='checkwhois'>
		<h2>whois信息</h2>
    <el-table
		 :data="whoisData"
		 style="width: 100%">
	    <el-table-column
			 	prop="name"
			 	label="名称">
		 	</el-table-column>
	    <el-table-column
				prop="info"
				label="内容">
			</el-table-column>
    </el-table>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				whoisData: []
			}
		},
		created:function(){
			$.ajax({
	        url:"/static/check-whois.json",
	        dataType:"json",
	        type:'GET',
	        success:function (data) {
	            this.whoisData = data
	        }.bind(this),
	        error:function(){
	            alert('获取数据失败！')
	        },
	    });
		}
	}
</script>
