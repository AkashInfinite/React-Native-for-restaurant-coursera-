import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import {DISHES} from '../shared/dishes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dishdetail from './DishDetailComponent';
class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }

    static navigationOptions = {
        title: 'Menu'
    };
    render(){
        const renderMenuItem = ({item, index}) => {
            return (
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    onPress={() => this.props.navigation.navigate('Dishdetail',{dishId:item.id})}
                    leftAvatar={{ source: require('./images/elaicheesecake.png')}}
              />
            );
        };
        //const {navigate}=this.props.navigation;
        return (
                <FlatList 
                    data={this.state.dishes}
                    renderItem={renderMenuItem}
                    keyExtractor={item => item.id.toString()}
                    />
        );
    }
}


export default Menu;