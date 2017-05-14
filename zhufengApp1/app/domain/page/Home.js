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

import React,{Component} from 'react'
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'
import {format_currency, ListView} from 'basic'
import {COLOR_TITLE,COLOR_TEXT_LIGHT,COLOR_PRICE} from 'domain/def'

const CARD_HEIGHT = 268;

export class Home extends Component{
  constructor(){
    super();
    const course_gen = () => {
      return {
        image: 'http://img14.poco.cn/mypoco/myphoto/20130403/14/65939719201304031356532142558851773_032.jpg',
        title: '顶级大神教你写node.js',
        author: '张仁阳',
        description: '顶级大神教你写node.js，从零开始，循序渐进。。。。。。',
        price: Math.random() * 5000 + 5000
      }
    };
    let courses = [];
    for(i=0;i<20;i++){
      courses.push(course_gen())
    }
    console.log(courses,'courses')
    this.state = {
      courses: courses,
    }
  }

  _renderItem(course, i){
    return (<CourseCard {...course} />)
  }
  render(){
    // const courses = this.state.courses;
    // const visibleCourses = [];
    // for(let i = p;i <= q;i++){
    //   visibleCourses.push(courses[i])
    // }

    return (
      <ListView
        renderItem={this._renderItem}
        data={this.state.courses}
        ItemHeight={268}
        height={Dimensions.get('window').height-54}
      />
    )
  }
}
class CourseCard extends Component{
  render(){
    const W = Dimensions.get('window').width;
    const {image,title,author,description,price} = this.props;
    return (
      <View style={courseStyle.cardContainer}>
        <Image
          source={{uri:image}}
          style={{width:W-20,height:(W-20)*0.3,borderTopLeftRadius:5,borderTopRightRadius:5,}}
        />
        <Title>{title}</Title>
        <Author label="讲师">{author}</Author>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </View>
    )
  }
}

const courseStyle = StyleSheet.create({
  cardContainer:{
    marginLeft:10,marginRight:10,paddingBottom:10,
    overflow:'hidden',borderWidth:1,borderColor:'#ddd',borderRadius:5,
    height:CARD_HEIGHT,
    backgroundColor:'white',
  }
});
const Paragraph = {
  paddingLeft:20,
  paddingRight:20,
  marginTop:10
};

const Title = ({children}) => {
  return <Text style={{...Paragraph, color:COLOR_TITLE, fontSize:18, fontWeight:'bold'}}>{children}</Text>
};
/*
*  等同于
*  class Title extends Component{
*     render(){
*       const {children} = this.props;
*       ...
*     }
*  }
*
* */
const Author = ({label,children}) => {
  return <Text style={{...Paragraph,color:COLOR_TEXT_LIGHT}}>{label}:{children}</Text>
};

const Description = ({children}) => {
  return <Text style={{...Paragraph,color:COLOR_TEXT_LIGHT}}>{children}</Text>
};

const Price = ({children}) => {
  return <Text style={{...Paragraph,color:COLOR_PRICE, fontSize:18, fontWeight:'bold'}}>￥{format_currency(children)}</Text>
};