import React, {useCallback, useRef} from "react";
import {Dimensions, Image, SafeAreaView, View, ScrollView} from "react-native";
import {Headline, Text, TextInput, Title} from 'react-native-paper'
import {Ionicons} from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';
import {Avatar, List, Button} from "react-native-paper";

const Tnc = (props) => {
    const carousel = useRef()
    const {height, width} = Dimensions.get('window')

    return (
        <ScrollView style={{flex: 1, backgroundColor: '#fff', margin: 12}}>
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
export default Tnc;