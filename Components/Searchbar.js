import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const Searchbar = () => {
  return (
    <View>
      <TextInput placeholder='search' style={styles.input}/>
    </View>
  )
}

export default Searchbar

const styles = StyleSheet.create({
    container:{

    },
    input:{
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 20,
        borderWidth: 4,
        borderColor: "orange",
        color: "orange"
    }
})