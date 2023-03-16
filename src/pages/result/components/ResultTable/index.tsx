import { Table, Thead, Tr, Th, TableContainer, Heading, VStack } from '@chakra-ui/react'
import { useAppSelector } from 'hooks'
import TBody from './TBody'

const ResultTable: React.FC = () => {
    const qnrReducer = useAppSelector((state) => state.qnrReducer)
    const personalInfo = qnrReducer.personalList
    console.log(personalInfo)

    return (
        <>
            <VStack spacing={10}>
                <Heading size="lg" bgClip="text" bgGradient="linear(to-r, #7928CA, #FF0080)">
                    {personalInfo[0][0]}
                    {personalInfo[1] === '1' ? '先生' : '小姐'}您好，您的選填結果如下表：
                </Heading>
                <TableContainer
                    border="2px"
                    w="full"
                    borderColor="orange.500"
                    borderRadius="30px"
                    bgGradient="linear(to-br,orange.100, orange.300, orange.100, orange.300)"
                >
                    <Table variant="striped" size="lg" colorScheme="purple" overflowX="unset">
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
        </>
    )
}

export default ResultTable
