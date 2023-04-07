import { useNavigate } from 'react-router-dom'
import { Image, Container, Flex, Spacer, HStack } from '@chakra-ui/react'
import { ChatIcon, RepeatIcon } from '@chakra-ui/icons'

const QnrHeader: React.FC = () => {
    const go = useNavigate()
    return (
        <>
            <Container maxW="1280px" m={[0, 'auto']} px="10" py="5" bgColor="#274C77">
                <Flex minWidth="max-content" alignItems="center">
                    <Image
                        src="/images/logo.svg"
                        alt="MedSig logo"
                        boxSize="60px"
                        borderRadius="full"
                        onClick={() => go('/')}
                    />
                    <Spacer />
                    <HStack spacing={5}>
                        <RepeatIcon color="whiteAlpha.900" boxSize={5} onClick={() => go('/')} />
                        <ChatIcon color="whiteAlpha.900" boxSize={5} onClick={() => go('/result/csqrcode')} />
                    </HStack>
                </Flex>
            </Container>
        </>
    )
}

export default QnrHeader
