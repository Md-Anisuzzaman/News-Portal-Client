import { createSlice } from '@reduxjs/toolkit'
import createNews from './asyncReducers/createNews';
import fetchAllNews from './asyncReducers/fetchAllNews';

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
    },

});

export const userActions = news_Slice.actions;
export default news_Slice;