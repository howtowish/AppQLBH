import React,{Component} from "react";
import {
  View,Text
} from "react-native";

export default class Home extends React.Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"red"}}>
        <Text>Home Component </Text>
      </View>
    );
  }
}
