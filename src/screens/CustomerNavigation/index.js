import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomerScreen from './CustomerHome';
import DashboardNestedScreen from './DashboardNested';
import YtScreen from './YtScreen';
import TabBackTitle from 'components/TabBackTitle';
import LoanScreen from './LoanScreen';
import HelperNestedScreen from './HelperNested';

const Stack = createNativeStackNavigator();

const CustomerNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="customHome"
      screenOptions={() => {
        return {
          title: null,
          headerLeft: () => <TabBackTitle />,
        };
      }}>
      <Stack.Screen
        name="customHome"
        component={CustomerScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="dashboard" component={DashboardNestedScreen} />
      <Stack.Screen name="helper" component={HelperNestedScreen} />
      <Stack.Screen name="yt" component={YtScreen} />
      <Stack.Screen name="loan" component={LoanScreen} />
    </Stack.Navigator>
  );
};

export default CustomerNavigation;
