import * as React from 'react';
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {

  constructor(){
    super()
    this.state = {userName: '',
    password: ''
    }
  }
  onChangeUserName = (userName) =>{
    // console.log("username", userName)
    this.setState({
      userName,
    })
  }

  onChangePassword = (password) => {
    this.setState({
      password,
    })
  }

  onPressLogin = ()=> {

  }
  render() {
    // console.log("state",this.state.userName)
    return (
      <View style={styles.container}>
        <View style = {{position: 'absolute',right: '40%', top: '28%'}}>
          <Image
            style={{width: 100, height: 100}}
            source={{uri : 'https://www.intugine.com/img/logo.png'}}
          />
        </View>
        <View style = {{flexDirection: 'row',paddingTop: 20}}>
          <Text style={{marginLeft:65, fontSize: '14'}}>USERNAME :</Text>
          <View style = {{borderWidth: 1,borderColor: 'black', width: 150, marginLeft: 5,height: 25}}>  
            <TextInput
            placeholder= 'username'
            onChangeText= {this.onChangeUserName}
            />
          </View>
        </View>
        <View style = {{flexDirection: 'row',paddingTop: 10}}>
          <Text style={{marginLeft:65, fontSize: '14'}}>PASSWORD :</Text>
          <View style = {{borderWidth: 1,borderColor: 'black', width: 150, marginLeft: 5,height: 25}}>  
            <TextInput
            placeholder= 'password'
            onChangeText={this.onChangePassword}
            />
          </View>
        </View>
        <View style ={{paddingTop: 30}}>
          <TouchableOpacity onPress={this.onPressLogin} style={{alignItems: 'center'}}>
             <Text style={{borderWidth: 1,borderColor: 'black'}}>
               Login
             </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'grey',
    padding: 8,
  }
});
