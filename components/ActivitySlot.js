import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { ListView, ListItem } from 'react-native-elements'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'

class ActivitySlot extends Component {


  durationToString = (duration) => {
    var hours = Math.floor(duration / 60)
    var minutes = duration % 60
    return hours + ' h ' + minutes + ' m'
  }

  render() {

    const { id, activitySlot } = this.props

    const {activity, duration, efficiency} = activitySlot
    return (
      <ListItem
        title={activity}
        subtitle={this.durationToString(duration)}
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

export default ActivitySlot

// function mapStateToProps({ id, activitySlot }) {

//   return {
//     id,
//     activitySlot,
//   }
// }

// export default connect(mapStateToProps)(ActivitySlot)