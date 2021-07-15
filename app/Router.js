import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Chats from './screens/Chats';
import ChatPage from './screens/ChatPage';
import About from './screens/About';
import Tnc from './screens/Tnc';
import Profile from './screens/Profile';
import ProductDetail from './screens/ProductDetail';
import MyAds from './screens/MyAds';
import Products from './screens/Products';
import CreateAdSelectCategory from './screens/CreateAdSelectCategory';
import CreateAd from './screens/CreateAd';
import Home from "./screens/Home";
import {navigationRef} from "./api/helper";
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {Ionicons} from "@expo/vector-icons";



let CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
let CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

CombinedDefaultTheme = {
    ...CombinedDefaultTheme,
    colors: {
        ...CombinedDefaultTheme.colors,
        background: '#fff',
        primary: '#CFFBCF',
        accent: '#052536',
        highlight: `rgba(25, 208, 180, 0.16)`
    }
}
CombinedDarkTheme = {
    ...CombinedDarkTheme,
    colors: {
        ...CombinedDarkTheme.colors,
        primary: '#19d0b4',
        accent: '#ff4f89',
        highlight: `rgba(25, 208, 180, 0.16)`
    }
}

const BottomTabs = createBottomTabNavigator();
const CoreStack = createStackNavigator()
const AuthStack = createStackNavigator()

// const AuthStackScreen = () => (
//     <AuthStack.Navigator>
//         <AuthStack.Screen options={{headerShown: false}} name='login' component={Login}/>
//         <AuthStack.Screen options={{headerShown: false}} name='signup' component={Signup}/>
//     </AuthStack.Navigator>
// )
const BottomTabsScreen = () => (
    <BottomTabs.Navigator
        tabBarOptions={{
            showLabel: false,
            style: {
                elevation: 0,
                borderTopWidth: 0,
                zIndex: 1,
                padding: 4,
                height:64,
                margin:12,
                borderRadius:32,
                backgroundColor:'#052536'
            },
        }}

    >
        <BottomTabs.Screen options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="md-home" size={26} color={color}/>
            ),
        }} name='home' component={Home}/>
        <BottomTabs.Screen options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="md-chatbubbles-outline" size={26} color={color}/>
            ),
        }} name='chat' component={Chats}/>
        <BottomTabs.Screen options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="md-add-circle-outline" size={40} color={color}/>
            ),
        }} name='sell' component={CreateAdSelectCategory}/>
        <BottomTabs.Screen options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="md-heart-outline" size={26} color={color}/>
            ),
        }} name='my_ad' component={MyAds}/>
        <BottomTabs.Screen options={{
            tabBarIcon: ({color}) => (
                <Ionicons name="md-person-outline" size={26} color={color}/>
            ),
        }} name='profile' component={Profile}/>
    </BottomTabs.Navigator>
)

const CoreStackScreen = () => (
    <CoreStack.Navigator>
        <CoreStack.Screen options={{headerShown: false}} name='login' component={Login}/>
        <CoreStack.Screen options={{headerShown: false}} name='signup' component={Signup}/>
        <CoreStack.Screen options={{headerShown: false}} name='bottom_tabs' component={BottomTabsScreen}/>
        <CoreStack.Screen options={{headerShown: false}} name='product_page' component={ProductDetail}/>
        <CoreStack.Screen options={{headerShown: false}} name='products' component={Products}/>
        <CoreStack.Screen options={{headerShown: false}} name='edit_profile' component={Login}/>
        <CoreStack.Screen options={{headerShown: false}} name='chat_page' component={ChatPage}/>
        <CoreStack.Screen options={{headerShown: false}} name='create_ad_page' component={CreateAd}/>
        <CoreStack.Screen options={{headerShown: false}} name='notifications' component={Login}/>
        <CoreStack.Screen options={{headerTitle:'Terms & Conditions'}} name='tnc' component={Tnc}/>
        <CoreStack.Screen options={{headerTitle:'About Us'}} name='about_us' component={About}/>
        <CoreStack.Screen options={{headerShown: false}} name='language' component={Login}/>
    </CoreStack.Navigator>
)


export default () => (
    <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme} ref={navigationRef}>
            <CoreStackScreen/>
        </NavigationContainer>
    </PaperProvider>
)