import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { add_product } from './products';
import { getProfile, login } from './auth';
import { getAll } from './text';



const reducers = combineReducers({
    add_product: add_product.reducer,
  login :login.reducer,
  getProfile:getProfile.reducer,
  getAll:getAll.reducer
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['login']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    
});

export const persistor = persistStore(store);

export default store;
