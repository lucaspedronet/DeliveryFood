// import React, { Component } from 'react'
import { Platform } from 'react-native'

import { TabNavigator } from 'react-navigation'
import AddMediaTab from './AddMediaTab'
import HomeTab from './HomeTab'
import LikesTab from './LikesTab'
import ProfileTab from './ProfileTab'
import SearchTab from './SearchTab'

const MainScreen = TabNavigator({
  HomeTab: {
    screen: HomeTab,
  },
  SearchTab: {
    screen: SearchTab,
  },
  AddMediaTab: {
    screen: AddMediaTab,
  },
  LikesTab: {
    screen: LikesTab,
  },
  ProfileTab: {
    screen: ProfileTab,
  },
},
{
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,
  tabBarOptions: {
    style: {
      ...Platform.select({
        android: {
          backgroundColor: '#FCFCFC',
        },
        paddingTop: 5,
      }),
      //   height: '6%',

    },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showIcon: true,
    showLabel: false,
  },

})
export default MainScreen;
