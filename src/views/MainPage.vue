<template>
    <div class="main">
        <h1 class="main-text">
            SaveImage - проект предназначенный для анонимной загрузки картинок
            на любую тематику. На сайте не нужно регестрироваться. Поиск картинок осуществляеться с помощью
            тегов. Чтобы загрузить картинку перейдите во вкладку "Картинки" и нажмите кнопку "Загрузить"(находиться рядом с поисковиком). Чтобы просмотреть все теги, перейдите во вкладку "Теги".
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
        font-size: var(--size-third);
        text-align: center;
        line-height: 1.2;
    }
}
@media screen and (max-width: 920px) {
    .main {
        .main-text {
            padding: 0 10vw;
        }
    }
}
@media screen and (max-width: 920px) {
    .main {
        .main-text {
            padding: 0 5vw;
        }
    }
}
</style>
