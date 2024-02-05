/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyles from '../../assets/styles/globalStyles';
import {Routes} from '../../navigation/Routes';
import {styles} from './styles';
import {ProfiletabsNav} from '../../navigation/MainNavigation';
function Profile({navigation}) {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, {flex: 1}]}>
      {/* <TouchableOpacity onPress={() => navigation.navigate(Routes.Home)}> */}
      <ScrollView contentContainerStyle={globalStyles.flexGrow}>
        <View style={styles.imagecontainer}>
          <View style={styles.imagecontent}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/images/default_profile.png')}
            />
          </View>
        </View>
        <Text style={styles.txt}>kapsy</Text>
        <View style={styles.statContainer}>
          <View>
            <Text style={styles.statAmount}>45</Text>
            <Text style={styles.statType}>Following</Text>
          </View>
          <View style={styles.statBorder} />
          <View>
            <Text style={styles.statAmount}>30M</Text>
            <Text style={styles.statType}>Followers</Text>
          </View>
          <View style={styles.statBorder} />
          <View>
            <Text style={styles.statAmount}>100</Text>
            <Text style={styles.statType}>Posts</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
          <ProfiletabsNav />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Profile;
