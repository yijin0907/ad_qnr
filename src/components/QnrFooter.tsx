import { Container, Box, Text, HStack, Flex, Spacer } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon, PlusSquareIcon } from '@chakra-ui/icons'

const QnrFooter: React.FC = () => {
    return (
        <>
            <Container maxW="1280px" m={[0, 'auto']} p={10} bgColor="#274c77">
                <Flex minWidth="max-content" alignItems="center">
                    <Box>
                        <Text color="whiteAlpha.900">米數醫資股份有限公司©版權所有 MedSig Ltd.</Text>
                    </Box>
                    <Spacer />
                    <Box>
                        <HStack pb={3}>
                            <PlusSquareIcon color="whiteAlpha.900" />
                            <Text color="whiteAlpha.900">台北市中正區北平西路3號4樓4085室</Text>
                        </HStack>
                        <HStack pb={3}>
                            <EmailIcon color="whiteAlpha.900" />
                            <Text color="whiteAlpha.900">medsig4085@gmail.com</Text>
                        </HStack>
                        <HStack>
                            <PhoneIcon color="whiteAlpha.900" />
                            <Text color="whiteAlpha.900">02-23811717</Text>
                        </HStack>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

export default QnrFooter
