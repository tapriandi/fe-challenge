import {createStackNavigator} from '@react-navigation/stack';
import {CartScreen, ProductDetailScreen, ProductScreen} from '../screens';
import {RootStackParams} from './types';
import RouteName from './RouteName';
import NavigationContainer from './NavigationContainer';

const Stack = createStackNavigator<RootStackParams>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RouteName.Product}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteName.Product} component={ProductScreen} />
        <Stack.Screen name={RouteName.ProductDetail} component={ProductDetailScreen} />
        <Stack.Screen name={RouteName.Cart} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
