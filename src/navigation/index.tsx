import {createStackNavigator} from '@react-navigation/stack';
import {ProductScreen} from '../screens';
import {RootStackParams} from './types';
import RouteName from './RouteName';
import NavigationContainer from './NavigationContainer';

const Stack = createStackNavigator<RootStackParams>();
const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteName.Product} component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
