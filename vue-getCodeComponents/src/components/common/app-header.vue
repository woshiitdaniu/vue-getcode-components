<template>
  <!--复兴性高，数据交互比较频繁-->
  <div id="wx-header"> 
    <div class="center">
      <!--显示当前页的名字-->
      <span>{{$store.state.currentPageName}}</span>
      <!--微信群 显示群名以及成员人数 好像和 dialogue 组件 写重了 sad -->
      <span class="parentheses" v-show='$route.query.group_num&&$route.query.group_num!=1'>{{$route.query.group_num}}</span>
    </div>
  </div>
</template>
<script>
    export default {
        props: ["pageName"],
        data() {
            return {
                // 暂且用不到
                chatCount: true
            }
        },
        methods: {
            // 暂且用不到 先留着
            goBack() {
                this.$router.go(-1)
                    //保证返回操作后正确显示页面名称
                    // this.$store.commit("setPageName", this.$store.state.backPageName)
            }
        }
    }
</script>
<style>

</style>