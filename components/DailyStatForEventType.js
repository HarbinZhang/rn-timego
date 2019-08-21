import React from 'react';
import {
  View,
  Dimensions
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { Text, G, Circle } from 'react-native-svg'
import { connect } from 'react-redux'

import { defaultEventTypes, activityToEventType, activityColorList } from '../utils/_DATA'


class DailyStatForEventType extends React.PureComponent {


  render() {

    const { eventTypeStat } = this.props

    const Labels = ({ slices, height, width }) => {
      return slices.map((slice, index) => {
        const { labelCentroid, pieCentroid, data } = slice;
        return (

            <Text
              key={index}
              x={pieCentroid[0]}
              y={pieCentroid[1]}
              fill={'black'}
              textAnchor={'middle'}
              alignmentBaseline={'middle'}
              // fontSize={24}
            // stroke={'black'}
            // strokeWidth={0.2}
            >
              {data.duration >= 60 && (Math.floor(data.duration/60))+'h '}{data.duration > 0 && data.duration%60+'m'}
            </Text>
          
        )
      })
    }

    return (
      <PieChart
        style={{ flex: 1 }}
        valueAccessor={({ item }) => item.duration}
        data={Object.values(eventTypeStat)}
        spacing={0}
        outerRadius={'95%'}
      >
        <Labels />
      </PieChart>
    )
  }

}


function mapStateToProps({ activitySlots }) {

  const initialStat = defaultEventTypes.reduce(function (prev, cur, index) {
    prev[cur] = {
      'key': index,
      'eventType': cur,
      'duration': 0,
      'efficientDuration': 1,
      svg: { fill: activityColorList[cur] }
    }
    return prev
  }, {})

  const eventTypeStat = Object.values(activitySlots).reduce(function (prev, cur) {
    prev[activityToEventType[cur.activity]].duration += cur.duration
    prev[activityToEventType[cur.activity]].efficientDuration += cur.efficientDuration * cur.efficiency

    return prev
  }, initialStat)

  console.log(eventTypeStat)


  return {
    eventTypeStat,
  }
}



export default connect(mapStateToProps)(DailyStatForEventType)