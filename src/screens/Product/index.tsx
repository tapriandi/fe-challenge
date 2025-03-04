import React from 'react';
import {
  FlatList,
  StatusBar,
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useGetProductsQuery} from '../../services/Product/productApi';
import {useDispatch, useSelector} from 'react-redux';
import {productSelectors} from '../../services/Product/productSelector';
import {Header} from '../../components/Molecules';
import {Product} from '../../services/Product/types';
import {addToCart} from '../../services/Cart/cartSlice';

const ProductScreen = () => {
  const {data: products, isLoading, error} = useGetProductsQuery();
  const dispatch = useDispatch();

  const productList = useSelector(productSelectors.listProductState);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching products</Text>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Header headerTitle="Products" />
        <FlatList
          data={products || productList}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => handleAddToCart(item)}>
              <View style={{padding: 10, borderBottomWidth: 1}}>
                <Image
                  source={{uri: item.thumbnail}}
                  style={{width: 50, height: 50}}
                />
                <Text>{item.title}</Text>
                <Text>${item.price}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
