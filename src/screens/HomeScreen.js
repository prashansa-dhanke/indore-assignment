import React, { useState } from 'react';
import { Text, View, Dimensions, Image } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import Screen from '../components/screen';
import Colors from '../components/Colors';


const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const HomeScreen = props => {

    const [images, setImages] = useState([
        require('../../assets/1.jpeg'),
        require('../../assets/2.jpeg'),
        require('../../assets/3.jpeg'),
        require('../../assets/4.jpeg')
    ])

    return (
        <Screen>
            <View style={{ backgroundColor: Colors.white }}>
                <View style={{ height: screenHeight / 3, alignItems: 'center' }}>

                    <SliderBox
                        images={images}
                        dotColor={Colors.primary}
                        inactiveDotColor={Colors.white}
                        ImageComponentStyle={{ height: '100%' }}
                        onCurrentImagePressed={index => console.log(`image ${index} pressed`)}
                        currentImageEmitter={index => console.log(`current pos is: ${index}`)}
                    />
                </View>
                <View style={{ padding: 10 }}>

                    <Text style={{ fontSize: 22, color: Colors.black, fontWeight: 'bold' }}>Virtual Fitness</Text>

                    <View style={{ flexDirection: 'row',justifyContent: 'space-between', marginTop: 10 }}>

                        <Image
                            source={require('../../assets/3.jpeg')}
                            style={{ width: screenWidth / 2.2, height: 100 }} />
                        <Image
                            source={require('../../assets/4.jpeg')}
                            style={{ width: screenWidth / 2.2, height: 100 }} />

                    </View>
                </View>



            </View>
        </Screen>
    );
}

export default HomeScreen;