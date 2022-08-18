import { StyleSheet } from "react-native";

const style = StyleSheet.create({
 mainView:{
    flex:1,
    flexDirection:"column",
    backgroundColor:"lavender",
    padding:10,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
 },
 SignupBtn:{
    width:200,
    height: 60,
    backgroundColor:"#755FC6",
    elevation:10
 },
 inputView:{
    flex:0.5,
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
 },
 inputField:{
    borderWidth:1, 
    borderRadius:10,
    borderColor:"black",
 },
 labelText:{
    fontWeight:"300",
    fontSize:15,
 }
})

export default style