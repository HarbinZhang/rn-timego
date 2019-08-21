import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { handleAllActivitySlotsKeys } from '../actions/shared'
import { getAllActivitySlotsKeys } from '../utils/api'

import { PieChart } from 'react-native-svg-charts'
import DailyStatForActivity from '../components/DailyStatForActivity'
import DailyStatForEventType from '../components/DailyStatForEventType'


export default class LinksScreen extends Component {


  render() {
    return (
      <DailyStatForEventType />
    )
  }
}

LinksScreen.navigationOptions = {
  title: 'Stat',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
