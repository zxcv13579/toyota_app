import {HStack, Image, Text, VStack} from 'native-base';
import React from 'react';
import {TouchableOpacity} from 'react-native';

const MenuItem = ({name, description, img, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack bg="#fff" p={2} borderRadius={10} mb={4}>
        <Image
          source={img}
          width={'138px'}
          height={'80px'}
          alt={'img'}
          resizeMode="contain"
        />
        <VStack justifyContent="center" flex={1} space={1}>
          <Text fontSize={18} fontWeight="bold">
            {name}
          </Text>
          <Text fontSize={14} color="#4B4B4B">
            {description}
          </Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default MenuItem;
