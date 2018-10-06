import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableOpacity } from 'react-native';

class LoginScreen extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      _username: '',
      _password: ''
    }
  }
  static navigationOptions = {
    header: null
  }
  _handlePress(){
    if(this.state._username != '' && this.state._password != ''){
      console.log(this.state._username);
      console.log(this.state._password);
      this.props.navigation.navigate('Home');
  }
    else
      console.log('Username or Password is blank');
  }
  render() {
    return (
    <ImageBackground
        source={require('../assets/blurred-background-colors-daylight-1424108.jpg')}
        style={[styles.container,{width: '100%'}, {height: '100%'}]}>
        <Text
          allowFontScaling={false}
          style={styles.textStyle1}>Welcome
        </Text>
        <Text
          allowFontScaling={false}
          style={styles.subtitle}>SJBIT, Bangalore
        </Text>
        <TextInput
          allowFontScaling={false}
          underlineColorAndroid='transparent'
          placeholderTextColor='#EEEEEE'
          placeholder = "Email"
          style = {styles.textStyle2}
          onChangeText = {(text) => this.setState({_username: text})}>
        </TextInput>
        <TextInput allowFontScaling={false}
          secureTextEntry
          underlineColorAndroid='transparent'
          placeholderTextColor='#EEEEEE'
          placeholder = "Password"
          style = {styles.textStyle2}
          onChangeText = {(text) => this.setState({_password: text})}>
        </TextInput>
        <TouchableOpacity
          style = {styles.buttonStyle}
          onPress = {() => this._handlePress()}>
            <Text allowFontScaling={false} style = {styles.submitText}>Login</Text>
        </TouchableOpacity>
        <View style = {{flexDirection: 'row'}}><Text allowFontScaling={false} style = {[{fontSize: 25},{color: '#f7f6f7'},{paddingRight: 40}]}>Password?</Text><Text allowFontScaling={false} style = {[{fontSize: 25},{color: '#f7f6f7'}]}>Register</Text></View>
      </ImageBackground>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle1:{
    textAlign: 'center',
    fontSize: 65,
    fontFamily: 'sans-serif',
    color: '#f7f6f7',
    fontFamily: 'sans-serif'
  },
  subtitle:{
    textAlign: 'center',
    fontSize: 25,
    color: '#f7f6f7',
    margin: 10,
    fontFamily: 'sans-serif'
  },
  textStyle2:{
    textAlign: 'center',
    fontSize: 20,
    color: '#f7f6f7',
    borderColor: '#f7f6f7',
    borderWidth: 2,
    borderRadius: 30,
    width: '75%',
    height: '8%',
    margin: 10,
    fontFamily: 'sans-serif'
  },
  buttonStyle:{
    borderColor: '#47a56e',
    backgroundColor: '#47a56e',
    borderWidth: 2,
    borderRadius: 30,
    width: '75%',
    height: '8%',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText:{
    color: '#f7f6f7',
    textAlign: 'center',
    fontSize: 25,
    margin: 10,
    fontFamily: 'sans-serif',
  }
});
