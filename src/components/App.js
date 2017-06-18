import React,{Component} from "react";
import {
  View,StatusBar,Text
} from "react-native";
import {Scene, Router} from 'react-native-router-flux';
import Authentication from "./Authentication/Authentication";
import ChangeInfo from "./ChangeInfo/ChangeInfo";
import Main from "./Main/Main";
import OrderHistory from "./OrderHistory/OrderHistory";
StatusBar.setHidden(true)

const TabIcon=({selected,title})=>{
  return(
    <Text style={{color:selected ?"red":"black"}}> {title} </Text>
  );
};

class App extends React.Component{
  render(){
    return(
      <Router>
        <Scene key="root">
          

            <Scene key="Main" component={Main} hideNavBar  initial/>
            <Scene key="Authentication" component={Authentication} hideNavBar  />
            <Scene key="ChangeInfo" component={ChangeInfo} hideNavBar  />
            <Scene key="OrderHistory" component={OrderHistory} hideNavBar  />
        </Scene>
      </Router>
    )
  }
}
export default App;
