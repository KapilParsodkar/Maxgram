/* eslint-disable prettier/prettier */
import React from 'react';
import Style from './Styles';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import UserProfileImage from '../Title/UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import {
  faBookmark,
  faHeart,
  faMessage,
} from '@fortawesome/free-regular-svg-icons';
function UserPosts(props) {
  return (
    <View style={Style.userPostContainer}>
      <View style={Style.User}>
        <View style={Style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={Style.userTextContainer}>
            <Text style={Style.username}>
              {props.firstName} {props.lastname}
            </Text>
            {props.location && (
              <Text style={Style.location}>{props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon size={22} color="#E77C2F" icon={faEllipsisH} />
      </View>
      <View style={Style.Images}>
        <Image source={props.image} />
      </View>
      <View style={Style.userPostStats}>
        <View style={Style.button}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={Style.buttontext}>{props.likes}</Text>
        </View>
        <View style={Style.comments}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text style={Style.commentstext}>{props.comments}</Text>
        </View>
        <View style={Style.bookmarks}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={Style.bookmarkstext}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
}

UserPosts.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPosts;
