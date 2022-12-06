import React from 'react';
import {NativeBaseProvider, StatusBar} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/RootNavigation';
import Global from './src/globalContext';

const GlobalContainer = ({children}) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
};
const App = () => {
  return (
    <GlobalContainer>
      <Global>
        <RootNavigation />
        <StatusBar />
      </Global>
    </GlobalContainer>
  );
};

export default App;
