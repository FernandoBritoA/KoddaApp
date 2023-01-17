import React from 'react';
import {Image, View} from 'react-native';
import {UserT} from '../../../../types/User';
import styles from './index.styles';
import UserRow from './user-row';

type PropsT = {
  user: UserT;
};

const UserCard: React.FC<PropsT> = ({user}) => (
  <View style={[styles.row, styles.card]}>
    <Image source={{uri: user.picture.medium}} style={styles.image} />

    <View>
      <UserRow label="Name" value={`${user.name.first} ${user.name.last}`} />
      <UserRow
        label="Location"
        value={`${user.location.state}, ${user.location.country}`}
      />
      <UserRow label="Email" value={user.email} />
      <UserRow label="Phone" value={user.phone} />
    </View>
  </View>
);

export default UserCard;
