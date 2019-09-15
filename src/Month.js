import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import Day from './Day';
import MonthHeader from './MonthHeader';

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    paddingStart: 5,
    paddingEnd: 5,
    paddingTop: 5,
    marginBottom: 50,
  },
});

const Month = ({year, month}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const data = [];
  let day = 1;
  while (true) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) {
      break;
    }

    data.push({
      key: day.toString(),
      date,
      highlight:
        year === currentYear && month === currentMonth && day === currentDay,
    });

    day++;
  }

  return (
    <View>
      <MonthHeader
        month={month}
        highlight={year === currentYear && month === currentMonth}
      />
      <FlatList
        style={styles.list}
        data={data}
        renderItem={({item}) => <Day {...item} />}
      />
    </View>
  );
};

export default Month;
