import React from 'react';
import DiscussIcon from 'src/images/root/discuss.svg';
import CustomIcon from 'src/images/root/custom.svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscussNavigation from 'src/screens/DiscussNavigation';
import CustomerNavigation from 'src/screens/CustomerNavigation';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Discuss"
      screenOptions={() => {
        return {
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarStyle: {backgroundColor: '#313131'},
          tabBarLabelStyle: {fontSize: 16, color: 'white'},

          tabBarActiveBackgroundColor: '#424242',
          unmountOnBlur: true,
        };
      }}>
      <Tab.Screen
        name="Discuss"
        component={DiscussNavigation}
        options={{
          title: '商談',
          tabBarIcon: () => <DiscussIcon />,
        }}
      />
      <Tab.Screen
        name="Discusssd"
        component={CustomerNavigation}
        options={{
          title: '顧客經營',
          tabBarIcon: () => <CustomIcon />,
        }}
      />
      {/* <Tab.Screen name="Discus3s" component={DiscussNavigation} /> */}
    </Tab.Navigator>
  );
};

export default RootNavigation;
