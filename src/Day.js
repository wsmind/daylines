import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const weekDayLabels = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const startWeekOnMonday = true;
const weekFirstDay = startWeekOnMonday ? 1 : 0;
const weekLastDay = startWeekOnMonday ? 0 : 6;

const styles = StyleSheet.create({
  day: {
    backgroundColor: '#eee',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderColor: '#edd',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
  },
  holiday: {
    backgroundColor: '#ddd',
  },
  weekFirst: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopStartRadius: 5,
    borderTopEndRadius: 5,
  },
  weekLast: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
    marginBottom: 5,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#444',
  },
  numberLabel: {
    paddingLeft: 5,
    width: 20,
    flex: 1,
  },
  textLabel: {
    paddingLeft: 5,
    color: '#888',
    flex: 10,
  },
});

const Day = ({date, highlight}) => {
  const weekDay = date.getDay();
  const isHoliday = weekDay === 0 || weekDay === 6;
  const numberLabel = date.getDate();
  const textLabel = weekDayLabels[weekDay];

  const viewStyle = [styles.day];
  if (isHoliday) {
    viewStyle.push(styles.holiday);
  }
  if (weekDay === weekFirstDay) {
    viewStyle.push(styles.weekFirst);
  }
  if (weekDay === weekLastDay) {
    viewStyle.push(styles.weekLast);
  }

  return (
    <View style={viewStyle}>
      <Text style={styles.numberLabel}>
        {highlight && <View style={styles.dot} />} {numberLabel}
      </Text>
      <Text style={styles.textLabel}>{textLabel}</Text>
    </View>
  );
};

export default Day;
