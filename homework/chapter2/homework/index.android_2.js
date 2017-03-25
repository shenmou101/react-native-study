/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Dimensions from 'Dimensions'; 
const { width, height } = Dimensions.get('window');
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } from 'react-native';

export default class homework extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>标题栏</Text>
                </View>
                <View style={styles.body}>
                    <Image style={styles.logo} source={require('./img/ReactNative.png')}/>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.item}>探索</Text>
                    <Text style={styles.item}>学习</Text>
                    <Text style={styles.item}>进步</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        width:width,
        height:height-20,
        backgroundColor:'#fff'
    },
    header:{
        position:'absolute',
        left:0,
        top:0,
        width:width,
        height:30,
        backgroundColor:'blue'
    },
    headerText:{
        lineHeight:30,
        fontSize:18,
        textAlign:'center',
        color:'#fff'
    },
    body:{
        position:'absolute',
        top:30,
        bottom:48,
        justifyContent:'center',
        alignItems:'center',
        width:width
    },
    logo:{
        width:90,
        height:90,
        borderRadius:10
    },
    footer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        bottom:0,
        width:width,
        height:48,
        backgroundColor:'#fff',
        borderTopWidth:2,
        borderTopColor:'black'
    },
    item:{
        flex:1,
        fontSize:18,
        textAlign:'center',
        color:'black'
    }
});

AppRegistry.registerComponent('homework', () => homework);