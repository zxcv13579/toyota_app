import React from 'react';
import {Box, Text} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SIZE} from 'src/utils';

const Tab = createMaterialTopTabNavigator();

const B = () => {
  return (
    <Box safe>
      <Text>two</Text>
    </Box>
  );
};

const DashboardNestedScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="waring"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {backgroundColor: '#576071'},
        tabBarLabelStyle: {fontSize: 18, color: 'white'},
        tabBarItemStyle: {
          width: SIZE.width / 2,
          height: 55,
        },
        tabBarIndicatorStyle: {backgroundColor: '#00BDD9', height: '100%'},
        tabBarPressOpacity: 1,
      }}>
      <Tab.Screen name="waring" component={B} options={{title: '警示燈'}} />
      <Tab.Screen name="instruct" component={B} options={{title: '指示燈'}} />
    </Tab.Navigator>
  );
};

export default DashboardNestedScreen;
