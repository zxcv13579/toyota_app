import React from 'react';
import {Box, HStack, Modal, Text, VStack} from 'native-base';
import {SIZE} from 'src/utils';
import {transferStatus} from './constants';

const LoanModal = ({
  open,
  onClose,
  name,
  carType,
  period,
  payMonth,
  status,
  companyPayDate,
  userPayDate,
}) => {
  return (
    <Modal isOpen={open} onClose={onClose}>
      <Modal.Content width={SIZE.width * 0.9} borderRadius={10}>
        <Modal.CloseButton />
        <Modal.Header>
          <Text textAlign="center" fontSize={24} color="">
            案件說明
          </Text>
        </Modal.Header>
        <Modal.Body>
          <VStack w="full" space={4}>
            <HStack flex={1} space={4} px={4} alignItems="center">
              <Text flex={1} fontSize={18} color="#2F3A42" textAlign="right">
                客戶姓名
              </Text>
              <Box
                w="45%"
                bg="#ebebeb"
                justifyContent="center"
                alignItems="center"
                p={1}>
                <Text fontSize={16}>{name}</Text>
              </Box>
            </HStack>
            <HStack flex={1} space={4} px={4} alignItems="center">
              <Text flex={1} fontSize={18} color="#2F3A42" textAlign="right">
                車型
              </Text>
              <Box
                w="45%"
                bg="#ebebeb"
                justifyContent="center"
                alignItems="center"
                p={1}>
                <Text fontSize={16}>{carType}</Text>
              </Box>
            </HStack>
            <HStack flex={1} space={4} px={4} alignItems="center">
              <Text flex={1} fontSize={18} color="#2F3A42" textAlign="right">
                期數
              </Text>
              <Box
                w="45%"
                bg="#ebebeb"
                justifyContent="center"
                alignItems="center"
                p={1}>
                <Text fontSize={16}>{period}</Text>
              </Box>
            </HStack>
            <HStack flex={1} space={4} px={4} alignItems="center">
              <Text flex={1} fontSize={18} color="#2F3A42" textAlign="right">
                月付款
              </Text>
              <Box
                w="45%"
                bg="#ebebeb"
                justifyContent="center"
                alignItems="center"
                p={1}>
                <Text fontSize={16}>{payMonth}</Text>
              </Box>
            </HStack>
            <HStack flex={1} space={4} px={4} alignItems="center">
              <Text flex={1} fontSize={18} color="#2F3A42" textAlign="right">
                案件狀態
              </Text>
              <Box
                w="45%"
                bg="#ebebeb"
                justifyContent="center"
                alignItems="center"
                p={1}>
                <Text fontSize={16}>{transferStatus[status]}</Text>
              </Box>
            </HStack>
            <HStack flex={1} space={4} px={4} alignItems="center">
              <Text flex={1} fontSize={18} color="#2F3A42" textAlign="right">
                和潤財務撥款日
              </Text>
              <Box
                w="45%"
                bg="#ebebeb"
                justifyContent="center"
                alignItems="center"
                p={1}>
                <Text fontSize={16}>{companyPayDate}</Text>
              </Box>
            </HStack>
            <HStack flex={1} space={4} px={4} alignItems="center">
              <Text flex={1} fontSize={18} color="#2F3A42" textAlign="right">
                車主每月付款日
              </Text>
              <Box
                w="45%"
                bg="#ebebeb"
                justifyContent="center"
                alignItems="center"
                p={1}>
                <Text fontSize={16}>{userPayDate}</Text>
              </Box>
            </HStack>
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default LoanModal;
