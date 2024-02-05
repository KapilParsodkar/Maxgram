/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch,
  Platform,
} from 'react-native';
import {getfontfamily} from './assets/fonts/helper';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import Style from './style';
import Userstory from '../../components/Title/Userstory/Userstory';
import UserPosts from '../../components/UserPosts/UserPosts';
import {Routes} from '../../navigation/Routes';

function Home({navigation}) {
  const userStories = [
    {
      firstName: 'jose',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'kapil',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Max',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'ronaldo',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Messi',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'goku',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'luffy',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'kaps',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'maximum',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'ally',
      lastname: 'beck',
      location: 'Boston Ma',
      likes: 1201,
      comments: 24,
      bookmarks: 55,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 1,
    },
    {
      firstName: 'kaps',
      lastname: 'max',
      location: 'nyc,ny',
      likes: 1211,
      comments: 44,
      bookmarks: 75,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 2,
    },
    {
      firstName: 'soham',
      lastname: 'deks',
      location: 'Boston nj',
      likes: 1231,
      comments: 256,
      bookmarks: 85,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'zoey',
      lastname: 'boo',
      location: 'missouri',
      likes: 9901,
      comments: 54,
      bookmarks: 15,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'malwe',
      lastname: 'abs',
      location: 'nagpur',
      likes: 12561,
      comments: 124,
      bookmarks: 555,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    },
  ];
  const userStoriesPageSize = 4;
  const [userstoriescurrentpage, setuserstoriescurrentpage] = useState(1);
  const [userstoriesrendereddata, setuserstoriesrendereddata] = useState([]);
  const [isloading, setisloading] = useState(false);

  const userPostsPageSize = 2;
  const [userPostscurrentpage, setuserPostscurrentpage] = useState(1);
  const [userPostsrendereddata, setuserPostsrendereddata] = useState([]);
  const [isloadinguserPosts, setisloadinguserPosts] = useState(false);

  const [ison, setison] = useState(false);
  function pagination(database, currentpage, pagesize) {
    const startIndex = (currentpage - 1) * pagesize;
    const endindex = startIndex + pagesize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endindex);
  }
  useEffect(() => {
    setisloading(true);
    const getintialdata = pagination(userStories, 1, userStoriesPageSize);
    setuserstoriesrendereddata(getintialdata);
    setisloading(false);

    setisloadinguserPosts(true);
    const getintialdataPosts = pagination(userPosts, 1, userPostsPageSize);
    setuserPostsrendereddata(getintialdataPosts);
    setisloadinguserPosts(false);
  }, []);
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={'aqua'} barStyle={'dark-content'} />
      <View style={Style.userpostcontainers}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={Style.header}>
                <Title title={'Explore The Gram'} />
                <TouchableOpacity style={Style.messageIcon}>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    color={'#ffd247'}
                    size={20}
                  />
                  <View style={Style.messageNum}>
                    <Text style={Style.messagenumText}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Switch
                  value={ison}
                  style={
                    Platform.OS === 'android' && {
                      transform: [{scaleX: 1.6}, {scaleY: 1.6}],
                      marginLeft: 13,
                    }
                  }
                  trackColor={
                    Platform.OS === 'android' && {
                      true: 'red',
                    }
                  }
                  onValueChange={value => setison(value)}
                />
              </View>
              <View style={Style.userstorycontainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    if (isloading) {
                      return;
                    }
                    setisloading(true);
                    const contentToAppend = pagination(
                      userStories,
                      userstoriescurrentpage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setuserstoriescurrentpage(userstoriescurrentpage + 1);
                      setuserstoriesrendereddata(a => [
                        ...a,
                        ...contentToAppend,
                      ]);
                    }
                    setisloading(false);
                  }}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  data={userstoriesrendereddata}
                  renderItem={({item}) => (
                    <Userstory
                      key={item.id}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (isloadinguserPosts) {
              return;
            }
            setisloadinguserPosts(true);
            const posttoappend = pagination(
              userPosts,
              userPostscurrentpage + 1,
              userPostsPageSize,
            );
            if (posttoappend.length > 0) {
              setuserPostscurrentpage(userPostscurrentpage + 1);
              setuserPostsrendereddata(a => [...a, ...posttoappend]);
            }
            setisloadinguserPosts(false);
          }}
          data={userPostsrendereddata}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <UserPosts
              firstName={item.firstName}
              lastname={item.lastname}
              image={item.image}
              likes={item.likes}
              comments={item.comments}
              bookmarks={item.bookmarks}
              location={item.location}
              profileImage={item.profileImage}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

export default Home;
