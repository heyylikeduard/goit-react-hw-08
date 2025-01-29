import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const BASE_URL = axios.create({
    baseURL: 'https://connections-api.goit.global/',
});

const setAuthHeader = token => {
    BASE_URL.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
    BASE_URL.defaults.headers.common.Authorization = ``;
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        const response = await BASE_URL.post('/users/signup', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await BASE_URL.post('/users/login', credentials);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logout = createAsyncThunk('/auth/logout', async (_, thunkAPI) => {
    try {
        await BASE_URL.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if(!savedToken) {
        return thunkAPI.rejectWithValue('Token is not exist!'); 
    }

    try {
        setAuthHeader(savedToken);
        const { data } = await BASE_URL.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});