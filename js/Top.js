"use strict";
import React, { Component } from "react";
import {
  AppRegistry,
  Text,
  View,
  Button,
  Dimensions,
  StyleSheet,
  Alert
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
var Geolocation = require("Geolocation");
const { width, height } = Dimensions.get("window");
class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }
  //获取位置
  getLocation() {
    Geolocation.getCurrentPosition(
      location => {
        var result =
          "速度：" +
          location.coords.speed +
          "\n经度：" +
          location.coords.longitude +
          "\n纬度：" +
          location.coords.latitude +
          "\n准确度：" +
          location.coords.accuracy +
          "\n行进方向：" +
          location.coords.heading +
          "\n海拔：" +
          location.coords.altitude +
          "\n海拔准确度：" +
          location.coords.altitudeAccuracy +
          "\n时间戳：" +
          location.timestamp;
        Alert.alert("经度:"+location.coords.longitude +"  纬度:"+location.coords.latitude);
        console.warn(result);
      },
      error => {

        Alert.alert("获取位置失败：" + error);
      }
    );
  }

  render() {
    return (
      <View>
        <View style={styles.viewStyle}>
          <View style={{ position: "absolute", top: 12, left: 20 }}>
            <Icon
              name={"md-menu"}
              size={30}
              color={"#FFF"}
              onPress={() => this.props.toggle()}
            />
          </View>
          <View style={{ position: "absolute", top: 12, left: 60 }}>
            <Text style={styles.textStyle}>红薯ToDo</Text>
          </View>
          <View style={{ position: "absolute", top: 12, right: 0,width:30 }}>
            <Icon
              name={"md-more"}
              size={30}
              color={"#FFF"}
              onPress={() => this.getLocation()}
            />
          </View>
          <View style={{ position: "absolute", top: 12, right: 60 ,width:30}}>
            <Icon
              name={"md-add"}
              size={30}
              color={"#FFF"}
              onPress={() => this.props.addModalToggle()}
            />
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
    backgroundColor: "#354563"
  },
  textStyle: {
    color: "#FFF",
    fontSize: 20
  },
  iconStyle: {
    position: "absolute"
  }
};

export default Top;
