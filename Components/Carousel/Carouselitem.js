import React from "react";

import {View, Text, Image} from "react-native";
import {ParallaxImage} from "react-native-snap-carousel"


function CarouselItem( {item}, parallaxProps ) {
    return(
        <View style={{ }}>
           <Image 
             source = {{uri: item.image}}
             style={{height: 400, width: 200, }}
           />

            <Text style={{fontSize: 40, alignSelf:"center"}}>{item.title}</Text>




        </View>
    )
    
}


export default CarouselItem;