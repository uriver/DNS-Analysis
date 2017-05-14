<template>
  <div id='checkphoto'>
    <h2>页面快照</h2>
    <img :src="ImgPath" />
  </div>
</template>

<script>
	export default{
		data(){
			return{
				ImgPath:""
			}
		},
		mounted:function(){
      		this.getIMG();
    	},
		methods:{
			getIMG:function(){
				$.ajax({
		        url:"/static/check-photo.json",
		        dataType:"json",
		        type:'GET',
		        success:function (samedata) {
		            this.ImgPath=samedata[0].img;
		        }.bind(this),
		        error:function(){
		            alert('获取数据失败！');
		        }
		    })
		}
	}
}
</script>