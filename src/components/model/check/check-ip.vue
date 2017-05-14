<template>
	<div id='checkip'>
		<h2>ip信息</h2>
    <el-table
		 :data="ipData"
		 style="width: 100%">
	    <el-table-column
			 	prop="ipname"
			 	label="名称">
		 	</el-table-column>
	    <el-table-column
				prop="ipinfo"
				label="内容">
			</el-table-column>
    </el-table>
  </div>
</template>
<script>
	export default{
		data(){
			return{
				ipData: []
			}
		},
		mounted:function(){
      		this.getCIP();
    	},
		methods:{
			getCIP:function(){
				$.ajax({
		        url:"/static/check-ip.json",
		        dataType:"json",
		        type:'GET',
		        success:function (samedata) {
		            this.ipData=samedata;
		        }.bind(this),
		        error:function(){
		            alert('获取数据失败！');
		        }
		    })
		}
	}
}
</script>
