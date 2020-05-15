import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
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
      seats:2,
      description:'Now Microsoft doesn’t allow to use batch file so Windows Defender detects my scripts as “HackTool:BAT/AutoKMS”. Somebody sent email to me to describe their problem:”When I opened it as admin, the command center just popped up then disappar”',
      date: "12-5-2020",
      statuse:0
  },
  {
      name:'Jackfruit Fried',
      from:'Prizren',
      to:'Prishtina',
      seats:7,
      description:'Test test',
      date: "12-5-2020",
      statuse:0
  },
  {
      name:'Noodles',
      from:'Prishtina',
      to:'Gjakova',
      seats:2,
      description:'Test test',
      date: "12-5-2020",
      statuse:0
  },
  {
      name:'Beef',
      from:'Gjilan',
      to:'Peja',
      seats:4,
      description:'Test test',
      date: "12-5-2020",
      statuse:0
  },
  {
      name:'Salad dressing',
      from:'Prishtina',
      to:'Peja',
      seats:5,
      description:'Test test',
      date: "11-5-2020",
      statuse:0
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
  static navigationOptions = {
    //To hide the NavigationBar from current Screen
    header: null,
    headerVisible: false
  };



  renderItem = ({item}) => {
    if(item.statuse==0){
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
            seats:item.seats,
            description:item.description,
            name: item.name,
            statuse:item.statuse
          })}
          style={styles.button}>
              <AntDesign 
                name="arrowright"
                color="black"
                size={15}
              />
          </TouchableOpacity>

        </LinearGradient>
    )}
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