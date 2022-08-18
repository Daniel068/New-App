import React from "react";

import {View, Text, Dimensions, StyleSheet} from "react-native";

import Carousel from "react-native-snap-carousel";
import CarouselItem from "./Carouselitem";

const { width } = Dimensions.get("window");

function CarouselSlider( {data} ) {
    
    return(
        <View style={{ backgroundColor:"teal", borderRadius:15,}}>
            <Carousel
            layout="default"
            data={data}
            renderItem={CarouselItem}
            sliderWidth={width}
            sliderHeight={width}
            itemWidth={width}
            useScrollView={true}
            hasParallaxImages={true}
            
            
            />
       </View>
    )
    
}

const Style = StyleSheet.create({

})


export default CarouselSlider;