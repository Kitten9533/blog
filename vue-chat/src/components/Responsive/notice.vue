<template>
	<div>
		<transition name="fade">
			<div class="chat-box" v-if="showChat">
				<div class="chat-top">top</div>
				<div class="chat-content">content</div>
				<div class="chat-footer">
					<div class="send-left">
						<input class="send-content" type="text" name="content"/>
					</div>
					<div class="send-right">
						<span class="send-btn">发送</span>
					</div>
				</div>
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
		z-index: 10;
		bottom: 120px;
		right: 60px;
		border: 1px solid rgba(92, 184, 92, 1);
		height: 350px;
		width: 250px;
		border-radius: 5px;
		box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0px rgba(0, 0, 0, 0.3);
	}
	.chat-box:after{
		content: '';
		display: block;
		width: 0;
		height: 0;
		position: absolute;
		bottom: -20px;
		border-width: 10px;
		right: 0;
		/*
		border-color: rgba(255,255,255,1) transparent transparent transparent;*/
		border-color: rgba(92, 184, 92, 0.5) transparent transparent transparent;
	}
	.chat-top{
		height: 40px;
		background: rgba(92, 184, 92, 0.5);
	}
	.chat-content{
		height: 270px;
	}
	.chat-footer{
		height: 40px;
		display: table;
		width: 100%;
	}
	.chat-footer div{
		display: table-cell;
		height: 40px;
	}
	.chat-footer div>input, .chat-footer div>a{
		height: 40px;
		width: 100%;
		border: none;
		box-sizing: border-box;
	}
	.send-btn{
		line-height: 40px;
		width: 60px;
		padding-left: 10px;
		padding-right: 10px;
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
