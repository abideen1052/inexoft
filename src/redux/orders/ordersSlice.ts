import {createSlice} from '@reduxjs/toolkit';

interface OrdersState {
  detailsModal: boolean;
}

const initialState: OrdersState = {
  detailsModal: false,
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setDetailsModalVisible: (state, action) => {
      state.detailsModal = action.payload;
    },
  },
});

export const {setDetailsModalVisible} = ordersSlice.actions;
export default ordersSlice.reducer;
