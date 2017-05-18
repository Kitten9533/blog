<template>
	<div>
	    <div class="jumbotron">
	        <h1>任务追踪</h1>
	        <p> <strong> <router-link to="/time-entries">创建一个任务</router-link> </strong> </p>
	    </div>
	    <todolist></todolist>
    </div>
</template>

<script >
	import TimeEntries from './TimeEntries.vue'
    export default {
        name: 'home',
        components: {
            todolist: TimeEntries
        }
    }
</script>