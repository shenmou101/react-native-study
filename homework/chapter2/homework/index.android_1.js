/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import Dimensions from 'Dimensions';
const {width, height} = Dimensions.get('window');
import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text,
    Image,
    Button,
    TouchableOpacity,
    Alert
} from 'react-native';
const pressFuc=()=>{Alert.alert("登录中...")};

export default class homework extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.img} source={require('./img/ReactNative.png')}/>
                <TextInput style={styles.input} placeholder='请输入用户名' underlineColorAndroid="transparent"/>
                <TextInput style={styles.input} placeholder='请输入密码' placeholdertTextColor='rgb(153,153,153)'
                           clearButtonMode='always' underlineColorAndroid="transparent"/>
                <TouchableOpacity style={{width: 200,height: 40,backgroundColor: '#e1e1e1',marginTop: 50,borderRadius:10}}>
                    <Button onPress={pressFuc} style={styles.button} title="登录" accessibilityLabel="登录" />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        width: width,
        height: height,
        paddingTop: 80
    },
    img: {width: 90, height: 90, borderRadius: 20},
    input: {
        width: 300,
        height: 50,
        marginTop: 40,
        padding: 0,
        textAlign: 'center',
        fontSize: 16,
        color: '#333',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 20
    },
    button: {
        width:200,
        fontSize: 25,
        color: '#333',
        textAlign: 'center',
        textAlignVertical: 'center',
        lineHeight: 35,
        borderRadius:20
    }
});

AppRegistry.registerComponent('homework', () => homework);
