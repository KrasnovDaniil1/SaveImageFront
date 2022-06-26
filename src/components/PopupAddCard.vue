<template>
    <div class="addCard" v-if="closePopup">
        <div class="shimer"></div>
        <div class="popup">
            <div class="add-image">
                <i class="icon-download fas fa-arrow-alt-circle-down"></i>
                <span class="tag">#Добавьте теги</span>
            </div>
            <div class="add-tag">
                <button class="popup-close">
                    <i class="fas fa-times-square"></i>
                </button>
                <label class="tag-block">
                    <input
                        type="text"
                        class="tag-input"
                        placeholder="Введите тег ..."
                    />
                    <i class="fas fa-plus-circle"></i>
                </label>
                <label class="tag-block">
                    <input
                        type="text"
                        class="tag-input"
                        placeholder="Введите тег ..."
                    />
                    <i class="fas fa-plus-circle"></i>
                </label>
                <label class="tag-block">
                    <input
                        type="text"
                        class="tag-input"
                        placeholder="Введите тег ..."
                    />
                    <i class="fas fa-plus-circle"></i>
                </label>
                <button class="btn-add">Сохранить</button>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: 'PopupAddCard',

    setup() {
        const closePopup = ref(false);
        return { closePopup };
    },
};
</script>
<style lang="scss" scoped>
.addCard {
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
    .popup {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        padding: 10px;
        background: #f2f2f2;
        border-radius: 10px;
        border: 1px solid #000;

        .add-image {
            position: relative;
            width: 400px;
            aspect-ratio: 1/1;
            background: #fff;
            border-radius: 10px;
            cursor: pointer;
            .icon-download {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                font-size: 100px;
            }
            .tag {
                color: #0b64fe;
                position: absolute;
                font-size: 30px;
                text-align: center;
                bottom: 0;
                margin: 20px 0;
                left: 50%;
                transform: translateX(-50%);
                white-space: nowrap;
            }
        }
        .add-tag {
            display: flex;
            flex-direction: column;
            margin-left: 20px;
            font-size: 25px;
            .popup-close {
                font-size: 40px;
                margin-left: auto;
                margin-bottom: 10px;
            }
            .tag-block {
                display: flex;
                align-items: center;
                width: 100%;
                min-width: 300px;
                border: 3px solid #000;
                padding: 5px;
                border-radius: 10px;
                margin-bottom: 20px;
            }
            .btn-add {
                font-size: 30px;
                width: 100%;
                padding: 15px 0;
                background: #0b64fe;
                color: #fff;
                margin-top: auto;
                border-radius: 4px;
            }
        }
    }
}
</style>
