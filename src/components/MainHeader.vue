<template>
    <div class="header">
        <div class="logo">SaveImage</div>
        <div class="navigation">
            <NavRouter class="router" path="/" nav="О проекте" />
            <NavRouter class="router" path="/allcard" nav="Картинки" />
            <NavRouter class="router" path="/alltag" nav="Тэги" />
        </div>
    </div>
</template>
<script>
import NavRouter from './NavRouter.vue';
export default {
    name: 'MainHeader',
    components: {
        NavRouter,
    },
    // setup() {
    //
    // },
};
</script>
<style lang="scss" scoped>
.header {
    padding: 10px 50px;
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 3px solid #000;
    font-family: var(--font-second);
    font-size: 30px;
    .logo {
        font-style: italic;
    }
    .navigation {
        .router {
            padding: 10px;
            margin: 0 10px;
        }
        .router-link-active {
            border: 3px solid #000;
            border-bottom: 4px solid #f2f2f2;
        }
    }
}
</style>
