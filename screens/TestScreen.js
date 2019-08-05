import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import TextButton from '../components/TextButton';
import ActivitySlotInput from '../components/ActivitySlotInput';
import ActivitySlotList from '../components/ActivitySlotList';


export default function TestScreen() {

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingHorizontal: 10}}>
        <ActivitySlotList style={styles.activitySlotList} />
      </View>
      <View style={{ height: 170 }}>
        <ActivitySlotInput style={styles.activitySlotInput} />
      </View>
    </View>
  )


}

TestScreen.navigationOptions = {
  title: 'Today',
};

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
})