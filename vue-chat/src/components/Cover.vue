<template>
	<div class="container" style="color:#fff;">
		<table class="box" cellspacing="0" cellpadding="0">
			<tr>
				<td width="180" class="left-td">
					<left v-on:setName="setName"></left>
				</td>
				<td class="center">
					<center :centerName="centerName" :toUser="toUser" :frUser="frUser"></center>
				</td>
				<td width="290">
					<right v-on:getToUser="setToUser" v-on:getFrUser="setFrUser"></right>
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
		overflow:hidden;
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
	    return {
	      centerName: 'Overview',
	      toUser: {},
	      frUser: {}
	    }
	  },
	  components: {
	    left: left,
	    center: center,
	    right: right
	  },
	  methods: {
	    setName (name) {
	      this.centerName = name
	    },
	    setToUser (toUser) {
	      this.toUser = toUser
	    },
	    setFrUser (frUser) {
	      this.frUser = frUser
	    }
	  }
	}
</script>
