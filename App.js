import * as React from 'react'
import { Text, View, StyleSheet, TextInput,TouchableOpacity,Image,Alert } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import db from './localdb'
import db1 from './db_1.json'
import PhonicSoundButton from './components/PhonicSoundButton';

const img = require('./assets/faceMonkey.png')

//console.log(db1['the'].chunks)

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "",
      chunks:[],
      phonicSounds:[]
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor='#9c8210' centerComponent={{ text: 'Cute Little Monkey', style: { color: '#fff', fontSize: 20 } }}
          />
          <Image 
            style={styles.imageIcon}
            // source={{uri:'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}
            source={img}
            // source={require('./assets/faceMonkey.png')}
          />

          <TextInput
            style={styles.inputBox}
            onChangeText={text => { this.setState({ text: text }) }}
            value={this.state.text}
          />
          <TouchableOpacity 
            style={styles.goButton}
            onPress={()=>{
              var word = this.state.text.toLowerCase().trim();
              db1[word] ? (
              this.setState({chunks:db1[word].chunks}),
              this.setState({phonicSounds:db1[word].phones})
              ):
              Alert.alert('A palavra digitada não existe em nosso banco de dados')
            }}
          >
            <Text style={styles.buttonText}>IR</Text>
          </TouchableOpacity>
          
          <View>
            {this.state.chunks.map((item,index) =>{
              return(
                <PhonicSoundButton
                  wordChunk={this.state.chunks[index]}
                  soundChunk={this.state.phonicSounds[index]}
                  buttonIndex={index}
                />
              )
            })}
          </View>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBox:{
    marginTop:200,
    width:"80%",
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4,
  },
  goButton:{
    width:'50%',
    height:55,
    alignSelf:'center',
    padding:10,
    margin:10
  },
  buttonText:{
    textAlign:'center',
    fontSize:30,
    fontWeight:'bold'
  },
  displayText:{
    textAlign:'center',
    fontSize:30
  },
  imageIcon:{
    width:150,
    height:150,
    alignSelf:'center'
  },
  chunkButton:{
    width:'60%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:10,
    margin:5,
    backgroundColor:'red',
  }
});
