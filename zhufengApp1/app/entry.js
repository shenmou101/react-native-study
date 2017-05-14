import React,{Component} from 'react';
import {
  View,
  Navigator,
  BackAndroid,
  Text,
  StatusBar
} from  'react-native'
import {Routes} from 'domain/page'
import {Button, flexCenter} from 'basic'
import {ZNavBar} from 'domain/component'
import {COLOR_NAV_DARK,COLOR_TITLE} from 'domain/def'

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
    const {Component} = route;
    return(
      <View style={{flex:1}}>
        <StatusBar
          barStyle={route.Inverse? 'light-content': 'default'}
        />
        <View style={{backgroundColor:route.Inverse? COLOR_NAV_DARK : 'white',height:54}}></View>
        <Component navigator={navigator} />
      </View>
    )

  }

  _renderNavBar(){
    const routeMapper = {
      LeftButton:(route,navigator,index,navState) => {
        if(index === 0){
          return null
        }
        return (<ZNavBar.Back route={route} navigator={navigator} />);
      },
      RightButton:(route,navigator,index,navState) => { return null;},
      Title:(route,navigator,index,navState) => {
        return (
          <View style={{flex:1,...flexCenter}}>
            <Text style={{color:route.Inverse? 'white':COLOR_TITLE,fontSize:18}}>{route.Title}</Text>
          </View>
        )},
    };

    return (
      <Navigator.NavigationBar
        routeMapper={routeMapper}
      />
    )
  }

  render (){
    return <Navigator
      ref="navigator"
      initialRoute={Routes.Home}
      renderScene={this._renderScene}
      navigationBar={this._renderNavBar()}
    />
  }
}
