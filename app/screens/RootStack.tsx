import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation/RootStackParamList';
import Login from './Login';
import routes from '../modules/routes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator: React.FC = () => (
  <NavigationContainer>
    <RootStack.Navigator>
      <RootStack.Screen
        component={Login}
        name={routes.Login}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootStackNavigator;
