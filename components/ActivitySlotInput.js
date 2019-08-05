import React, { Component } from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { Text, Button, ButtonGroup, Rating, AirbnbRating, Slider } from 'react-native-elements';
import TimeGoIcon from './TimeGoIcon'
import { purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { addActivitySlot } from '../actions/activitySlot.js'
import { generateTimeKey } from '../utils/helpers'
import { defaultIconList, efficiencyNames } from '../utils/_DATA'
// import Slider from '@react-native-community/slider';



class ActivitySlotInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      hour: 0,
      minute: 0,
      selectedIndex: 0,
      selectedActivity: defaultIconList[0],
      selectedRating: 4,
    };
    this.updateIndex = this.updateIndex.bind(this)
    this.updateRating = this.updateRating.bind(this)
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

    // hour = (hour === '') ? 0 : hour
    // minute = (minute === '') ? 0 : minute

    const currentTimeIndex = (Object.values(activitySlots).length === 0) ? 0
      : Object.values(activitySlots).reduce((sum, value) => sum + value.duration, 0)

    this.props.dispatch(addActivitySlot({
      [key]: {
        'activity': this.state.selectedActivity,
        'duration': hour * 60 + minute,
        'startIndex': currentTimeIndex,
        'efficiency': this.state.selectedRating,
        'addedOn': key,
        'hour': hour,
        'minute': minute,
        'id': key,
      }
    }))
  }

  updateRating = (rating) => {
    // console.log(efficiencyNames[rating])
    this.setState({
      selectedRating: rating
    })
  }


  render() {
    const buttons = defaultIconList.map(item => {
      return { element: () => <TimeGoIcon name={item} size={20} /> }
    })
    const { selectedIndex } = this.state
    return (

      <View style={styles.container}>

        <View style={styles.infoStyle}>
          <View style={styles.infoText}>
            <Text>{this.state.selectedActivity}</Text>
          </View>
          <View style={styles.infoText}>
            <Text>{efficiencyNames[this.state.selectedRating]}</Text>
          </View>
          <View style={styles.infoText}>
            <Text>{this.state.hour + 'h' + this.state.minute + 'm'}</Text>
          </View>
        </View>


        <ButtonGroup
          onPress={this.updateIndex}
          selectedIndex={selectedIndex}
          buttons={buttons}
          containerStyle={{ height: 45 }} />

        <View style={{ flexDirection: 'row', }}>
          <Slider
            style={{ flex: 1, height: 40, marginLeft: 2 }}
            minimumValue={0}
            maximumValue={24}
            step={1}
            // thumbTintColor={purple}
            value={this.state.hour}
            onValueChange={value => this.setState({ hour: value })}
          />
          <Slider
            style={{ flex: 1, height: 40, marginLeft: 5 }}
            minimumValue={0}
            maximumValue={59}
            step={1}
            thumbTintColor={purple}
            value={this.state.minute}
            onValueChange={value => this.setState({ minute: value })}
          />
        </View>

        <View >

        </View>

        <View style={styles.row}>
          <AirbnbRating
            type='heart'
            showRating={false}
            defaultRating={4}
            onFinishRating={this.updateRating}
          />
          <Button
            title="Add"
            type="solid"
            buttonStyle={styles.addButton}
            onPress={this.submit}

          />
        </View>
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
    flex: 1,
    // alignSelf: 'baseline',
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#009688',
    // justifyContent: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    // borderRadius: 10,
    // borderWidth: 2,
    height: 45,
    justifyContent: 'space-around',
  },
  inputWrap: {
    flex: 1,
    borderColor: "#cccccc",
    borderBottomWidth: 1,
    marginBottom: 10,
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
  addButton: {
    width: 100,
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
  },
  headerText: {
    fontSize: 20,
    textAlign: "center",
    // borderRadius: 10,
    // borderWidth: 2,
    margin: 10,
    fontWeight: "bold"
  },
  infoStyle: {
    flexDirection: 'row',
    height: 25,
    borderBottomWidth: 2,

    // marginBottom: 10,
    borderRadius: 10,
    // borderWidth: 2,
    borderColor: '#009688',
    // justifyContent: 'flex-end',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  infoText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#009688',
    marginBottom: 10,
  }
})



function mapStateToProps({ activitySlots }) {

  return {
    activitySlots,
  }
}

export default connect(mapStateToProps)(ActivitySlotInput)