
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Image 
        source={require('./assets/miCara.jpg')}
        style={styles.Image}></Image>

        <Text style={styles.nombre}>César Jesús León Martín</Text>
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
    flexDirection:'row',
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
    width: '100%',
    height: 30
    
  },
  nombre:{
    fontWeight:'bold',
    color:'white',
    fontSize: 20
  },
  Image:{
      marginLeft:30,
      width:100,
      height:100,
      borderRadius:50
      
  },
  body:{
    flex: 3
  }

});
