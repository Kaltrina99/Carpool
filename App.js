import React from 'react';
import RootStack from './src/RootStack'
import { hide } from 'expo/build/launch/SplashScreen';

export default class App extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  render() {
      return(
         <RootStack /> 
         
      )
  }  
}



