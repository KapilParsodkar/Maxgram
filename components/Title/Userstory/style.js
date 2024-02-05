/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {getfontfamily} from '../../../assets/fonts/helper';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: 20,
  },
  firstName: {
    fontFamily: getfontfamily('Inter', 500),
    fontSize: 14,
    color: '#ff6191',
    marginTop: 8,
    textAlign: 'center',
  },
});

export default style;
