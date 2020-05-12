import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  ActivityIndicator,
  TouchableOpacity
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
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
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
        duration: 1200,
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
          <Text style={styles.logoText}> Wellcome to Carpool </Text>
          
        </Animated.View>
        <TouchableOpacity style={styles.Button}
        onPress={()=>this.props.navigation.navigate('AuthScene')}
              ><Text style={styles.mainBtn}>Log In</Text></TouchableOpacity>
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
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: '#1DDCAF',
  },
  btnText: {
    color: '#2D3057',
    fontSize: 12,
  },
  Button: {
    padding: 30.8,
    borderRadius: 4,
  },
  mainBtn: {
    backgroundColor: '#1DDCAF',
  },
});