
import { StyleSheet, Text, Image, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
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
        <Text style={styles.cuerpo}> Soy estudiante de informática en la universidad de la ull 
        además de estudiar un cliclo superior de desarrollo de aplicaciones. me apasionan los
        videojuegos y el cine, mi objetivo es estanciarme en un sitio que 
        me guste y trabajar en lo que me gusta. </Text>

        <QRCode quietZone={10} size={200}   value="https://github.com/cesar98111/cesar_jesus_leon_martin_practica_1"/>
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
    
    color:'white',
    fontSize: 20,
    fontWeight:'bold'
  },
  cuerpo:{
  
    width: "80%",
    flex:0,
    textAlign:'center',
    borderRadius:10,
    backgroundColor: 'white',
    padding: 20,
    marginTop: 20,
    
    
  },
  Image:{
      width:100,
      height:100,
      borderRadius:50,
      marginLeft:30
  },
  body:{
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems:"center",
    width: '100%',
    backgroundColor: '#D6D4D4'
  },
  
});
