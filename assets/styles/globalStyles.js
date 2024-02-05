/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {getfontfamily} from '../fonts/helper';

const globalStyles = StyleSheet.create({
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    paddding: 14,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  messageNum: {
    backgroundColor: '#2bfdff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    left: 14,
    top: 13,
  },
  messagenumText: {
    color: 'white',
    fontSize: 6,
    fontFamily: getfontfamily('inter', '600'),
  },
  userstorycontainer: {
    marginTop: 20,
    marginHorizontal: 28,
  },
  userpostcontainers: {
    marginHorizontal: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  backgroundWhite: {
    backgroundColor: 'white',
  },
  flexGrow: {
    flexGrow: 1,
  },
});

export default globalStyles;
