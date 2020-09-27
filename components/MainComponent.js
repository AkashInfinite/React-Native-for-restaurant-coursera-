import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import { View ,Platform} from 'react-native';
import Dishdetail from './DishDetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './HomeComponent';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Dishdetail" component={Dishdetail} />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

const st=createStackNavigator();
function MySt(){
  return (<Stack.Navigator>
    <Stack.Screen name="Home" component={Home}/>
  </Stack.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MySt} />
      <Drawer.Screen name="Menu" component={MyStack} />
    </Drawer.Navigator>
  );
}
class Main extends Component {
  render() {
    return (
      <View style={{flex:1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
            <NavigationContainer><MyDrawer/></NavigationContainer>
      </View>
    );
  }
}

export default Main;