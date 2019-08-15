import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { handleAllActivitySlotsKeys } from '../actions/shared'
import { getAllActivitySlotsKeys } from '../utils/api'

import { PieChart } from 'react-native-svg-charts'
import DailyStat from '../components/DailyStat'


export default class LinksScreen extends Component {


  render() {
    return (
      <DailyStat />
    )
  }
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
