import {configureStore} from '@reduxjs/toolkit';
import homeReducer from './home/homeSlice';
import ordersReduces from './orders/ordersSlice';
export const store = configureStore({
  reducer: {
    home: homeReducer,
    orders: ordersReduces,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
