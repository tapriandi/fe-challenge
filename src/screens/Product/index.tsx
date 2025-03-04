import React from 'react';
import {FlatList, StatusBar, Text, Image, View, SafeAreaView} from 'react-native';
import {useGetProductsQuery} from '../../services/Product/productApi';
import {useSelector} from 'react-redux';
import {productSelectors} from '../../services/Product/productSelector';
import {Header} from '../../components/Molecules';

const ProductScreen = () => {
  const {data: products, isLoading, error} = useGetProductsQuery();

  const productList = useSelector(productSelectors.listProductState);

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching products</Text>;

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Header headerTitle="Products" />
        <FlatList
          data={products || productList} // Fallback ke Redux state jika API kosong
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <View style={{padding: 10, borderBottomWidth: 1}}>
              <Image
                source={{uri: item.thumbnail}}
                style={{width: 50, height: 50}}
              />
              <Text>{item.title}</Text>
              <Text>${item.price}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
