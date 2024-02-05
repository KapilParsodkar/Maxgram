/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {getfontfamily} from '../../assets/fonts/helper';
import {scaleFontSize} from '../../assets/styles/scaling';
const Style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getfontfamily('Inter', 600),
    fontSize: scaleFontSize(24),
  },
});

export default Style;
