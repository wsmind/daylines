/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import CalendarView from './CalendarView';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <CalendarView />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
