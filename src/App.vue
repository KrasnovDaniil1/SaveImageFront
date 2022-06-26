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
        <PopupAddCard />
        <ZoomImage />

        <router-view />
    </div>
</template>
<script>
import MainHeader from './components/MainHeader.vue';
import PopupAddCard from './components/PopupAddCard.vue';
import ZoomImage from './components/ZoomImage.vue';

export default {
    components: {
        MainHeader,
        PopupAddCard,
        ZoomImage,
    },
};
</script>
<style lang="scss">
:root {
    --font-first: 'Playfair Display';
}

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
    background: #f2f2f2;
    width: 5px;
}
::-webkit-scrollbar-thumb {
    /*ползунок скролла*/
    background: #000;
    border-radius: 10px;
}
</style>
