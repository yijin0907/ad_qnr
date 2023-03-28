import { Table, Thead, Tr, Th, TableContainer, Heading, VStack, Box, Button, Flex } from '@chakra-ui/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

import { useAppSelector } from 'hooks'
import TBody from './TBody'

const ResultTable: React.FC = () => {
    const qnrReducer = useAppSelector((state) => state.qnrReducer)
    const personalInfo = qnrReducer.personalList
    const navigate = useNavigate()

    return (
        <>
            <Box
                w="100%"
                // bgGradient="linear(to-br,orange.100, orange.300, orange.100, orange.300)"
                // borderRadius="20px"
                // border="1px"
                // bgColor="#6096BA"
                // p={10}
                // my={20}
            >
                <VStack spacing={10} my={10}>
                    <Heading size="lg" bgClip="text" bgGradient="linear(to-br, #6096BA, #8B8C89)" my={10}>
                        {personalInfo[0][0]}
                        {personalInfo[1] === '1' ? '先生' : '小姐'}您好，您的選填結果如下表：
                    </Heading>
                    <TableContainer
                        border="2px"
                        w="max-content"
                        borderColor="#6096BA"
                        borderRadius="20px"
                        bgColor="#A3CEF1"
                    >
                        <Table variant="striped" size="lg">
                            <Thead>
                                <Tr>
                                    <Th color="#8B8C89" fontSize="lg">
                                        題號
                                    </Th>
                                    <Th color="#8B8C89" fontSize="lg">
                                        選擇的選項
                                    </Th>
                                </Tr>
                            </Thead>
                            <TBody />
                        </Table>
                    </TableContainer>
                </VStack>
                <Flex justify="space-around" p={10}>
                    <Button
                        colorScheme="whiteAlpha"
                        bgColor="#B9BAB8"
                        leftIcon={<ArrowLeftIcon />}
                        size="lg"
                        onClick={() => {
                            navigate('/survey/Q07')
                        }}
                        _hover={{
                            colorScheme: 'whiteAlpha',
                            bgColor: '#6096BA',
                        }}
                    >
                        返回修改
                    </Button>
                    <Button
                        colorScheme="whiteAlpha"
                        bgColor="#B9BAB8"
                        rightIcon={<ArrowRightIcon />}
                        size="lg"
                        onClick={() => {
                            navigate('/result/csqrcode')
                        }}
                        _hover={{
                            colorScheme: 'whiteAlpha',
                            bgColor: '#6096BA',
                        }}
                    >
                        確認送出
                    </Button>
                </Flex>
            </Box>
        </>
    )
}

export default ResultTable
