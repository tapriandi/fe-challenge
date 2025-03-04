import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';
import RouteName from '../../../navigation/RouteName';
import {ArrowLeft, Cart} from '../../../assets/Icon';

interface Props {
  headerTitle: string;
  back?: Boolean;
  cartIcon?: Boolean;
  cartCount?: number;
}

const Header: FC<Props> = ({
  headerTitle,
  back = false,
  cartIcon = false,
  cartCount = 0,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {back && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft />
        </TouchableOpacity>
      )}

      <Text style={styles.headerTitle}>{headerTitle}</Text>
      {cartIcon ? (
        <TouchableOpacity
          style={styles.cartIconContainer}
          onPress={() => navigation.navigate(RouteName.Cart as never)}>
          <Cart />
          {cartCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      ) : (
        <View style={{width: 32}}></View>
      )}
    </View>
  );
};

export default Header;
