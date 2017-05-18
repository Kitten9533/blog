<template>
    <div>
        <router-link v-show="$route.path == '/time-entries'" to="/time-entries/log-time" class="btn btn-primary"> 创建 </router-link>
        <div>
            <h3 v-show="$route.path == '/time-entries/log-time'">创建</h3> </div>
        <hr>
        <router-view v-on:timeUpdate="timeUpdate"></router-view>
        <div class="time-entries">
            <p v-show="timeEntries.length==0"><strong>还没有任何任务</strong></p>
            <div class="list-group">
                <a class="list-group-item" v-for="timeEntry in timeEntries">
                    <div class="row">
                        <div class="col-sm-2 user-details">
                            <img :src="timeEntry.user.image" class="avatar img-circle img-responsive" />
                            <p class="text-center"> <strong> {{ timeEntry.user.name }} </strong> </p>
                        </div>
                        <div class="col-sm-2 text-center time-block">
                            <h3 class="list-group-item-text total-time"> <i class="glyphicon glyphicon-time"></i> {{ timeEntry.totalTime }} </h3>
                            <p class="label label-primary text-center todo-label"> <i class="glyphicon glyphicon-calendar"></i> {{ !!timeEntry.date ? timeEntry.date : '未填写时间'}} </p>
                        </div>
                        <div class="col-sm-7 comment-section">
                            <p>{{ timeEntry.comment }}</p>
                        </div>
                        <div class="col-sm-1">
                            <button class="btn btn-xs btn-danger delete-button" @click="deleteTimeEntry(timeEntry)"> X </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        // 事先模拟一个数据 
        // let existingEntry = {
        //     user: {
        //         name: 'Kitten',
        //         email: 'kodo@forchange.cn',
        //         image: 'https://sfault-avatar.b0.upaiyun.com/888/223/888223038-5646dbc28d530_huge256'
        //     },
        //     comment: '我的一个备注',
        //     totalTime: 2,
        //     date: '2016-11-03'
        // }
        return {
            timeEntries: this.getTodos()
        }
    }, 
    methods: {
        deleteTimeEntry(timeEntry) {
            //这个方法用于删除某一项计划 
            let index = this.timeEntries.indexOf(timeEntry)
            if (window.confirm('确定要删除吗?')) {
                this.timeEntries.splice(index, 1)
                localStorage.setItem('todos', JSON.stringify(this.timeEntries))           
                this.$emit('deleteTime', timeEntry)
            }
        },
        timeUpdate(timeEntry) {
            this.timeEntries.push(timeEntry)
            let todos = this.getTodos()
            todos.push(timeEntry)
            localStorage.setItem('todos', JSON.stringify(todos))
            this.$emit('timeUpdate', timeEntry)
        },
        getTodos() {
            let todos = localStorage.getItem('todos')
            if(!todos){// 原先不存在时 新建
                todos = []
            }else{
                todos = JSON.parse(todos)
            }
            return todos
        }
    }
}
</script>

<style>
.avatar {
    height: 75px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
}

.user-details {
    background-color: #f5f5f5;
    border-right: 1px solid #ddd;
    margin: -10px 0;
}

.time-block {
    padding: 10px;
}

.comment-section {
    padding: 20px;
}
.todo-label{
    font-weight: 400;
}
</style>
