import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
  Alert
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {LinearGradient} from 'expo-linear-gradient';
let style = {}

export default class Detail extends React.Component{
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  constructor () {
    super()
    this.state = {    
      showMessage: false    
    }
    this.showAlert = this.showAlert.bind(this)
  }
  showAlert () {    
    Alert.alert(
      'Chosen ride',
      'Are you sure about this ride?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Dismiss called...'),
          style: 'destructive'
        },
        {
          text: 'Yes',    
          onPress: () => this.setState({ showMessage: true })    
        }
      ]
    )
  }
  render(){
    const { showMessage } = this.state
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
                <Text style={{color:'blue'}}> Seats:{this.props.navigation.state.params.seats}</Text>
            </View>
            <Text style={styles.textPrice}>{this.props.navigation.state.params.date}</Text>
            <Text numberOfLines={2} style={styles.textName}>{this.props.navigation.state.params.name.toUpperCase()}</Text>
            <Text style={styles.textPrice}>{this.props.navigation.state.params.fromC}-{this.props.navigation.state.params.toC}</Text>
            <Text  style={styles.textDetail}>{this.props.navigation.state.params.description}</Text>
            
            <Button block style={styles.button} onPress={()=>{this.showAlert()}} title="Join the ride">
          {
         showMessage && <Text>Showing message - success</Text>    
        }    
                  <Text style={styles.textOrder} >Join the ride</Text></Button>

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
  },
});