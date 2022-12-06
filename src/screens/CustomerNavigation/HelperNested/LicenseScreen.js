import React from 'react';
import {VStack} from 'native-base';
import HelperLink from 'components/customer/HelperLink';

const LicenseScreen = () => {
  return (
    <VStack py={4} space={2}>
      <HelperLink url="maps://app">八字算命網</HelperLink>
      <HelperLink url="https://www.ximizi.net/">喜蜜滋算命</HelperLink>
      <HelperLink url="https://www.zhanbuwang.com/">車牌吉凶APP下載</HelperLink>
      <HelperLink url="https://www.zhanbuwang.com/">
        監理服務網選號網站
      </HelperLink>
    </VStack>
  );
};

export default LicenseScreen;
