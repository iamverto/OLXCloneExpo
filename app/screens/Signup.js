import React from "react";
import {StatusBar, TouchableOpacity, View, ScrollView, Image} from "react-native";
import {Headline, TextInput, Title, Button, Text} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'

const Signup = (props) => {
    return (
        <ScrollView style={{flex:1, padding:12, backgroundColor:'#052536', paddingTop:32}}>
            <StatusBar barStyle={"light-content"}/>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Headline style={{fontSize:40,fontWeight:'bold', paddingTop:16, color:'#fff'}}>New</Headline>
                    <Headline style={{fontSize:40,fontWeight:'bold', paddingTop:8, color:'#fff'}}>Account</Headline>
                </View>
                {/*<Image*/}
                {/*    source={require('../../assets/icon.png')}*/}
                {/*    style={{height: 100, width: 100, marginHorizontal:12}}*/}
                {/*/>*/}

            </View>

            <View style={{flexDirection:'row', alignItems:'center',marginTop:64}}>
                <Ionicons name='md-person' size={24} color={'#fff'}/>
                <View style={{flex:1}}>
                    <TextInput
                        theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                        style={{backgroundColor:'#052536'}}
                        placeholder='User Name' placeholderTextColor="white" textColor={'white'}/>
                </View>
            </View>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='md-mail' size={24} color={'#fff'}/>
                <View style={{flex:1}}>
                    <TextInput
                        theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                        style={{backgroundColor:'#052536'}}
                        placeholder='Email' placeholderTextColor="white" textColor={'white'}/>
                </View>
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Ionicons name='md-call' size={24} color={'#fff'}/>
                <View style={{flex:1}}>
                    <TextInput
                        theme={{ colors: { text: "#fff", primary:'#bfffd9' } }}
                        style={{backgroundColor:'#052536'}}
                        placeholder='Phone Number' placeholderTextColor="white" textColor={'white'}/>
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


            <Text style={{color:'rgba(255,255,255,0.6)', textAlign:'center', marginVertical:32}}>By signing up, you are accepting our Terms & Conditions</Text>

            <Button
                labelStyle={{color:'#052536'}}
                style={{backgroundColor:'#bfffd9', alignItems:'center', marginTop:16, width:200, borderRadius:32, alignSelf:'center'}}  onPress={()=>props.navigation.navigate('bottom_tabs')}>Sign Up</Button>

            <Text style={{color:'#fff', textAlign:'center', marginTop:32}}>or</Text>
            <Text style={{color:'#fff', textAlign:'center', marginTop:32}}><Ionicons name='logo-google' size={16} color={'#bfffd9'}/> Login with Google</Text>
            <Text style={{color:'#fff', textAlign:'center', marginTop:32}}>Already have an account? <Text onPress={()=>props.navigation.navigate('login')}><Text style={{color:'#bfffd9'}}>Sign In</Text></Text></Text>

        </ScrollView>
    )
}

export default Signup;