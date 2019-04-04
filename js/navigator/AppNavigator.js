import React from 'react';
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation"
import Welcome from "../pages/welcome/Welcome";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";
import Trending from "../pages/trending/Trending";

const InitNavigator = createStackNavigator({
  WelcomePage: {
    screen: Welcome,
    navigationOptions: {
      header: null
    }
  }
});
const MainNavigator = createStackNavigator({
  HomePage: {
    screen: Home,
    navigationOptions: {
      header: null
    }
  },
  DetailPage: {
    screen: Detail,
    navigationOptions: {
      header: null
    }
  }
});
export default createSwitchNavigator({
  Init: InitNavigator,
  Main: MainNavigator,

}, {
  navigationOptions: {
    header: null
  }
});


