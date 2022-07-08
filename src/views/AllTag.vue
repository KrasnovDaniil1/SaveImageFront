<template>
    <div class="alltag">
        <label class="search">
            <input
                type="text"
                class="search-input"
                placeholder="Введите тег ..."
            />
            <i class="search-icon far fa-search"></i>
        </label>
        <div class="tag-block">
            <TagBlock
                v-for="index in 20"
                :key="index"
                tag="background"
                info="1234"
            />
        </div>
    </div>
</template>
<script>
import TagBlock from '../components/TagBlock.vue';
export default {
    name: 'AllTag',
    components: {
        TagBlock,
    },

    setup() {},
};
</script>
<style lang="scss" scoped>
.alltag {
    margin: 0 max(25px, 2.5vw);
    font-size: var(--size-first);
    .search {
        margin: 20px auto;
        width: 100%;
        max-width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #000;
        padding: 10px;
        border-radius: 10px;
        .search-input {
            padding-right: 10px;
        }
    }
    .tag-block {
        display: flex;
        flex-wrap: wrap;
    }
}
</style>
