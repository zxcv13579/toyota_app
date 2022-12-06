import React, {useCallback} from 'react';
import {Box, FlatList, HStack, Image, Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const evaluationData = [
  {
    imgSource:
      'https://attach.mobile01.com/attach/202212/mobile01-902dbdfc32b483e1fb83357a187f1d41.jpg',
    title:
      '【國內新訊】漲聲再起！Toyota今天宣佈2023年1月全車系調漲1~11萬元不等！',
    date: '2022/12/02',
    uri: 'https://www.mobile01.com/topicdetail.php?f=264&t=6705365',
  },
  {
    imgSource:
      'https://attach.mobile01.com/attach/202212/mobile01-b4a08a3053a3a1da376677ee6750b1d9.jpg',
    title:
      '【海外新訊】Toyota預告全新休旅Grand Highlander明年見，2月8日芝加哥車展亮相！',
    date: '2022-12-02',
    uri: 'https://www.mobile01.com/topicdetail.php?f=264&t=6705375',
  },
];

const ItemComponent = ({imgSource, title, date, uri, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(uri, title)}>
      <HStack bg="#fff" mb={4}>
        <Box w="168px" h="96px">
          <Image
            w="100%"
            h="100%"
            source={{
              uri: imgSource,
            }}
            alt="img"
            resizeMode="contain"
          />
        </Box>
        <Box flex={1} px={4} py={2}>
          <Text
            noOfLines={2}
            ellipsizeMode="tail"
            fontSize={16}
            color="#282831">
            {title}
          </Text>
          <Text position="absolute" bottom={2} left={4} color="#BEBEBE">
            {date}
          </Text>
        </Box>
      </HStack>
    </TouchableOpacity>
  );
};

const Evaluation = () => {
  const navigation = useNavigation();
  const handleJump = useCallback(
    (uri, title) => {
      navigation.navigate('Webview', {uri, title});
    },
    [navigation],
  );
  return (
    <VStack flex={1} py={4}>
      <FlatList
        data={evaluationData}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <ItemComponent {...item} onPress={handleJump} />
        )}
      />
    </VStack>
  );
};

export default Evaluation;
