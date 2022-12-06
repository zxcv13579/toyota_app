import {Box} from 'native-base';
import React from 'react';
import WebView from 'react-native-webview';

const YtScreen = () => {
  return (
    <Box flex={1}>
      <WebView
        source={{
          uri: 'https://www.youtube.com/watch?v=nAL8FoDxgys&list=PLyTb-kSciZozd8XlcL-cALZU4scVRazPQ&ab_channel=TOYOTATW',
        }}
        startInLoadingState
        // onLoad={() => {
        //   navigation.setOptions({
        //     title: title,
        //   });
        // }}
      />
    </Box>
  );
};

export default YtScreen;
