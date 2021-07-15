import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, TouchableOpacity, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title,useTheme} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';

const Home = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')
    const theme = useTheme()

    const _renderCarouselItem = useCallback(
        () => (
            <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('products')} style={{height: 200, width: '100%'}}>
                <Image
                    source={require('../../assets/images/car.webp')}
                    style={{height: 200, width: width}}
                />
            </TouchableOpacity>
        ),
        []
    )
    return (
        <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
            <View style={{flexDirection: 'row', height: 64, padding: 12}}>
                <Ionicons name='md-menu' size={36}/>
                <Title style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>SAOQNA</Title>
                <Ionicons name='md-notifications' size={36}/>
            </View>
            <ScrollView style={{
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
                    <Text style={{marginRight:8}}>BilasPur</Text>
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
                        <TouchableOpacity onPress={()=>props.navigation.navigate('products')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-car-sport-outline' color='#052536' size={36}/>
                            <Text>Cars</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('products')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-phone-portrait-outline' color='#052536' size={36}/>
                            <Text>Phone</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('products')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-headset' color='#052536' size={36}/>
                            <Text>Electronics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('products')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-book-outline' color='#052536' size={36}/>
                            <Text>Books</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('products')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-barbell-outline' color='#052536' size={36}/>
                            <Text>Equipments</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('products')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-glasses-outline' color='#052536' size={36}/>
                            <Text>Fashion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('products')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-pizza-outline' color='#052536' size={36}/>
                            <Text>Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('products')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-albums-outline' color='#052536' size={36}/>
                            <Text>Extra</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:32}}/>
            </ScrollView>
        </View>
    )
}
export default Home;