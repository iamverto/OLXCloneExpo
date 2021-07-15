import React from "react";
import {StatusBar, TouchableOpacity, View, Image} from "react-native";
import {Headline, TextInput, Title, Button, Text} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'

const Login = (props) => {
    return (
        <View style={{flex:1, padding:12, backgroundColor:'#052536', paddingTop:32}}>
            <StatusBar barStyle={"light-content"}/>

            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Headline style={{fontSize:40, paddingTop:16, color:'#fff'}}>Welcome</Headline>
                    <Headline style={{fontSize:40, paddingTop:8, color:'#fff'}}>Back</Headline>
                </View>
                <Image
                    source={require('../../assets/icon.png')}
                    style={{height: 100, width: 100, marginHorizontal:12}}
                />

            </View>

            <Title style={{fontSize:32, marginTop:64, color:'#fff',fontWeight:'bold', marginBottom:24}}>Login</Title>

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='md-person' size={24} color={'#fff'}/>
                <View style={{flex:1}}>
                    <TextInput
                        theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                        style={{backgroundColor:'#052536'}}
                        placeholder='User Name' placeholderTextColor="white" textColor={'white'}/>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='md-key' size={24} color={'#fff'}/>
                <View style={{flex:1}}>
                    <TextInput
                        theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                        style={{backgroundColor:'#052536'}}
                        placeholder='Password' placeholderTextColor="white" textColor={'white'}/>

                </View>

            </View>


            <Button
                labelStyle={{color:'#052536'}}
                style={{backgroundColor:'#bfffd9', alignItems:'center', marginTop:64, width:200, borderRadius:32, alignSelf:'center'}}  onPress={()=>props.navigation.navigate('bottom_tabs')}>Login</Button>

            <Text style={{color:'#fff', textAlign:'center', marginTop:32}}>First time here <Text onPress={()=>props.navigation.navigate('signup')}><Text style={{color:'#bfffd9'}}>Sign Up</Text></Text></Text>
        </View>
    )
}

export default Login;