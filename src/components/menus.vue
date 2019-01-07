<template>
<!--binding click event goList, and judge the height of the text when item.id is when todoID-->
    <div class="list-todos">
        <!--v-for list rendering-->
        <a @ click = "goList(item.id)" class="list-todo activeListClass list" :class="{'active': item.id === todoId}" v-for="item in items" :key="item">
            <!--v-if conditional rendering-->
            <span class="icon-lock" v-if="item.locked"></span>
            <span class="count-list" v-if="item.count>0">{{item.count}}</span>
            {{item.title}}
        </a> 
        <a class="link-list-new">
            <span class="icon-plus"></span>
            Add
        </a>       
    </div>
</template>
<script>
import {getTodoList, addTodo} from '../api/api';
export default {
    data(){
        return{
            items: [], // menu data
            todoId: '' // id is selected by default
        };
    },
    created(){ // call the interface that requests the menu list data 
        getTodoList({}).then(res => {
            const TODOS = res.data.todos;
            this.items  = TODOS; // assign the menu data to the defined this.items
            this.todoId = TODOS[0].id; // assign the default id of the first object of the menu data to the default selected id
        });
    },
    methods: {
        goList(id){ // when the menu is clicked, replace the selected id
            this.todoId = id;
        },
        addTodoList(){ // when clicking the add button
        // call the interface of the new menu, the request is successful in the interface call data
            addTodo({}).then(data => {
                getTodoList({}).then(res => {
                    const TODOS = res.data.todos;
                    this.todoId = TODOS[TODOS.length-1].id;
                    this.items = TODOS;
                });
            });
        }
    }    
};
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>


