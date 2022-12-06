import {Center, Text} from 'native-base';
import React from 'react';

const StatusBox = ({children, ...props}) => {
  return (
    <Center {...props} w="50px" h="24px" borderRadius={20}>
      <Text color="white" fontSize={14}>
        {children}
      </Text>
    </Center>
  );
};

export default StatusBox;
