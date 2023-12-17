import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import CustomerComponent from '../components/CustomerComponent';
import ItemsComponent from '../components/ItemsComponent';
import PlaceOrder from '../components/PlaceOrder';
import SelectedItems from '../components/SelectedItems';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {Colors} from '../constants/theme';

const HomeScreen = () => {
  const {showSelectedItems, orderItemList} = useSelector(
    (state: RootState) => state.home,
  );
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
      <Text style={styles.headText}>Add Orders</Text>
      <CustomerComponent />
      <ItemsComponent />
      {orderItemList.length > 0 && showSelectedItems && <SelectedItems />}
      {orderItemList.length > 0 && showSelectedItems && <PlaceOrder />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    paddingTop: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    width: '100%',
  },
  headText: {
    fontWeight: 'bold',
    color: Colors.Black,
    fontSize: 20,
    marginVertical: 20,
  },
});
