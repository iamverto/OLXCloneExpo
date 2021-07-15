import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, TouchableOpacity, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title, useTheme} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';

const Products = (props) => {
    const theme = useTheme()
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
        <View style={{flex: 1, backgroundColor: theme.colors.primary}}>
            <View style={{flexDirection: 'row', height: 64, padding: 12}}>
                <Ionicons name='md-menu' size={36}/>
                <Title style={{flex: 1, textAlign: 'center', fontWeight: 'bold'}}>SOQNA</Title>
                <Ionicons name='md-notifications' size={36}/>
            </View>
            <ScrollView style={{
                flex: 1,
                backgroundColor: '#fff',
                borderTopEndRadius: 24,
                borderTopLeftRadius: 24,
                paddingTop: 12,
                paddingBottom:64
            }}>
                <View style={{flexDirection: 'row', paddingHorizontal: 12, alignItems: 'center'}}>
                    <Ionicons name='md-location' size={24}/>
                    <Title style={{flex: 1}}>Gujrat, India</Title>
                    <View style={{flex:1}}/>
                    <Ionicons name='md-search' size={24}/>
                </View>
                <ScrollView style={{paddingHorizontal:12}}
                            horizontal
                            >
                    <TouchableOpacity style={{margin:4, padding:4, backgroundColor:theme.colors.accent, borderRadius:16, paddingHorizontal:16}}><Text style={{color:'#fff'}}>All</Text></TouchableOpacity>
                    <TouchableOpacity style={{margin:4, padding:4, backgroundColor:theme.colors.primary, borderRadius:16, paddingHorizontal:16}}><Text style={{color:theme.colors.accent}}>Cars</Text></TouchableOpacity>
                    <TouchableOpacity style={{margin:4, padding:4, backgroundColor:theme.colors.primary, borderRadius:16, paddingHorizontal:16}}><Text style={{color:theme.colors.accent}}>Mobiles & Electronics</Text></TouchableOpacity>
                    <TouchableOpacity style={{margin:4, padding:4, backgroundColor:theme.colors.primary, borderRadius:16, paddingHorizontal:16}}><Text style={{color:theme.colors.accent}}>Mens Fashion</Text></TouchableOpacity>
                    <TouchableOpacity style={{margin:4, padding:4, backgroundColor:theme.colors.primary, borderRadius:16, paddingHorizontal:16}}><Text style={{color:theme.colors.accent}}>Womens Fashion</Text></TouchableOpacity>
                </ScrollView>
                    <View style={{paddingHorizontal: 12}}>
                    <View style={{flexDirection: 'row', paddingHorizontal: 12, alignItems: 'center'}}>
                        <Text>Showing 2201 Items for sale</Text>
                        <View style={{flex:1}}/>
                        <Text>Most Recent </Text>
                        <Ionicons name='md-filter' size={18}/>

                    </View>

                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:16}}>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.navigation.navigate('product_page')} style={{width: width/2 - 24, backgroundColor:'#fff', borderColor:'#eee', borderWidth:1, borderRadius:8, padding:4}}>
                            <Image
                                source={require('../../assets/images/car.webp')}
                                style={{height: 160, width: width/2 - 34, borderRadius: 8}}
                            />
                            <Title>Nike Shoes</Title>
                            <Text style={{color:'#009e15'}}>Rs. 1500</Text>
                            <Text>Brand new edition of shoes</Text>

                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{height:32}}/>
            </ScrollView>
        </View>
    )
}
export default Products;