<template>
    <div class="allcard">
        <div class="search-block">
            <label class="search">
                <input
                    type="text"
                    class="search-input"
                    placeholder="Введите тег ..."
                    v-model="search"
                />
                <i class="search-icon far fa-search" @click="searchElem"></i>
            </label>
            <button class="download" @click="openPopupAddCard">
                <i class="fas fa-file-download"></i>
            </button>
        </div>
        <div class="card-block">
            <CardImage
                v-for="card in allCards"
                :key="card.id"
                :src="card.src"
                :tags="card.tags"
            />
        </div>
        <LoaderAll :loader="loaderActive || allCards.length == 0" />
    </div>
</template>
<script>
import CardImage from '../components/CardImage.vue';
import LoaderAll from '../components/LoaderAll.vue';

import { useStore } from 'vuex';
import { onMounted, computed, onBeforeUnmount, ref } from '@vue/runtime-core';

export default {
    name: 'AllCard',
    components: {
        CardImage,
        LoaderAll,
    },
    setup() {
        const store = useStore();
        const loaderActive = ref(!store.getters.returnStatusGetCard);
        const cardSee = ref(9);
        const search = ref('');
        const searchElem = () => {
            store.dispatch('getAllCard', {
                limit: cardSee.value,
                offset: cardSee.value - 9,
                search: search.value,
            });
        };
        const scrollCard = () => {
            if (
                window.innerHeight + window.pageYOffset + 80 >=
                    document.body.offsetHeight &&
                loaderActive
            ) {
                cardSee.value += 9;
                store.dispatch('changeStatusGetCard', false);
                store.dispatch('getAllCard', {
                    limit: cardSee.value,
                    offset: cardSee.value - 9,
                    search: search.value,
                });
            }
            console.log(loaderActive.value);
        };

        const openPopupAddCard = () => {
            store.commit('openPopupAddCard');
        };

        onMounted(() => {
            store.dispatch('getAllCard', {
                limit: 9,
                offset: 0,
                search: '',
            });
            window.addEventListener('scroll', scrollCard);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', scrollCard);
        });

        return {
            openPopupAddCard,
            scrollCard,
            searchElem,
            loaderActive,
            cardSee,
            search,
            allCards: computed(() => store.getters.returnAllCard),
        };
    },
};
</script>
<style lang="scss" scoped>
.allcard {
    margin: 0 max(25px, 2.5vw);
    font-size: var(--size-first);
    // overflow: scroll;
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
