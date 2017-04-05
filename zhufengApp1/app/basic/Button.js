
import React,{Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Platform
} from "react-native";
import {flexCenter} from './style'

export class Button extends Component{
  static propTypes = {
    backgroundColor: React.PropTypes.string
  }

  static defaultProps = {
    backgroundColor:'#ccc',
    height:40,
    width:100,
    loading:false,
    fontSize:14
  }

  onPress(){
    this.props.onPress && this.props.onPress()  //防止调用时不传onPress
  }

  render (){

    const {height,width,backgroundColor,fontSize,children,loading} = this.props;

    let borderRadius = 0;
    if(Platform.OS ==='ios'){
      borderRadius = 5
    }
    let fSize = Platform.OS === 'android' ? fontSize * 1.2 : fontSize;

    if(loading){
      return (
        <View style={{backgroundColor,width,height,...flexCenter}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return (
      <TouchableOpacity
        onPress={this.onPress.bind(this)}
        style={{backgroundColor,width,height,...flexCenter, borderRadius}}>
        <Text style={{color:'white', fontSize:fSize}}>{children}</Text>
      </TouchableOpacity>
    )
  }
}