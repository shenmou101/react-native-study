/**
 * Created by jiading on 2017/4/9.
 */

import React, {Component} from 'react';
import {
  Dimensions
} from 'react-native'
import {
  Button
} from "basic";
import {
  COLOR_PRIMARY
} from "domain/def"


export class ZFbutton extends Component{
  render(){
    return(
      <Button height={42}
              fontSize={14}
              width={Dimensions.get('window').width-40}
              backgroundColor={COLOR_PRIMARY}
              {...this.props}
      />
    )
  }
}