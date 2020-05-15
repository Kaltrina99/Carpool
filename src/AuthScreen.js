import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {Form, Item, Input, Text, Button} from 'native-base';

class AuthScene extends Component { 
  state = {
    username: '',
    password: ''
 }
 handleUsername = (text) => {
  this.setState({ username: text })
}
handlePassword = (text) => {
  this.setState({ password: text })
}
login = (username, pass) => {
if(username==='Admin'&& pass==="Admin")
{{ alert('Hi there 👋')}{this.props.navigation.navigate('HomeScreen')}}
else{{ alert('Sorry the data you provide us are not valid ')}}
}

    static navigationOptions = {
  //To hide the NavigationBar from current Screen
  header: null
};
  render() {
    return (
      
      <View style={styles.container}>
       

        <View style={styles.middle}>

          <View style={styles.formArea}>
            <Text style={[styles.textContainer, styles.signin]}>Sign in</Text>
            <Form style={styles.mainForm}>
              <Item style={styles.formItems}>
                <Input placeholder="Username" style={styles.Input}  onChangeText = {this.handleUsername}/>
              </Item>
              <Item style={styles.formItems}>
                <Input placeholder="Password" style={styles.Input}  onChangeText = {this.handlePassword}/>
              </Item>
              <View style={styles.Button}>
                <Button block style={styles.button}
                onPress = {
                  () => this.login(this.state.username, this.state.password)} 
                  title='submit'>
                  <Text style={styles.btnText} >Submit</Text>
                </Button>
              </View>
            </Form>
          </View>
        </View>
        
      </View>
    );
  }
}

export default AuthScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
 
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 26.3,
    paddingRight: 26.3,
  },
 
  textContainer: {
    color: '#FCFDFF',
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
    top: '20%',
    paddingBottom: 40,
  },
  signin: {
    top: 0,
    color: '#2D3057',
    marginTop: 15,
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