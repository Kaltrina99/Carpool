import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
  StatusBar,
  ScrollView
} from "react-native";
import { Notification } from "./home_child/Notification";
import Ionicons from "react-native-vector-icons/Ionicons";
import {LinearGradient} from 'expo-linear-gradient';

export default class Detail extends React.Component{
  static navigationOptions = {
    header: {
      visible: false,
    }
  };
  render(){
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <View style={styles.back}>
              <Ionicons 
                name="ios-arrow-round-back"
                color="white"
                size={35}
                onPress={()=>this.props.navigation.goBack()}
              />
          </View>
        <ScrollView style={styles.footer}>
            <View style={styles.status}>
                <Text style={{color:'blue'}}>AVALIABLE</Text>
            </View>
            <Text style={styles.textPrice}>{this.props.navigation.state.params.date}</Text>
            <Text numberOfLines={2} style={styles.textName}>{this.props.navigation.state.params.name.toUpperCase()}</Text>
            <Text style={styles.textPrice}>{this.props.navigation.state.params.fromC}-{this.props.navigation.state.params.toC}</Text>
            <Text  style={styles.textDetail}>Hope you like the trip</Text>
            <LinearGradient
            start={{x: 0, y: 0}} 
            end={{x: 1, y: 0}} 
            colors={['maroon', 'royalblue']}
            style={styles.button}>
              <Text style={styles.textOrder}>JOIN THE RIDE</Text>
            </LinearGradient>
        </ScrollView>
      </View>
    )
  }
}



var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    marginTop:50
  },
  footer: {
    flex:1,
    paddingHorizontal:40
  },
  back:{
    position:'absolute',
    left:0,
    marginTop:30,
    marginLeft:15
  },
  status: {
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderRadius:50,
    paddingVertical:3,
    borderColor:'maroon'
  },
  textPrice: {
    color:'maroon',
    fontWeight:'bold',
    fontSize:30,
    marginTop:20
  },
  textName: {
    color: '#3e3c3e',
    fontWeight:'bold',
    fontSize:45,
    marginTop:5
  },
  textDetail: {
    color:'gray',
    fontWeight:'bold',
    marginTop:10
  },
  button: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:30,
    paddingVertical:10,
    borderRadius:100
  },
  textOrder: {
    color:'white',
    fontWeight:'bold',
    fontSize:18,
  }
});