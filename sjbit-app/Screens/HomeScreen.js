import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

class HomeScreen extends React.Component{
  render(){
    return(
      <View>
      <Text> HomeScreen </Text>
      <Button title="Back" onPress={() => this.props.navigation.goBack()} />
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({

})
