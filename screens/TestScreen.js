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
    <View>
      <ActivitySlotList/>
      <ActivitySlotInput/>
      <TextButton style={{padding: 10}}>hi</TextButton>
    </View>
  )
}