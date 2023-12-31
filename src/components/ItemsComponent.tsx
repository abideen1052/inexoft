import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {itemData} from '../constants/data';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {
  setShowAddItems,
  setShowSelectItems,
  setShowItemsDetails,
  setShowAddCustomer,
  setShowSelectCustomer,
  setShowSelectedItems,
} from '../redux/home/homeSlice';
import ItemDetails from './ItemDetails';
import {Colors} from '../constants/theme';

const {height} = Dimensions.get('window');
const ItemsComponent = () => {
  const [selectedItemId, setSelectedItemId] = useState('');
  const {selectedCustomer, showAddItems, showSelectItems, showItemDetails} =
    useSelector((state: RootState) => state.home);
  const enable = selectedCustomer.length > 0 ? false : true;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      {showAddItems && (
        <TouchableOpacity
          disabled={enable}
          style={styles.addButton}
          onPress={() => {
            dispatch(setShowAddItems(false));
            dispatch(setShowSelectItems(true));
            dispatch(setShowAddCustomer(true));
            dispatch(setShowSelectCustomer(false));
            dispatch(setShowSelectedItems(false));
          }}>
          <Text style={styles.buttonText}>Select Item</Text>
        </TouchableOpacity>
      )}
      {showSelectItems && (
        <View style={styles.itemContainer}>
          <FlatList
            data={itemData}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                      dispatch(setShowItemsDetails(true));
                      setSelectedItemId(item.id);
                    }}>
                    <Text style={styles.itemName}>{item.item}</Text>
                    <Text style={styles.itemName}>{`${'₹ '}${
                      item.price
                    }`}</Text>
                  </TouchableOpacity>
                  <Modal
                    animationType="none"
                    transparent={true}
                    visible={showItemDetails && selectedItemId === item.id}
                    onRequestClose={() => {
                      dispatch(setShowItemsDetails(false));
                      setSelectedItemId('');
                    }}>
                    <ItemDetails
                      id={item.id}
                      title={item.item}
                      amount={item.price}
                    />
                  </Modal>
                </View>
              );
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
          />
          <TouchableOpacity
            style={styles.itemsAddButton}
            onPress={() => {
              dispatch(setShowAddItems(true));
              dispatch(setShowSelectItems(false));
            }}>
            <Text style={styles.itemsButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ItemsComponent;

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
  itemContainer: {
    elevation: 5,
    width: '95%',
    height: height * 0.5,
    backgroundColor: Colors.White,
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
  itemName: {
    color: Colors.Black,
    fontSize: 18,
  },

  itemsAddButton: {
    height: 50,
    width: 100,
    backgroundColor: Colors.PrimaryColor,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemsButtonText: {
    fontWeight: 'bold',
    color: Colors.White,
    fontSize: 15,
  },
});
