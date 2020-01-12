import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import NavigationUtil from "../../navigator/NavigationUtil";
import DynamicTabNavigator from "../../navigator/DynamicTabNavigator";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import {createBottomTabNavigator} from "react-navigation";
import Popular from "../popular/Popular";
import Trending from "../trending/Trending";
import Detail from "../detail/Detail";
import My from "../my/My";


type Props = {};
const TABS = { // 配置路由的页面
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
export default class Home extends Component<Props> {
  // _tabNavigator() {
  //   return createBottomTabNavigator({
  //     Popular: {
  //       screen: Popular,
  //       navigationOptions: {
  //         tabBarLabel: "最热",
  //         tabBarIcon: ({tintColor, focused}) => {
  //           return <MaterialIcons name={'whatshot'} size={26} style={{color: tintColor}}/>
  //         }
  //       }
  //     },
  //     Trending: {
  //       screen: Trending,
  //       navigationOptions: {
  //         tabBarLabel: "趋势",
  //         tabBarIcon: ({tintColor, focused}) => {
  //           return <Ionicons name={'md-trending-up'} size={26} style={{color: tintColor}}/>
  //         }
  //       }
  //     },
  //     Detail: {
  //       screen: Detail,
  //       navigationOptions: {
  //         tabBarLabel: "详情",
  //         tabBarIcon: ({tintColor, focused}) => {
  //           return <MaterialIcons name={'favorite'} size={26} style={{color: tintColor}}/>
  //         }
  //       }
  //     },
  //     My: {
  //       screen: My,
  //       navigationOptions: {
  //         tabBarLabel: "我的",
  //         tabBarIcon: ({tintColor, focused}) => {
  //           return <Ionicons name={'md-person'} size={26} style={{color: tintColor}}/>
  //         }
  //       }
  //     }
  //   })
  // }
  // render() {
  //   NavigationUtil.navigation = this.props.navigation;
  //   const Tab = this._tabNavigator();
  //   return <Tab/>;
  // }
  constructor(props) {
    super(props);
    // console.disableYellowBox = true
  }

  _tabNavigator() {
    const {Popular, Trending, Detail, My} = TABS;
    // 根据需要定制显示的tab
    const tabs = {Popular, Trending, Detail, My};
    Detail.navigationOptions.tabBarLabel = "2019";
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
