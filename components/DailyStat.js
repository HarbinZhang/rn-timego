import React from 'react';
import {
  View,
  Dimensions
} from 'react-native';
import { PieChart } from 'react-native-svg-charts'
import { Text } from 'react-native-svg'
import { connect } from 'react-redux'

import { defaultIconList, activityToColor, activityColorList } from '../utils/_DATA'

class DailyStat extends React.PureComponent {
  

  render() {

    const { activityStat } = this.props

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
            fontSize={24}
            // stroke={'black'}
            // strokeWidth={0.2}
          >
            {data.duration > 0 && data.duration}
          </Text>
        )
      })
    }

    return (
      <PieChart
        style={{ flex: 1 }}
        valueAccessor={({ item }) => item.duration}
        data={Object.values(activityStat)}
        spacing={0}
        outerRadius={'95%'}
      >
        <Labels />
      </PieChart>
    )
  }

}


function mapStateToProps({ activitySlots }) {

  console.log(activitySlots)
  console.log('hello')

  const initalStat = defaultIconList.reduce(function(prev, cur, index) {
    prev[cur] = {
      'key': index,
      'activity': cur,
      'duration': 0,
      'efficientDuration': 1,
      svg: {fill : activityColorList[activityToColor[cur]]}
    }
    return prev
  },{})

  const activityStat = Object.values(activitySlots).reduce(function(prev, cur){
    prev[cur.activity].duration += cur.duration
    prev[cur.activity].efficientDuration += cur.efficientDuration * cur.efficiency
    
    return prev
  }, initalStat)

  
  return {
    activityStat,
  }
}



export default connect(mapStateToProps)(DailyStat)