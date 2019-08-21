import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

import ActivitySlotInput from '../components/ActivitySlotInput';
import ActivitySlotList from '../components/ActivitySlotList';


export default class TestScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerTitle: 'Today'
    }

    // TODO remove it
    this.setMenuRef = this.setMenuRef.bind(this)
    this.hideMenu = this.hideMenu.bind(this)
    this.showMenu = this.showMenu.bind(this)
  }

  _menu = null

  setMenuRef = ref => {
    this._menu = ref
  }

  hideMenu = () => {
    this._menu.hide()
  }

  showMenu = () => {
    () => alert('hi')
    this._menu.show()
  }

  setToday = () => {
    this.hideMenu()
    this.setState({
      headerTitle: 'Today'
    })
    this.props.navigation.setParams({ headerTitle: 'Today' })
  }

  setYesterday = () => {
    this.hideMenu()
    this.setState({
      headerTitle: 'Yesterday'
    })
    this.props.navigation.setParams({ headerTitle: 'Yesterday' })
  }

  componentDidMount() {
    this.props.navigation.setParams({ setMenuRef: this.setMenuRef })
    this.props.navigation.setParams({ setToday: this.setToday })
    this.props.navigation.setParams({ setYesterday: this.setYesterday })
    this.props.navigation.setParams({ showMenu: this.showMenu })
    this.props.navigation.setParams({ headerTitle: this.state.headerTitle })
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (
        <Menu
          ref={navigation.getParam('setMenuRef')}
          button={
            <TouchableOpacity
              style={styles.HeaderButton}
              onPress={navigation.getParam('showMenu')}
            >
              <Text>{navigation.getParam('headerTitle')}</Text>
            </TouchableOpacity>}
        >
          <MenuItem onPress={navigation.getParam('setToday')}>Today</MenuItem>
          <MenuDivider />
          <MenuItem onPress={navigation.getParam('setYesterday')}>Yesterday</MenuItem>
          <MenuDivider />
          <MenuItem onPress={() => {
            alert(Object.keys(navigation))
            alert(navigation.getParam('headerTitle'))
          }}>help</MenuItem>
        </Menu>
      ),
    }
  }

  render() {
    return (
      <View style={styles.container} current>
        <View style={{ flex: 1, paddingHorizontal: 10 }}>
          <ActivitySlotList style={styles.activitySlotList} headerTitle={this.state.headerTitle} />
        </View>
        <View style={{ height: 170 }}>
          <ActivitySlotInput style={styles.activitySlotInput} headerTitle={this.state.headerTitle} />
        </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: 'stretch',
    // paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  activitySlotList: {
    flex: 1,
  },
  ActivitySlotInput: {
    flex: 1,
    // paddingBottom: 20,
    backgroundColor: '#ff0',
    // alignSelf: 'flex-end',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
  },
  HeaderContainerStyle: {
    textAlign: 'center',
    // height: 20,
    paddingVertical: 5,
    paddingHorizontal: 55,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10,
  },
  HeaderButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    // paddingHorizontal: 55,
    // marginHorizontal: 10,
    // marginVertical: 2,
    width: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10,
  },
})