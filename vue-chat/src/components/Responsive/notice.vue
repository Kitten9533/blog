<template>
	<div class="notice">
		<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
	</div>
</template>

<style scoped>
	.notice{
		background: rgba(92, 184, 92, 0.5);
		height: 100px;
		width: 100px;
		position: fixed;
		right: 60px;
		bottom: 100px;
		border-radius: 25px;
		transition: 0.3s ease-in-out;
	}
	.notice:hover{
		transform: rotateZ(360deg);
		position: cursor;
		transition: 0.3s ease-in-out;
	}
	.glyphicon-info-sign{
		font-size: 33px;
		width: 100px;
		height: 100px;
		color: #fff;
		line-height: 100px;
		text-align: center;
		cursor: pointer;
	}
</style>

<script>
	export default{
	  data () {
	    return {}
	  }
	}
</script>
