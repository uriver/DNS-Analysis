<template>
	<header>
	<el-row>
		<el-col :span="24">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" router='true'>
			<el-menu-item index='/'>首页</el-menu-item>
			<el-menu-item index='/sta-info'>恶意域名统计信息</el-menu-item>
			<el-menu-item index='/model'>域名恶意评估模型</el-menu-item>
		</el-menu>
		</el-col>
	</el-row>
	</header>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
header{
	box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
	position: fixed;
	top: 0;left: 0;right: 0;
	z-index: 1000;
}
header .el-menu-demo{
	padding-left: 1%;
}
</style>
