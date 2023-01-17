import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation/RootStackParamList';
import UserCard from './components/UserCard';
import {useSessionContext} from '../../context/SessionContext/context';
import useFetchUsers from './hooks/use-fetch-users';
import routes from '../../modules/routes';
import Colors from '../../styles/Colors';
import styles from './index.styles';

type PropsT = NativeStackScreenProps<RootStackParamList, routes.UsersList>;

const UsersList: React.FC<PropsT> = ({navigation}) => {
  const {currentSession, onLogout} = useSessionContext();
  const {users, isLoading, onEndReached} = useFetchUsers();

  const onCloseSession = () => {
    onLogout();
    navigation.goBack();
  };

  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        title: `Welcome ${currentSession?.name}`,
        headerLeft: () => (
          <Text style={styles.headerLeft} onPress={onCloseSession}>
            Logout
          </Text>
        ),
      });
    }, []),
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        contentContainerStyle={styles.listContainer}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.login.uuid}
        renderItem={({item}) => <UserCard user={item} />}
        ListFooterComponent={() => (isLoading ? <ActivityIndicator color={Colors.PURPLE} /> : null)}
      />
    </View>
  );
};

export default UsersList;
