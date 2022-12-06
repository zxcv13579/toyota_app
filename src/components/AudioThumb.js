import React, {useContext, useState} from 'react';
import {Box, Text, Image, HStack, VStack} from 'native-base';
import TrackPlayer, {
  Event,
  State,
  useTrackPlayerEvents,
  usePlaybackState,
} from 'react-native-track-player';
import {GlobalContext} from 'src/globalContext';
import {TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {togglePlayBack, closePlayBack} from 'src/screens/AduioScreen';
import {useNavigation} from '@react-navigation/native';

const AudioThumb = () => {
  const {state, dispatch} = useContext(GlobalContext);
  const navigation = useNavigation();
  const playBackState = usePlaybackState();
  const [trackTitle, setTrackTitle] = useState('');
  const [trackArtist, setTrackArtist] = useState('');
  const [trackArtwork, setTrackArtwork] = useState('');

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    const track = await TrackPlayer.getTrack(event.nextTrack);
    const {title, artwork, artist} = track;
    setTrackTitle(title);
    setTrackArtist(artist);
    setTrackArtwork(artwork);
  });

  if (state.audioThumbVisibility === 'hidden') {
    return null;
  }

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        navigation.navigate('Audio', {
          track: state.currentAudioTrack,
          index: state.currentAudioTrack.currentIdx,
        });
      }}>
      <Box
        position="absolute"
        bottom="0"
        w="full"
        h="80px"
        bg="black"
        flex="1"
        px={4}>
        <HStack flex={1} space={4}>
          <Image
            source={trackArtwork}
            w="80px"
            h="full"
            alt="img"
            resizeMode="contain"
          />
          <VStack w={'50%'} justifyContent="center">
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize={18}
              color="white">
              {trackTitle}
            </Text>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              fontSize={14}
              color="white">
              {trackArtist}
            </Text>
          </VStack>
          <HStack alignItems="center" space={2}>
            <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
              <Ionicons
                name={playBackState === State.Playing ? 'md-pause' : 'md-play'}
                size={30}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                closePlayBack(playBackState);
                dispatch({type: 'setVisibility', payload: 'hidden'});
              }}>
              <Ionicons name={'md-close'} size={30} color="white" />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
    </TouchableOpacity>
  );
};

export default AudioThumb;
