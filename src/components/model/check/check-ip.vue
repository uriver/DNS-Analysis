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
				ipData: [],
				urlData:''
			}
		},
		mounted:function(){
			this.test1();
		},
		methods:{
			test1:function()
			{
				var aUrl = document.URL;
				if(aUrl.indexOf("value=")!=-1){
					var str = aUrl.split("value=");
				}
				this.urlData = str[1];
				this.getCIP();
			},
			getCIP:function(){
				$.ajax({
				async: false,
		        url:"http://172.29.152.3:8000/check?value="+this.urlData,
		        dataType:"json",
		        type:'GET',
		        success:function (samedata) {
		            this.ipData=samedata.ip;
		        }.bind(this),
		        error:function(){
		            alert('获取数据失败！');
		        }
		    })
		}
	}
}
</script>
