import React,{Component} from 'react'
import {View,Text,Dimensions,StyleSheet,Alert} from 'react-native'
import {flexCenter} from './basic/style';
import {Button} from './basic/Button'
import {COLOR_PRIMARY} from './basic/color';

export class Entry extends Component{
  onPress(){
    this.setState({
      loading: true
    });
    setTimeout(() => {
      Alert.alert('hello','world');
      this.setState({
        loading:false
      })
    },3000)
  }

  constructor(){
    super();

    this.state = {
      loading:false
    }
  }

  render (){
    const {loading} = this.state;
    return (
      <View style={styles.container}>
        <Text>Hi!</Text>
        <Text>Welcome to React Native</Text>
        <View style={{height:50,width:100,flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'red'}}></View>
          <View style={{flex:1,backgroundColor:'blue'}}></View>
          <View style={{flex:1,backgroundColor:'green'}}></View>
        </View>

        <Button onPress={this.onPress.bind(this)}
                height={42}
                fontSize={14}
                width={Dimensions.get('window').width-40}
                loading={loading}
                backgroundColor={COLOR_PRIMARY}>登录</Button>
        <Button>login</Button>

      </View>
    )
  }
}

const styles = StyleSheet.create({  //StyleSheet预编译器会提高性能
  container:{
    flexDirection:'column',...flexCenter,flex:1
  }
})