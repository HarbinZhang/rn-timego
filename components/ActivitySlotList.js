import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'
import {connect} from 'react-redux'
import ActivitySlot from './ActivitySlot'

import { handleInitialData } from '../actions/shared'

class ActivitySlotList extends Component {

  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const {activitySlots} = this.props
    console.log(activitySlots)
    return (
      <View>
        {Object.keys(activitySlots).map(key => (
          <ActivitySlot key={key} id={key} activitySlot={activitySlots[key]}/>
        )
        )}
      </View>
    )
  }
}

function mapStateToProps({ activitySlots }) {

  return {
    activitySlots,
  }
}

export default connect(mapStateToProps)(ActivitySlotList)