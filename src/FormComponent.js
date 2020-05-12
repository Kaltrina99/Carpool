import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Form, Item, Input} from 'native-base'

export default class FormComponent extends Component {
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.formText}>Sign in</Text>

        <Form>
          <Item>
            <Input placeholder="Username" />
          </Item>
          <Item last>
            <Input placeholder="Password" />
          </Item>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
  formText: {
    color: '#2D3057',
    fontSize: 19,
    margin: 10,
  },
});