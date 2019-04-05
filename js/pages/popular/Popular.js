import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from "react-navigation"
import NavigationUtil from "../../navigator/NavigationUtil"

type Props = {};
export default class Popular extends Component<Props> {
  render() {
    const TabNavigator = createMaterialTopTabNavigator({
      PopularTab1: {
        screen: PopularTab,
        navigationOptions: {
          title: "TAB 1"
        }
      },
      PopularTab2: {
        screen: PopularTab,
        navigationOptions: {
          title: "TAB 2"
        }
      }
    });
    return (
      <View style={{flex: 1}}>
        <TabNavigator/>
      </View>

    );
  }
}


class PopularTab extends Component<Props> {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Popular!</Text>
        <Text onPress={() => {
          NavigationUtil.goPage({
            navigation: this.props.navigation
          }, "DetailPage")
        }}>跳转到详情页</Text>
      </View>
    );
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
