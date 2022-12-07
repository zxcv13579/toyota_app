import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StudyHome from './StudyHome';

const Stack = createNativeStackNavigator();

const StudyNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="StudyHome">
      <Stack.Screen name="StudyHome" component={StudyHome} />
    </Stack.Navigator>
  );
};

export default StudyNavigation;
