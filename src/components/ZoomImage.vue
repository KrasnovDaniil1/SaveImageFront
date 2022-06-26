<template>
    <div class="zoom" v-if="false">
        <div class="shimer"></div>
        <div class="image-block">
            <img
                class="image"
                src="https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg"
                ref="selectImage"
                alt=""
            />
            <button class="image-close" @click="calcSizeImage">
                <i class="icon icon-plus fas fa-search-minus"></i>
            </button>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'ZoomImage',
    setup() {
        const selectImage = ref();
        const calcSizeImage = () => {
            console.log(selectImage.value.clientWidth);
        };
        return {
            selectImage,
            calcSizeImage,
        };
    },
};
</script>
<style lang="scss" scoped>
.zoom {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    .shimer {
        width: 100vw;
        height: 100vh;
        backdrop-filter: blur(5px);
        background: rgba(0, 0, 0, 0.3);
    }
    .image-block {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        .image {
            border-radius: 10px;
            max-height: 90vh;
        }
        .image-close {
            position: absolute;
            font-size: 30px;
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
    }
}
</style>
