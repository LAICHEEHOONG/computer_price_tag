// import { configureStore } from '@reduxjs/toolkit'
// import inputReducer from '../features/input/inputSlice'

// export const store = configureStore({
//   reducer: {
//     input: inputReducer
//   },
// })



import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import inputReducer from '../features/input/inputSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  input: inputReducer,
});

// Configure `redux-persist`
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['input'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);