import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Commentary from '../VideoNestedTab/Commentary';
import Brand from '../VideoNestedTab/Brand';
import useBackTitle from 'src/hooks/useBackTitle';
import Evaluation from '../VideoNestedTab/Evaluation';

const Tab = createMaterialTopTabNavigator();

const VideoNestedTabScreen = ({navigation}) => {
  useBackTitle(navigation, '相關影音');
  return (
    <Tab.Navigator
      initialRouteName="commentary"
      screenOptions={{
        tabBarLabelStyle: {fontSize: 16},
        tabBarIndicatorStyle: {height: 0},
      }}>
      <Tab.Screen
        name="commentary"
        component={Commentary}
        options={{
          title: '商品解說',
        }}
      />
      <Tab.Screen
        name="brand"
        component={Brand}
        options={{
          title: '品牌活動',
        }}
      />
      <Tab.Screen
        name="53"
        component={Evaluation}
        options={{
          title: '網路風評',
        }}
      />
    </Tab.Navigator>
  );
};

export default VideoNestedTabScreen;
