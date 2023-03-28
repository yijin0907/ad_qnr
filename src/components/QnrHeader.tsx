import { useNavigate } from 'react-router-dom'
import { Image, Container } from '@chakra-ui/react'

const QnrHeader: React.FC = () => {
    const go = useNavigate()
    return (
        <>
            <Container maxW="1280px" m={[0, 'auto']} p={10} bgColor="#274C77">
                <Image
                    src="/images/logo.svg"
                    alt="MedSig logo"
                    boxSize="80px"
                    borderRadius="full"
                    onClick={() => go('/')}
                />
            </Container>
        </>
    )
}

export default QnrHeader
