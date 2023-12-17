import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import BackIcon from '../assets/icons/back-button.svg';
import {setDetailsModalVisible} from '../redux/orders/ordersSlice';
import {useDispatch} from 'react-redux';
import {Colors} from '../constants/theme';
const {width} = Dimensions.get('window');
const OrderDetails = ({customer, grandTotal, itemList}: any) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ScrollView style={{width}}>
        <TouchableOpacity
          style={styles.buttonClose}
          onPress={() => {
            dispatch(setDetailsModalVisible(false));
          }}>
          <BackIcon width={23} height={23} fill={Colors.Black} />
        </TouchableOpacity>

        <Text style={styles.headText}>Order Details</Text>
        <View style={styles.subHeadContainer}>
          <Text style={styles.subText}>{customer}</Text>
          <Text style={styles.subText}>{`${'₹ '}${grandTotal}`}</Text>
        </View>
        <View style={styles.itemHead}>
          <Text style={styles.itemHeadText}>Item</Text>
          <Text style={styles.itemHeadText}>Quantity</Text>
          <Text style={styles.itemHeadText}>Amount</Text>
        </View>
        <FlatList
          data={itemList}
          renderItem={({item}) => {
            return (
              <View style={styles.item}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemName}>{item.qty}</Text>
                <Text style={styles.itemName}>{`${'₹ '}${
                  item.totalAmount
                }`}</Text>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          bounces={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    alignItems: 'center',
    flex: 1,
    width,
  },
  buttonClose: {
    marginTop: 40,
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
  headText: {
    fontWeight: 'bold',
    color: Colors.Black,
    fontSize: 20,
    marginVertical: 10,
    alignSelf: 'center',
  },
  subHeadContainer: {
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  subText: {
    fontWeight: 'bold',
    color: Colors.Black,
    fontSize: 20,
  },
  itemHead: {
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  itemHeadText: {
    fontWeight: 'bold',
    color: Colors.Black,
    fontSize: 16,
    marginVertical: 10,
  },
  item: {
    width,
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  itemName: {
    color: Colors.Black,
    fontSize: 18,
  },
});

export default OrderDetails;
