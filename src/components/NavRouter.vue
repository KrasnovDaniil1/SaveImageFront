<template>
    <router-link :to="path">{{ nav }}</router-link>
</template>
<script>
export default {
    name: 'NavRouter',
    props: {
        nav: {
            type: String,
            required: true,
        },

        path: {
            type: String,
            required: true,
        },
    },
    setup() {},
};
</script>
