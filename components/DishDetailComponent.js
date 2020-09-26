import React ,{Component}from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import {DISHES, DiSHES} from '../shared/dishes';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={require('./images/buffet.png')}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

class Dishdetail extends Component {
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES
        }
    }
    static navigationOptions={
        title:'Dishdetail'
    }
    render(){
        const dishId=this.props.route.params.dishId;

        return(<RenderDish dish={this.state.dishes[0+dishId]} />);
    }
}

export default Dishdetail;