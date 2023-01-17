import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PURPLE,
  },
  scrollContainer: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 60,
    textAlign: 'center',
    color: Colors.WHITE,
  },
});

export default styles;
