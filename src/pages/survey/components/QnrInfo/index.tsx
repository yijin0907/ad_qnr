import { FormLabel, FormHelperText, CardHeader, FormControl, Text, HStack, Flex } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'

type qnrInfoProps = {
    qnrId: string
    topicInfo: string
    qnrDescription: string
}

const QnrInfo: React.FC<qnrInfoProps> = ({ qnrId, topicInfo, qnrDescription }) => {
    const qId: number = parseInt(qnrId.slice(2))

    return (
        <>
            <FormControl color="#8B8C89">
                <CardHeader p={10}>
                    <Flex justifyContent="right">
                        <HStack spacing={2}>
                            <EditIcon boxSize={6} />
                            <Text fontSize="2xl" as="b">
                                {qnrId}
                            </Text>
                        </HStack>
                    </Flex>
                    <FormLabel mt={30} fontSize="lg">
                        {topicInfo}
                    </FormLabel>
                    {qId > 0 && qId < 7 ? (
                        <FormHelperText color="#b9bab8">{`《${qnrDescription}》`}</FormHelperText>
                    ) : null}
                </CardHeader>
            </FormControl>
        </>
    )
}

export default QnrInfo
