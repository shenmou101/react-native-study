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
import {ScrollView,View} from 'react-native';

// 通用场景
// 先给用户渲染20项
// 用户下拉列表---发送请求到服务器---再渲染20项

/*
 * curry function
 * 同时承担了计算下一个状态和初始状态的函数
 * @param N 卡片数量 定值
 * @param L 卡片高度 定值
 * @param H 滚动区域的高度 定值
 * @param y 滚动的距离 变值
 * @return {p:*, q:*, H1:*, H3:*}
 * */
const nextListViewState = (N,L,H) => {
  return y => {   //y是用户滚动时产生的 现用现取
    const p = Math.floor( y / L );
    const q = Math.floor( ( y + H ) / L - 1);
    const H1 = p * L;
    const H3 = ( N - ( q + 1 ) ) * L;
    return {
      p,
      q,
      H1,
      H3
    }
  }
};
export class ListView extends Component{

  defaultProps = {
    displaySize: 10 //默认同时渲染10张卡片
  }

  constructor(props){
    super();

    this.ItemHeights = [];
    const { ItemHeight: L, height: H} = props;
    const N = props.data.length;
    const nextStateFunc = nextListViewState(N,L,H);
    this.nextStateFunc = nextStateFunc;
    this.state = {
      ...nextStateFunc(0)
    }
  }

  _itemLayout(i){
    return ({nativeEvent:{layout}}) => {
      this.ItemHeights[i] = layout.height;
    }
  }
  // _itemLayout(e){
  //   console.log(e.nativeEvent.layout)
  // }

  _renderItem(item, i){
    return <View key={i} onLayout={this._itemLayout(i).bind(this)}>
      {this.props.renderItem(item, i)}
    </View>
  }

  /*
  * 向ListView中加载项
  * @param list
  * */
  append(list){
    this.setState({
      //将新卡片append在底部
      data : [...data,...list],
      //将滚动替换过程锁定 (因为部分卡片高度未知)
      scrollLock:true
    },(() => {
      //新卡片都渲染完成后解锁滚动替换方法
      this.setState({
        scrollLock:false
      })
    }).bind(this))


  }

  _scroll(e){
    console.log(e.nativeEvent.contentOffset.y)
    this.setState({
      ...this.nextStateFunc(e.nativeEvent.contentOffset.y)
    })
  }

  render(){
    const {data} = this.props;
    const {p, q, H1, H3} = this.state;

    const visibleData = data.filter((course,i)=>{
      if(i >= p && i <= q){
        return true
      }
      return false
    });

    return (
      <ScrollView
        onScroll={this._scroll.bind(this)}
        scrollEventThrottle={15}
      >
        <View style={{height: H1}}></View>
        {
          visibleData.map( this._renderItem.bind(this) )
        }
        <View style={{height: H3}}></View>
      </ScrollView>
    )
  }
}