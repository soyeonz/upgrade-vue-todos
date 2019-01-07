<template>
    <section class="container">
        <section class="menu"> <!--Add the component menus to the container on the left-->
            <menus></menus>
        </section>
        <section class="content-container">
            <todo></todo>
        </section>
    </section>    
</template>
<script>
import menus from './menus';
import todo from './todo';

export default {
    components: { // sign up menus assembly, so that it could call in the template
        menus,
        todo
    }
}
</script>
<style lang="less">
@import '../common/style/layouts.less';
</style>
