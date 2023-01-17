import React, {useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../components/Input';
import Button from '../../components/Button';
import styles from './index.styles';

type PropsT = {};

const Login: React.FC<PropsT> = ({}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const onContinue = () => {};

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
