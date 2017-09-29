import React, { Component } from 'react';
import {
    AppRegistry,
    Text, View, Button, Modal, Dimensions, Alert, Image, StyleSheet,
} from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, TouchableOpacity } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import SModal from 'react-native-simple-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./sy.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('./sy.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const MyApp = TabNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
        animationEnabled: true, // 切换页面时是否有动画效果
        tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
        swipeEnabled: false, // 是否可以左右滑动切换tab
        backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#FFFFFF', // 文字和图片选中颜色
            inactiveTintColor: '#999', // 文字和图片未选中颜色
            showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
            indicatorStyle: {
                height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
            },
            style: {
                backgroundColor: '#354563', // TabBar 背景色
                height: 65
            },
            labelStyle: {
                fontSize: 16, // 文字大小
            },
        },
    });
export default MyApp;  