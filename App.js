import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image } from 'react-native';
import Helloworld from './components/Helloworld';
import Username from './components/Username';
import Counter from './components/Counter';

export default function App() {
  return (
    <View> 
      <Helloworld/>
      <Username/>
      <Counter/>
    
    
  </View> 
  );
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
