/**  
 * Created by Administrator on 2017/3/31 0031.  
 */
'use strict'
import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import NewsList from './NewList'

const { width, height } = Dimensions.get('window');

class ChatScreen extends Component {
    static navigationOptions = {
        tabBarLabel: '代办集',
        tabBarIcon: ({ tintColor }) => (
            <Icon name={"md-list-box"} size={26} color={'#FFFFFF'} />
        ),
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>

                <Text>Chat with  ！！！</Text>
                {/* <Text>Chat with {params.user} ！！！</Text>  */}

            </View>
        );
    }
}

const DrawerNav = DrawerNavigator({
    ChatScreen: { screen: ChatScreen },
    NewsList: { screen: NewsList },

}, {
        drawerWidth: width/2, // 抽屉宽
        drawerPosition: 'left', // 抽屉在左边还是右边
        // contentComponent: CustomDrawerContentComponent,  // 自定义抽屉组件
        contentOptions: {
            initialRouteName: NewsList, // 默认页面组件
            activeTintColor: 'white',  // 选中文字颜色
            activeBackgroundColor: '#e1e1e1', // 选中背景颜色
            inactiveTintColor: '#666',  // 未选中文字颜色
            inactiveBackgroundColor: '#fff', // 未选中背景颜色
            style: {  // 样式

            }
        }
    });

export default DrawerNav;  