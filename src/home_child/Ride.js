import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";

var data = [
        {
            name:'Stewed Mushrooms',
            from:'Prishtina',
            to:'Peja',
            date: "12-5-2020"
        },
        {
            name:'Jackfruit Fried',
            from:'Prizren',
            to:'Prishtine',
            date: "12-5-2020"
        },
        {
            name:'Noodles',
            from:'Prishtina',
            to:'Gjakova',
            date: "12-5-2020"
        },
        {
            name:'Beef',
            from:'Gjilan',
            to:'Peja',
            date: "12-5-2020"
        },
        {
            name:'Salad dressing',
            from:'Prishtina',
            to:'Peja',
            date: "11-5-2020"
        },
];

export default class Ride extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: data,
      data_temp: data,
      search: ''
    }
  }


  renderItem = ({item}) => {
    return(
        <LinearGradient 
        colors={['maroon', 'royalblue']}
        start={{x:0, y:1}} end={{x:1, y:0}}
        style={styles.item}
        >
         
          <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.price_container}>
              <Text style={styles.name}>{item.from}-{item.to}</Text>
              </View>
              <View style={styles.price_container}>
                  <View style={styles.price}>
                      <Text style={styles.textPrice}>{item.date}</Text>
                  </View>
              </View>
          </View>
          <TouchableOpacity 
          onPress={()=>this.props.props.navigation.navigate("DetailScreen",{
            date: item.date,
            fromC: item.from,
            toC: item.to,
            name: item.name
          })}
          style={styles.button}>
              <AntDesign 
                name="arrowright"
                color="green"
                size={15}
              />
          </TouchableOpacity>

        </LinearGradient>
    )
  }

  ItemSeparatorComponent = () => {
    return(
      <View 
        style={{
          height:10
        }}
      />
    )
  }

  _search(text){
      let data = [];
      this.state.data_temp.map(function(value){
        if(value.name.indexOf(text) > -1){
          data.push(value);
        }
        else if(value.date.indexOf(text) > -1){
          data.push(value);
        }
        else if(value.from.indexOf(text) > -1){
          data.push(value);
        }
        else if(value.to.indexOf(text) > -1){
          data.push(value);
        }
      });
      this.setState({
        data:data,
        search:text
      });
    }


  render(){
    return(
      <View style={styles.container}>
          <View style={styles.section}>
              <TextInput 
                placeholder="Search.."
                style={{ flex:1, marginLeft:10}}
                value={this.state.search}
                onChangeText={(text)=>this._search(text)}
              />
              <TouchableOpacity
              onPress={()=>this._search("")}
              style={{paddingHorizontal:10}}>
                <Ionicons 
                  name="ios-close"
                  color="gray"
                  size={20}
                />
              </TouchableOpacity>

          </View>
          <View style={styles.flatList}>
              <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index)=>index.toString()}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                showsVerticalScrollIndicator={false}
              />
          </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingBottom:5
  },
  flatList: {
    flex:1,
    marginTop:10
  },
  item: {
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    borderRadius:20
  },
  content: {
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10
  },
  name: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  button: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  price_container: {
    flexDirection:'row',
    marginTop:10
  },
  price: {
    backgroundColor:'white',
    paddingVertical:5,
    paddingHorizontal:30,
    borderRadius:20
  },
  textPrice: {
    color:'royalblue',
    fontWeight:'bold'
  },
  section: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:100,
    backgroundColor:'#f2f2f2',
    marginTop:10
  }
});