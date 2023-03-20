import { Container, Box, Text, HStack, Flex, Spacer } from '@chakra-ui/react'
import { EmailIcon, PhoneIcon, PlusSquareIcon } from '@chakra-ui/icons'

const QnrFooter: React.FC = () => {
    return (
        <>
            <Container maxW="1280px" m={[0, 'auto']} p={10} bgGradient="linear(to-br,#c1dfc4, #deecdd)">
                <Flex minWidth="max-content" alignItems="center">
                    <Box>
                        <Text color="blackAlpha.600">米數醫資股份有限公司©版權所有 MedSig Ltd.</Text>
                        <HStack>
                            <PlusSquareIcon color="blackAlpha.600" />
                            <Text color="blackAlpha.600">台北市中正區北平西路3號4樓4085室</Text>
                        </HStack>
                    </Box>
                    <Spacer />
                    <Box>
                        <HStack>
                            <EmailIcon color="blackAlpha.600" />
                            <Text color="blackAlpha.600">medsig4085@gmail.com</Text>
                        </HStack>
                        <HStack>
                            <PhoneIcon color="blackAlpha.600" />
                            <Text color="blackAlpha.600">02-23811717</Text>
                        </HStack>
                    </Box>
                </Flex>
            </Container>
        </>
    )
}

export default QnrFooter
