import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../services/store';
import { clearCart, removeFromCart } from '../../services/Cart/cartSlice';

const CartScreen = () => {
  const cartItems = useSelector((state: RootState) => state.persisted.cart.items);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Your Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.product.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.product.title}</Text>
            <Text>${item.product.price}</Text>
            <Button title="Remove" onPress={() => dispatch(removeFromCart(item.product.id))} />
          </View>
        )}
      />

      {cartItems.length > 0 && (
        <Button title="Clear Cart" onPress={() => dispatch(clearCart())} />
      )}
    </View>
  );
};

export default CartScreen;
