import React,{Component} from 'react'
import {View,Text,Dimensions,StyleSheet,Alert} from 'react-native'
import {
  flexCenter,
} from 'basic';

import {
  ZFbutton
} from 'domain/component';

export class Example0 extends Component{
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
    // 设置初始状态
    this.state = {
      loading : false
    }
  }

  render (){
    const {loading} = this.state;
    return <View style={styles.container}>
      <Text>Hi</Text>
      <Text>Welcome to React Native</Text>
      <ZFbutton loading={loading} onPress={this.onPress.bind(this)}>登录</ZFbutton>
    </View>;
  }
}

const styles = StyleSheet.create({  //StyleSheet预编译器会提高性能
  container:{
    flexDirection:'column',...flexCenter,flex:1
  }
})