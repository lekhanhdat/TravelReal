import {CommonActions, StackActions} from '@react-navigation/native';

let navigator: any;
let activeScreen: string;
let parentOfActiveScreen: string;

function setTopLevelNavigator(ref: any) {
  navigator = ref;
}

function navigate(routeName: any, params?: any) {
  console.log('NAVIGATION SERVICE: ' + navigator);

  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    }),
  );
}
function push(routeName: any, params?: any) {
  console.log('NAVIGATION SERVICE: ' + navigator);
  removeFromStack(routeName);
  navigator.dispatch(StackActions.push(routeName, params));
}
function replace(routeName: any, params?: any) {
  console.log('NAVIGATION SERVICE: ' + navigator);
  removeFromStack(routeName);
  navigator.dispatch(StackActions.replace(routeName, params));
}

function reset(routeName: string, params?: object, _action?: any) {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName, params}],
    }),
  );
}
function reset2(routes: Array<any>) {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes,
    }),
  );
}
function removeFromStack(routeName: string, _params?: object, _action?: any) {
  navigator.dispatch(state => {
    // Remove the home route from the stack
    const routes = state.routes.filter(r => r.name !== routeName);

    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
}

function pop() {
  navigator.dispatch(CommonActions.goBack());
}

function setActiveScreen(screen: string) {
  activeScreen = screen;
}

function getActiveScreen() {
  return activeScreen;
}

function getParentOfActiveScreen() {
  return parentOfActiveScreen;
}

function setParentOfActiveScreen(screen: string) {
  parentOfActiveScreen = screen;
}

function getNavigator() {
  return navigator;
}

// add other navigation functions that you need and export them

export default {
  navigator,
  navigate,
  setTopLevelNavigator,
  pop,
  reset,
  push,
  setActiveScreen,
  getActiveScreen,
  getParentOfActiveScreen,
  setParentOfActiveScreen,
  getNavigator,
  reset2,
  removeFromStack,
  replace,
};
