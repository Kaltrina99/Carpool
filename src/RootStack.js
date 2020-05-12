import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoadingScene from './LoadingScene';
import AuthScene from './AuthScreen';
import Home from './Home';
import Detail from './Detail';

const Start= createStackNavigator({
    LoadingScene:{
        screen:LoadingScene,
        navigationOptions:{
            headerShown:false
        }},
        AuthScene:{
            screen:AuthScene,
            navigationOptions:{
                headerShown:false
        }},
    });

const StackNavigation= createStackNavigator({
HomeScreen:{
    screen:Home,
    navigationOptions:{
        headerShown:false
    }},
    DetailScreen:{
        screen:Detail,
        navigationOptions:{
            headerShown:false
    }},
});
const Final= createStackNavigator({
    Start:Start,
        StackNavigation:
            StackNavigation
},{
    navigationOptions:{
        headerShown:false,
    }
})    

export default createAppContainer(Final);