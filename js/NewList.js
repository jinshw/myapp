/**  
 * Created by Administrator on 2017/3/31 0031.  
 */
'use strict'
import React, { Component } from 'react';
import { View, Text, WebView,Dimensions,StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const url = "http://www.baidu.com"
const {width, height} = Dimensions.get('window');  
class NewsList extends Component {
    static navigationOptions = {
        tabBarLabel: '我',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Icon name={"md-settings"} size={26} color={'#FFFFFF'} />
        ),
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <WebView
                    style={{ width: width, height: height - 20, backgroundColor: 'gray' }}
                    source={{ uri: url, method: 'POST' }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    scalesPageToFit={false}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingTop: 20,
    },
});

export default NewsList;  