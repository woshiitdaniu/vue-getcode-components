<template>
	<div id="head">
		<p class="head-leftpart" @click="goBack"><img src="../../assets/images/back.png"/></p>
		<p class="head-middlepart">{{ texts }}</p>
	</div>
</template>

<script>
	export default{
		name:'headd',
		props:['texts'],
		data(){
			return {
				
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

<style scoped="scoped">
	#head{
		position: relative;
	    z-index: 99;
	    height: 45px;
	    padding: 0 15px 0 10px;
	    line-height: 45px;
	    background: #1b1b1b;
	    opacity: 1;
	    color: #fff;
	    text-align: center;
	    font-size: 17px;
	}
	.head-leftpart{
		width: 50px;
	    height: 100%;
	    position: absolute;
	    top: 0;
	    left: 0;
	    padding-top: 8px;
	}
	.head-leftpart img{
		width: 73%;
    	height: 70%;
	}
</style>