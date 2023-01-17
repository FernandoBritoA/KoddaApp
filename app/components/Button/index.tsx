import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import Colors from '../../styles/Colors';
import styles from './index.styles';

type PropsT = {
  text: string;
  onPress: () => void;
  isLoading?: boolean;
};

const Button: React.FC<PropsT> = ({text, onPress, isLoading = false}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={isLoading}
    style={styles.container}>
    {isLoading ? (
      <ActivityIndicator size="small" color={Colors.PURPLE} />
    ) : (
      <Text style={styles.text}>{text}</Text>
    )}
  </TouchableOpacity>
);

export default Button;
