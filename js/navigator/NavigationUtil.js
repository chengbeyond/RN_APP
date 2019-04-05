export default class NavigationUtil {
  /**
   * 跳转到指定页面
   * @param params 传递的参数
   * @param page 页面名
   */
  static goPage(params, page) {
    const navigation = NavigationUtil.navigation;
    if (!navigation) {
      console.log("navigation can not be null");
      return
    }
    navigation.navigate(page, {
      ...params
    })
  }

  static goBack(navigation) {
    navigation.goBack();
  }

  static resetToHomePage(params) {
    const {navigation} = params;
    navigation.navigate("Main")
  }
}
