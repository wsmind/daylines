import React from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';

const weekDayLabels = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const styles = StyleSheet.create({
  monthHeader: {
    backgroundColor: '#411',
    height: 40,
    justifyContent: 'center',
  },
  month: {
    color: '#fdd',
    textAlign: 'center',
    fontSize: 16,
  },
  scrollView: {
    backgroundColor: '#fff',
    paddingStart: 5,
    paddingEnd: 5,
  },
  day: {
    backgroundColor: '#eee',
    height: 30,
    justifyContent: 'center',
    borderColor: '#fee',
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
  },
  dayContent: {
    paddingLeft: 10,
  },
});

const Day = ({date}) => {
  const weekDay = date.getDay();
  const isHoliday = weekDay === 0 || weekDay === 6;
  const label = weekDayLabels[weekDay];

  const viewStyle = [styles.day];
  if (isHoliday) {
    viewStyle.push(styles.holiday);
  }
  if (weekDay === 0) {
    viewStyle.push(styles.weekFirst);
  }
  if (weekDay === 6) {
    viewStyle.push(styles.weekLast);
  }

  return (
    <View style={viewStyle}>
      <Text style={styles.dayContent}>{label + ' ' + date.getDate()}</Text>
    </View>
  );
};

const CalendarView = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  const data = [];
  let currentDay = 1;
  while (true) {
    const date = new Date(currentYear, currentMonth, currentDay);
    if (date.getMonth() !== currentMonth) {
      break;
    }

    data.push({
      key: currentDay.toString(),
      date,
    });

    currentDay++;
  }

  return (
    <View>
      <View style={styles.monthHeader}>
        <Text style={styles.month}>Month {currentMonth}</Text>
      </View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <FlatList
          data={data}
          renderItem={({item}) => <Day date={item.date} />}
        />
      </ScrollView>
    </View>
  );
};

export default CalendarView;
