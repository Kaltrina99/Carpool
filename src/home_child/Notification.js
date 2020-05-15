import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default class Notification extends Component {
  state = {
    data: []
  };

  componentWillMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch("https://randomuser.me/api?results=500");
    const json = await response.json();
    this.setState({ data: json.results });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          keyExtractor={(x, i) => i}
          renderItem={({ item }) =>
            <Text style={styles.item}>
              {`${item.name.first} ${item.name.last} - ${item.location.city}`}
            </Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 30
  },
  item: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: '20%',
    flexDirection: 'row',
    borderRadius: 20,
    marginTop: 5,
    backgroundColor: "#f7f3e6",
  },
});