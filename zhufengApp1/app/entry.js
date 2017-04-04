import React,{Component} from 'react'
import {View,Text,Dimensions,StyleSheet} from 'react-native'
import {flexCenter} from './basic/style';
import {Button} from './basic/Button'
import {COLOR_PRIMARY} from './basic/color';

export class Entry extends Component{
  render (){
    return (
      <View style={styles.container}>
        <Text>Hi!</Text>
        <Text>Welcome to React Native</Text>
        <View style={{height:50,width:100,flexDirection:'row'}}>
          <View style={{flex:1,backgroundColor:'red'}}></View>
          <View style={{flex:1,backgroundColor:'blue'}}></View>
          <View style={{flex:1,backgroundColor:'green'}}></View>
        </View>

        <Button height={42}
                width={Dimensions.get('window').width-40}
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