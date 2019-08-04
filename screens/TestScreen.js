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


export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <ActivitySlotList style={styles.activitySlotList}/>
      <ActivitySlotInput style={styles.activitySlotInput}/>
    </View>
  )


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignContent: 'stretch',
    padding: 20,
    // justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  activitySlotList: {
    flex: 4,
  },
  ActivitySlotInput: {
    flex: 1,
    paddingBottom: 20,
    backgroundColor: '#ff0',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
})