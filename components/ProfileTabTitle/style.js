/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {getfontfamily} from '../../assets/fonts/helper';
import {Horizontalscale, scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getfontfamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    padding: Horizontalscale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getfontfamily('Inter', '400'),
  },
});

export default style;
