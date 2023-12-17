import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {setDetailsModalVisible} from '../redux/orders/ordersSlice';
import OrderDetails from '../components/OrderDetails';

const OrderScreen = () => {
  const {confirmOrderList} = useSelector((state: RootState) => state.home);
  const {detailsModal} = useSelector((state: RootState) => state.orders);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const dispatch = useDispatch();
  const jsonString = JSON.stringify(confirmOrderList);
  const cnfList = JSON.parse(jsonString);
  console.log(' Order screen log ', JSON.stringify(cnfList, null, 2));
  console.log('Length', cnfList.length);
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Text style={styles.headText}>Your Orders</Text>
      <FlatList
        style={styles.ordersList}
        data={cnfList}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity
                style={styles.ordersItem}
                onPress={() => {
                  dispatch(setDetailsModalVisible(true));
                  setSelectedItemId(item.orderId);
                }}>
                <Text>{item.selectedCustomer}</Text>
                <Text>{`${'₹ '}${item.grandTotal}`}</Text>
              </TouchableOpacity>
              <Modal
                animationType="none"
                transparent={true}
                visible={detailsModal && selectedItemId === item.orderId}
                onRequestClose={() => {
                  dispatch(setDetailsModalVisible(false));
                  setSelectedItemId(null);
                }}>
                <OrderDetails
                  customer={item.selectedCustomer}
                  grandTotal={item.grandTotal}
                  itemList={item.orderItemList}
                />
              </Modal>
            </View>
          );
        }}
        keyExtractor={item => item.orderId.toString()}
        bounces={false}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 20,
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
  },
  headText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    marginVertical: 20,
  },
  ordersList: {
    width: '100%',
  },
  ordersItem: {
    width: '99%',
    height: 60,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 5,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
