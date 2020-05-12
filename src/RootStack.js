import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import LoadingScene from './LoadingScene';
import AuthScene from './AuthScreen';
import Home from './Home';
import Detail from './Detail';

const Start= createStackNavigator({
    LoadingScene:{
        screen:LoadingScene,
        navigationOptions: () => {
            return { heder: null };
          }},
        AuthScene:{
            screen:AuthScene,
            navigationOptions: () => {
                return { heder: null };
              }},
    } ,{
        headerMode: 'none',
        navigationOptions: { headerVisible: false, }
      },);

const StackNavigation= createStackNavigator({
HomeScreen:{
    screen:Home,
    navigationOptions: () => {
        return { heder: null };
      }},
    DetailScreen:{
        screen:Detail,
        navigationOptions: () => {
            return { heder: null };
          }
    },
}, {
    headerMode: 'none',
    navigationOptions: { headerVisible: false, }
  },);
const Final= createStackNavigator({
    Start:Start,
        StackNavigation:
            StackNavigation
},{
    navigationOptions:{
        headerShown:false,
    }
}, {
    headerMode: 'none',
    navigationOptions: { headerVisible: false, }
  },)    

export default createAppContainer(Final);