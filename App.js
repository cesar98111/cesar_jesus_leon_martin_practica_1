
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Image source={require('./assets/miCara.jpg')}></Image>
      </View>
      <View style={styles.body}>

      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems:'flex-start',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Header:{
    backgroundColor:'grey',
    flex:1,
    width: '100%',
    height: 30
    
  },
  body:{
    flex: 3
  }
});
