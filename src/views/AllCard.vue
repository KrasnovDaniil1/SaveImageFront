<template>
    <div class="allcard">
        <div class="search-block">
            <label class="search">
                <input
                    type="text"
                    class="search-input"
                    placeholder="Введите тег ..."
                />
                <i class="search-icon far fa-search"></i>
            </label>
            <button class="download" @click="openPopupAddCard">
                <i class="fas fa-file-download"></i>
            </button>
        </div>
        <div class="card-block">
            <CardImage
                v-for="index in 6"
                :key="index"
                src="https://99px.ru/sstorage/53/2013/12/tmb_91205_3821.jpg"
                :tags="['we', 'we', 'we']"
            />
        </div>
    </div>
</template>
<script>
import CardImage from '../components/CardImage.vue';
import { useStore } from 'vuex';

export default {
    name: 'AllCard',
    components: {
        CardImage,
    },
    setup() {
        const store = useStore();
        const openPopupAddCard = () => {
            store.commit('openPopupAddCard');
        };
        return {
            openPopupAddCard,
        };
    },
};
</script>
<style lang="scss" scoped>
.allcard {
    margin: 0 max(25px, 2.5vw);
    font-size: var(--size-first);

    .search-block {
        margin: 20px auto;
        display: flex;
        justify-content: center;

        .search {
            position: relative;
            width: 100%;
            max-width: 500px;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid #000;
            border-radius: 10px;
            .search-input {
                padding-right: 10px;
            }
        }
        .download {
            padding: 0 max(10px, 1vw);
            margin-left: max(20px, 2vw);
            color: #fff;
            background: #000;
            border-radius: 4px;
            cursor: pointer;
        }
    }
    .card-block {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: center;
        grid-gap: max(25px, 2.5vw);
    }
}
@media screen and (max-width: 920px) {
    .allcard {
        .card-block {
            grid-template-columns: repeat(2, 1fr);
        }
    }
}
@media screen and (max-width: 420px) {
    .allcard {
        .card-block {
            grid-template-columns: repeat(1, 1fr);
        }
    }
}
</style>
