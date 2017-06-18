import React, { Component } from "react";
import {
  View, Text, TouchableOpacity, Dimensions
} from "react-native";
const { height } = Dimensions.get("window");
export default class Header extends React.Component {
  render() {
    return (
      <View style={{ height: height / 12 }}>
        <TouchableOpacity onPress={this.props.onOpen}>
          <Text>OpenMenu</Text>
        </TouchableOpacity>
      </View>

    )
  }
}
