import React, {useState} from 'react';
import {Box, HStack, Text, VStack, Input, Center} from 'native-base';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useBackTitle from 'src/hooks/useBackTitle';

const OptionsBox = ({title, setAnswer, active, type, nested, children}) => {
  return (
    <VStack space={2}>
      <HStack justifyContent="space-between" alignItems="center">
        <Text fontSize={20}>{title}</Text>
        {nested ? (
          <Text fontSize={12} color="#576071">
            {nested}
          </Text>
        ) : null}
      </HStack>
      <HStack flex={1} justifyContent="space-between">
        {React.Children.map(children, child => {
          if (type === 'input') {
            return (
              <Box
                w={children.length > 1 ? '48%' : '100%'}
                borderRadius={20}
                alignItems="center"
                p={2}
                bg={active === child.props.answer ? '#636770' : 'white'}
                borderWidth={1}
                borderColor="#636770">
                {children}
              </Box>
            );
          }
          return (
            <TouchableWithoutFeedback
              activeOpacity={1}
              onPress={() => setAnswer(child.props.answer)}>
              <Box
                w={children.length > 1 ? '48%' : '100%'}
                borderRadius={20}
                alignItems="center"
                p={2}
                bg={active === child.props.answer ? '#636770' : 'white'}
                borderWidth={1}
                borderColor="#636770">
                {React.cloneElement(child, {
                  ...child.props,
                  nested,
                  active: active === child.props.answer,
                })}
              </Box>
            </TouchableWithoutFeedback>
          );
        })}
      </HStack>
    </VStack>
  );
};
const Options = ({answer, active}) => {
  return (
    <Text fontSize={16} color={active ? 'white' : '#636770'}>
      {answer}
    </Text>
  );
};

const CalculateScreen = ({navigation}) => {
  useBackTitle(navigation, '????????????');
  const [toggleScreen, setToggleScreen] = useState(true);
  const [q1, setQ1] = useState('');
  const [q2, setQ2] = useState('');
  const [q3, setQ3] = useState('');
  const [q4, setQ4] = useState('');
  const [q5, setQ5] = useState('');
  const [q6, setQ6] = useState('');
  const [q7, setQ7] = useState('');
  return (
    <KeyboardAwareScrollView>
      <ScrollView flex={1}>
        {toggleScreen ? (
          <VStack flex={1} p={4} space={6}>
            <OptionsBox title="1. ????????????" setAnswer={setQ1} active={q1}>
              <Options answer="?????????" />
              <Options answer="??????" />
            </OptionsBox>
            <OptionsBox title="2. ????????????" setAnswer={setQ2} active={q2}>
              <Options answer="?????????" />
              <Options answer="????????????" />
            </OptionsBox>
            <OptionsBox title="3. ????????????" setAnswer={setQ3} active={q3}>
              <Options answer="??????" />
              <Options answer="??????" />
            </OptionsBox>
            <OptionsBox title="4. ????????????" setAnswer={setQ4} active={q4}>
              <Options answer="?????????" />
              <Options answer="????????????" />
            </OptionsBox>
            <OptionsBox
              title="5. ???????????????"
              setAnswer={setQ5}
              active={q5}
              nested='??? ?????????????????? "???"'>
              <Options answer="???" />
              <Options answer="???" />
            </OptionsBox>
            <OptionsBox
              title="6. ??????????????????"
              setAnswer={setQ6}
              active={q6}
              nested='??? ??????????????? "???"'>
              <Options answer="???" />
              <Options answer="???" />
            </OptionsBox>
            <OptionsBox
              title="7. ????????????"
              setAnswer={setQ7}
              active={q7}
              type="input">
              <Input
                placeholder="????????????????????????"
                borderWidth="0"
                fontSize={20}
                p={0}
                isReadOnly
                textAlign="center"
                value="1250"
                keyboardType="number-pad"
                _focus={{bg: 'white'}}
              />
            </OptionsBox>
            <Text fontSize={12} color="#576071" mt={-4} textAlign="center">
              ??? ???????????????????????? $450 / ?????? $200 / ?????? $600
            </Text>
          </VStack>
        ) : (
          <VStack p={4}>
            <Text textAlign="center" fontSize={24} mb={10}>
              ????????????
            </Text>
            <VStack
              w="full"
              borderRadius={10}
              borderColor="#46C6A4"
              borderWidth={2}
              p={6}
              bg="white"
              space={4}>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  ?????????
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>1600</Text>
                </Box>
                <Text fontSize={16}>???</Text>
              </HStack>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  ?????????
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>2374</Text>
                </Box>
                <Text fontSize={16}>???</Text>
              </HStack>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  ????????????
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>1250</Text>
                </Box>
                <Text fontSize={16}>???</Text>
              </HStack>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  ??????????????????
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>2000</Text>
                </Box>
                <Text fontSize={16}>???</Text>
              </HStack>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  ???????????????
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>3500</Text>
                </Box>
                <Text fontSize={16}>???</Text>
              </HStack>
            </VStack>
            <HStack flex={1} space={4} alignItems="center" px={6} mt={4}>
              <Text flex={1} fontSize={18} textAlign="right">
                ????????????
              </Text>
              <Text
                w="140px"
                fontWeight="bold"
                fontSize={28}
                textAlign="center">
                12724
              </Text>
              <Text>???</Text>
            </HStack>
          </VStack>
        )}

        <Center pb={100}>
          <TouchableOpacity onPress={() => setToggleScreen(prev => !prev)}>
            <Box
              w="160px"
              h="40px"
              bg="#46C6A4"
              borderRadius={40}
              justifyContent="center"
              alignItems="center">
              <Text color="white" fontSize={20}>
                {toggleScreen ? '????????????' : '????????????'}
              </Text>
            </Box>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};
export default CalculateScreen;
