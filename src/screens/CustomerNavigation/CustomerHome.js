import React, {useContext} from 'react';
import {
  Box,
  Text,
  Image,
  ScrollView,
  Center,
  VStack,
  HStack,
} from 'native-base';
import {SIZE} from 'src/utils';
import banner from 'src/images/customer/banner.jpg';
import {homeData} from 'src/components/customer/constants';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from 'src/globalContext';

const StackBtn = ({Icon, bg, route, text, children}) => {
  const {dispatch} = useContext(GlobalContext);
  const navigation = useNavigation();
  return (
    <Box w="48%" h={116} bg={bg} borderRadius={15} justifyContent="center">
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'setBackTitle', payload: text});
          navigation.navigate(route, {title: text});
        }}>
        <Center>
          {Icon}
          <Text mt={2} color="white" fontSize="lg">
            {children}
          </Text>
        </Center>
      </TouchableOpacity>
    </Box>
  );
};

const CustomerScreen = () => {
  return (
    <Box safe flex={1}>
      <Box>
        <Image
          source={banner}
          resizeMode="cover"
          style={{width: SIZE.width, height: SIZE.width * 0.58}}
          alt="banner"
        />
      </Box>

      <ScrollView bg="#CCC" flex={1} borderTopRadius={25} mt={-5} p={4}>
        <VStack space={4} w="100%" mx="auto">
          <HStack flex={1} justifyContent="space-between">
            <StackBtn {...homeData[0]}>儀表板燈號說明</StackBtn>
            <StackBtn {...homeData[1]}>配備操作影音庫</StackBtn>
          </HStack>
          <HStack flex={1} justifyContent="space-between">
            <StackBtn {...homeData[2]}>售後服務</StackBtn>
            <StackBtn {...homeData[3]}>貸款進度</StackBtn>
          </HStack>
          <HStack flex={1} justifyContent="space-between">
            <StackBtn {...homeData[4]}>新車／SP分享圖</StackBtn>
            <StackBtn {...homeData[5]}>交車小幫手</StackBtn>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default CustomerScreen;
