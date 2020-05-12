import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Form, Item, Input, Text, Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import DateTimePicker from '@react-native-community/datetimepicker';

export default class Ride extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  render() {
   
    return (

      <View style={styles.container}>

        <View style={styles.middle}>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Create a ride</Text>
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="From" style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="To" style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Date" style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Seats avaliable" style={styles.Input} />
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Descritions" style={styles.Input} />
              </Item>
           
                <LinearGradient
                onClick={(text) => this.setState({firstdata: text})}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['maroon', 'royalblue']}
                  style={styles.button}
                >

                  <Text style={styles.textOrder} >Submit</Text>

                </LinearGradient>

           
            </Form>
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 12,

  },

  textContainer: {
    color: 'black',
    fontSize: 24,
    marginBottom: 30,
    position: 'relative',
    top: '20%',
    alignSelf: 'center',
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#f7f3e6',
    borderRadius: 5,
    top: '5%',
    paddingBottom: 40,
    
    borderRadius: 30
  },
  signin: {
    top: 0,
    color: 'maroon',
  },
  formItems: {
    marginTop: 15,
    borderBottomColor: '#2D3057',
  },
  Input: {
    fontSize: 12,
  },
  loginAs: {
    paddingLeft: 46.6,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  loginText: {
    color: '#2D3057',
    fontSize: 10,
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
   
    paddingVertical: 10,
    borderRadius: 100
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});