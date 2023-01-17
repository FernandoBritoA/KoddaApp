import React, {useState} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation/RootStackParamList';
import Input from '../../components/Input';
import Button from '../../components/Button';
import routes from '../../modules/routes';
import styles from './index.styles';

type PropsT = NativeStackScreenProps<RootStackParamList, routes.SignUp>;

const SignUp: React.FC<PropsT> = ({navigation}) => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');

  const onCreateAccount = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Input
        label="Name"
        value={name}
        textContentType="username"
        onChangeText={setName}
      />
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
      <Button text="CREATE ACCOUNT" onPress={onCreateAccount} />
    </SafeAreaView>
  );
};

export default SignUp;
