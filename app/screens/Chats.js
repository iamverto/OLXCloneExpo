import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title, useTheme} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';
import {Avatar, List} from "react-native-paper";


const Chats = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')
    const theme = useTheme();

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
                        borderTopRightRadius: 24,
                        borderTopLeftRadius: 24,
                        paddingTop: 4,
                    }}>
                        {[1,2,3,4,5,6,7,8,9,0].map(r=>(
                            <List.Item
                                title='Priyanshu Kumar'
                                titleStyle={{fontSize:18, marginBottom:4, fontWeight:'bold'}}
                                description="L'Oréal Laboratories have created Ceramide-Cement technology to replicate the hair's natural cement"
                                onPress={()=>props.navigation.push('chat_page')}
                                left={()=><Avatar.Image source={require('../../assets/images/sample_profile_pic.jpg')}/>}
                            />

                        ))}
                    </ScrollView>

            </View>
    )
}
export default Chats;