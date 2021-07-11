import React from "react";
import {StatusBar, TouchableOpacity, View} from "react-native";
import {Headline, TextInput, Title, Button, Text} from 'react-native-paper'

const Login = (props) => {
    return (
        <View style={{flex:1, padding:12, backgroundColor:'#052536', paddingTop:64}}>
            <StatusBar barStyle={"light-content"}/>
            <Headline style={{fontSize:40, paddingTop:16, color:'#fff'}}>Welcome</Headline>
            <Headline style={{fontSize:40, paddingTop:8, color:'#fff'}}>Back</Headline>

            <Title style={{fontSize:32, marginTop:64, color:'#fff',fontWeight:'bold', marginBottom:24}}>Login</Title>

            <TextInput
                theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                style={{backgroundColor:'#052536'}}
                placeholder='User Name' placeholderTextColor="white" textColor={'white'}/>
            <TextInput
                theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                style={{backgroundColor:'#052536'}}
                placeholder='Password' placeholderTextColor="white" textColor={'white'}/>

            <Button
                labelStyle={{color:'#052536'}}
                style={{backgroundColor:'#bfffd9', alignItems:'center', marginTop:64, width:200, borderRadius:32, alignSelf:'center'}}  onPress={()=>props.navigation.navigate('home')}>Login</Button>

            <Text style={{color:'#fff', textAlign:'center', marginTop:32}}>First time here <TouchableOpacity onPress={()=>props.navigation.navigate('signup')}><Text style={{color:'#bfffd9'}}>Sign Up</Text></TouchableOpacity></Text>
        </View>
    )
}

export default Login;