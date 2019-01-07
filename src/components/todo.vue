<template>
    <div class="page lists-show">
        <nav>
            <div class="nav-group">
                <a class="nav-item">
                    <span class="icon-list-unordered">
                    </span>
                </a>
            </div>
            <h1 class="title-page">
                <span class="title-wrapper">{{todo.title}}</span>
                <span class="count-list">{{todo.count}}</span>
            </h1>
            <div class="nav-group right">
                <div class="options-web">
                    <a class="nav-item">
                        <span class="icon-lock" v-if="todo.locked"></span>
                        <span class="icon-unlock" v-else>
                        </span>
                    </a>
                    <a class="nav-item">
                        <span class="icon-trash"></span>
                    </a>
                </div>
            </div>
            <div class="form todo-new input-symbol">
                <input type="text" v-model="text" placeholder="입력하세요" @keyup.enter="onAdd" :disabled="todo.locked"/>
                <span class="icon-add"></span>
            </div>
        </nav>
        <div class="content-scrollable list-items"> 
            <div v-for="item in items" :key="item">
                <item :item="item"></item>
            </div>
            <!--하단의 코드와 위의 코드 같은 의미. item이라는 컴포넌트에 v-for에서 정의한 item을 data로 보내준다.(v-bind:, 상위코드는 약식) item component에서 그것을 prop으로 받는다.-->
            <!-- <div v-for="a in items" :key="a">
                <item v-bind:item="a"></item>
            </div> -->
        </div>
    </div>
</template>
<script>
import item from './item';
export default {
    components:{
        item
    },
    data(){
        return{
            todo: {
                title: 'Monday',
                count: 12,
                locked: false
            },
            items: [
                {checked: false, text: 'what', isDelete: false},
                {checked: false, text: 'what', isDelete: false},
                {checked: false, text: 'what', isDelete: false}
            ],
            text: ''
        }
    },
    methods: {
        onAdd(){
            this.items.push({
                checked: false, text: this.text, isDelete: false
            });
            this.text = '';
        }
    }
}
</script>
<style lang="less">
@import '../common/style/nav.less';
@import '../common/style/form.less';
@import '../common/style/todo.less';
</style>


