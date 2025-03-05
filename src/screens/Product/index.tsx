import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useGetProductsQuery} from '../../services/Product/productApi';
import {useSelector} from 'react-redux';
import {productSelectors} from '../../services/Product/productSelector';
import {Header, TabCategory} from '../../components/Molecules';
import {Product} from '../../services/Product/types';
import {cartSelectors} from '../../services/Cart/cartSelector';
import {styles} from './style';
import {FPercentage, widthPercentage} from '../../utils/Responsive';
import {Text} from '../../components/Atoms';
import {COLORS} from '../../constant';
import {Gap, Star} from '../../assets/Icon';
import {calculateDiscountedPrice} from '../../utils/common';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import RouteName from '../../navigation/RouteName';
import {RootStackParams} from '../../navigation/types';

const ProductScreen = () => {
  const {data: products, isLoading, error} = useGetProductsQuery();

  type ProductScreenNavigationProp = NavigationProp<
    RootStackParams,
    RouteName.ProductDetail
  >;
  const navigation = useNavigation<ProductScreenNavigationProp>();

  const productList = useSelector(productSelectors.listProductState);
  const cartCount = useSelector(cartSelectors.getCartCount);

  const goToDetail = (product: Product) => {
    navigation.navigate(RouteName.ProductDetail, {product});
  };

  // tab menu category
  const [selectedCategory, setSelectedCategory] = useState<string | null>('All');
  const categories = [
    'All',
    ...(products ? [...new Set(products.map(p => p.category))] : []),
  ];
  const filteredProducts =
    selectedCategory && selectedCategory !== 'All'
      ? products?.filter(p => p.category === selectedCategory)
      : products || productList;

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching products</Text>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Header headerTitle="Products" cartIcon cartCount={cartCount} />
        <TabCategory
          data={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <FlatList
          data={filteredProducts}
          numColumns={2}
          contentContainerStyle={{margin: widthPercentage(2)}}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => goToDetail(item)}
              style={styles.cardProduct}>
              <Image
                source={{uri: item.thumbnail}}
                style={styles.imageProduct}
              />
              <Text>{item.title}</Text>
              <Gap height={widthPercentage(1)} />
              <View style={[styles.cardPrices, styles.rows]}>
                <View style={styles.rows}>
                  <Text color={COLORS.GREEN}>
                    $
                    {calculateDiscountedPrice(
                      item.price,
                      item.discountPercentage,
                    )}
                  </Text>
                  <Gap width={4} />
                  <Text color={COLORS.GRAY} lineThrough size={FPercentage(3)}>
                    ${item.price}
                  </Text>
                </View>

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
