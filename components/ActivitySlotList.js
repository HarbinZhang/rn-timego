import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import ActivitySlot from './ActivitySlot'

import { handleInitialData } from '../actions/shared'
import { FlatList } from 'react-native-gesture-handler';

class ActivitySlotList extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { activitySlots } = this.props
    console.log(activitySlots)
    return (
      <FlatList style={styles.container}
        keyExtractor={(item, index) => index.toString()}
        data={Object.values(activitySlots)}
        renderItem={({ item, index }) =>
          <ActivitySlot key={index} activitySlot={item} />
        }
        
      />
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },

})

function mapStateToProps({ activitySlots }) {

  return {
    activitySlots,
  }
}

export default connect(mapStateToProps)(ActivitySlotList)