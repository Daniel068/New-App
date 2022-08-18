import React from "react";
import {View, Text, Pressable, KeyboardAvoidingView,TextInput, CheckBox, } from "react-native";
import style from "./Style(S)";


function SignUp() {
    return(
        <KeyboardAvoidingView style={style.mainView}>
            <View style={{flex:1, flexDirection:"column", alignContent:"center", justifyContent:"center"}}>
                <Text style={{textAlign:"center"}}>
                    Sign Up
                </Text>
                <Text>
                    Create a New Account
                </Text>
            </View>

           <View style={{flex:2, flexDirection:"column", alignContent:"center", justifyContent:"center", alignItems:"center",}}>
               <View>
                    <View style={style.inputView}>

                        <Text>Enter Full Name</Text>                         
                        <TextInput style={style.inputField} placeholder="John Doe"/>
                        
                    </View>

                    <View style={style.inputView}>

                        <Text style={style.labelText}>Enter E-mail</Text>                         
                        <TextInput style={style.inputField} placeholder="example@gmail.com"/>
                        
                    </View>

                    <View style={style.inputView}>

                        <Text style={style.labelText}>Enter Password</Text>                            
                        <TextInput style={style.inputField} placeholder="********"/>
                        
                    </View>

                    <View style={style.inputView}>

                        <Text style={style.labelText}>Confirm Password</Text>                            
                        <TextInput style={style.inputField} placeholder="********"/>
                        
                    </View>
                    
                </View>
                             
                <View>
                    <Text>
                        By continuing you agree to our <Text>terms of service</Text> and <Text>privacy policy</Text>
                    </Text>                            
                </View>

                <View style={{flex:1, flexDirection:"column", alignContent:"center", justifyContent:"center", alignItems:"center",}}>
                    <View style={{flex:0.5, alignContent:"center", justifyContent:"center", alignItems:"center",}} >
                        <Pressable style={style.SignupBtn}>
                            <Text>
                                Sign Up
                            </Text>
                        </Pressable>
                    </View>

                    <View style ={{flex:0.5, flexDirection:"row", alignContent:"center", justifyContent:"center", alignItems:"center",}}>
                        <Text> Already have an account? </Text>
                        <Pressable>
                            <Text>Login?</Text>
                        </Pressable>
                    </View>                
                </View>

           </View>
        </KeyboardAvoidingView>
    )
    
}

export default SignUp;