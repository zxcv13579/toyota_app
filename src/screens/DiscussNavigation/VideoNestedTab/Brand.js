import React, {useCallback} from 'react';
import {Box, FlatList, HStack, Image, Text, VStack} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const brandData = [
  {
    imgSource:
      'https://hotaicdn.azureedge.net/toyotaweb/NEWS_20220822145032A5GAG921.jpg',
    title: 'ALL NEW TOYOTA GR86',
    date: '2022.08.18',
    uri: 'https://www.toyota.com.tw/news_detail.aspx?id=789',
  },
  {
    imgSource:
      'https://hotaicdn.azureedge.net/toyotaweb/NEWS_20220517162844E1I56JC9.jpg',
    title: '「純電世代 移動新典範」',
    date: '2022.05.17',
    uri: 'https://www.toyota.com.tw/news_detail.aspx?id=753',
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

const Brand = () => {
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
        data={brandData}
        keyExtractor={item => item.title}
        renderItem={({item}) => (
          <ItemComponent {...item} onPress={handleJump} />
        )}
      />
    </VStack>
  );
};

export default Brand;
