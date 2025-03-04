import React from 'react';
import {
  FlatList,
  StatusBar,
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
import {cartSelectors} from '../../services/Cart/cartSelector';
import {styles} from './style';
import {widthPercentage} from '../../utils/Responsive';
import {Text} from '../../components/Atoms';
import {COLORS} from '../../constant';
import {Gap, Star} from '../../assets/Icon';

const ProductScreen = () => {
  const {data: products, isLoading, error} = useGetProductsQuery();
  const dispatch = useDispatch();

  const productList = useSelector(productSelectors.listProductState);
  const cartCount = useSelector(cartSelectors.getCartCount);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching products</Text>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Header headerTitle="Products" cartIcon cartCount={cartCount} />
        <FlatList
          data={products || productList}
          numColumns={2}
          contentContainerStyle={{margin: widthPercentage(2)}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleAddToCart(item)}
              style={styles.cardProduct}>
              <Image
                source={{uri: item.thumbnail}}
                style={styles.imageProduct}
              />
              <Text>{item.title}</Text>
              <Gap height={widthPercentage(1)} />
              <View style={[styles.cardPrices, styles.rows]}>
                <Text color={COLORS.GRAY}>${item.price}</Text>
                <View style={styles.rows}>
                  <Star />
                  <Text color={COLORS.GRAY}>{item.rating}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
