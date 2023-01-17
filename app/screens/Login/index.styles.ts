import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 20,
    backgroundColor: Colors.PURPLE,
  },
  title: {
    fontSize: 40,
    marginBottom: 80,
    textAlign: 'center',
    color: Colors.WHITE,
  },
  bottomText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.WHITE,
  },
});

export default styles;
