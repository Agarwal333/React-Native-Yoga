import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import YogaCards from '../Components/YogaCards'
import Test from '../Components/Test'
import  SearchBar  from '../Components/Searchbar'

const Home = () => {
  return (
    <SafeAreaView>
        <View style={{padding: 10, display:"flex", alignItems:"center", justifyContent:"space-between", flexDirection:"row"}}>
            <View >
            <Text style={{color:"orange", fontSize: 35}}>Yogasan</Text>
            </View>
            <View style={{ width:40, height:40}}>
                <Image style={{ width:"100%", height:"100%", objectFit: "contain"}} source={require("../assets/burger.png")}/>
            </View>
        </View>
        
        <View>
            <View style={{padding: 20, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
                <View style={{width:90, height:90}}>
                    <Image  style={{ width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN1.png")}/>
                </View>
               
                <View style={{width:90, height:90}}>
                    <Image  style={{marginLeft:5, width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN2.png")}/>
                </View>
                <View style={{width:90, height:90}}>
                    <Image  style={{marginLeft:10, width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN3.png")}/>
                </View>
            </View>
            <View style={{padding: 20, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
            <View style={{width:90, height:90}}>
                    <Image  style={{ width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN4.png")}/>
                </View>
               
                <View style={{width:90, height:90}}>
                    <Image  style={{marginLeft:5, width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN5.png")}/>
                </View>
                <View style={{width:90, height:90}}>
                    <Image  style={{marginLeft:10, width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN6.png")}/>
                </View>
            </View>
            <View style={{padding: 20, display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"row"}}>
            <View style={{width:90, height:90}}>
                    <Image  style={{ width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN7.png")}/>
                </View>
               
                <View style={{width:90, height:90}}>
                    <Image  style={{marginLeft:5, width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN8.png")}/>
                </View>
                <View style={{width:90, height:90}}>
                    <Image  style={{marginLeft:10, width:"100%", height:"100%", objectFit:"cover"}} source={require("../assets/BTN9.png")}/>
                </View>
            </View>
        </View>
       
<View>
    <SearchBar/>
</View>    
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    
})