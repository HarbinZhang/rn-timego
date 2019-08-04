import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { Button, ButtonGroup } from 'react-native-elements';
import TimeGoIcon from './TimeGoIcon'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { addActivitySlot } from '../actions/activitySlot.js'
import { generateTimeKey } from '../utils/helpers'


const defaultIconList = ['working', 'study', 'game', 'gym', 'sleep', 'waste', 'more']

class ActivitySlotInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hour: '',
      minute: '',
      selectedIndex: 0,
      selectedActivity: defaultIconList[0],
    };
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex = (selectedIndex) => {
    this.setState({
      selectedIndex: selectedIndex,
      selectedActivity: defaultIconList[selectedIndex]
    });
  }
  submit = () => {

    const { activitySlots } = this.props

    const key = generateTimeKey()

    var { hour, minute } = this.state

    hour = (hour === '') ? 0 : hour
    minute = (minute === '') ? 0 : minute

    const currentTimeIndex = (Object.values(activitySlots).length === 0) ? 0
      : Object.values(activitySlots).reduce((sum, value) => sum + value.duration, 0)

    this.props.dispatch(addActivitySlot({
      [key]: {
        'activity': this.state.selectedActivity,
        'duration': parseInt(hour) * 60 + parseInt(minute),
        'startIndex': currentTimeIndex,
        'efficiency': '100',
        'addedOn': key,
        'hour': hour,
        'minute': minute,
        'id': key,
      }
    }))
  }


  render() {
    const buttons = defaultIconList.map(item => {
      return { element: () => <TimeGoIcon name={item} size={20} /> }
    })
    const { selectedIndex } = this.state
    return (

      <View style={styles.container}>

        <Text style={styles.headerText}>TimeInput</Text>

        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 35 }} />

        <View style={styles.row}>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="hour"
              onChangeText={(hour) => this.setState({ hour })}
              value={this.state.hour}
              style={styles.TextInputStyle}
              keyboardType={'numeric'}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              placeholder="minute"
              onChangeText={(minute) => this.setState({ minute })}
              value={this.state.minute}
              style={styles.TextInputStyle}
              keyboardType={'numeric'}
            />
          </View>
        </View>

        <SubmitBtn onPress={this.submit} />

      </View >
    )
  }


}

function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignSelf: 'baseline',
    // justifyContent: 'flex-xend',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10
  }
})



function mapStateToProps({ activitySlots }) {

  return {
    activitySlots,
  }
}

export default connect(mapStateToProps)(ActivitySlotInput)