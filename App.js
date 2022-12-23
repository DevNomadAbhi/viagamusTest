import React from "react";
import {View,StyleSheet} from 'react-native'
import MainRoute from "./app/Route/mainRoute";

const App=()=>{
  return<View style={styles.container}>
<MainRoute/>
  </View>
}
export default App
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})