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
                bgGradient="linear(to-br,orange.100, orange.300, orange.100, orange.300)"
                borderRadius="50px"
                p={10}
                my={32}
            >
                <VStack spacing={10} my={10}>
                    <Heading size="lg" bgClip="text" bgGradient="linear(to-r, #7928CA, #FF0080)" my={10}>
                        {personalInfo[0][0]}
                        {personalInfo[1] === '1' ? '先生' : '小姐'}您好，您的選填結果如下表：
                    </Heading>
                    <TableContainer
                        border="2px"
                        w="max-content"
                        borderColor="orange.500"
                        borderRadius="30px"
                        bgColor="blue.300"
                    >
                        <Table variant="striped" size="lg" colorScheme="purple">
                            <Thead>
                                <Tr>
                                    <Th fontSize="lg">題號</Th>
                                    <Th fontSize="lg">選擇的選項</Th>
                                </Tr>
                            </Thead>
                            <TBody />
                        </Table>
                    </TableContainer>
                </VStack>
                <Flex justify="space-around" p={10}>
                    <Button
                        colorScheme="green"
                        variant="link"
                        leftIcon={<ArrowLeftIcon />}
                        size="lg"
                        onClick={() => {
                            navigate('/survey/Q07')
                        }}
                    >
                        返回修改
                    </Button>
                    <Button
                        colorScheme="green"
                        variant="link"
                        rightIcon={<ArrowRightIcon />}
                        size="lg"
                        onClick={() => {
                            navigate('/survey/Q07')
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
