import React, { Component } from "react";
import {
  View
} from "react-native"
import Drawer from "react-native-drawer";
import { Actions } from "react-native-router-flux";
import Menu from "./Menu";
import Shop from "./Shop/Shop";

class Main extends React.Component {
  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };
  render() {
    return (
      <Drawer
        ref={(ref) => this.drawer = ref}
        content={<Menu />}
        openDrawerOffset={0.7}
        tapToClose={true}
      >
        <Shop open={this.openControlPanel.bind(this)} />
      </Drawer>
    );
  }
}
export default Main;
