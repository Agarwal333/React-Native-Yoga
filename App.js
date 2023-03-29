import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Searchbar from './Components/Searchbar';
import Home from './Screens/Home';


export default function App() {
  return (

    <View style={styles.container}>

      <Home/>
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
