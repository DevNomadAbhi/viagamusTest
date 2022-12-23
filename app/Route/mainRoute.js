import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { View } from "react-native";
import Home from "../Components/MyTabBar";
import Screen1 from "../Screen/Screen1";


const MainRoute=()=>{
    const Stack=createStackNavigator()
    const options={headerShown:false}
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home } options={options} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MainRoute