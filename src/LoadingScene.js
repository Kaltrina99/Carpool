import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
  TouchableOpacity,Button
} from 'react-native';

import {Actions} from 'react-native-router-flux';

/* Logo */
import Logo from '../assets/icon.png';

const switchToAuth = () => {
  Actions.replace('auth')
};

class LoadingScene extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoText: new Animated.Value(0),
    loadingSpinner: false,
  };
  

  componentDidMount() {
    const {LogoAnime, LogoText} = this.state;
    Animated.parallel([
      Animated.spring(LogoAnime, {
        toValue: 1,
        tension: 10,
        friction: 2,
        duration: 12000,
        isInteraction: false
      }).start(),

      Animated.timing(LogoText, {
        toValue: 1,
        duration: 12000,
        isInteraction: false
      }),
    ]).start(() => {
      this.setState({
        loadingSpinner: true,
        isInteraction: false
      });
      setTimeout(switchToAuth,1000);
    });
  }
  static navigationOptions ={

    header: null
 }
 
  render() {
    return (
      
      <View style={styles.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image source={Logo} />

          {this.state.loadingSpinner ? (
            <ActivityIndicator
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              size="large"
              color="#5257f2"
            />
          ) : null}
        </Animated.View>
        <Animated.View style={{opacity: this.state.LogoText}}>
          <Text style={styles.logoText}>Ready for the ride?</Text>
          
        </Animated.View>
     
        <Button block style={styles.button} onPress={()=>this.props.navigation.navigate('AuthScene')} title='Log in'>
                  <Text style={styles.textOrder} >Log In</Text></Button>
        
       
      </View>
    );
  }
}

export default LoadingScene;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoText: {
    color: 'maroon',
    fontSize: 30,
    fontWeight: '300',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    paddingVertical: 10,
    borderRadius: 100
  },
  textOrder: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  }
});