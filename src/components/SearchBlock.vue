<template>
    <div class="search">
        <label class="search-block">
            <input type="text" class="search-input" />
            <i class="search-icon far fa-search"></i>
        </label>
        <div class="search-match">
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchBlock',
    setup() {},
};
</script>
<style lang="scss" scoped>
.search {
    width: 400px;
    .search-block {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 3px solid #000;
        padding: 5px;
        border-radius: 10px;
        margin: 20px;
        font-size: 25px;
        .search-input {
            padding-right: 5px;
        }
    }
}
</style>
