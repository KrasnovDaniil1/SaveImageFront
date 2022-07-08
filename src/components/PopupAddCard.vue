<template>
    <div :class="['addCard', { 'addCard-active': popup }]">
        <div class="shimer"></div>
        <div class="popup">
            <div class="add-image">
                <i class="icon-download fas fa-arrow-alt-circle-down"></i>
                <span class="tag">#Добавьте теги</span>
            </div>
            <div class="add-tag">
                <button class="popup-close" @click="closePopup">
                    <i class="fas fa-times-square"></i>
                </button>
                <label class="tag-block">
                    <input
                        type="text"
                        class="tag-input"
                        placeholder="Введите тег ..."
                    />
                </label>
                <label class="tag-block">
                    <input
                        type="text"
                        class="tag-input"
                        placeholder="Введите тег ..."
                    />
                </label>
                <label class="tag-block">
                    <input
                        type="text"
                        class="tag-input"
                        placeholder="Введите тег ..."
                    />
                </label>
                <label class="tag-block">
                    <input
                        type="text"
                        class="tag-input"
                        placeholder="Введите тег ..."
                    />
                </label>
                <button class="btn-add">Сохранить</button>
            </div>
        </div>
    </div>
</template>
<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    name: 'PopupAddCard',

    setup() {
        const store = useStore();
        const closePopup = () => {
            store.commit('openPopupAddCard');
        };
        // const closePopup = ref(false);
        return {
            closePopup,
            popup: computed(() => store.getters.returnPopupAddCard),
        };
    },
};
</script>
<style lang="scss" scoped>
.addCard {
    position: fixed;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    z-index: 1;
    transition: all 0.5s;
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
            width: max(300px, 20vw);
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
                font-size: var(--size-second);
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
            margin-left: max(15px, 1vw);
            font-size: var(--size-second);
            .popup-close {
                font-size: var(--size-third);
                margin-left: auto;
                margin-bottom: 10px;
            }
            .tag-block {
                display: flex;
                align-items: center;
                width: 100%;
                min-width: max(300px, 15vw);
                border: 3px solid #000;
                padding: 5px;
                border-radius: 10px;
                margin-bottom: max(10px, 1vw);
            }
            .btn-add {
                width: 100%;
                padding: 10px 0;
                background: #0b64fe;
                color: #fff;
                margin-top: auto;
                border-radius: 4px;
            }
        }
    }
}
.addCard-active {
    transform: translateX(0);
}
@media screen and (max-width: 720px) {
    .addCard {
        .popup {
            width: 75%;
            flex-direction: column;
            align-items: center;
            .add-image {
                margin-bottom: 10px;
                width: 100%;
            }
            .add-tag {
                margin-left: 0;
                .popup-close {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                }
                .tag-block {
                    min-width: 100%;
                }
            }
        }
    }
}
@media screen and (max-width: 420px) {
    .addCard {
        .popup {
            width: 90%;
        }
    }
}
</style>
