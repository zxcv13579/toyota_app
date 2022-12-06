import React, {useMemo} from 'react';
import {Platform} from 'react-native';
import {Box} from 'native-base';
import Pdf from 'react-native-pdf';
import {SIZE} from 'src/utils';

const PdfScreen = ({route}) => {
  const {pdfSource} = route.params;
  const source = useMemo(() => {
    return {uri: pdfSource, cache: true};
  }, [pdfSource]);

  return (
    <Box flex={1}>
      <Pdf
        source={source}
        style={{
          flex: 1,
          width: SIZE.width,
          height: SIZE.height,
        }}
        trustAllCerts={Platform.OS === 'ios'}
      />
    </Box>
  );
};

export default PdfScreen;
