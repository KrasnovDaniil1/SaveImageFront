<template>
    <div class="main">
        <h1 class="main-text">
            SaveImage - проект предназначенный для анонимной загрузки картинок
            на любую тематику. На сайте не нужно регестрироваться, чтобы
            загрузить/скачать картинку. Поиск картинок осуществляеться с помощью
            тегов.
        </h1>
    </div>
</template>
<script>
export default {
    name: 'MainPage',
    setup() {},
};
</script>
<style lang="scss" scoped>
.main {
    min-height: calc(100vh - 140px);
    display: flex;
    align-items: center;
    .main-text {
        padding: 0 15vw;
        font-size: 40px;
        text-align: center;
        line-height: 1.2;
    }
}
</style>
