import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';
import {Avatar, List} from "react-native-paper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const MyAdsScreen = (props) => {
    return (
        <ScrollView>
            <List.Item
                title='Your Ad will pe posted shortly.'
                titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                onPress={()=>props.navigation.push('product_page')}
                left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
            />
            <View style={{height:12}}/>
            <List.Item
                title='Mercedes Benz'
                titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                onPress={()=>props.navigation.push('product_page')}
                left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
            />
            <List.Item
                title='Mercedes Benz'
                titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                onPress={()=>props.navigation.push('product_page')}
                left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
            />
            <List.Item
                title='Mercedes Benz'
                titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                onPress={()=>props.navigation.push('product_page')}
                left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
            />
            <List.Item
                title='Mercedes Benz'
                titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                onPress={()=>props.navigation.push('product_page')}
                left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
            />
            <List.Item
                title='Mercedes Benz'
                titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                onPress={()=>props.navigation.push('product_page')}
                left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
            />

        </ScrollView>
    )
}
const MyFavAdsScreen = (props) => {
    return (
        <ScrollView>
                <List.Item
                    title='Mercedes Benz'
                    titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                    description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                    onPress={()=>props.navigation.push('product_page')}
                    left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
                    right={()=><Ionicons name='md-heart' color='#ff2155' size={24} style={{alignSelf:'center'}}/>}
                />
                <List.Item
                    title='Mercedes Benz'
                    titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                    description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                    onPress={()=>props.navigation.push('product_page')}
                    right={()=><Ionicons name='md-heart' color='#ff2155' size={24} style={{alignSelf:'center'}}/>}
                    left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
                />
                <List.Item
                    title='Mercedes Benz'
                    titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                    description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                    onPress={()=>props.navigation.push('product_page')}
                    right={()=><Ionicons name='md-heart' color='#ff2155' size={24} style={{alignSelf:'center'}}/>}
                    left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
                />
                <List.Item
                    title='Mercedes Benz'
                    titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                    description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                    onPress={()=>props.navigation.push('product_page')}
                    right={()=><Ionicons name='md-heart' color='#ff2155' size={24} style={{alignSelf:'center'}}/>}
                    left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
                />
                <List.Item
                    title='Mercedes Benz'
                    titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                    description="L'Oréal Laboratories have created Ceramide-Cement technology to."
                    onPress={()=>props.navigation.push('product_page')}
                    right={()=><Ionicons name='md-heart' color='#ff2155' size={24} style={{alignSelf:'center'}}/>}
                    left={()=><Avatar.Image source={require('../../assets/images/car.webp')}/>}
                />

        </ScrollView>

    )
}



const MyAds = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')

    return (
            <View style={{
                flex: 1,
                backgroundColor: '#bfffd9',
            }}>
                <View style={{flexDirection: 'row', height: 64, padding: 12}}>
                    <Ionicons name='md-menu' size={36}/>
                    <Title style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>SOQNA</Title>
                    <Ionicons name='md-notifications' size={36}/>
                </View>

                <Tab.Navigator>
                    <Tab.Screen name="My Ads" component={()=>MyAdsScreen(props)} />
                    <Tab.Screen name="My Favourites" component={()=>MyFavAdsScreen(props)} />
                </Tab.Navigator>

            </View>
    )
}
export default MyAds;