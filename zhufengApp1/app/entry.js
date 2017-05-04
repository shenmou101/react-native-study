import React,{Component} from 'react';
import {
  View,
  Navigator,
  BackAndroid
} from  'react-native'
import {Example1} from 'domain/page/Example1';
import {Example2} from 'domain/page/Example2';
import {Example3} from 'domain/page/Example3';


export class Entry extends Component{
  constructor(){
    super();
  }

  componentDidMount(){
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const navigator = this.refs.navigator;
      navigator.pop();
      return true;
    });
  }

  _renderScene(route,navigator){
    console.log(route);
    switch (route.name){
      case 'Example1':
        return <Example1 navigator={navigator} />
      case 'Example2':
        return <Example2 navigator={navigator} />
      case 'Example3':
        return <Example3 navigator={navigator} />
    }
  }

  render (){
    return <Navigator
      ref="navigator"
      initialRoute={{name:'Example1'}}
      renderScene={this._renderScene}
    />
  }
}
