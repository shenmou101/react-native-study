import React,{Component} from 'react';
import {
  View,
  Navigator
} from  'react-native'
import {Example1} from 'domain/page/Example1';
import {Example2} from 'domain/page/Example2';


export class Entry extends Component{
  constructor(){
    super();
  }

  _renderScene(route){
    console.log(route);
    switch (route.name){
      case 'Example1':
        return <Example1 />
      case 'Example2':
        return <Example2 />
    }
  }

  render (){
    return <Navigator
      initialRoute={{name:'Example1'}}
      renderScene={this._renderScene}
    />
  }
}
