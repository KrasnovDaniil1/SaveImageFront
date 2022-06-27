import { createStore } from 'vuex';

export default createStore({
    state: {
        popupAddCard: false,
        zoomImage: '',
        // https://yahont-hotel.ru/ckeditor_images/chernomorskoje_vid.jpg
    },
    getters: {
        returnPopupAddCard(state) {
            return state.popupAddCard;
        },
        returnZoomImage(state) {
            return state.zoomImage;
        },
    },
    mutations: {
        openPopupAddCard(state) {
            state.popupAddCard = !state.popupAddCard;
        },
        openZoomImage(state, src) {
            state.zoomImage = src;
        },
    },
    actions: {},
    modules: {},
});
