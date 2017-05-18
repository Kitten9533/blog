<template>
    <div class="panel panel-default shadow">
        <div class="panel-heading">
            <h4 class="text-center">已有时长</h4> </div>
        <div class="panel-body">
            <h4 class="text-center">{{ time }} 小时</h4> </div>
    </div>
</template> 

<script>
    export default { 
        name : 'Sidebar',
        props: ['time'],
        watch: {
            time: function(curV, oldV){
                localStorage.setItem('time', curV)
            }
        }
    }
</script>

<style scoped>
    .shadow{
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
    }
</style>
