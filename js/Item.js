import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    Alert,
    Image,
    View,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const { width, height } = Dimensions.get('window')
class Item extends Component {
    render() {
        const { item } = this.props
        return (
            <TouchableHighlight
                onPressIn={() => { }}
                onPressOut={() => { }}
                onPress={() => {
                }}
                onLongPress={() => {
                    this.props.showActionSheet();
                    this.props.setOptVal(item)
                }}
            >
                <View style={styles.line}>
                    <Text style={{ textAlign: "center", lineHeight: 40 }} >{item.title}</Text>
                </View>
            </TouchableHighlight>


        )

    }
}
const styles = StyleSheet.create({
    line: {
        marginTop: 10,
        width: width,
        height: 80,
        backgroundColor: "#A6D9D0"
    }
});

export default Item;
