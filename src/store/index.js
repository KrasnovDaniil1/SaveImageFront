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
        changeAllTags(state, tags) {
            state.allTags = tags;
        },
    },
    actions: {
        async getAllCard(context) {
            // const res = await axios.get(
            //     'http://localhost:8080/cards?limit=100&offset=0'
            // );
            // context.commit('changeAllCard', res.data.card);
            // console.log(res.data.card);
            axios
                .get('http://localhost:8080/cards?limit=100&offset=0')
                .then((res) => context.commit('changeAllCard', res.data.card))
                .catch((error) => console.log(error));
        },
        async getAllTags(context) {
            const res = await axios.get('http://localhost:8080/tags');
            context.commit('changeAllTags', res.data.tags);
            console.log(res.data.tags);
        },
    },
    modules: {},
});
