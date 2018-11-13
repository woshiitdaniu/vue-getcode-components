<template>
	<div id="loading" v-show="showOrHide">
		<div class="spinner">
			<div class="rect1"></div>
			<div class="rect2"></div>
			<div class="rect3"></div>
			<div class="rect4"></div>
			<div class="rect5"></div>
		</div>

	</div>
</template>

<script>
	export default {
		props: ["showOrHide"],
		name: "loading",
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped">
	#loading {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 90;
		background-color: rgba(0, 0, 0, 0.5);
	}
	
	.spinner {
		margin: 50vh auto;
		width: 50px;
		height: 60px;
		text-align: center;
		font-size: 10px;
	}
	
	.spinner>div {
		background-color: #67CF22;
		height: 53%;
		width: 3px;
		display: inline-block;
		-webkit-animation: stretchdelay 1.2s infinite ease-in-out;
		animation: stretchdelay 1.2s infinite ease-in-out;
	}
	
	.spinner .rect2 {
		-webkit-animation-delay: -1.1s;
		animation-delay: -1.1s;
	}
	
	.spinner .rect3 {
		-webkit-animation-delay: -1.0s;
		animation-delay: -1.0s;
	}
	
	.spinner .rect4 {
		-webkit-animation-delay: -0.9s;
		animation-delay: -0.9s;
	}
	
	.spinner .rect5 {
		-webkit-animation-delay: -0.8s;
		animation-delay: -0.8s;
	}
	
	@-webkit-keyframes stretchdelay {
		0%,
		40%,
		100% {
			-webkit-transform: scaleY(0.4)
		}
		20% {
			-webkit-transform: scaleY(1.0)
		}
	}
	
	@keyframes stretchdelay {
		0%,
		40%,
		100% {
			transform: scaleY(0.4);
			-webkit-transform: scaleY(0.4);
		}
		20% {
			transform: scaleY(1.0);
			-webkit-transform: scaleY(1.0);
		}
	}
</style>