import TrackPlayer, {Capability} from 'react-native-track-player';

export const songs = [
  {
    id: 1,
    title: 'EP73｜王希文：讓劇場走進生活',
    artist: 'Lexus x VERSE｜MY WAY - 王希文',
    artwork: require('../images/discuss/audio/audio_1.jpeg'),
    url: 'https://d3mww1g1pfq2pt.cloudfront.net/Record/cknpv2wav04r208845jd0gwpj/cl7pyudrl05an01wi8kvy2aa6.mp3?v=1662455184750',
  },
  {
    id: 2,
    title: 'EP14｜吳庭安：創舊的循環經濟革命',
    artist: 'Lexus x VERSE｜MY WAY - 吳庭安',
    artwork: require('../images/discuss/audio/audio_2.jpeg'),
    url: 'https://d3mww1g1pfq2pt.cloudfront.net/Record/cknpv2wav04r208845jd0gwpj/1626918118992.mp3?v=1626918127601',
  },
  {
    id: 3,
    title: 'EP10｜阿泰呆呆：從爬山到走路的人',
    artist: 'Lexus x VERSE｜MY WAY - 阿泰呆呆',
    artwork: require('../images/discuss/audio/audio_3.jpeg'),
    url: 'https://d3mww1g1pfq2pt.cloudfront.net/Record/cknpv2wav04r208845jd0gwpj/1624354422378.mp3?v=1624354431902',
  },
];

class AppPlayer {
  static selectedTrack;
  static setupPlayer = async () => {
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
    } catch (error) {
      console.log(error);
    }
  };
}

export default AppPlayer;
