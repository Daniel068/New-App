import React from "react";
import {View, Text, Pressable} from "react-native"
import style from "./Style(H)";

function HomeScreen({navigation}) {
    function GotoDashboard() {
        navigation.navigate ("Dashboard")
    }
    function GotoLogin() {
        navigation.navigate ("Login")
    }
    return(
        <View style={style.mainView}>
            <View style={{flex:1, flexDirection:"column", alignContent:"center", justifyContent:"center"}}>
                <Text style={{textAlign:"center"}}>
                    Consult from the comfort of your home
                </Text>
            </View>

           <View style={{flex:2, flexDirection:"column", alignContent:"space-between", justifyContent:"center", alignItems:"center",}}>
                <Pressable onPress={GotoLogin} style={style.LoginBtn}>
                    <Text>
                        Login
                    </Text>
                </Pressable>

                <Pressable onPress={GotoDashboard} style={style.SignupBtn}>
                    <Text>
                        Sign Up
                    </Text>
                </Pressable>
           </View>
        </View>
    )
    
}

export default HomeScreen;