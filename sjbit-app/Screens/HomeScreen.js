import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import {Container,Component, Content} from 'native-base'

import MainScreenCardComponents from './MainScreenCardComponents'

class HomeScreen extends React.Component{
  static navigationOptions = {
    headerLeft: <Entypo name="menu" size={32} color="blue" style={{padding: 10}} />,
    title: "Home",
  };
  render() {
    return (
      <Container style= {styles.container}>
        <Content>
          <MainScreenCardComponents profile = "1" 
            contentImageSource = "1"
            name = "Elon Musk"
            like = "200"/>
          <MainScreenCardComponents profile = "2" 
            contentImageSource = "2"
            name = "Donald Trump"
            like = "100"/>
        </Content>
      </Container>
    );
  }
}
export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white',
  }

})
