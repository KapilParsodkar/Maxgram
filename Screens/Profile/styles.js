/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {
  Horizontalscale,
  scaleFontSize,
  verticalscale,
} from '../../assets/styles/scaling';
import {getfontfamily} from '../../assets/fonts/helper';

export const styles = StyleSheet.create({
  profileImage: {
    width: Horizontalscale(110),
    height: Horizontalscale(110),
  },
  imagecontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalscale(32),
  },
  imagecontent: {
    borderWidth: 1,
    borderColor: 'aqua',
    padding: Horizontalscale(4),
    borderRadius: Horizontalscale(110),
  },
  txt: {
    marginTop: verticalscale(20),
    textAlign: 'center',
    fontFamily: getfontfamily('inter', '600'),
    fontSize: scaleFontSize(20),
  },
  statAmount: {
    fontFamily: getfontfamily('Inter', '600'),
    fontSize: scaleFontSize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getfontfamily('Inter', '400'),
    fontSize: scaleFontSize(16),
    color: '#79869F',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Horizontalscale(40),
    paddingVertical: verticalscale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});
