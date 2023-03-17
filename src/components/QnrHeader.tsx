import { Image, Container } from '@chakra-ui/react'

const QnrHeader: React.FC = () => {
    return (
        <>
            <Container maxW="1280px" m={[0, 'auto']} bgColor="gray.500" px={10} py={5}>
                <Image src="/images/logo.svg" alt="MedSig logo" boxSize="100px" borderRadius="full" />
            </Container>
        </>
    )
}

export default QnrHeader
