
import React,{Component} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Alert
} from "react-native";
import {flexCenter} from './style'

export class Button extends Component{
  static propTypes = {
    backgroundColor: React.PropTypes.string
  }

  static defaultProps = {
    backgroundColor:'#ccc',
    height:40,
    width:100
  }

  onPress(){
    Alert.alert('222')
  }

  render (){

    const {height,width,backgroundColor,children} = this.props;

    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={{backgroundColor,width,height,...flexCenter}}>
        <Text style={{color:'white'}}>{children}</Text>
      </TouchableOpacity>
    )
  }
}