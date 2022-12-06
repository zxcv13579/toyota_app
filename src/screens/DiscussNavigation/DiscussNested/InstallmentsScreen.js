import {
  Box,
  Center,
  HStack,
  Input,
  ScrollView,
  Select,
  Text,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import useBackTitle from 'src/hooks/useBackTitle';

const selectOptions = {
  months: [
    {
      value: '一月',
    },
    {
      value: '二月',
    },
    {
      value: '三月',
    },
    {
      value: '四月',
    },
    {
      value: '五月',
    },
    {
      value: '六月',
    },
    {
      value: '七月',
    },
    {
      value: '八月',
    },
    {
      value: '九月',
    },
    {
      value: '十月',
    },
    {
      value: '十一月',
    },
    {
      value: '十二月',
    },
  ],
  money: [
    {value: '1 萬 ~ 20 萬'},
    {value: '20 萬 ~ 40 萬'},
    {value: '40 萬 ~ 60 萬'},
    {value: '60 萬 ~ 80 萬'},
    {value: '80 萬 ~ 100 萬'},
  ],
  long: [
    {value: '10 期'},
    {value: '20 期'},
    {value: '30 期'},
    {value: '40 期'},
    {value: '50 期'},
    {value: '60 期'},
  ],
};

const OptionsBox = ({title, children}) => {
  return (
    <VStack space={2}>
      <Text fontSize={20}>{title}</Text>
      <HStack flex={1} justifyContent="space-between">
        {children}
      </HStack>
    </VStack>
  );
};

const CustomInput = props => {
  return (
    <Input
      flex={1}
      keyboardType="number-pad"
      borderRadius={15}
      h={'40px'}
      fontSize={18}
      textAlign="center"
      bg="white"
      borderWidth={1}
      borderColor="#9E9E9E"
      _focus={{
        bg: 'white',
        borderColor: '#9E9E9E',
      }}
      {...props}
    />
  );
};

const CustomSelect = ({placeholder, selects}, props) => {
  return (
    <Select
      minWidth="full"
      accessibilityLabel={placeholder}
      placeholder={placeholder}
      borderRadius={15}
      fontSize={18}
      textAlign="center"
      bg="white"
      borderWidth={1}
      borderColor="#9E9E9E"
      _focus={{
        bg: 'white',
        borderColor: '#9E9E9E',
      }}
      {...props}>
      {selects.map(({value}, index) => (
        <Select.Item key={index} label={value} value={value} />
      ))}
    </Select>
  );
};

const InstallmentsScreen = ({navigation}) => {
  useBackTitle(navigation, '分期貸款');
  const [toggleScreen, setToggleScreen] = useState(true);
  return (
    <KeyboardAwareScrollView>
      <ScrollView flex={1}>
        {toggleScreen ? (
          <VStack flex={1} p={4} space={6}>
            <OptionsBox title="1. 車輛總成交價">
              <CustomInput placeholder="請輸入車輛成交金額" />
            </OptionsBox>
            <OptionsBox title="2. 月份">
              <CustomSelect
                placeholder="請選擇"
                selects={selectOptions['months']}
              />
            </OptionsBox>
            <OptionsBox title="3. 標準金額/期數">
              <CustomInput isReadOnly value="60 萬 / 30 期" />
            </OptionsBox>
            <OptionsBox title="4. 貸款金額">
              <CustomSelect
                placeholder="請選擇"
                selects={selectOptions['money']}
              />
            </OptionsBox>
            <OptionsBox title="5. 貸款金額">
              <CustomSelect
                placeholder="請選擇"
                selects={selectOptions['money']}
              />
            </OptionsBox>
            <OptionsBox title="6. 貸款期數">
              <CustomSelect
                placeholder="請選擇"
                selects={selectOptions['long']}
              />
            </OptionsBox>
          </VStack>
        ) : (
          <VStack p={4}>
            <Text textAlign="center" fontSize={24} mb={10}>
              試算結果
            </Text>
            <VStack
              w="full"
              borderRadius={10}
              borderColor="#FF9C29"
              borderWidth={2}
              p={6}
              bg="white"
              space={4}>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  頭期款
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>1600</Text>
                </Box>
                <Text fontSize={16}>元</Text>
              </HStack>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  月付款
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>2374</Text>
                </Box>
                <Text fontSize={16}>元</Text>
              </HStack>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  客戶利率
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>1250</Text>
                </Box>
                <Text fontSize={16}>元</Text>
              </HStack>
              <HStack flex={1} space={4} alignItems="center">
                <Text flex={1} fontSize={18} textAlign="right">
                  總利息金額
                </Text>
                <Box
                  w="140px"
                  bg="#F6F7FB"
                  justifyContent="center"
                  alignItems="center"
                  p={1}>
                  <Text fontSize={16}>2000</Text>
                </Box>
                <Text fontSize={16}>元</Text>
              </HStack>
            </VStack>
          </VStack>
        )}

        <Center pb={100}>
          <TouchableOpacity onPress={() => setToggleScreen(prev => !prev)}>
            <Box
              w="160px"
              h="40px"
              bg="#FF9C29"
              borderRadius={40}
              justifyContent="center"
              alignItems="center">
              <Text color="white" fontSize={20}>
                {toggleScreen ? '立即計算' : '重新計算'}
              </Text>
            </Box>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

export default InstallmentsScreen;
