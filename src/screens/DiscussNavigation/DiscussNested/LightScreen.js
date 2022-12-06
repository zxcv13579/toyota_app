import React, {useCallback, useEffect} from 'react';
import {Box, FlatList, Image, Text, HStack} from 'native-base';
import AppPlayer, {songs} from 'src/components/AppPlayer';
import {TouchableOpacity} from 'react-native';
import useBackTitle from 'src/hooks/useBackTitle';

const AudioRenderItem = ({artwork, id, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack h="100px" bg="#fff" borderRadius={10} mb={4} alignItems="center">
        <Image
          source={artwork}
          w="160px"
          h="full"
          resizeMode="cover"
          alt="img"
        />
        <Text
          noOfLines={2}
          fontWeight="bold"
          fontSize={18}
          textAlign="center"
          flex="1">
          Podcast {id}
        </Text>
      </HStack>
    </TouchableOpacity>
  );
};

const LightScreen = ({navigation}) => {
  useBackTitle(navigation, '商品亮點');

  const handleJump = useCallback(
    async (item, index) => {
      navigation.navigate('Audio', {
        track: item,
        index: index,
      });
    },
    [navigation],
  );

  useEffect(() => {
    AppPlayer.setupPlayer();
  }, []);
  return (
    <Box flex={1} p={4}>
      <FlatList
        data={songs}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <AudioRenderItem {...item} onPress={() => handleJump(item, index)} />
        )}
      />
    </Box>
  );
};

export default LightScreen;
