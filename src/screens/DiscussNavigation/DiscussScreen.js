import React from 'react';
import DiscussHomeScreen from './DiscussHome';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeNestedTabScreen from './DiscussNestedTabScreen';
import TabBackTitle from 'src/components/TabBackTitle';
import AudioThumb from 'src/components/AudioThumb';
const Stack = createNativeStackNavigator();

const DiscussScreenNavigation = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="DiscussIndex">
        <Stack.Screen
          name="DiscussIndex"
          component={DiscussHomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tab"
          component={HomeNestedTabScreen}
          options={() => {
            return {
              title: null,
              headerBackTitleVisible: false,
              headerLeft: () => <TabBackTitle />,
            };
          }}
        />
      </Stack.Navigator>
      <AudioThumb />
    </>
  );
};

export default DiscussScreenNavigation;
