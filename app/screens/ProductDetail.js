import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';
import {Avatar, List, Button} from "react-native-paper";

const ProductDetail = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff', margin: 12}}>
            <Image
                source={require('../../assets/images/car.webp')}
                style={{height: width - 128, width: width - 24, marginTop: 12, borderRadius: 8}}
            />
            <View style={{flex: 1}}>
                <List.Item
                    title='Priyanshu Kumar'
                    titleStyle={{fontSize: 18, marginBottom: 4, fontWeight: 'bold'}}
                    description="❤️ 4.5"
                    onPress={() => props.navigation.push('chat_page')}
                    left={() => <Avatar.Image source={require('../../assets/images/sample_profile_pic.jpg')}/>}
                />

                <Headline style={{color: '#0bc700'}}>Rs. 1500</Headline>
                <Title>New Avantador, fresh!</Title>
                <Text>Boost your skin's absorption power with a boosting facial essence. Then follow with a serum before
                    your moisturizer to obtain better skin results. Choose from L’Oréal Paris Essence’s broad offering,
                    ranging from Anti-Aging to Hydrating.
                </Text>
                <View style={{flexDirection: 'row', marginTop: 12}}>
                    <Ionicons name='md-location' size={24} color='#0bc700'/>
                    <Text>Gujarat, India</Text>
                    <Text> 👍 Brand New </Text>
                    <Ionicons name='md-share-outline' size={24} color='#0bc700'/>
                    <Text>Share</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 12, justifyContent:'center'}}>
                    <Button
                        labelStyle={{color:'#bfffd9'}}
                        onPress={()=>props.navigation.navigate('bottom_tabs', {'screen':'chat'})}
                        style={{backgroundColor:'#052536', alignItems:'center', marginTop:64, width:150, borderRadius:32, alignSelf:'center'}}>Chat Now</Button>
                    <Button
                        labelStyle={{color:'#052536'}}
                        style={{backgroundColor:'#bfffd9', alignItems:'center', marginTop:64, marginLeft:12, width:150, borderRadius:32, alignSelf:'center'}}>Call Now</Button>

                </View>
            </View>
        </ScrollView>
    )
}
export default ProductDetail;