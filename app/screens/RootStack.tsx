import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from '../types/navigation/RootStackParamList';
import Login from './Login';
import SignUp from './SignUp';
import UsersList from './UsersList';
import usersListHeaderOptions from './UsersList/users-list-header-options';
import routes from '../modules/routes';

const RootStack = createNativeStackNavigator<RootStackParamList>();

type PropsT = {isLoggedIn: boolean};

const RootStackNavigator: React.FC<PropsT> = ({isLoggedIn}) => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName={isLoggedIn ? routes.UsersList : routes.Login}>
      <RootStack.Screen
        component={Login}
        name={routes.Login}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <RootStack.Screen component={SignUp} name={routes.SignUp} options={{headerShown: false}} />
      <RootStack.Screen
        component={UsersList}
        name={routes.UsersList}
        options={usersListHeaderOptions}
      />
    </RootStack.Navigator>
  </NavigationContainer>
);

export default RootStackNavigator;
