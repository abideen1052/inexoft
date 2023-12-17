import {createSlice} from '@reduxjs/toolkit';

interface Item {
  id: number;
  title: string;
  qty: number;
  totalAmount: number;
}
interface HomeState {
  showAddCustomer: boolean;
  showSelectCustomer: boolean;
  showAddItems: boolean;
  showSelectItems: boolean;
  showItemDetails: boolean;
  showSelectedItems: boolean;
  selectedCustomer: string;
  grandTotal: number;
  orderItemList: Item[];
  confirmOrderList: [];
}

const initialState: HomeState = {
  showAddCustomer: true,
  showSelectCustomer: false,
  showAddItems: true,
  showSelectItems: false,
  showItemDetails: false,
  showSelectedItems: false,
  selectedCustomer: '',
  grandTotal: 0,
  orderItemList: [],
  confirmOrderList: [],
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setShowAddCustomer: (state, action) => {
      state.showAddCustomer = action.payload;
    },
    setShowSelectCustomer: (state, action) => {
      state.showSelectCustomer = action.payload;
    },
    setShowAddItems: (state, action) => {
      state.showAddItems = action.payload;
    },
    setShowSelectItems: (state, action) => {
      state.showSelectItems = action.payload;
    },
    setShowItemsDetails: (state, action) => {
      state.showItemDetails = action.payload;
    },
    setShowSelectedItems: (state, action) => {
      state.showSelectedItems = action.payload;
    },
    setSelectedCustomer: (state, action) => {
      state.selectedCustomer = action.payload;
    },
    setGrandTotal: (state, action) => {
      state.grandTotal += action.payload;
    },
    setOrderItemList: (state, action) => {
      state.orderItemList = action.payload;
    },
    setConfirmOrderList: (state, action) => {
      state.confirmOrderList = action.payload;
    },
    resetOrder: state => {
      state.selectedCustomer = initialState.selectedCustomer;
      state.orderItemList = initialState.orderItemList;
      state.grandTotal = initialState.grandTotal;
    },
  },
});

export const {
  setShowAddCustomer,
  setShowSelectCustomer,
  setShowAddItems,
  setShowSelectItems,
  setShowItemsDetails,
  setShowSelectedItems,
  setSelectedCustomer,
  setGrandTotal,
  setOrderItemList,
  setConfirmOrderList,
  resetOrder,
} = homeSlice.actions;

export default homeSlice.reducer;
