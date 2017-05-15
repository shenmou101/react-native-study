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
 * 滚动替换，同时承担了计算下一个状态和初始状态的函数
 * @param cards 卡片列表
 * @param itemHeights 卡片高度列表 变值
 * @param H 滚动区域的高度 定值
 * @param S 指定渲染卡片数量 定值
 * @param y 滚动的距离 变值
 * @return {p:*, q:*, H1:*, H3:*}
 * */
const nextReplaceScrollState = (cards, itemHeights, H, S, y) => {
  console.log({cards, itemHeights, H, S, y})
  // p : 开始的卡片 第一个top小于(y - H)的卡片
  let sum = 0;
  let p = -1;
  for(let i = 0; i < itemHeights.length; i++){
    if( sum > y - H ){    // ????
      p = cards[i].id;
      break
    }
    sum += itemHeights[cards[i].id];
  }

  // q : 结束的卡片 （q = p + S ）
  const q = p + S - 1;

  // H1 : 顶部替换盒子的高度 top(p)   sum ( 1 + ... + p-1 )
  const lst1 = cards
    .filter(card => card.id < p)
    .map(card => itemHeights[card.id]);
  const H1 = lst1.length > 0 ? lst1.reduce((h1, h2) =>  h1 + h2 ) : 0;

  const lst3 = cards
    .filter(card => card.id > q)
    .map(card => itemHeights[card.id]);
  const H3 = lst3.length > 0 ? lst3.reduce( (h1, h2) => h1 + h2 ) : 0;

  console.log({p,q,H1,H3},777);
  return {
    p,
    q,
    H1,
    H3
  }
};

export class ListView extends Component{

  static defaultProps = {
    displaySize: 10 //默认同时渲染10张卡片
  }

  constructor(props){
    super();

    this.y = 0;
    this.ItemHeights = [];
    // const { ItemHeight: L, height: H} = props;
    // const N = props.data.length;
    // const nextStateFunc = nextListViewState(N,L,H);
    // this.nextStateFunc = nextStateFunc;
    this.state = {
      data:[],
      //...nextStateFunc(0)
    };

    //this.setState() 会调render 导致报错
  }

  componentDidMount(){
    this.append(this.props.data)
  }

  _itemLayout(i){
    return ({nativeEvent:{layout}}) => {
      this.ItemHeights[i] = layout.height;
    }
  }
  // _itemLayout(e){
  //   console.log(e.nativeEvent.layout)
  // }

  _renderItem({item, id}){  // 此处的{item,id}是(item,i)中的item  注意别混淆
    return <View key={id} onLayout={this._itemLayout(id).bind(this)}>
      {this.props.renderItem(item, id)}
    </View>
  }

  static id_counter = 0;
  /*
  * 向ListView中加载项
  * @param list
  * */
  append(list){

    // [{name : 'xx', title : 'xxxx'}]
    // [{id: 1 , item : 'xxxx'}]

    const nList = list.map((item, i) => {
      return {
        id: ++ListView.id_counter,
        item
      }
    });

    const I = setInterval((() => {
      if(this.ItemHeights[ListView.id_counter]){
        clearInterval(I);
        this.setState({
          ...nextReplaceScrollState(this.state.data, this.ItemHeights, this.props.height, this.props.displaySize, this.y),
          scrollLock:false,
          newlyAdded: []
        })
      }
    }).bind(this),1000);

    this.setState({
      //将新卡片append在底部
      data : [...this.state.data,...nList],
      newlyAdded : nList,
      //将滚动替换过程锁定 (因为部分卡片高度未知)
      scrollLock:true
    },(() => {
      //新卡片都渲染完成后解锁滚动替换方法
      /*this.setState({
        scrollLock:false
      })*/
    }).bind(this))


  }

  _scroll(e){
    this.y = e.nativeEvent.contentOffset.y;
    if(!this.state.scrollLock){
      this.setState({
        ...nextReplaceScrollState(this.state.data, this.ItemHeights, this.props.height, this.props.displaySize, this.y)
      })
    }
  }

  render(){
    const {p, q, H1, H3, newlyAdded, scrollLock, data} = this.state;

    const visibleData = (newlyAdded && newlyAdded.length > 0) ? newlyAdded : data.filter((item,id)=>{
      if(id >= p && id <= q){
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
          visibleData.map(this._renderItem.bind(this))
        }
        <View style={{height: H3}}></View>
      </ScrollView>
    )
  }
}