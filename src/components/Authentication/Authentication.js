import React,{Component} from "react";
import {
  View,Text,TouchableOpacity
} from "react-native";
import {Actions} from "react-native-router-flux";
class Authentication extends React.Component{
  render(){
    return(
      <View style={{flex:1,backgroundColor:"blue"}}>
        <Text>Authentication Component</Text>
        <TouchableOpacity onPress={()=>Actions.ChangeInfo()}>
          <Text > Click Here </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Authentication;
