import React from "react";
import {StatusBar, TouchableOpacity, View, ScrollView} from "react-native";
import {Headline, TextInput, Title, Button, Text} from 'react-native-paper'

const Signup = (props) => {
    return (
        <ScrollView style={{flex:1, padding:12, backgroundColor:'#052536', paddingTop:64}}>
            <StatusBar barStyle={"light-content"}/>
            <Headline style={{fontSize:40,fontWeight:'bold', paddingTop:16, color:'#fff'}}>New</Headline>
            <Headline style={{fontSize:40,fontWeight:'bold', paddingTop:8, color:'#fff'}}>Account</Headline>

            <TextInput
                theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                style={{backgroundColor:'#052536', marginTop:64}}
                placeholder='User Name' placeholderTextColor="white" textColor={'white'}/>
            <TextInput
                theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                style={{backgroundColor:'#052536'}}
                placeholder='Email' placeholderTextColor="white" textColor={'white'}/>
            <TextInput
                theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                style={{backgroundColor:'#052536'}}
                placeholder='Phone Number' placeholderTextColor="white" textColor={'white'}/>
            <TextInput
                theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                style={{backgroundColor:'#052536'}}
                placeholder='Password' placeholderTextColor="white" textColor={'white'}/>
            <Text style={{color:'rgba(255,255,255,0.6)', textAlign:'center', marginVertical:32}}>By signing up, you are accepting our Terms & Conditions</Text>

            <Button
                labelStyle={{color:'#052536'}}
                style={{backgroundColor:'#bfffd9', alignItems:'center', marginTop:16, width:200, borderRadius:32, alignSelf:'center'}}  onPress={()=>props.navigation.navigate('bottom_tabs')}>Sign Up</Button>

            <Text style={{color:'#fff', textAlign:'center', marginTop:32}}>or</Text>
            <Text style={{color:'#fff', textAlign:'center', marginTop:32}}>Login with Google</Text>
            <Text style={{color:'#fff', textAlign:'center', marginTop:32}}>Already have an account? <TouchableOpacity onPress={()=>props.navigation.navigate('login')}><Text style={{color:'#bfffd9'}}>Sign In</Text></TouchableOpacity></Text>

        </ScrollView>
    )
}

export default Signup;