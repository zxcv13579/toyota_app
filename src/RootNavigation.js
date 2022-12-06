import React, {useEffect} from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import DiscussScreenNavigation from './screens/DiscussNavigation/DiscussScreen';
// // import HomeNestedTabScreen from './screens/DiscussNestedTabScreen';
// import TabBackTitle from './components/TabBackTitle';
// import PdfScreen from './screens/PdfScreen';
// import AudioScreen from './screens/AduioScreen';
// import WebviewScreen from './screens/WebviewScreen';
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
