import MenuIcon from 'src/images/discuss/menu.svg';
import LightIcon from 'src/images/discuss/light.svg';
import CompetingIcon from 'src/images/discuss/competing.svg';
import VideoIcon from 'src/images/discuss/video.svg';
import SafeIcon from 'src/images/discuss/safe.svg';
import InstallmentsIcon from 'src/images/discuss/installments.svg';
import CalculateIcon from 'src/images/discuss/calculate.svg';

export const stackBtnData = [
  {
    Icon: <MenuIcon />,
    w: '48%',
    bg: '#00BDD9',
    color: '#FFF',
    route: 'menu',
    text: '車款型錄',
  },
  {
    Icon: <LightIcon />,
    w: '48%',
    bg: '#0085DE',
    color: '#FFF',
    route: 'light',
    text: '商品亮點',
  },
  {
    Icon: <CompetingIcon />,
    w: '48%',
    bg: '#FF733F',
    color: '#FFF',
    route: 'competing',
    text: '競品比較',
  },
  {
    Icon: <SafeIcon />,
    w: '48%',
    bg: '#FF84BF',
    color: '#FFF',
    route: 'safe',
    text: '安全科技',
  },
  {
    Icon: <VideoIcon />,
    w: '30%',
    color: '#FF4A31',
    route: 'video',
    text: '相關影音',
  },
  {
    Icon: <InstallmentsIcon />,
    w: '30%',
    color: '#FF9C29',
    route: 'installments',
    text: '分期貸款',
  },
  {
    Icon: <CalculateIcon />,
    w: '30%',
    color: '#46C6A4',
    route: 'calculate',
    text: '規費試算',
  },
];
