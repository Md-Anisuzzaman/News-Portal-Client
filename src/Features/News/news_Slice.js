import { createSlice } from '@reduxjs/toolkit'
import createNews from './asyncReducers/createNews';
import deleteNews from './asyncReducers/deleteNews';
import fetchAllNews from './asyncReducers/fetchAllNews';
import updateNews from './asyncReducers/updateNews';
import fetchNews from './asyncReducers/fetchNews';

const news_Slice = createSlice({
    name: 'news',
    initialState: {
        allNews: [],
        news: {},
        selectedNews: [],
        searchKey: '',
        paginate: 10,
        currentPage: 1,
        isLoading: false,
        isError: false,
        error: "",
    },
    reducers: {},
    extraReducers: (builder) => {
        fetchAllNews(builder)
        createNews(builder)
        deleteNews(builder)
        updateNews(builder)
        fetchNews(builder)
    },

});

export const userActions = news_Slice.actions;
export default news_Slice;