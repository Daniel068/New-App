import React, {useState} from "react";
import {View, Text, Pressable, KeyboardAvoidingView,TextInput, CheckBox, } from "react-native"
import style from "./Style(L)";
import {auth} from "../../Database/firebase";

function Login({navigation}) {
    function gotoDashboard () {
        navigation.navigate ("Dashboard");
    };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function login () {
        auth.signInWithEmailAndPassword (email, password)
        .then(() => { gotoDashboard();
        })
        .catch(error =>{
            alert(error.message);
        })
    }

    function signup () {
        auth.createUserWithEmailAndPassword (email, password)
        .then(() => { gotoDashboard();
        })
        .catch(error =>{
            alert(error.message);
        })
    }





    return(
        <KeyboardAvoidingView style={style.mainView}>
            <View style={{flex:1, flexDirection:"column", alignContent:"center", justifyContent:"center"}}>
                <Text style={{textAlign:"center"}}>
                    Welcome Back
                </Text>
                <Text>
                    Login to your account
                </Text>
            </View>

           <View style={{flex:2, flexDirection:"column", alignContent:"center", justifyContent:"center", alignItems:"center",}}>
               <View>
                    <View>

                        <Text>Enter E-mail</Text>                         
                        <TextInput style={{borderWidth:1, borderRadius:10, borderColor:"black"}} 
                            placeholder="example@gmail.com"
                            value={email}
                            onChangeText={setEmail()}
                            />
                        
                    </View>

                    <View>

                        <Text>Enter Password</Text>                            
                        <TextInput style={{borderWidth:1, borderRadius:10, borderColor:"black"}} 
                            placeholder="***********"
                            value={password}
                            onChangeText={setPassword()}
                            />
                        
                    </View>
                </View>
                <View>
                    <View>
                            <CheckBox />
                            <Text>
                                Remember me
                            </Text>               
                    </View>

                    <View>
                        <Pressable>
                            <Text>
                                Forgot Password?
                            </Text>
                        </Pressable>               
                    </View>
                </View>

                <View style={{flex:1, flexDirection:"column", alignContent:"center", justifyContent:"center", alignItems:"center",}}>
                    <Pressable style={style.LoginBtn}  onPress={login}>
                        <Text>
                            Login
                        </Text>
                    </Pressable>

                    <View style ={{flex:0.5, flexDirection:"row", alignContent:"center", justifyContent:"center", alignItems:"center",}}>
                        <Text> Don't have an account? </Text>
                        <Pressable style={style.SignupBtn} onPress={signup}>
                            <Text>Sign Up?</Text>
                        </Pressable>
                    </View>                
                </View>

           </View>
        </KeyboardAvoidingView>
    )
    
}

export default Login;