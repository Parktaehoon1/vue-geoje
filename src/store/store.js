import axios from "axios";
import { createStore } from "vuex";

export default createStore({
    state:{
        menuList:[],
        galleryList:[],
        newsList:[],
        infoList:[],
        visualList:[],
        bannerList:[],
        movieList:{}
    },
    actions:{
        fetchMenuData({commit}){
            axios.get('./data/menu.json')
            .then(response => {
                commit('MENU_DATA', response.data)
            })
            .catch(err => console.log(err))
        },
        fetchGalleryData({commit}){
            axios.get('./data/gallery.json')
            .then(response => {
                commit('GALLERY_DATA', response.data)
            })
            .catch(err => console.log(err))
        },
        fetchNewsData({commit}){
            axios.get('./data/news.json')
            .then(response => {
                commit('NEWS_DATA', response.data)
            })
            .catch(err => console.log(err))
        },
        fetchInfoData({commit}){
            axios.get('./data/info.json')
            .then(response => {
                commit('INFO_DATA', response.data)
            })
            .catch(err => console.log(err))
        },
        fetchVisualData({commit}){
            axios.get('./data/visual.json')
            .then(response => {
                commit('VISUAL_DATA', response.data)
            })
            .catch(err => console.log(err))
        },
        fetchBannerData({commit}){
            axios.get('./data/banner.json')
            .then(response => {
                commit('BANNER_DATA', response.data)
            })
            .catch(err => console.log(err))
        },
        fetchMovieData({commit}){
            axios.get('./data/movie.json')
            .then(response => {
                commit('MOVIE_DATA', response.data)
            })
            .catch(err => console.log(err))
        }
    },
    mutations:{
        MENU_DATA(state, payload){
            state.menuList = payload
        },
        GALLERY_DATA(state, payload){
            state.galleryList = payload
        },
        NEWS_DATA(state, payload){
            state.newsList = payload
        },
        INFO_DATA(state, payload){
            state.infoList = payload
        },
        VISUAL_DATA(state,payload){
            state.visualList = payload
        },
        BANNER_DATA(state,payload){
            state.bannerList = payload
        },
        MOVIE_DATA(state,payload){
            state.movieList = payload
        }
    },
    getters:{
        getMenuList(state){
            return state.menuList;
        },
        getGalleryList(state){
            return state.galleryList;
        },
        getNewsList(state){
            return state.newsList;
        },
        getInfoList(state){
            return state.infoList;
        },
        getVisualList(state){
            return state.visualList;
        },
        getBannerList(state){
            return state.bannerList;
        },
        getMovie(state){
            return state.movieList;
        }
    }
});