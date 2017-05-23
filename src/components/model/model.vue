<template>
	<main>
		<div id="model-container">
			<div class="model-top">
				<div class="con-underline">
					<div class="dns-num">
						<span>当前非法域名数量：</span> <span class="num-class">{{ dnsnum }}</span>
					</div>
				</div>
				<router-view></router-view>
			</div>
			<div id="inp">
			<form>
		  		<el-input placeholder="请输入网址"  v-model="inputs">
		    	<el-button slot="append" icon="search" @click="onSubmit">确定</el-button>
		  		</el-input>
		  	</form>
			</div>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				dnsnum:3000
			}
		},
		methods: {
      	onSubmit() {
      		this.$router.push({ path: '/check?value='+this.inputs });
      //       $.ajax({
		    //     url:"/check?value="+this.inputs,
		    //     data:this.inputs,
		    //     async :false,
		    //     type:'POST',
		    //     success:function (samedata) {
		            
		    //     }.bind(this),
		    //     error:function(){
		    //         alert('发送数据失败！')
		    //     },
		    // });
		  }
      }
    }
</script>

<style>
#inp{
	width: 40%;
	height: 20%;
	margin: auto auto;
	margin-top: 15%;
}
#model-container{
	border: solid 20px #E9ECF1;
	margin-top: 50px;
	background-color: #FCFCFC;
	min-height: 855px;
	min-width: 1400px;
	overflow: hidden;
}
.model-top{
	width: 95%;
	padding: 20px 40px;
}
.con-underline{
	border-bottom: 1px solid #CCCCCC;
	height: 40px;
}
.dns-num{
	border-left: 8px solid #72b16a;
}
.dns-num span{
	padding-left: 15px;
	color: #72b16a;
}
.num-class{
	padding-left:5px!important;
	color: orange!important;
}
</style>
