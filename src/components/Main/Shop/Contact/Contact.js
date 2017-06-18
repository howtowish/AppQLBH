import React,{Component} from "react";
import {
  View,Text
} from "react-native";

export default class Contact extends React.Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"red"}}>
        <Text>Contact Component </Text>
      </View>
    );
  }
}
