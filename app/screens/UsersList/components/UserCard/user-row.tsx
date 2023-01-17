import React from 'react';
import {Text, View} from 'react-native';
import styles from './index.styles';

type PropsT = {
  label: string;
  value: string;
};

const UserRow: React.FC<PropsT> = ({label, value}) => (
  <View style={styles.row}>
    <Text style={styles.textLabel}>{label}: </Text>
    <Text>{value}</Text>
  </View>
);

export default UserRow;
