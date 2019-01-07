<template>
    <div class="list-item editingClass editing">
        <label class="checkbox">
            <input type="checkbox" v-model="item.checked">
            <span class="checkbox-custom"></span>
        </label>
        <input type="text" v-model="item.text" placeholder="입력해봐">
        <a class="delete-item">
            <span class="icon-trash"></span>
        </a>
    </div>    
</template>
<script>
export default {
    props: ['item']
    // the child component explicitly declares the data it expects to get with the props option.
    // here it is stated that it wants a data called 'item'
}
</script>
<style lang="less">
@import '../common/style/list-items.less';
</style>



