<template>
    <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.15.2/css/all.css"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap"
        rel="stylesheet"
    />
    <div class="app">
        <MainHeader />
        <router-view />
    </div>
</template>
<script>
import MainHeader from './components/MainHeader.vue';
export default {
    components: {
        MainHeader,
    },
    // setup() {

    // },
};
</script>
<style lang="scss">
:root {
    --font-first: 'Playfair Display';
}

// .app {
//     margin: 0 auto;
// }
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-size: 100%;
    font: inherit;
    line-height: inherit;
    color: inherit;
}
html,
body {
    background: #f2f2f2;
}
img {
    width: 100%;
    height: 100%;
}
a,
button {
    outline: none;
    color: inherit;
    background: none;
    text-decoration: none;
    cursor: pointer;
    border: none;
    color: inherit;
    &:hover,
    &:focus,
    &:active {
        outline: none;
        color: inherit;
        background: none;
        text-decoration: none;
        border: none;
    }
}
ul,
ol,
li {
    list-style: none;
}
input,
textarea {
    width: 100%;
    white-space: pre-wrap;
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    color: none;
    resize: none;
    &::placeholder {
        color: inherit;
    }
}
::-webkit-scrollbar {
    /*блок скролла*/
    background: linear-gradient(
        to bottom,
        rgb(43, 50, 178) 0%,
        rgb(20, 136, 204) 100%
    );
    width: 5px;
}
::-webkit-scrollbar-thumb {
    /*ползунок скролла*/
    border-radius: 10px;
    background: #fff;
}
</style>
