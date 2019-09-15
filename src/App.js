/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Month from './Month';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

const PreviousMonth = () => (
  <Month year={currentYear} month={currentMonth - 1} />
);
const ThisMonth = () => <Month year={currentYear} month={currentMonth} />;
const NextMonth = () => <Month year={currentYear} month={currentMonth + 1} />;

const monthTabs = createMaterialTopTabNavigator({
  PreviousMonth,
  ThisMonth,
  NextMonth,
});

const AppContainer = createAppContainer(monthTabs);

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1}}>
        <AppContainer />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
