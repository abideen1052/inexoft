import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {resetOrder, setConfirmOrderList} from '../redux/home/homeSlice';
import {Colors} from '../constants/theme';

const PlaceOrder = () => {
  const {grandTotal, confirmOrderList, orderItemList, selectedCustomer} =
    useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();
  const jsonString = JSON.stringify(confirmOrderList);
  const cnfList = JSON.parse(jsonString);
  console.log(' Confirmed list ', JSON.stringify(cnfList, null, 2));

  const handleOrderPress = () => {
    const orderId = Date.now() + Math.random().toString(36).substring(2, 8);
    const updatedList = [
      ...confirmOrderList,
      {orderId, selectedCustomer, grandTotal, orderItemList},
    ];
    dispatch(setConfirmOrderList(updatedList));
    dispatch(resetOrder());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>{`Grand Total  ₹${grandTotal}`}</Text>
      <TouchableOpacity style={styles.orderButton} onPress={handleOrderPress}>
        <Text style={styles.buttonText}>Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  totalText: {
    fontWeight: 'bold',
    color: Colors.Black,
    fontSize: 20,
  },
  orderButton: {
    backgroundColor: Colors.PrimaryColor,
    height: 50,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.White,
    fontSize: 20,
  },
});

export default PlaceOrder;
