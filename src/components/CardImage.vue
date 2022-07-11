<template>
    <div class="card">
        <div class="image-block">
            <img class="image" :src="src" />
            <a :href="src" target="_blank" :download="src">
                <i class="icon icon-download fas fa-arrow-alt-circle-down"></i>
            </a>

            <i
                class="icon icon-plus fas fa-search-plus"
                @click="openZoomImage(src)"
            ></i>
        </div>
        <div class="teg-block">
            <span class="teg" v-for="(tag, index) in tags" :key="index">
                #{{ tag }}
            </span>
        </div>
    </div>
</template>
<script>
import { useStore } from 'vuex';

export default {
    name: 'CardImage',
    props: {
        src: {
            type: String,
            required: true,
        },

        tags: {
            type: Array,
            required: true,
        },
    },
    setup() {
        const store = useStore();
        const openZoomImage = (src) => {
            store.commit('openZoomImage', src);
        };
        return {
            openZoomImage,
        };
    },
};
</script>
<style lang="scss" scoped>
.card {
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background: #fff;
    overflow: hidden;
    font-size: 25px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    .image-block {
        position: relative;
        width: 100%;
        aspect-ratio: 1/1;
        border-radius: 10px;
        overflow: hidden;
        .image {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 200%;
            height: auto;
            min-height: 100%;
        }
        .icon {
            position: absolute;
            right: 0;
            padding: 10px;
            margin: 10px;
            color: #000;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transition: 0.25s;
            cursor: pointer;
            &:hover {
                background: #fff;
                color: #000;
            }
        }
        .icon-download {
            bottom: 0;
        }
        .icon-plus {
            top: 0;
        }
    }
    .teg-block {
        display: flex;
        flex-wrap: wrap;
        margin-top: 10px;
        .teg {
            color: #0b64fe;
            padding-right: 10px;
            cursor: pointer;
        }
    }
}
</style>
