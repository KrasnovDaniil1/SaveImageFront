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
    .search-block {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        font-size: 25px;

        .search {
            position: relative;
            width: 500px;
            padding: 5px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid #000;
            border-radius: 10px;
            .search-input {
                padding-right: 5px;
            }
        }
        .download {
            padding: 0 10px;
            margin: 0 20px;
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
        grid-gap: 50px;
        margin: 0 50px;
    }
}
</style>
