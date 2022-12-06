import React from 'react';
import {Box, HStack, Image, VStack, ScrollView} from 'native-base';
import {SIZE} from 'src/utils';
import banner from 'src/images/discuss/banner.jpg';
import HomeStackBtn from 'src/components/discuss/DiscussHomeStackBtn';
import {stackBtnData} from 'src/components/discuss/constants';

const DiscussScreen = () => {
  return (
    <Box safe flex={1}>
      <Box>
        <Image
          source={banner}
          resizeMode="contain"
          style={{width: SIZE.width, height: SIZE.width * 0.58}}
          alt="banner"
        />
      </Box>

      <ScrollView bg="#CCC" flex={1} borderTopRadius={25} mt={-5} p={4}>
        <VStack space={4} w="100%" mx="auto">
          <HStack flex={1} justifyContent="space-between">
            <HomeStackBtn {...stackBtnData[0]}>車輛型錄</HomeStackBtn>
            <HomeStackBtn {...stackBtnData[1]}>商品亮點</HomeStackBtn>
          </HStack>
          <HStack flex={1} justifyContent="space-between">
            <HomeStackBtn {...stackBtnData[2]}>競品比較</HomeStackBtn>
            <HomeStackBtn {...stackBtnData[3]}>安全科技</HomeStackBtn>
          </HStack>
          <HStack flex={1} justifyContent="space-between">
            <HomeStackBtn {...stackBtnData[4]}>相關影音</HomeStackBtn>
            <HomeStackBtn {...stackBtnData[5]}>分期貸款</HomeStackBtn>
            <HomeStackBtn {...stackBtnData[6]}>規費試算</HomeStackBtn>
          </HStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default DiscussScreen;
