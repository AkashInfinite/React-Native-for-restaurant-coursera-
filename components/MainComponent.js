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
import { connect } from 'react-redux';
import { fetchDishes, fetchComments, fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import  Reservation  from './ReservationComponent';
import Favorites from './FavoriteComponent';
import Login from './LoginComponent';
const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = dispatch => ({
  fetchDishes: () => dispatch(fetchDishes()),
  fetchComments: () => dispatch(fetchComments()),
  fetchPromos: () => dispatch(fetchPromos()),
  fetchLeaders: () => dispatch(fetchLeaders()),
})
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
const Reserve=createStackNavigator();
function MyReserve({navigation}){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Reservation" options={{
        headerLeft:()=>(
          <Icon name="menu" size={24}
         color= 'white' 
        onPress={ () => navigation.toggleDrawer() } />),
        headerStyle:{backgroundColor: "#512DA8"},
        headerTitleStyle: {color: "#fff"},headerTintColor: "#fff"
      }} component={Reservation} />
    </Stack.Navigator>
  );
}
const fav=createStackNavigator();
function MyFav({navigation}){
  return(
    <Stack.Navigator>
      <Stack.Screen name="My Favorites" options={{
        headerLeft:()=>(
          <Icon name="menu" size={24}
          color='white'
          onPress={()=>navigation.toggleDrawer()}/>),
          headerStyle:{backgroundColor:"#512DA8"},
          headerTitleStyle:{color:"#fff"},headerTintColor:"#fff"}} component={Favorites}/>
    </Stack.Navigator>
  );
}
const login=createStackNavigator();
function Mylogin({navigation}){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{
        headerLeft:()=>(
          <Icon name="menu" size={24}
          color='white'
          onPress={()=>navigation.toggleDrawer()}/>),
          headerStyle:{backgroundColor:'#512DA8'},
          headerTitleStyle:{color:'#fff'},headerTintColor:'#fff'}} component={Login}/>
    </Stack.Navigator>
  );
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
    <Drawer.Navigator  initialRouteName='Home' drawerStyle={{
      backgroundColor: '#D1C4E9',
    }} drawerContent={ (props)=> <CustomDrawerContentComponent {...props}/>}>
      <Drawer.Screen name="Login" component={Mylogin} options={{drawerIcon: ({ tintColor, focused }) => (
            <Icon
              name='sign-in'
              type='font-awesome'
              size={24}
              color={tintColor}
            />
          )}} />
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
            size={24}
            color={tintColor}
          />
        )
      }}/>
      <Drawer.Screen name="Reservation" component={MyReserve} options={{
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='cutlery'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }}/>
      <Drawer.Screen name="My Favorites" component={MyFav} options={{
        drawerIcon: ({ tintColor, focused }) => (
          <Icon
            name='heart'
            type='font-awesome'
            size={24}
            color={tintColor}
          />
        )
      }}/>
    </Drawer.Navigator>
  );
}
class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchLeaders();
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);