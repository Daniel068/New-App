import React from "react";
import {View, Text} from "react-native";

import CarouselSlider from "../../Components/Carousel/Carouselslider";
import { data } from "../../Data/Data";


function Dashboard({navigation}) {
   
    return(
        <View>
            <View>
                <Text> Carousel</Text>
            </View>

            <View>
                <CarouselSlider data = {data} />

            </View>
        </View>    
    )

}


export default Dashboard;