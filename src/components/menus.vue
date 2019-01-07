<template>
    <div class="list-todos">
        <!--v-for list rendering-->
        <a class="list-todo activeListClass list" v-for="item in items" :key="item">
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
export default {
    data(){
        return{
            items: [
                {title: 'Monday', count: 1, locked: true},
                {title: 'Tuesday', count: 2, locked: true},
                {title: 'Wednesday', count: 3, locked: false}
            ]
        };
    }    
};
</script>
<style lang="less">
@import '../common/style/menu.less';
</style>


