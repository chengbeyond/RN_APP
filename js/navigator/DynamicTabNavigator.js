import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from "react-navigation"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import Detail from "../pages/detail/Detail"
import My from "../pages/my/My"
import Popular from "../pages/popular/Popular"
import Trending from "../pages/trending/Trending"


import NavigationUtil from "./NavigationUtil";


type Props = {};

const TABS = { // 配置路由页面
  Popular: {
    screen: Popular,
    navigationOptions: {
      tabBarLabel: "最热",
      tabBarIcon: ({tintColor, focused}) => {
        return <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}}/>
      }
    }
  },
  Trending: {
    screen: Trending,
    navigationOptions: {
      tabBarLabel: "趋势",
      tabBarIcon: ({tintColor, focused}) => {
        return <Ionicons name={'md-trending-up'} size={26} style={{color: tintColor}}/>
      }
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: {
      tabBarLabel: "详情",
      tabBarIcon: ({tintColor, focused}) => {
        return <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}}/>
      }
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: "我的",
      tabBarIcon: ({tintColor, focused}) => {
        return <Ionicons name={'md-person'} size={26} style={{color: tintColor}}/>
      }
    }
  }
};

export default class DynamicTabNavigator extends Component<Props> {
  constructor(props) {
    super(props);
    // console.disableYellowBox = true
  }

  _tabNavigator() {
    const {Popular, Trending, Detail, My} = TABS;
    // 根据需要定制显示的tab
    const tabs = {Popular, Trending, Detail};
    Detail.navigationOptions.tabBarLabel="2019";
    // 动态配置路由内容
    return createBottomTabNavigator(tabs,)
  }

  render() {
    NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabNavigator();
    return <Tab/>;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
