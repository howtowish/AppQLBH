import React,{Component} from "react";
import {
  View,Text
} from "react-native";

export default class Cart extends React.Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"red"}}>
        <Text>Cart Component </Text>
      </View>
    );
  }
}
