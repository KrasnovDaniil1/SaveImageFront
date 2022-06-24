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
    .search {
        margin: 20px auto;
        width: 500px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #000;
        padding: 5px;
        border-radius: 10px;
        font-size: 25px;
        .search-input {
            padding-right: 5px;
        }
    }
    .tag-block {
        display: flex;
        flex-wrap: wrap;
    }
    // .card-block {
    //     display: grid;
    //     grid-template-columns: repeat(3, 1fr);
    //     justify-content: center;
    //     grid-gap: 50px;
    //     margin: 0 50px;
    // }
}
</style>
