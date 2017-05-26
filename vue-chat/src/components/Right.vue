<template>
	<div class="box" style="color:#fff">
		<div class="search-box">
			<input class="search-btn" type="text" name="search" placeholder="Search..."/>
		</div>
	</div>
</template>

<style scoped>
	.box{
		width:100%;
		height: 100%;
		padding: 0;
	    margin: 0;
	    background: linear-gradient(-45deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background: -moz-linear-gradient(-45deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background: -webkit-linear-gradient(-45deg, #586A7E 0, #4B5668 25%, #38414A 50%, #2A313B 75%, #262D37 100%);
	    background-repeat: no-repeat;
	    background-attachment: fixed;
	    border-left: 1px solid #5a5959;
	}
	.search-box{
		padding-top: 30px;
		padding-bottom: 30px;
		border-bottom: 1px solid #5a5959;
	}
	::-webkit-input-placeholder { /* WebKit browsers */  
	    color: #fff;  
	}  
	:-moz-placeholder { /* Mozilla Firefox 4 to 18 */  
	   	color: #fff;  
	   	opacity: 1;  
	}  
	::-moz-placeholder { /* Mozilla Firefox 19+ */  
	   	color: #fff;  
	   	opacity: 1;  
	}  
	:-ms-input-placeholder { /* Internet Explorer 10+ */  
	   	color: #fff;  
	}  
	.search-btn{
		width:180px;
		border: none;
		background: rgb(87,99,121);
		border-radius: 10px;
		outline: none;
		text-indent: 20px;
		line-height: 25px;
		color: #fff !important;
	}
</style>

<script>
	export default{
	  data () {
	    return {}
	  }
	}
</script>
