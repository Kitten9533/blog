<template>
	<div class="container" style="color:#fff;">
		<table class="box" cellspacing="1" cellpadding="0">
			<tr>
				<td width="150">
					<left></left>
				</td>
				<td class="center">
					<center></center>
				</td>
				<td width="240">
					<right></right>
				</td>
			</tr>
		</table>
	</div>
</template>

<style scoped>
	*{
	    margin: 0;
	    padding: 0;
	  }
	body, .container{
		width: 100%;
		height: 100%;
	}
	.box{
		width: 100%;
		height: 100%;
	}
	td{
		height: 100%;
	}
	.center{
		border-left: 1px outset #777777;
	}
</style>

<script>
	import left from './Left.vue'
	import center from './Center.vue'
	import right from './Right.vue'
	export default{
	  data () {
	    return {}
	  },
	  components: {
	    left: left,
	    center: center,
	    right: right
	  }
	}
</script>
