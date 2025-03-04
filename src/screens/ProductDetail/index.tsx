import React from 'react';
import {
  Image,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Header} from '../../components/Molecules';
import {Product} from '../../services/Product/types';
import {addToCart} from '../../services/Cart/cartSlice';
import {cartSelectors} from '../../services/Cart/cartSelector';
import {styles} from './style';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParams} from '../../navigation/types';
import RouteName from '../../navigation/RouteName';
import {Text} from '../../components/Atoms';
import {FPercentage} from '../../utils/Responsive';
import {Gap, Star} from '../../assets/Icon';
import {calculateDiscountedPrice} from '../../utils/common';
import {COLORS} from '../../constant';

const ProductDetailScreen = () => {
  type ProductDetailRouteProp = RouteProp<
    RootStackParams,
    RouteName.ProductDetail
  >;

  const route = useRoute<ProductDetailRouteProp>();
  const {product} = route.params;
  const dispatch = useDispatch();

  const cartCount = useSelector(cartSelectors.getCartCount);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  console.log(product);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View>
          <Header
            headerTitle="Products Detail"
            back
            cartIcon
            cartCount={cartCount}
          />
          <ScrollView contentContainerStyle={{paddingBottom: 100}}>
            <Image
              source={{uri: product.images[0]}}
              style={styles.detailImage}
            />
            <View style={styles.contentContainer}>
              <Text bold size={FPercentage(5)}>
                {product.title}
              </Text>
              <Gap height={10} />

              <Text color={COLORS.GREEN} size={FPercentage(10)}>
                $
                {calculateDiscountedPrice(
                  product.price,
                  product.discountPercentage,
                )}
              </Text>

              <View style={styles.rows}>
                <Text color={COLORS.GRAY} lineThrough size={FPercentage(4)}>
                  ${product.price}
                </Text>
                <Gap width={10} />
                <Text color={COLORS.RED} size={FPercentage(3)}>
                  {product.discountPercentage}%
                </Text>
              </View>

              <Gap height={40} />

              <View style={styles.rows}>
                <View style={styles.rows}>
                  <Star />
                  <Text color={COLORS.GRAY}>{product.rating}</Text>
                </View>

                <Gap width={10} />
                <Text>|</Text>
                <Gap width={10} />
                <Text color={COLORS.BORDER} size={FPercentage(3)}>
                  {product.brand}%
                </Text>
              </View>

              <Gap height={20} />

              <Text>{product.description}</Text>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToCart(product)}>
          <Text color={COLORS.WHITE}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ProductDetailScreen;
