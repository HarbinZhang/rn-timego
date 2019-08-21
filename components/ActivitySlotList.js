import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import ActivitySlot from './ActivitySlot'

import { handleInitialData } from '../actions/shared'
import { FlatList } from 'react-native-gesture-handler';
import { headerTitleToTimeKey } from '../utils/helpers';
import { ACTIVITY_SLOTS_KEY } from '../utils/_activitySlot'

class ActivitySlotList extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(handleInitialData(headerTitleToTimeKey(ACTIVITY_SLOTS_KEY, this.props.headerTitle)))
  }

  componentDidUpdate(prevProps) {
    if (this.props.headerTitle !== prevProps.headerTitle) {
      console.log(this.props.headerTitle)
      this.props.dispatch(handleInitialData(headerTitleToTimeKey(ACTIVITY_SLOTS_KEY, this.props.headerTitle)))
    }
  }

  render() {
    const { activitySlots } = this.props
    console.log(activitySlots)
    return (
      <FlatList style={styles.container}
        keyExtractor={(item, index) => index.toString()}
        data={Object.values(activitySlots)}
        renderItem={({ item, index }) =>
          <ActivitySlot key={index} activitySlot={item} headerTitle={this.props.headerTitle} />
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