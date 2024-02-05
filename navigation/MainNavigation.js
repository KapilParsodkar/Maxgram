/* eslint-disable prettier/prettier */
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from './Routes';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabtitle';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';
import {View, Text} from 'react-native';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createMaterialTopTabNavigator();

export const ProfiletabsNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <Tabs.Screen
        name={'Tab1'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Photos'} />
          ),
        }}
        component={ProfileTabContent}
      />
      <Tabs.Screen
        name={'tab2'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Videos'} />
          ),
        }}
        component={ProfileTabContent}
      />
      <Tabs.Screen
        name={'tab3'}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle isFocused={focused} title={'Saved'} />
          ),
        }}
        component={ProfileTabContent}
      />
    </Tabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

function MainNavigation() {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
}
export default MainNavigation;
