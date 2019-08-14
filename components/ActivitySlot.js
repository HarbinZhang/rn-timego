import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { ListView, ListItem, Rating } from 'react-native-elements'
import TimeGoIcon from './TimeGoIcon'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { removeActivitySlot } from '../actions/activitySlot'
import {efficiencyNames} from '../utils/_DATA'

import { ACTIVITY_SLOTS_KEY } from '../utils/_activitySlot'
import { headerTitleToTimeKey } from '../utils/helpers'

import { activityToColor, activityColorList } from '../utils/_DATA'

class ActivitySlot extends Component {


  durationToString = (duration) => {
    var hours = Math.floor(duration / 60)
    var minutes = duration % 60
    return hours + 'h ' + minutes + ' m'
  }

  click = () => {
    // alert(this.props.activitySlot.id)
    this.props.dispatch(removeActivitySlot(this.props.activitySlot.id, headerTitleToTimeKey(ACTIVITY_SLOTS_KEY, this.props.headerTitle)))
  }

  render() {

    const { activitySlot } = this.props
    const {activity, duration, efficiency} = activitySlot
    const activityColor = activityColorList[activityToColor[activity]]

    return (
      <ListItem
        Component={TouchableOpacity}
        friction={90}
        containerStyle={StyleSheet.flatten([styles.containerStyle, {backgroundColor: activityColor}])}
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
    // backgroundColor: '#99ccff',
    borderRadius: 20,
    borderWidth: 2,
    margin:2,
  },
  activityContentContainer: {
  },
  titleStyle: {
    alignSelf: 'center',
  }
})

function mapStateToProps({ activitySlot }) {

  return {
    activitySlot,
  }
}

export default connect()(ActivitySlot)

