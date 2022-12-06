import React from 'react';
import {Box, Text} from 'native-base';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import MenuScreen from './DiscussNested/MenuScreen';
import LightScreen from './DiscussNested/LightScreen';
import CalculateScreen from './DiscussNested/CalculateScreen';
import VideoNestedTabScreen from './DiscussNested/VideoNestedTabScreen';
import InstallmentsScreen from './DiscussNested/InstallmentsScreen';

const Tab = createMaterialTopTabNavigator();

const A = () => {
  return (
    <Box safe>
      <Text>one</Text>
    </Box>
  );
};
const B = () => {
  return (
    <Box safe>
      <Text>two</Text>
    </Box>
  );
};

const HomeNestedTabScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {backgroundColor: '#576071'},
        tabBarLabelStyle: {fontSize: 18, color: 'white'},
        tabBarItemStyle: {
          width: 110,
          height: 55,
        },
        tabBarPressOpacity: 1,
      }}>
      <Tab.Screen
        name="menu"
        component={MenuScreen}
        options={{
          title: '車款型錄',
          tabBarIndicatorStyle: {backgroundColor: '#00BDD9', height: '100%'},
        }}
      />
      <Tab.Screen
        name="light"
        component={LightScreen}
        options={{
          title: '商品亮點',
          tabBarIndicatorStyle: {backgroundColor: '#0085DE', height: '100%'},
        }}
      />
      <Tab.Screen
        name="competing"
        component={A}
        options={{
          title: '競品比較',
          tabBarIndicatorStyle: {backgroundColor: '#FF733F', height: '100%'},
        }}
      />
      <Tab.Screen
        name="video"
        component={VideoNestedTabScreen}
        options={{
          title: '相關影音',
          tabBarIndicatorStyle: {backgroundColor: '#FF4A31', height: '100%'},
        }}
      />
      <Tab.Screen
        name="safe"
        component={B}
        options={{
          title: '安全科技',
          tabBarIndicatorStyle: {backgroundColor: '#FF84BF', height: '100%'},
        }}
      />
      <Tab.Screen
        name="installments"
        component={InstallmentsScreen}
        options={{
          title: '分期貸款',
          tabBarIndicatorStyle: {backgroundColor: '#FF9C29', height: '100%'},
        }}
      />
      <Tab.Screen
        name="calculate"
        component={CalculateScreen}
        options={{
          title: '規費試算',
          tabBarIndicatorStyle: {backgroundColor: '#46C6A4', height: '100%'},
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNestedTabScreen;
