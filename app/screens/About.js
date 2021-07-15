import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';
import {Avatar, List, Button} from "react-native-paper";

const About = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff', margin: 12}}>
            <Image
                source={require('../../assets/icon.png')}
                style={{height: width - 24, width: width - 24, marginTop: 12, borderRadius: 8}}
            />
            <View style={{flex: 1, marginVertical:12}}>

                <Text>Boost your skin's absorption power with a boosting facial essence. Then follow with a serum before
                    your moisturizer to obtain better skin results. Choose from L’Oréal Paris Essence’s broad offering,
                    ranging from Anti-Aging to Hydrating. Boost your skin's absorption power with a boosting facial essence. Then follow with a serum before
                    your moisturizer to obtain better skin results. Choose from L’Oréal Paris Essence’s broad offering,
                    ranging from Anti-Aging to Hydrating.
                </Text>
                <Text>Boost your skin's absorption power with a boosting facial essence. Then follow with a serum before
                    your moisturizer to obtain better skin results. Choose from L’Oréal Paris Essence’s broad offering,
                    ranging from Anti-Aging to Hydrating.
                </Text>
            </View>
        </ScrollView>
    )
}
export default About;