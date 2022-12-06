import React, {useCallback} from 'react';
import {Box, FlatList, HStack, Image, Text, VStack, Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import video_1 from '../../../images/discuss/video/video_1.jpg';
import video_2 from '../../../images/discuss/video/video_2.jpg';

const videoData = [
  {
    imgSource: video_1,
    title: 'Toyota Vios 小改款大進化 7氣囊上身 試駕',
    timer: '0:55',
    date: '2020-10-24',
    uri: 'https://www.youtube.com/watch?v=gRZ5gFEI7u4&ab_channel=%E5%85%A8%E6%B0%91%E7%98%8B%E8%BB%8ABar',
  },
  {
    imgSource: video_2,
    title: 'Toyota Vios 小型房車銷售王 經濟實惠高CP選',
    timer: '1:08',
    date: '2020-7-28',
    uri: 'https://www.youtube.com/watch?v=M0fwMnAEEdg&ab_channel=%E5%9C%B0%E7%90%83%E9%BB%83%E9%87%91%E7%B7%9A',
  },
];

const ItemComponent = ({imgSource, title, timer, date, uri, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(uri, title)}>
      <HStack bg="#fff" mb={4}>
        <Box w="168px" h="96px">
          <Image
            w="100%"
            h="100%"
            source={imgSource}
            alt="img"
            resizeMode="contain"
          />
          <HStack
            position="absolute"
            left="6px"
            bottom="4px"
            alignItems="center"
            space={2}>
            <Icon as={Ionicons} name={'ios-videocam'} size="5" color="white" />
            <Text fontSize={14} color="white">
              {timer}
            </Text>
          </HStack>
        </Box>
        <Box flex={1} px={4} py={2}>
          <Text
            noOfLines={3}
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

const Commentary = () => {
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
        data={videoData}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <ItemComponent {...item} onPress={handleJump} />
        )}
      />
    </VStack>
  );
};

export default Commentary;
