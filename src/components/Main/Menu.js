import React,{Component} from "react";
import {
  View,Text
} from "react-native";

class Menu extends React.Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"yellow"}}>
        <Text>Menu Component</Text>
      </View>
    )
  }
}
export default Menu;
