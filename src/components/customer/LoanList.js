import React from 'react';
import {Center, HStack, Text} from 'native-base';
import {loanStatus} from './constants';
import {TouchableOpacity} from 'react-native';

const LoanList = ({name, carType, status, money, isEven, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack flex={1} justifyContent="space-between" alignItems="center">
        <Center w="30%" bg={isEven ? '#E5E5E5' : 'white'} py={2}>
          <Text fontSize={16}>{name}</Text>
        </Center>
        <Center w="19%" bg={isEven ? '#E5E5E5' : 'white'} py={2}>
          <Text fontSize={16}>{carType}</Text>
        </Center>
        <Center w="19%" bg={isEven ? '#E5E5E5' : 'white'} py={2}>
          {loanStatus[status]}
        </Center>
        <Center w="30%" bg={isEven ? '#E5E5E5' : 'white'} py={2}>
          <Text fontSize={16}>{money}</Text>
        </Center>
      </HStack>
    </TouchableOpacity>
  );
};

export default LoanList;
