import React from 'react';
import {VStack} from 'native-base';
import HelperLink from 'components/customer/HelperLink';

const DeliveryScreen = () => {
  return (
    <VStack py={4} space={2}>
      <HelperLink url="maps://app">農民暦交車、牽車吉日</HelperLink>
      <HelperLink url="https://www.ximizi.net/">科技紫微網</HelperLink>
      <HelperLink url="https://www.zhanbuwang.com/">
        農民暦-專業擇吉日APP下載
      </HelperLink>
      <HelperLink url="https://www.zhanbuwang.com/">
        開運農民暦-黃暦吉日APP下載
      </HelperLink>
    </VStack>
  );
};

export default DeliveryScreen;
