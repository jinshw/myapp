import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  ViewPagerAndroid,
  ScrollView,
  Navigator,
  View,
  ListView,
  Dimensions,
  WebView,
  ToastAndroid,
  DrawerLayoutAndroid,
  TouchableHighlight
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Button from "react-native-button";
import SideMenu from "react-native-side-menu";
import Modal from "react-native-modalbox";
import ActionSheet from "react-native-actionsheet";

import Menu from "./Menu.js"; //导入菜单组件
import Top from "./Top.js";
import MySorage from "./MySorage.js";
import Item from "./Item";

const { width, height } = Dimensions.get("window");

const onButtonPress = () => {
  Alert.alert("Button has been pressed!");
};

const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 4;
const options = ["取消", "定时提醒", "编辑", "删除", "移动"];
const title = "Which one do you like?";
const astintColor = "blue";

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: "代办",
    // Note: By default the icon is only shown on iOS. Search the showIcon option below.
    tabBarIcon: ({ tintColor }) => (
      <Icon name={"md-home"} size={26} color={"#FFFFFF"} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: "About",
      addModal: false,
      titleText: "",
      todo: null,

      selected: "",
      optVal: null,
      modalText: "添加Todo",
      currentItem: null
    };

    this.handlePress = this.handlePress.bind(this);
    this.showActionSheet = this.showActionSheet.bind(this);
  }

  setOptVal(item) {
    this.setState({
      optVal: item
    });
  }

  showActionSheet() {
    this.ActionSheet.show();
  }

  handlePress(i) {
    var that = this;
    this.setState({
      selected: i
    });

    //  ['取消', '定时提醒', '编辑', '删除', '移动']
    if (i == 0) {
    } else if (i == 1) {
    } else if (i == 2) {
      this.setState({
        addModal: true,
        modalText: "编辑Todo",
        titleText: that.state.optVal.title
      });
    } else if (i == 3) {
      var _id = this.state.optVal.id;
      Alert.alert(
        "提示",
        "确认是否删除吗?",
        [
          {
            text: "取消",
            onPress: () => {},
            style: "cancel"
          },
          {
            text: "确认",
            onPress: () => {
              console.log("OK Pressed");
              MySorage._load(
                "todo",
                function(data) {
                  delete data[_id];
                  MySorage._sava("todo", data);

                  var _todo = new Array();
                  for (var dd in data) {
                    _todo.unshift(data[dd]);
                  }
                  that.setState({
                    todo: _todo
                  });
                },
                null
              );
            }
          }
        ],
        { cancelable: false }
      );
    } else if (i == 4) {
    }
  }

  toggle() {
    ToastAndroid.show("toggle", ToastAndroid.SHORT);
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  updateMenuState(isOpen) {
    this.setState({
      isOpen: isOpen
    });
  }

  onMenuItemSelected = item => {
    this.setState({
      isOpen: false,
      selectedItem: item
    });
  };

  addModalToggle = item => {
    this.setState({
      selected: "",
      titleText: "",
      addModal: !this.state.addModal
    });
  };

  findObjArrayIndexOf(array, obj, prop) {
    let isExist = true;
    array.filter(item => {
      return item == obj[prop];
    });
  }

  /**
   * 获取ID
   */
  genId() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
      .replace(/[xy]/g, function(c) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      })
      .toUpperCase();
  }

  addTodoList = item => {
    var that = this;
    MySorage._load(
      "todo",
      function(data) {
        if (data == "" || data == null || typeof data == "undefined") {
          data = new Object();
        }
        if (data != "" && data != null && typeof data != "undefined") {
          if (that.state.selected == 2) {
            // 编辑
            let _id = that.state.optVal.id;
            if (that.state.optVal.title != that.state.titleText) {
              let _obj = data[_id];
              _obj.title = that.state.titleText;
              data[_id] = _obj;
              that.setState({
                todo: that.state.todo.map(item => {
                  if (item.id == _id) {
                    item.title = that.state.titleText;
                  }
                  return item;
                }),
                addModal: false
              });
              MySorage._sava("todo", data);
            } else {
              ToastAndroid.show("已经存在相同名称的TODO", ToastAndroid.SHORT);
            }
          } else {
            // add
            if (that.state.titleText.trim() == "") {
              ToastAndroid.show("待办项名称不能为空", ToastAndroid.SHORT);
              return false;
            }
            var obj = new Object();
            let id = that.genId();
            obj.id = id;
            obj.title = that.state.titleText;
            data[id] = obj;
            MySorage._sava("todo", data);
            that.state.todo.unshift(obj);
            that.setState({ addModal: false });
          }
        }
      },
      null
    );
  };

  getInitalState() {
    // console.warn("getInitalState...")
    // var _todo = new Array()
    // return {
    //     todo:_todo
    // }
  }

  componentWillMount() {
    var storage = MySorage._getStorage();
    global.storage = storage;
    // 初始化
    var _temp = new Array();
    if (this.state.todo == null) {
      this.state.todo = new Array();
    }
  }
  componentDidMount() {
    var that = this;

    MySorage._load(
      "todo",
      function(data) {
        var _todo = new Array();
        for (var dd in data) {
          _todo.unshift(data[dd]);
        }
        that.setState({
          todo: _todo
        });
      },
      function(err) {
        MySorage._sava("todo", new Object());
      }
    );
  }

  render() {
    var that = this;
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
    var BContent = (
      <Button
        onPress={() => this.setState({ addModal: false })}
        style={[styles.btn, styles.btnModal]}
      >
        X
      </Button>
    );

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
        <Top
          toggle={this.toggle.bind(this)}
          addModalToggle={this.addModalToggle.bind(this)}
        />
        <View style={styles.container}>
          <ScrollView scrollsToTop={false} showsVerticalScrollIndicator={false}>
            {this.state.todo.map((item, i) => (
              <Item
                key={item.id}
                item={item}
                showActionSheet={this.showActionSheet.bind(this)}
                setOptVal={this.setOptVal.bind(this)}
              />
            ))}
          </ScrollView>

          <ActionSheet
            ref={o => (this.ActionSheet = o)}
            options={options}
            cancelButtonIndex={CANCEL_INDEX}
            onPress={this.handlePress}
          />
        </View>
        <Modal
          isOpen={this.state.addModal}
          onClosed={() => this.setState({ addModal: false })}
          style={[styles.modal, styles.modal4]}
          position={"center"}
          backdrop={true}
          backdropContent={BContent}
        >
          <Text>{this.state.modalText}</Text>
          <TextInput
            style={{ height: 60, width: width / 3 * 2 }}
            placeholder="请输入事件名称"
            value={this.state.titleText}
            onChangeText={text => this.setState({ titleText: text })}
          />
          <Button onPress={this.addTodoList.bind(this)} style={styles.btn}>
            添加
          </Button>
        </Modal>
      </SideMenu>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26
  },
  button: {
    position: "absolute",
    top: 20,
    padding: 10
  },
  caption: {
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  modal: {
    justifyContent: "center",
    alignItems: "center"
  },
  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },
  modal4: {
    height: 300
  },
  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
  },
  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },
  wrapper: {
    paddingTop: 50,
    flex: 1
  },
  line: {
    marginTop: 10,
    width: width,
    height: 80,
    backgroundColor: "#A6D9D0"
  }
});

export default Home;
