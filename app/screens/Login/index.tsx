import React, {useState} from 'react';
import {Text} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types/navigation/RootStackParamList';
import KeyboardContianer from '../../components/KeyboardContianer';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {useSessionContext} from '../../context/SessionContext/context';
import {showErrorToast} from '../../utilities/toast';
import routes from '../../modules/routes';
import styles from './index.styles';

type PropsT = NativeStackScreenProps<RootStackParamList, routes.Login>;

const Login: React.FC<PropsT> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const {onLogin} = useSessionContext();

  const resetData = () => {
    setPassword('');
    setUsername('');
  };

  const onContinue = async () => {
    if (!username || !password) {
      return showErrorToast('All fields are required');
    }

    const {hasError} = await onLogin({username, password});

    if (hasError) {
      return showErrorToast('Invalid credentials');
    }

    resetData();
    navigation.navigate(routes.UsersList);
  };

  const onCreateAccount = () => {
    resetData();
    navigation.navigate(routes.SignUp);
  };

  return (
    <KeyboardContianer style={styles.container} scrollStyle={styles.scrollStyle}>
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
      <Text style={styles.bottomText} onPress={onCreateAccount}>
        Create Account
      </Text>
    </KeyboardContianer>
  );
};

export default Login;
