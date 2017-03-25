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
                <View style={styles.outBox}>
                    <View style={[styles.item,styles.item_bot_rig]}>
                        <Text style={styles.item_text}>1</Text>
                    </View>
                    <View style={[styles.item,styles.item_bot_rig]}>
                        <Text style={styles.item_text}>2</Text>
                    </View>
                    <View style={[styles.item,styles.item_bot]}>
                        <Text style={styles.item_text}>3</Text>
                    </View>
                    <View style={[styles.item,styles.item_bot_rig]}>
                        <Text style={styles.item_text}>4</Text>
                    </View>
                    <View style={[styles.item,styles.item_bot_rig]}>
                        <Text style={styles.item_text}>5</Text>
                    </View>
                    <View style={[styles.item,styles.item_bot]}>
                        <Text style={styles.item_text}>6</Text>
                    </View>
                    <View style={[styles.item,styles.item_rig]}>
                        <Text style={styles.item_text}>7</Text>
                    </View>
                    <View style={[styles.item,styles.item_rig]}>
                        <Text style={styles.item_text}>8</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.item_text}>9</Text>
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
        backgroundColor:'#fff'
    },
    outBox:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:330,
        height:330,
        backgroundColor:'#666'
    },
    item:{
        width:110,
        height:110
    },
    item_bot_rig:{
        borderRightWidth:2,
        borderRightColor:'#999',
        borderBottomWidth:2,
        borderBottomColor:'#999'
    },
    item_bot:{
        borderBottomWidth:2,
        borderBottomColor:'#999'
    },
    item_rig:{
        borderRightWidth:2,
        borderRightColor:'#999'
    },
    item_text:{
        height:90,
        lineHeight:90,
        fontSize:50,
        fontWeight:'bold',
        color:'#009',
        textAlignVertical: 'center',
        textAlign:'center'
    }
});

AppRegistry.registerComponent('homework', () => homework);