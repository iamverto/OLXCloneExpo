import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, TouchableOpacity, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title, Avatar, Button} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';

const Profile = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')

    return (
        <View style={{flex:1}}>
            <ScrollView style={{flex: 1, backgroundColor: '#fff', padding: 12}}
                        contentContainerStyle={{alignItems: 'center'}}>
                <Headline style={{alignSelf: 'flex-start'}}>Profile</Headline>
                <Avatar.Image size={100} source={require('../../assets/images/sample_profile_pic.jpg')}/>
                <Title>Priyanshu Singh</Title>
                <Text>priyanshu@lytevideo.com</Text>
                <Text>Bengaluru, KA</Text>
                <Button
                    labelStyle={{color: '#052536'}}
                    mode={'outlined'}
                    onPress={()=>props.navigation.navigate('bottom_tabs', {'screen':'my_ad'})}
                    style={{alignItems: 'center', marginTop: 64, width: 250, borderRadius: 32, alignSelf: 'center'}}>My
                    Ads</Button>
                <Button
                    labelStyle={{color: '#052536'}}
                    mode={'outlined'}
                    style={{alignItems: 'center', marginTop: 8, width: 250, borderRadius: 32, alignSelf: 'center'}}>Profile
                    Settings</Button>
                <Button
                    labelStyle={{color: '#052536'}}
                    mode={'outlined'}
                    style={{
                        alignItems: 'center',
                        marginTop: 8,
                        width: 250,
                        borderRadius: 32,
                        alignSelf: 'center'
                    }}>Language</Button>
                <Button
                    labelStyle={{color: '#052536'}}
                    mode={'outlined'}
                    onPress={() => props.navigation.navigate('tnc')}
                    style={{alignItems: 'center', marginTop: 8, width: 250, borderRadius: 32, alignSelf: 'center'}}>Terms
                    & Conditions</Button>
                <Button
                    labelStyle={{color: '#052536'}}
                    mode={'outlined'}
                    onPress={() => props.navigation.navigate('about_us')}
                    style={{alignItems: 'center', marginTop: 8, width: 250, borderRadius: 32, alignSelf: 'center'}}>About
                    Us</Button>

            </ScrollView>
            <Button
                labelStyle={{color: '#052536'}}
                mode={'outlined'}
                onPress={() => props.navigation.navigate('login')}
                style={{
                    alignItems: 'center',
                    marginTop: 8,
                    width: 250,
                    borderRadius: 32,
                    alignSelf: 'center'
                }}>Logout</Button>
        </View>
    )
}
export default Profile;