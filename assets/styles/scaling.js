/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const {width, height} = Dimensions.get('window');

const issmall = width <= 375 && !DeviceInfo.hasNotch();

const guideLineBaseWidth = () => {
  if (issmall) {
    return 330;
  }
  return 350;
};

function Horizontalscale(size) {
  return (width / guideLineBaseWidth()) * size;
}

const guideLineBaseHeight = () => {
  if (issmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

function verticalscale(size) {
  return (height / guideLineBaseHeight()) * size;
}

const guidelineBasefonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const scaleFontSize = size => Math.round(width / guidelineBasefonts()) * size;

export {Horizontalscale, verticalscale, scaleFontSize};
