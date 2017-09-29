'use strict'
import React, { Component } from 'react';
import {
    AppRegistry,
    Text, View, Button, Dimensions, StyleSheet, Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');
class Top extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,

        }
    }

    render() {
        return (
            <View>
                <View style={styles.viewStyle}>
                    <View style={{ position: 'absolute', top: 12, left: 20 }} >
                        <Icon name={'md-menu'} size={30} color={'#FFF'}
                            onPress={() => this.props.toggle()} />

                    </View>
                    <View style={{ position: 'absolute', top: 12, left: 60 }}>
                        <Text style={styles.textStyle} >红薯ToDo</Text>
                    </View>
                    <View style={{ position: 'absolute', top: 12, right: 20 }}>
                        <Icon name={'md-more'} size={30} color={'#FFF'} />
                    </View>
                    <View style={{ position: 'absolute', top: 12, right: 60 }}>
                        <Icon name={'md-add'} size={30} color={'#FFF'}
                            onPress={() => this.props.addModalToggle()} />
                    </View>

                </View>

                
            </View>

        );
    }

}

const styles = {
    viewStyle: {
        width: width,
        height: 60,
        backgroundColor: '#354563'
    },
    textStyle: {
        color: "#FFF",
        fontSize: 20
    },
    iconStyle: {
        position: 'absolute'
    }
}

export default Top;