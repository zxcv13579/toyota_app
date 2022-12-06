import React, {useCallback} from 'react';
import {Linking, TouchableOpacity} from 'react-native';
import {HStack, Text} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HelperLink = ({children, ...props}) => {
  const handleOpenUrl = useCallback(url => {
    Linking.openURL(url);
  }, []);
  return (
    <TouchableOpacity onPress={() => handleOpenUrl(props.url)}>
      <HStack
        bg="white"
        w="full"
        py={4}
        px={6}
        justifyContent="space-between"
        alignItems="center">
        <Text fontSize={20}>{children}</Text>
        <Ionicons name="arrow-redo" size={25} />
      </HStack>
    </TouchableOpacity>
  );
};

export default HelperLink;
