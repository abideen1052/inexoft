import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {customerData} from '../constants/data';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  setSelectedCustomer,
  setShowAddCustomer,
  setShowAddItems,
  setShowSelectCustomer,
  setShowSelectItems,
} from '../redux/home/homeSlice';
import {Colors} from '../constants/theme';

const {height} = Dimensions.get('window');
const CustomerComponent = () => {
  const {selectedCustomer, showAddCustomer, showSelectCustomer} = useSelector(
    (state: RootState) => state.home,
  );
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {showAddCustomer && (
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            dispatch(setShowAddCustomer(false));
            dispatch(setShowSelectCustomer(true));
            dispatch(setShowAddItems(true));
            dispatch(setShowSelectItems(false));
          }}>
          <Text style={styles.buttonText}>
            {selectedCustomer ? selectedCustomer : 'Select Customer'}
          </Text>
        </TouchableOpacity>
      )}
      {showSelectCustomer && (
        <View style={styles.customerContainer}>
          <FlatList
            data={customerData}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.customerItem}
                  onPress={() => {
                    dispatch(setShowAddCustomer(true));
                    dispatch(setShowSelectCustomer(false));
                    dispatch(setShowAddItems(true));
                    dispatch(setShowSelectItems(false));
                    dispatch(setSelectedCustomer(item.name));
                  }}>
                  <Text style={styles.customerName}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default CustomerComponent;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  addButton: {
    width: '95%',
    height: 60,
    elevation: 5,
    backgroundColor: Colors.White,
    borderRadius: 15,
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: Colors.Black,
    fontSize: 20,
    marginLeft: 15,
  },
  customerContainer: {
    elevation: 5,
    width: '95%',
    height: height * 0.5,
    backgroundColor: Colors.White,
    borderRadius: 15,
    justifyContent: 'center',
  },
  customerItem: {
    height: 50,
    justifyContent: 'center',
  },
  customerName: {
    color: Colors.Black,
    fontSize: 18,
    marginLeft: 15,
  },
});
