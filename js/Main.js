/** 
 * Created by Administrator on 2017/3/31 0031. 
 */
'use strict'
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

import Top from './Top'
import ChatScreen from './ChatScreen';
import NewsList from './NewList'
import Home from './Home'

const { width, height } = Dimensions.get('window');

let styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#000000",
        fontSize: 13
    },
    selectedTabText: {
        color: "#999999",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});

const SimpleApp = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {

        }
    },
    Chat2: {
        screen: ChatScreen,
        navigationOptions: {

        }
    },
    News: {
        screen: NewsList, 
        navigationOptions: {

        }
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
                fontSize: 14, // 文字大小
            },
        },
    });


export default SimpleApp;  