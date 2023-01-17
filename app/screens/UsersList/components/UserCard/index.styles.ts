import {StyleSheet} from 'react-native';
import Colors from '../../../../styles/Colors';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  card: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderStyle: 'dashed',
    borderColor: Colors.PURPLE,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 30,
  },
  textLabel: {
    color: Colors.PURPLE,
    fontWeight: 'bold',
  },
});

export default styles;
