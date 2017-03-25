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
    TextInput
    } from 'react-native';

export default class homework extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.passwordBox}>
                    <Text style={styles.passwordTitle}>请输入六位交易密码</Text>
                    <View style={styles.passwordInputBox}>
                        <TextInput maxLength={1} underlineColorAndroid="transparent" style={styles.passwordInput}/>
                        <TextInput maxLength={1} underlineColorAndroid="transparent" style={styles.passwordInput}/>
                        <TextInput maxLength={1} underlineColorAndroid="transparent" style={styles.passwordInput}/>
                        <TextInput maxLength={1} underlineColorAndroid="transparent" style={styles.passwordInput}/>
                        <TextInput maxLength={1} underlineColorAndroid="transparent" style={styles.passwordInput}/>
                        <TextInput maxLength={1} underlineColorAndroid="transparent" style={styles.passwordInput}/>
                    </View>
                </View>
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
        backgroundColor:'#ccc'
    },
    passwordBox:{
        width:300,
        height:180,
        backgroundColor:'#fff',
        borderRadius:20,
    },
    passwordTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'#000',
        textAlign:'center',
        paddingTop:60
    },
    passwordInputBox:{
        flexDirection:'row',
        width:300,
        height:40,
        marginTop:30,
        marginLeft:30
    },
    passwordInput:{
        width:40,
        height:40,
        borderWidth:1,
        fontSize:12,
        textAlignVertical: "top",
        textAlign:'center',
        borderColor:'#999'
    }
});

AppRegistry.registerComponent('homework', () => homework);