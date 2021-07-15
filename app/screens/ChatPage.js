import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, ScrollView} from "react-native";
import {Headline, Text, Title, TextInput} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';
import {Avatar, List} from "react-native-paper";


const ChatPage = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#052536',
        }}>
            <List.Item
                title='Priyanshu Kumar'
                titleStyle={{fontSize: 18, marginBottom: 4, fontWeight: 'bold', color:'#fff'}}
                description="online"
                descriptionStyle={{color:'#fff'}}
                onPress={() => props.navigation.push('chat_page')}
                left={() => <Avatar.Image source={require('../../assets/images/sample_profile_pic.jpg')}/>}
            />

            <ScrollView style={{
                flex: 1,
                backgroundColor: '#fff',
                borderTopRightRadius: 24,
                borderTopLeftRadius: 24,
                paddingTop: 4
            }}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(r => (
                    r%2===0 ?
                        <View style={{flexDirection:'row', margin:8}}>
                            <Avatar.Image size={48} source={require('../../assets/images/sample_profile_pic.jpg')}/>
                            <Text style={{marginLeft:12, marginRight:150, padding:8, borderRadius:8, borderWidth:1, borderColor:'#eee'}}>L'Oréal Laboratories have created Ceramide-Cement technology to replicate</Text>
                        </View>
                        :
                        <View style={{flexDirection:'row', justifyContent:'flex-end', margin:8}}>
                            <Text style={{marginLeft:150, marginRight:12, padding:8, borderRadius:8, borderWidth:1, borderColor:'#eee', backgroundColor:'#bfffd9'}}>L'Oréal Laboratories have created Ceramide-Cement technology to replicate</Text>
                            <Avatar.Image size={48} source={require('../../assets/images/sample_profile_pic.jpg')}/>
                        </View>
                    )
                )}
            </ScrollView>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <TextInput
                    placeholder='Type message...'
                    style={{flex:1, backgroundColor:'#fff', borderTopRightRadius:0, borderTopLeftRadius:0}}
                />
                <Ionicons name='md-send' style={{marginHorizontal:16}} color='#fff' size={30}/>
            </View>

        </View>
    )
}
export default ChatPage;