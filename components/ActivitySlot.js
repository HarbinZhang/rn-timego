import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { ListView, ListItem, Rating } from 'react-native-elements'
import TimeGoIcon from './TimeGoIcon'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { removeActivitySlot } from '../actions/activitySlot'
import {efficiencyNames} from '../utils/_DATA'


class ActivitySlot extends Component {


  durationToString = (duration) => {
    var hours = Math.floor(duration / 60)
    var minutes = duration % 60
    return hours + 'h ' + minutes + ' m'
  }

  click = () => {
    this.props.dispatch(removeActivitySlot(this.props.activitySlot.id))
  }

  render() {

    const { activitySlot } = this.props

    const {activity, duration, efficiency} = activitySlot
    return (
      <ListItem
        Component={TouchableOpacity}
        friction={90}
        containerStyle={styles.containerStyle}
        contentContainerStyle={styles.activityContentContainer}
        title={efficiencyNames[efficiency]}
        titleStyle={styles.titleStyle}
        leftIcon={<TimeGoIcon name={activity} size={20} />}
        // subtitle={<Rating readonly startingValue={efficiency}/>}
        rightSubtitle={this.durationToString(duration)}
        onPress={this.click}
        color={purple}
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
  containerStyle: {
    backgroundColor: '#FF9800',
    borderRadius: 20,
    borderWidth: 2,
    margin:2,
  },
  activityContentContainer: {
    backgroundColor: '#F44336',
  },
  titleStyle: {
    backgroundColor: '#FFFF00',
    alignSelf: 'center',
  }
})

function mapStateToProps({ activitySlot }) {

  return {
    activitySlot,
  }
}

export default connect()(ActivitySlot)

