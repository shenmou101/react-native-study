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
    Image,
    TextInput,
    ActivityIndicator
    } from 'react-native';

export default class homework extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator animating={true} style={[styles.centering, {height: 80}]} size="large" color='blue'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        width:width,
        height:height-20,
        backgroundColor:'#fff'
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    }
});

AppRegistry.registerComponent('homework', () => homework);