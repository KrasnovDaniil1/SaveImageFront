import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        popupAddCard: false,
        zoomImage: '',
        allCard: [],
        allTags: [],
    },
    getters: {
        returnPopupAddCard(state) {
            return state.popupAddCard;
        },
        returnZoomImage(state) {
            return state.zoomImage;
        },
        returnAllCard(state) {
            return state.allCard;
        },
        returnAllTags(state) {
            return state.allTags;
        },
    },
    mutations: {
        openPopupAddCard(state) {
            state.popupAddCard = !state.popupAddCard;
        },
        openZoomImage(state, src) {
            state.zoomImage = src;
        },
        changeAllCard(state, allCard) {
            state.allCard = allCard;
        },
        changeAllTags(state, tagsBlock) {
            let notSortTags = [];
            let sortTags = [];

            /*господи, не спрашивайте почему так, с backend передаю теги в виде текста а в виде массива, вот и приходиться колхозить */
            for (let i = 0; i < tagsBlock.length; i++) {
                let tags = tagsBlock[i].tags.split(',');
                tags[0] = tags[0].slice(1);
                tags[tags.length - 1] = tags[tags.length - 1].slice(0, -1);
                notSortTags.push(...tags);
            }

            for (const elem of notSortTags) {
                if (!sortTags.includes(elem)) {
                    sortTags.push(elem);
                }
            }
            state.allTags = sortTags;
        },
    },
    actions: {
        async getAllCard(context) {
            axios
                .get('http://localhost:8080/cards?limit=100&offset=0')
                .then((res) => context.commit('changeAllCard', res.data.card))
                .catch((error) => console.log(error));
        },
        async getAllTags(context) {
            axios
                .get('http://localhost:8080/tags')
                .then((res) => context.commit('changeAllTags', res.data.tags))
                .catch((error) => console.log(error));
        },
    },
    modules: {},
});
