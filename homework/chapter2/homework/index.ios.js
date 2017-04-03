/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Dimensions from 'Dimensions';
const { width, height } = Dimensions.get('window');
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class homework extends Component {
  render() {
    return (
      <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',flex:1}}>
        <Text>Hi</Text>
        <View style={{height:50,width:100,flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'red'}}></View>
          <View style={{flex:2,backgroundColor:'blue'}}></View>
          <View style={{flex:1,backgroundColor:'green'}}></View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1,
    backgroundColor:'#fff'
  },
  header:{
    backgroundColor:'green',
    height:44
  },
  body:{
    flex:1,
    justifyContent:'center',//子元素纵向居中
    alignItems:'center',//子元素横向居中
    backgroundColor:'pink'
  },
  logo:{
    width:90,
    height:90,
    borderRadius:10
  },
  footer:{
    flexDirection:'row',
    height:48,
    backgroundColor:'#ff00ff'
  },
  item:{
    flex:1,
    fontSize:18,
    lineHeight:48,
    textAlign:'center',
    color:'black'
  }
});

AppRegistry.registerComponent('homework', () => homework);