import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, ScrollView, TouchableOpacity} from "react-native";
import {Headline, Text, TextInput, Title, useTheme} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';

const CreateAdSelectCategory = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')
    const theme = useTheme()

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
        <SafeAreaView style={{flex: 1, backgroundColor: theme.colors.primary}}>
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

                    <Headline style={{textAlign:'center'}}>Please Select Category</Headline>

                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('create_ad_page')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-car-sport-outline' color='#052536' size={36}/>
                            <Text>Cars</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('create_ad_page')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-phone-portrait-outline' color='#052536' size={36}/>
                            <Text>Phone</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('create_ad_page')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-headset' color='#052536' size={36}/>
                            <Text>Electronics</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('create_ad_page')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-book-outline' color='#052536' size={36}/>
                            <Text>Books</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('create_ad_page')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-barbell-outline' color='#052536' size={36}/>
                            <Text>Equipments</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('create_ad_page')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-glasses-outline' color='#052536' size={36}/>
                            <Text>Fashion</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('create_ad_page')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-pizza-outline' color='#052536' size={36}/>
                            <Text>Food</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('create_ad_page')} style={{height:100, width:100, backgroundColor:'#f7f7f7', borderColor:'#eee', borderWidth:1, borderRadius:24, alignItems:'center', justifyContent:'center'}}>
                            <Ionicons name='md-albums-outline' color='#052536' size={36}/>
                            <Text>Extra</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
export default CreateAdSelectCategory;