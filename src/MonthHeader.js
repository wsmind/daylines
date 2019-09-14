import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#411',
    height: 40,
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#b88',
  },
  label: {
    color: '#fdd',
    textAlign: 'center',
    fontSize: 16,
  },
});

const MonthHeader = ({month, highlight}) => (
  <View style={styles.header}>
    <Text style={styles.label}>
      {highlight && <View style={styles.dot} />} {monthNames[month]}
    </Text>
  </View>
);

export default MonthHeader;
