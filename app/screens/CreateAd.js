import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title, Button} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';

const CreateAd = () => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')

    const _renderCarouselItem = useCallback(
        () => (
            <View style={{height: 200, width: '100%', backgroundColor: 'red'}}>
                <Image
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg'}}
                    style={{height: 200, width: width}}
                />
            </View>
        ),
        []
    )
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#bfffd9'}}>
            <View style={{flexDirection: 'row', height: 64, padding: 12}}>
                <Ionicons name='md-menu' size={36}/>
                <Title style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>SOQNA</Title>
                <Ionicons name='md-notifications' size={36}/>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: '#fff',
                borderTopEndRadius: 24,
                borderTopLeftRadius: 24,
                paddingTop: 12
            }}>
                <ScrollView style={{paddingHorizontal: 12}}>

                    <Headline style={{textAlign:'center'}}>Create a New Ad</Headline>
                    <Text style={{textAlign:'right'}}>Add Photos</Text>

                    <ScrollView horizontal style={{flexDirection:'row', marginTop:16}}>
                        <View style={{height:72, width:72, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:8}}>
                            <Ionicons name='md-camera' color='#052536' size={36}/>
                        </View>
                        <View style={{height:72, width:72, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:8}}>
                            <Ionicons name='md-camera' color='#052536' size={36}/>
                        </View>
                        <View style={{height:72, width:72, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:8}}>
                            <Ionicons name='md-camera' color='#052536' size={36}/>
                        </View>
                        <View style={{height:72, width:72, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:8}}>
                            <Ionicons name='md-camera' color='#052536' size={36}/>
                        </View>
                        <View style={{height:72, width:72, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:8}}>
                            <Ionicons name='md-camera' color='#052536' size={36}/>
                        </View>
                        <View style={{height:72, width:72, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:8}}>
                            <Ionicons name='md-camera' color='#052536' size={36}/>
                        </View>
                        <View style={{height:72, width:72, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:8}}>
                            <Ionicons name='md-camera' color='#052536' size={36}/>
                        </View>
                        <View style={{height:72, width:72, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, alignItems:'center', justifyContent:'center', marginLeft:8}}>
                            <Ionicons name='md-camera' color='#052536' size={36}/>
                        </View>
                    </ScrollView>
                    <View style={{marginVertical:4}}>
                        <Text>Title</Text>
                        <TextInput style={{backgroundColor:'#fff',height:48}}/>
                    </View>
                    <View style={{marginVertical:4}}>
                        <Text>Category</Text>
                        <TextInput style={{backgroundColor:'#fff',height:48}}/>
                    </View>
                    <View style={{marginVertical:4}}>
                        <Text>Price</Text>
                        <TextInput style={{backgroundColor:'#fff',height:48}}/>
                    </View>
                    <View style={{marginVertical:4}}>
                        <Text>Address</Text>
                        <TextInput style={{backgroundColor:'#fff',height:48}}/>
                    </View>
                    <View style={{marginVertical:4}}>
                        <Text>Description</Text>
                        <TextInput style={{backgroundColor:'#fff',height:48}} multiline numRows={3}/>
                    </View>
                    <Button
                        labelStyle={{color:'#bfffd9'}}
                        style={{backgroundColor:'#052536', alignItems:'center', marginTop:64, width:200, borderRadius:32, alignSelf:'center'}}>Post Now</Button>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default CreateAd;