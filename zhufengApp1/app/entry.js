import React,{Component} from 'react'
import {View,Text} from 'react-native'

const flexCenter = {alignItems:'center',justifyContent:'center'}
export class Entry extends Component{
  render (){
    return (
      <View style={{flexDirection:'column',...flexCenter,flex:1}}>
        <Text>Hi!</Text>
        <Text>Welcome to React Native</Text>
        <View style={{height:50,width:100,flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'red'}}></View>
          <View style={{flex:1,backgroundColor:'blue'}}></View>
          <View style={{flex:1,backgroundColor:'green'}}></View>
        </View>
      </View>
    )
  }
}