/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {getfontfamily} from '../../assets/fonts/helper';
import {
  Horizontalscale,
  scaleFontSize,
  verticalscale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: Horizontalscale(10),
  },
  User: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    fontFamily: getfontfamily('Inter', 600),
    fontSize: scaleFontSize(16),
    color: '#FB2451',
  },
  location: {
    color: '#441C61',
    fontFamily: getfontfamily('inter', 400),
    fontSize: scaleFontSize(12),
    marginTop: verticalscale(5),
  },
  Images: {
    alignItems: 'center',
    marginVertical: verticalscale(20),
  },
  userPostContainer: {
    marginTop: verticalscale(35),
  },
  userPostStats: {
    marginLeft: Horizontalscale(10),
    flexDirection: 'row',
  },
  button: {flexDirection: 'row'},
  comments: {flexDirection: 'row', marginLeft: Horizontalscale(27)},
  bookmarks: {flexDirection: 'row', marginLeft: Horizontalscale(27)},
  buttontext: {marginLeft: Horizontalscale(3), color: '#79869F'},
  commentstext: {marginLeft: Horizontalscale(3), color: '#79869F'},
  bookmarkstext: {marginLeft: Horizontalscale(3), color: '#79869F'},
});

export default style;
