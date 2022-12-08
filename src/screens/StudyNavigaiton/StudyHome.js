import React from 'react';
import {Box, Text} from 'native-base';
import WaterMark from 'src/components/WaterMark';

const StudyScreen = () => {
  return (
    <WaterMark
      bg={'#25262B'}
      text={['AA08008\n王小明', '禁止展示\n與外流']}
      width={130}
      height={150}
      rotateZ={-45}
      textColor={'rgba(255,255,255,.2)'}
      fontSize={24}>
      <Box safeArea p={4}>
        <Text color="amber.300">ssdf</Text>
      </Box>
    </WaterMark>
  );
};

export default StudyScreen;
