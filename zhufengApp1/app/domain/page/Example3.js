/**
 MIT License

 Copyright (c) 2016 珠峰课堂

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE..
 */

import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {ZFbutton} from  'domain/component';
import {flexCenter} from 'basic'


export class Example3 extends Component{
    _onPress(){
      const routes = this.props.navigator.getCurrentRoutes();
      /* 方法1 */
      //先拿到路由栈
      // console.log(routes);
      // const routeTo = routes.find( route => route.name === 'Example1' );
      // this.props.navigator.popToRoute(routeTo)

      /* 方法2 */
      // const routeTo = routes.find( route => route.name === 'Example1' );
      // this.props.navigator.resetTo(routeTo)

      /* 方法3 */
      this.props.navigator.immediatelyResetRouteStack([{name:'Example1'},{name:'Example3'}]); //又创建了两张已存在过的页面 性能问题
      setTimeout( (() => {
        this.props.navigator.pop()
      }).bind(this),10 )   //此处在特殊机型可能存在bug
    }
    render(){
        return (
          <View style={{flex:1,backgroundColor:'lightblue',...flexCenter}}>
            <Text>页面Example3</Text>
            <ZFbutton onPress={this._onPress.bind(this)}>支付</ZFbutton>
          </View>
        );
    }
}