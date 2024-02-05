/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Image, Text} from 'react-native';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
function Userstory(props) {
  return (
    <View style={style.storyContainer}>
      <UserProfileImage
        profileImage={props.profileImage}
        imageDimensions={65}
      />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
}

Userstory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default Userstory;
