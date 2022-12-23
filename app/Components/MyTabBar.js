import React, { useState, useRef } from 'react';
import { View, Text, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';

import { mineShaft, pelorous, wildSand } from '../styles/Colors';
import Screen1 from '../Screen/Screen1';
import Profile from '../Screen/Profile';
import { Fonts } from '../Assets/Fonts';
const Tab = createMaterialBottomTabNavigator();
// import HomeScreen from '../screens/afterLogin/homeScreen';
// import Notifications from '../screens/sidemenu/NotificationsScreen';
// import Settings from '../screens/sidemenu/SettingsScreen';
// import Notification from './NotificationRoute';

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
function League() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>League !</Text>
    </View>
  );
} 
function Research() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Research !</Text>
    </View>
  );
} 
function Leaderboard() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Leaderboard !</Text>
    </View>
  );
}

export default function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Screen1"
      activeColor={'#6231AD'}
      inactiveColor={'#B5C0C8'}
      style={{ marginBottom: Platform.OS == 'ios' ? 15 : 0, }}   
    barStyle={{backgroundColor: '#fff',borderTopColor:'#e5e5e5',borderTopWidth:0.3,}}
    >
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          tabBarLabel: <Text style={{fontFamily :Fonts.mosn_normal , textAlign : "center",fontSize:11,fontWeight:'500'}}>{'Home'}</Text>,
     tabBarIcon: ({ color }) => (
            <Ionicons
              name="home"
              color={color}
              size={20}
              style={{}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="League"
        component={League}
        options={{
          tabBarLabel: <Text style={{fontFamily :Fonts.mosn_normal, textAlign : "center",fontSize:11,fontWeight:'500'}}>{'Leagues'}</Text>,
          tabBarIcon: ({ color }) => (
            <Ionicons name="trophy" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Research"
        component={Research}
        options={{
          tabBarLabel: <Text style={{fontFamily :Fonts.mosn_normal, textAlign : "center",fontSize:11,fontWeight:'500'}}>{'Research'}</Text>,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search" color={color} size={20} />
          ),
        }}
      /> 
       <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        
        options={{
          tabBarLabel: <Text style={{fontFamily :Fonts.mosn_normal, textAlign : "center",fontSize:10 ,fontWeight:'500'}}>{'Leaderboard'}</Text>,
          tabBarIcon: ({ color }) => (
            <Foundation name="graph-bar" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile }
        options={{
          tabBarLabel: <Text style={{fontFamily :Fonts.mosn_normal, textAlign : "center",fontSize:11,fontWeight:'500'}}>{'Profile'}</Text>,
          tabBarIcon: ({ color }) => (
            <View>
              <FontAwesome name="user" color={color} size={20} />
            </View>
          ),
        }}
      />

    </Tab.Navigator>
  );
}
