import React from 'react';
import {Box, Text} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SIZE} from 'src/utils';
import LicenseScreen from './LicenseScreen';
import DeliveryScreen from './DeliveryScreen';

const Tab = createMaterialTopTabNavigator();

const B = () => {
  return (
    <Box safe>
      <Text>two</Text>
    </Box>
  );
};

const HelperNestedScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="license"
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {backgroundColor: '#576071'},
        tabBarLabelStyle: {fontSize: 18, color: 'white'},
        tabBarItemStyle: {
          width: SIZE.width / 3,
          height: 55,
        },
        tabBarIndicatorStyle: {backgroundColor: '#FF84BF', height: '100%'},
        tabBarPressOpacity: 1,
      }}>
      <Tab.Screen
        name="license"
        component={LicenseScreen}
        options={{title: '車牌選號'}}
      />
      <Tab.Screen
        name="delivery"
        component={DeliveryScreen}
        options={{title: '交車農民曆'}}
      />
      <Tab.Screen
        name="manual"
        component={B}
        options={{title: '電子車主手冊'}}
      />
    </Tab.Navigator>
  );
};

export default HelperNestedScreen;
