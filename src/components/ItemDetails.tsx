import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  setShowAddItems,
  setShowItemsDetails,
  setShowSelectItems,
  setOrderItemList,
  setShowSelectedItems,
  setGrandTotal,
} from '../redux/home/homeSlice';
import {RootState} from '../redux/store';
import {Colors} from '../constants/theme';

const ItemDetails = ({id, title, amount}: any) => {
  const [qty, setQty] = useState(1);
  const [totalAmount, setTotalAmount] = useState(amount);
  const {orderItemList} = useSelector((state: RootState) => state.home);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.headContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.amount}>{`${'₹ '}${amount}`}</Text>
        </View>
        <View style={styles.qtyContainer}>
          <View style={styles.quantity}>
            <Text style={styles.qtyText}>Add Qty</Text>
            <TextInput
              style={styles.qtyField}
              keyboardType="numeric"
              textAlign="center"
              onChangeText={(input: any) => {
                setQty(input);
                setTotalAmount(input * amount);
              }}
              value={`${qty}`}
            />
          </View>
          <Text style={styles.qtyText}>{`Total: ${totalAmount}`}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            dispatch(setShowItemsDetails(false));
            dispatch(setShowAddItems(true));
            dispatch(setShowSelectItems(false));
            dispatch(setGrandTotal(parseInt(totalAmount, 10)));
            const updatedList = [
              ...orderItemList,
              {id, title, qty, totalAmount},
            ];
            dispatch(setOrderItemList(updatedList));
            dispatch(setShowSelectedItems(true));
          }}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: Colors.White,
    width: '90%',
    height: 250,
    borderRadius: 15,
    alignItems: 'center',
  },
  headContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  title: {
    color: Colors.Black,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  amount: {
    color: Colors.Black,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  itemDetails: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 30,
    height: 80,
  },
  quantity: {
    flexDirection: 'row',
    width: '60%',
    alignItems: 'center',
  },
  qtyText: {
    color: Colors.Black,
    fontSize: 18,
    fontWeight: 'bold',
  },
  qtyField: {
    height: 50,
    width: 70,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
    fontWeight: '900',
    color: Colors.Black,
    marginLeft: 10,
  },
  button: {
    height: 60,
    width: 100,
    borderRadius: 10,
    backgroundColor: Colors.PrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.White,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ItemDetails;
