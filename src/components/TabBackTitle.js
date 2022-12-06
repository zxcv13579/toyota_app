import React, {useCallback, useContext} from 'react';
import {TouchableOpacity} from 'react-native';
import {Box, Text, Icon, HStack} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from 'src/globalContext';

const TabBackTitle = () => {
  const navigation = useNavigation();
  const {state} = useContext(GlobalContext);

  const goBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <TouchableOpacity onPress={goBack}>
      <HStack alignItems="center" space={3}>
        <Icon as={Ionicons} name={'ios-chevron-back-outline'} size="6" />
        <Box>
          <Text fontSize={22}>{state.backTitle}</Text>
        </Box>
      </HStack>
    </TouchableOpacity>
  );
};

export default TabBackTitle;
