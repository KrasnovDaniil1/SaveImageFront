import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        popupAddCard: false,
        zoomImage: '',
        allCard: [],
        allTags: [],
        statusGetCard: false,
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
        returnStatusGetCard(state) {
            // console.log(state.statusGetCard);
            return state.statusGetCard;
        },
    },
    mutations: {
        openPopupAddCard(state) {
            state.popupAddCard = !state.popupAddCard;
        },
        openZoomImage(state, src) {
            state.zoomImage = src;
        },
        changeStatusGetCard(state, bool) {
            state.statusGetCard = bool;
        },
        changeAllCard(state, allCard) {
            /*господи, не спрашивайте почему так, с backend передаю теги в виде текста а в виде массива, вот и приходиться колхозить */
            if (allCard.length != 0) {
                for (const elem of allCard) {
                    elem.tags = elem.tags.split(',');
                    elem.tags[0] = elem.tags[0].slice(1);
                    elem.tags[elem.tags.length - 1] = elem.tags[
                        elem.tags.length - 1
                    ].slice(0, -1);
                }

                state.allCard = state.allCard.concat(allCard);
            }
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
        async getAllCard(context, card) {
            axios
                .get(
                    `http://localhost:8080/cards?search=${card.search}&limit=${card.limit}&offset=${card.offset}`
                )
                .then((res) => {
                    context.commit('changeAllCard', res.data.card),
                        context.commit('changeStatusGetCard', true);
                })
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
