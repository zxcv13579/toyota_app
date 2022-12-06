import React, {useEffect, useState, useContext, useCallback} from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {VStack, Box, Image, Center, Text, HStack} from 'native-base';
import Slider from '@react-native-community/slider';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TrackPlayer, {
  Capability,
  Event,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {GlobalContext} from 'src/globalContext';
import {songs} from 'src/components/AppPlayer';

export const togglePlayBack = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (playBackState === State.Playing) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
  }
};
export const closePlayBack = async playBackState => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if (currentTrack !== null) {
    if (playBackState === State.Playing) {
      await TrackPlayer.pause();
    }
  }
};
const playNextPrev = async prevOrNext => {
  if (prevOrNext === 'next') {
    await TrackPlayer.skipToNext();
  }
  if (prevOrNext === 'prev') {
    await TrackPlayer.skipToPrevious();
  }
};

const setupPlayer = async () => {
  try {
    await TrackPlayer.setupPlayer();
    // Media controls capabilities
    await TrackPlayer.updateOptions({
      capabilities: [
        Capability.Play,
        Capability.Pause,
        Capability.SkipToNext,
        Capability.SkipToPrevious,
        Capability.Stop,
      ],
      // Capabilities that will show up when the notification is in the compact form on Android
      compactCapabilities: [Capability.Play, Capability.Pause],
    });
    await TrackPlayer.add(songs);
    TrackPlayer.play();
  } catch (error) {
    console.log(error);
  }
};

function AudioScreen({route}) {
  const {track, index} = route.params;
  const {state, dispatch} = useContext(GlobalContext);
  const playBackState = usePlaybackState();
  const progress = useProgress();
  const [routeAudioIndex, setRouteAudioIndex] = useState(index); // later use props
  const [trackTitle, setTrackTitle] = useState(track.title);
  const [trackArtist, setTrackArtist] = useState(track.artist);
  const [trackArtwork, setTrackArtwork] = useState(track.artwork);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack !== null) {
      const track = await TrackPlayer.getTrack(event.nextTrack);
      const {title, artwork, artist} = track;
      setTrackTitle(title);
      setTrackArtist(artist);
      setTrackArtwork(artwork);
      dispatch({
        type: 'setCurrentAudioTrack',
        payload: {currentIdx: event.nextTrack, title, artwork, artist},
      });
    }
  });

  const changeSongIndex = useCallback(direction => {
    setRouteAudioIndex(prevIndex => {
      let index;
      switch (direction) {
        case 'prev':
          index = prevIndex - 1 >= 0 ? prevIndex - 1 : songs.length - 1;
          break;
        case 'next':
          index = prevIndex + 1 >= songs.length ? 0 : prevIndex + 1;
          break;
        default:
          break;
      }
      skipTo(index);
      return index;
    });
  }, []);
  const skipTo = async trackId => {
    await TrackPlayer.skip(trackId);
  };

  // useEffect(() => {
  // setupPlayer();
  // dispatch({type: 'setVisibility', payload: 'visible'});
  // }, [dispatch]);
  // 離開前，記錄目前的 index
  // useEffect(() => {
  //   return () =>
  //     dispatch({type: 'setCurrentAudioIndex', payload: routeAudioIndex});
  // }, [dispatch, routeAudioIndex]);

  // 再次進入時，檢查 params 的 id 與 useContext 是否相符

  useEffect(() => {
    (async () => {
      const currentIndex = await TrackPlayer.getCurrentTrack();
      const {title, artwork, artist} = track;
      if (index !== currentIndex) {
        TrackPlayer.pause();
        TrackPlayer.skip(index);
      }
      dispatch({type: 'setVisibility', payload: 'visible'});
      dispatch({
        type: 'setCurrentAudioTrack',
        payload: {currentIdx: index, title, artwork, artist},
      });
    })();
  }, [index, track, dispatch]);

  return (
    <VStack flex={1} p={4} bg="warmGray.800">
      <Center>
        <Box w={300} h={340} mb={6}>
          <Image
            source={trackArtwork}
            w="full"
            h="full"
            alt="img"
            borderRadius={20}
          />
        </Box>
        <Text fontWeight="bold" fontSize={24} color="white">
          {trackTitle}
          {state.currentAudioIndex}
        </Text>
        <Text fontSize={16} color="white">
          {trackArtist}
        </Text>
        <Slider
          style={styles.progressBar}
          value={progress.position}
          minimumValue={0}
          maximumValue={progress.duration}
          thumbTintColor="#FFD369"
          minimumTrackTintColor="#FFD369"
          maximumTrackTintColor="#fff"
          onSlidingComplete={async value => {
            await TrackPlayer.seekTo(value);
          }}
        />
        <HStack w="full" justifyContent="space-between">
          <Text color="white">
            {new Date(progress.position * 1000).toISOString().slice(14, 19)}
          </Text>
          <Text color="white">
            {new Date((progress.duration - progress.position) * 1000)
              .toISOString()
              .slice(14, 19)}
          </Text>
        </HStack>
        <HStack alignItems="center" space={10} mt={20}>
          <TouchableOpacity
            onPress={() => {
              // changeSongIndex('prev');
              playNextPrev('prev');
            }}>
            <Ionicons name="md-play-back-outline" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => togglePlayBack(playBackState)}>
            <Ionicons
              name={
                playBackState === State.Playing
                  ? 'md-pause-circle'
                  : 'md-play-circle'
              }
              size={60}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // changeSongIndex('next');
              playNextPrev('next');
            }}>
            <Ionicons name="md-play-forward-outline" size={40} color="white" />
          </TouchableOpacity>
        </HStack>
      </Center>
    </VStack>
  );
}

const styles = StyleSheet.create({
  progressBar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row',
  },
});

export default AudioScreen;
