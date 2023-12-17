import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const {height} = Dimensions.get('window');
const SelectedItems = () => {
  const {orderItemList} = useSelector((state: RootState) => state.home);
  console.log(orderItemList);
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.headText}>Selected Item</Text>
      <View style={styles.itemHead}>
        <Text style={styles.headText}>Item</Text>
        <Text style={styles.headText}>Quantity</Text>
        <Text style={styles.headText}>Amount</Text>
      </View>
      <FlatList
        data={orderItemList}
        renderItem={({item}) => {
          return (
            <View>
              <View style={styles.item}>
                <Text style={styles.itemName}>{item.title}</Text>
                <Text style={styles.itemName}>{item.qty}</Text>
                <Text style={styles.itemName}>{`${'₹ '}${
                  item.totalAmount
                }`}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '95%',
    maxHeight: height * 0.5,
    backgroundColor: 'white',
    borderRadius: 15,
    justifyContent: 'center',
  },
  item: {
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  itemHead: {
    height: 60,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  itemName: {
    color: 'black',
    fontSize: 18,
  },
  headText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
});
export default SelectedItems;
