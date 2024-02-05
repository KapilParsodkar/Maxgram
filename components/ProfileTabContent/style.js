/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {Horizontalscale, verticalscale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  profileTabContentContainer: {
    backgroundColor: '#FFFFFF',
  },
  profileTabContent: {
    paddingHorizontal: Horizontalscale(21),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  image: {
    width: Horizontalscale(150),
    height: verticalscale(90),
    marginTop: verticalscale(11),
  },
});

export default style;
