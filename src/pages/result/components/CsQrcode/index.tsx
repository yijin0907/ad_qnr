import { Image, Heading, VStack } from '@chakra-ui/react'

const CsQrcode: React.FC = () => {
    return (
        <>
            <VStack m={10}>
                <Heading mb={10} size="lg" bgClip="text" bgGradient="linear(to-br, #6096BA, #8B8C89)">
                    若您尚有其他問題，請掃描下列QRCode，使用智慧客服線上諮詢服務
                </Heading>
                <Image src="/images/adQrcode.svg" alt="mohw qrcode" boxSize="xs" />
            </VStack>
        </>
    )
}

export default CsQrcode
