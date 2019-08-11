import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { handleAllActivitySlotsKeys } from '../actions/shared'
import { getAllActivitySlotsKeys } from '../utils/api'
export default function LinksScreen() {

  // handleAllActivitySlotsKeys()
  // console.log(keys)
  getAllActivitySlotsKeys().then(keys => {console.log(keys)})

  return (
    <ScrollView style={styles.container}>
      <Text> hi </Text>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: 'Links',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
