import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Home from "./screens/Home";

const CoreStack = createStackNavigator()

const CoreStackScreen = () => (
    <CoreStack.Navigator>
        <CoreStack.Screen options={{headerShown: false}} name='login' component={Login}/>
        <CoreStack.Screen options={{headerShown: false}} name='signup' component={Signup}/>
        <CoreStack.Screen options={{headerShown: false}} name='home' component={Home}/>
    </CoreStack.Navigator>
)

export default () => (
    <NavigationContainer>
        <CoreStackScreen/>
    </NavigationContainer>
)