import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View} from "react-native";
import {Headline, Text, TextInput, Title} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';

const Home = () => {
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
                <View style={{flexDirection: 'row', paddingHorizontal: 12, alignItems: 'center'}}>
                    <Title style={{flex: 1, fontWeight: 'bold'}}>Explore</Title>
                    <Title style={{flex: 1}}>For You</Title>
                    <View style={{flex: 1}}/>
                    <Title style={{flex: 1}}>BilasPur</Title>
                    <Ionicons name='md-location' size={24}/>
                </View>
                <View style={{paddingHorizontal: 12}}>

                    <TextInput
                        placeholder='Search cars, mobiles and more' style={{backgroundColor: '#fff'}}/>

                </View>
                <View style={{paddingVertical: 12}}>
                    <Carousel
                        ref={carousel}
                        data={[1, 2, 3]}
                        renderItem={_renderCarouselItem}
                        sliderWidth={width}
                        itemWidth={width}
                    />
                </View>
                <View style={{paddingHorizontal: 12}}>

                    <Text>Browse By</Text>
                    <Headline>Categories</Headline>

                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <View style={{height:100, width:100, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-headset' color='#052536' size={48}/>
                        </View>
                        <View style={{height:100, width:100, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-headset' color='#052536' size={48}/>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:48}}>
                        <View style={{height:100, width:100, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-headset' color='#052536' size={48}/>
                        </View>
                        <View style={{height:100, width:100, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-headset' color='#052536' size={48}/>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Home;