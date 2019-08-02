import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { ListView, ListItem } from 'react-native-elements'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { removeActivitySlot } from '../actions/activitySlot'

class ActivitySlot extends Component {


  durationToString = (duration) => {
    var hours = Math.floor(duration / 60)
    var minutes = duration % 60
    return hours + 'h ' + minutes + ' m'
  }

  click = () => {
    this.props.dispatch(removeActivitySlot(this.props.id))
  }

  render() {

    const { id, activitySlot } = this.props

    const {activity, duration, efficiency} = activitySlot
    return (
      <ListItem
        Component={TouchableOpacity}
        title={activity}
        subtitle={this.durationToString(duration)}
        onPress={this.click}
      />
    )
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
})

function mapStateToProps({ id, activitySlot }) {

  return {
    id,
    activitySlot,
  }
}

export default connect()(ActivitySlot)

