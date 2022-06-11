import * as React from 'react'
import { Text, View, StyleSheet, TextInput,TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      text: "",
      displayText:""
    }
  }
  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <Header
            backgroundColor='#9c8210' centerComponent={{ text: 'Cute Little Monkey', style: { color: '#fff', fontSize: 20 } }}
          />
          <TextInput
            style={styles.inputBox}
            onChangeText={text => { this.setState({ text: text }) }}
            value={this.state.text}
          />
          <TouchableOpacity 
            style={styles.goButton}
            onPress={()=>{this.setState({displayText:this.state.text})}}
          >
            <Text style={styles.buttonText}>IR</Text>
          </TouchableOpacity>
          <Text style={styles.displayText}>{this.state.displayText}</Text>
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
  }
});
