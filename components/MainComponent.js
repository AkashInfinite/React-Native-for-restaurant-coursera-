import React, { Component } from 'react';
import Menu from './MenuComponent';
import { View ,Platform ,SafeAreaView ,Image ,StyleSheet , ScrollView , Text, PanResponder} from 'react-native';
import Dishdetail from './DishDetailComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator , DrawerItemList} from '@react-navigation/drawer';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Icon } from 'react-native-elements';
import {   DrawerItems } from 'react-navigation';
//import SafeAreaView from 'react-native-safe-area-view';
const Stack = createStackNavigator();

function MyStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" options={{
        headerLeft:()=>(
          <Icon name="menu" size={24} 
              color= 'white'
              onPress={ () => navigation.toggleDrawer() } />)
        ,
        headerStyle: {
            backgroundColor: '#512DA8'},headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff" }}} component={Menu} />
      <Stack.Screen name="Dishdetail" options={{headerStyle: {
            backgroundColor: '#512DA8'},headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff" }}} component={Dishdetail} />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

const St=createStackNavigator();
function MySt({navigation}){
  return (<Stack.Navigator>
    <Stack.Screen name="Home" options={{
      headerLeft:()=>(
        <Icon name="menu" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />)
      ,headerStyle: {
            backgroundColor: '#512DA8'},headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff" }}} component={Home}/>
  </Stack.Navigator>
  );
}
const Cont=createStackNavigator();
function MyCont({navigation}){
  return(<Stack.Navigator>
    <Stack.Screen name="Contact" options={{
      headerLeft:()=>(
        <Icon name="menu" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />)
      ,headerStyle: {
            backgroundColor: '#512DA8'},headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff" }}} component={Contact}/>
  </Stack.Navigator>);
}
const Abt=createStackNavigator();
function MyAbt({navigation}){
  return (<Stack.Navigator>
    <Stack.Screen name="About Us" options={{
      headerLeft:()=>(
        <Icon name="menu" size={24} 
            color= 'white'
            onPress={ () => navigation.toggleDrawer() } />)
      ,headerStyle: {
            backgroundColor: '#512DA8'},headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff" }}} component={About}/>
  </Stack.Navigator>);
}

const CustomDrawerContentComponent = (props) => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <View style={styles.drawerHeader}>
        <View style={{flex:1}}>
        <Image source={require('./images/logo.png')} style={styles.drawerImage} />
        </View>
        <View style={{flex: 2}}>
          <Text style={styles.drawerHeaderText}>Ristorante Con Fusion</Text>
        </View>
      </View>
      <DrawerItemList {...props}/>
    </SafeAreaView>
  </ScrollView>
);

function MyDrawer() {
  return (
    <Drawer.Navigator  drawerStyle={{
      backgroundColor: '#D1C4E9',
    }} drawerContent={ (props)=> <CustomDrawerContentComponent {...props}/>}>
      <Drawer.Screen name="Home" component={MySt} options={{drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='home'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )}} />
      <Drawer.Screen name="About Us" component={MyAbt} options={{
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='info-circle'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }}/>
      <Drawer.Screen name="Menu" component={MyStack} options={{
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='list'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }}/>
      <Drawer.Screen name="Contact" component={MyCont} options={{
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='address-card'
            type='font-awesome'
            size={22}
            color={tintColor}
          />
        )
      }}/>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerHeader: {
    backgroundColor: '#512DA8',
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row'
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  drawerImage: {
    margin: 10,
    width: 80,
    height: 60
  }
});

export default Main;