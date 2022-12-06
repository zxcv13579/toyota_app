import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DiscussScreenNavigation from './DiscussScreen';
import TabBackTitle from 'src/components/TabBackTitle';
import PdfScreen from '../PdfScreen';
import AudioScreen from '../AduioScreen';
import WebviewScreen from '../WebviewScreen';
import {GlobalContext} from 'src/globalContext';

const Stack = createNativeStackNavigator();

const DiscussNavigation = () => {
  const {dispatch} = useContext(GlobalContext);
  React.useEffect(() => {
    return () => {
      dispatch({type: 'setVisibility', payload: 'hidden'});
    };
  }, [dispatch]);
  return (
    <Stack.Navigator
      initialRouteName="DiscussHome"
      screenOptions={{headerTitleAlign: 'center', headerShown: false}}>
      <Stack.Screen name="DiscussHome" component={DiscussScreenNavigation} />
      <Stack.Screen
        name="Pdf"
        component={PdfScreen}
        options={({route, navigation}) => {
          const {title} = route.params;
          return {
            headerShown: true,
            title: null,
            headerBackTitleVisible: false,
            headerLeft: () => (
              <TabBackTitle title={title} goBack={() => navigation.goBack()} />
            ),
          };
        }}
      />
      <Stack.Screen
        name="Audio"
        component={AudioScreen}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Webview"
        component={WebviewScreen}
        options={{headerShown: true, title: null}}
      />
    </Stack.Navigator>
  );
};

export default DiscussNavigation;
