import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import UserCard from './components/UserCard';
import useFetchUsers from './hooks/use-fetch-users';
import Colors from '../../styles/Colors';
import styles from './index.styles';

type PropsT = {};

const UsersList: React.FC<PropsT> = ({}) => {
  const {users, isLoading, onEndReached} = useFetchUsers();

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        contentContainerStyle={styles.listContainer}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.login.uuid}
        renderItem={({item}) => <UserCard user={item} />}
        ListFooterComponent={() =>
          isLoading ? <ActivityIndicator color={Colors.PURPLE} /> : null
        }
      />
    </View>
  );
};

export default UsersList;
