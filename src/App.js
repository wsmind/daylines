/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Month from './Month';

const App = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();

  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <Month year={currentYear} month={currentMonth} />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
