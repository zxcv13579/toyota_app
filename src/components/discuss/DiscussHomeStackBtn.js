import React, {useContext} from 'react';
import {GlobalContext} from 'src/globalContext';
import {Text, Center, Box} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeStackBtn = ({Icon, w, text, route, bg, color, children}) => {
  const {dispatch} = useContext(GlobalContext);
  const navigation = useNavigation();
  return (
    <Box
      w={w}
      h={105}
      bg={bg ? bg : 'white'}
      borderRadius={15}
      justifyContent="center">
      <TouchableOpacity
        onPress={() => {
          dispatch({type: 'setBackTitle', payload: text});
          navigation.navigate('Tab', {screen: route, title: text});
        }}>
        <Center>
          {Icon}
          <Text mt={2} color={color} fontSize="lg">
            {children}
          </Text>
        </Center>
      </TouchableOpacity>
    </Box>
  );
};

export default HomeStackBtn;
