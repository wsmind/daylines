import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    borderRadius: 10,
  },
});

const Week = ({startDate, endDate}) => {
  return (
    <View style={styles.container}>
      <Text>Week!</Text>
    </View>
  );
};

export default Week;
