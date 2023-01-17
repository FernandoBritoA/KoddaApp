import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import Colors from '../../styles/Colors';

const usersListHeaderOptions: NativeStackNavigationOptions = {
  title: '',
  gestureEnabled: false,
  headerBackVisible: false,
  headerTitleStyle: {color: Colors.WHITE},
  headerStyle: {backgroundColor: Colors.PURPLE},
};

export default usersListHeaderOptions;
