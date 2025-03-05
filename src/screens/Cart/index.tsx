import React from 'react';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../services/store';
import {
  addToCart,
  decreaseCart,
  removeFromCart,
} from '../../services/Cart/cartSlice';
import {Header} from '../../components/Molecules';
import {Chip} from '../../components/Atoms';
import {Gap, Trash} from '../../assets/Icon';
import {styles} from './style';
import {widthPercentage} from '../../utils/Responsive';

const CartScreen = () => {
  const cartItems = useSelector(
    (state: RootState) => state.persisted.cart.items,
  );
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header headerTitle="My Cart" back />

      <FlatList
        data={cartItems}
        keyExtractor={item => item.product.id.toString()}
        renderItem={({item}) => (
          <View style={styles.cartGroup}>
            <View style={styles.cartTitleGroup}>
              <Image
                source={{uri: item.product.thumbnail}}
                style={styles.cartImage}
              />
              <View>
                <Text style={styles.cartTitle}>{item.product.title}</Text>
                <Text>${item.product.price}</Text>
              </View>
            </View>
            <View style={styles.buttonGroup}>
              <Chip
                text={<Trash />}
                size='large'
                onPress={() => dispatch(removeFromCart(item.product.id))}
              />
              <Gap width={widthPercentage(2)} />
              <Chip
                text="-"
                border
                width={30}
                onPress={() => dispatch(decreaseCart(item.product.id))}
              />
              <Text style={styles.counter}>{item.qty}</Text>
              <Chip
                text="+"
                border
                width={30}
                onPress={() => dispatch(addToCart(item.product))}
              />
            </View>
          </View>
        )}
      />

      {/* {cartItems.length > 0 && (
        <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
      )} */}
    </SafeAreaView>
  );
};

export default CartScreen;
