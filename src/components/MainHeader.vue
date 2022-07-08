<template>
    <div class="header">
        <NavRouter class="logo" path="/" nav="SaveImage" />
        <div class="navigation">
            <NavRouter class="router" path="/allcard" nav="Картинки" />
            <NavRouter class="router" path="/alltag" nav="Тэги" />
        </div>
        <div class="burger" @click="changeBurgerActive">
            <i class="far fa-bars" v-if="!burgerActive"></i>
            <i class="far fa-times" v-else></i>
        </div>
        <div :class="['burger-menu', { 'burger-menu-active': burgerActive }]">
            <NavRouter class="router" path="/allcard" nav="Картинки" />
            <NavRouter class="router" path="/alltag" nav="Тэги" />
        </div>
    </div>
</template>
<script>
import NavRouter from './NavRouter.vue';
import { ref } from 'vue';
export default {
    name: 'MainHeader',
    components: {
        NavRouter,
    },
    setup() {
        const burgerActive = ref(false);
        const changeBurgerActive = () => {
            burgerActive.value = !burgerActive.value;
        };
        return {
            burgerActive,
            changeBurgerActive,
        };
    },
};
</script>
<style lang="scss" scoped>
.header {
    padding: max(5px, 0.5vw) max(25px, 2.5vw);
    display: flex;
    justify-content: space-between;
    width: 100%;
    border-bottom: 3px solid #000;
    font-size: var(--size-second);
    font-family: var(--font-first);
    z-index: 1;
    .logo {
        font-style: italic;
    }
    .navigation {
        .router {
            padding: max(5px, 0.5vw);
            margin: 0 max(5px, 0.5vw);
        }
        .router-link-active {
            border: 3px solid #000;
            border-bottom: 4px solid #f2f2f2;
        }
    }
    .burger,
    .burger-menu {
        display: none;
    }
}
@media screen and (max-width: 920px) {
    .header {
        position: relative;
        .navigation {
            display: none;
        }
        .burger {
            display: block;
            cursor: pointer;
        }
        .burger-menu {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            right: 0;
            transform: translateX(100%);
            border: 3px solid #000;
            background: #f2f2f2;
            border-radius: 0 0 5px 5px;
            transition: all 0.75s;
            .router {
                padding: var(--indent-first) calc(3 * var(--indent-first));
            }
            .router-link-active {
                text-decoration: underline;
            }
        }
        .burger-menu-active {
            transform: translateX(0%);
        }
    }
}
</style>
