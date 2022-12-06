import React, {useCallback} from 'react';
import {VStack, FlatList} from 'native-base';
import {carLists} from 'src/components/discuss/menu/constants';
import MenuItem from 'src/components/discuss/menu/MenuItem';
import useBackTitle from 'src/hooks/useBackTitle';

const MenuScreen = ({navigation}) => {
  useBackTitle(navigation, '車款型錄');
  const handelGoToPdf = useCallback(
    ({pdfSource, title}) => {
      navigation.navigate('Pdf', {pdfSource: pdfSource, title: title});
    },
    [navigation],
  );

  return (
    <VStack p={4} bg="#F6F7FB" flex={1}>
      <FlatList
        data={carLists}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <MenuItem
            {...item}
            onPress={() =>
              handelGoToPdf({pdfSource: item.pdf, title: item.name})
            }
          />
        )}
      />
    </VStack>
  );
};

export default MenuScreen;
