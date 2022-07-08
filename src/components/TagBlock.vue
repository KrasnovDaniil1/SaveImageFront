<template>
    <div class="tagblock">
        <span class="tag">#{{ tag }}</span>
    </div>
</template>
<script>
export default {
    name: 'TagBlock',
    props: {
        tag: {
            type: String,
            required: true,
        },

        info: {
            type: String,
            required: true,
        },
    },
    setup() {},
};
</script>
<style lang="scss" scoped>
.tagblock {
    padding: 10px;
    margin: 10px;
    display: flex;
    background: #fff;
    font-size: 25px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    .tag {
        color: #0b64fe;
        margin-right: 5px;
    }
}
</style>
