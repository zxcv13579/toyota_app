import React, {useCallback, useState} from 'react';
import {Box, Center, FlatList, HStack, Modal, Text, VStack} from 'native-base';
import {loanLists, loanStatus} from 'src/components/customer/constants';
import LoanList from 'src/components/customer/LoanList';
import LoanModal from 'src/components/customer/LoanModal';

const LoanScreen = () => {
  const [open, setOpen] = useState(false);
  const [modalInfo, setModalInfo] = useState({
    name: '',
    carType: '',
    period: '',
    payMonth: '',
    status: '',
    companyPayDate: '',
    userPayDate: '',
  });

  const handelModal = useCallback(data => {
    setModalInfo({...data});
    setOpen(true);
  }, []);
  return (
    <Box flex="1">
      <LoanModal open={open} onClose={setOpen} {...modalInfo} />
      <VStack>
        <HStack alignItems="center" space={2} p={4}>
          <Box w={3} h={3} borderRadius={50} bg="#F1001F" />
          <Text fontSize={12} color="#636770">
            案件狀態為：
          </Text>
          {Object.entries(loanStatus).map(([key, value]) => (
            <React.Fragment key={key}>{value}</React.Fragment>
          ))}
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <Center w="30%" bg="#E5E5E5" py={2}>
            <Text fontSize={16}>客戶姓名</Text>
          </Center>
          <Center w="19%" bg="#E5E5E5" py={2}>
            <Text fontSize={16}>車型</Text>
          </Center>
          <Center w="19%" bg="#E5E5E5" py={2}>
            <Text fontSize={16}>狀態</Text>
          </Center>
          <Center w="30%" bg="#E5E5E5" py={2}>
            <Text fontSize={16}>貸款金額</Text>
          </Center>
        </HStack>
      </VStack>
      <Box flex={1}>
        <FlatList
          data={loanLists}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => (
            <LoanList
              {...item}
              isEven={index % 2}
              onPress={() => handelModal(item)}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default LoanScreen;
