<template>
	<div>
		<transition name="fade">
			<div class="chat-box" v-if="showChat">
				chat-box
			</div>
		</transition>
		<div class="notice" @click="showChat=!showChat">
			<span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span>
		</div>
	</div>
</template>

<style scoped>
	.fade-enter-active, .fade-leave-active {
	  transition: opacity .5s
	}
	.fade-enter, .fade-leave-active {
	  opacity: 0
	}
	.chat-box{
		position: fixed;
		bottom: 110px;
		right: 60px;
	}
	.notice{
		background: rgba(92, 184, 92, 0.5);
		height: 50px;
		width: 50px;
		position: fixed;
		right: 60px;
		bottom: 50px;
		border-radius: 10px;
		transition: 0.3s ease-in-out;
	}
	.notice:hover{
		transform: rotateZ(360deg);
		position: cursor;
		transition: 0.3s ease-in-out;
	}
	.glyphicon-info-sign{
		font-size: 33px;
		width: 50px;
		height: 50px;
		color: #fff;
		line-height: 50px;
		text-align: center;
		cursor: pointer;
	}
</style>

<script>
	export default{
	  data () {
	    return {
	      showChat: true
	    }
	  }
	}
</script>
