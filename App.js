import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootStack from './src/RootStack'

export default class App extends React.Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  render() {
      return(
         <RootStack/>
         
      )
  }  
}



