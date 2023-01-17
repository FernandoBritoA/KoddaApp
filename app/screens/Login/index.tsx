import React, {useState} from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../types/navigation/RootStackParamList';
import Input from '../../components/Input';
import Button from '../../components/Button';
import routes from '../../modules/routes';
import styles from './index.styles';

type PropsT = NativeStackScreenProps<RootStackParamList, routes.Login>;

const Login: React.FC<PropsT> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onContinue = () => {
    navigation.navigate(routes.UsersList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        label="Username"
        value={username}
        textContentType="username"
        onChangeText={setUsername}
      />
      <Input
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        textContentType="password"
      />
      <Button text="CONTINUE" onPress={onContinue} />
    </SafeAreaView>
  );
};

export default Login;
