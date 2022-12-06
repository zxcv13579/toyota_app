import {Box} from 'native-base';
import React from 'react';
import WebView from 'react-native-webview';

const WebviewScreen = ({route, navigation}) => {
  const {uri, title} = route.params;
  return (
    <Box flex={1}>
      <WebView
        source={{uri: uri}}
        startInLoadingState
        onLoad={() => {
          navigation.setOptions({
            title: title,
          });
        }}
      />
    </Box>
  );
};

export default WebviewScreen;
