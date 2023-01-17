import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation/RootStackParamList';
import Login from './Login';
import SignUp from './SignUp';
import UsersList from './UsersList';
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
      <RootStack.Screen
        component={SignUp}
        name={routes.SignUp}
        options={{headerShown: false, presentation: 'modal'}}
      />
      <RootStack.Screen
        component={UsersList}
        name={routes.UsersList}
        options={{headerShown: false, gestureEnabled: false}}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootStackNavigator;
