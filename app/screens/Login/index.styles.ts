import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PURPLE,
  },
  scrollStyle: {
    paddingTop: 100,
    paddingBottom: 20,
    paddingHorizontal: 20,
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
