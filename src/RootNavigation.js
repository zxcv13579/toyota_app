import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscussNavigation from 'src/screens/DiscussNavigation';
import CustomerNavigation from 'src/screens/CustomerNavigation';

const Tab = createBottomTabNavigator();

const RootNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Discuss"
      screenOptions={({route}) => {
        return {
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarStyle: {backgroundColor: '#313131'},
          tabBarLabelStyle: {fontSize: 14},
          tabBarActiveBackgroundColor: '#424242',
          tabBarInactiveTintColor: 'rgba(255, 255, 255, 0.4)',
          tabBarActiveTintColor: 'rgba(255, 255, 255, 1)',
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            const icons = {
              Discuss: 'briefcase',
              Customer: 'people',
            };

            return (
              <Ionicons
                name={icons[route.name]}
                color={focused ? 'white' : 'rgba(255, 255, 255, 0.4)'}
                size={20}
              />
            );
          },
        };
      }}>
      <Tab.Screen
        name="Discuss"
        component={DiscussNavigation}
        options={{
          title: '商談',
        }}
      />
      <Tab.Screen
        name="Customer"
        component={CustomerNavigation}
        options={{
          title: '顧客經營',
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigation;
