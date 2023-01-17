import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';
import styles from './index.styles';

type PropsT = {
  label: string;
} & TextInputProps;

const Input: React.FC<PropsT> = ({label, ...textInputProps}) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <TextInput {...textInputProps} style={styles.input} autoCorrect={false} autoCapitalize="none" />
  </View>
);

export default Input;
