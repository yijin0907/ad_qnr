import { Container } from '@chakra-ui/react'

type ContainerProps = {
    children: React.ReactNode
}

const QnrContainer = (props: ContainerProps) => {
    return (
        <Container
            maxH="container"
            maxW="1280px"
            m={[0, 'auto']}
            bgGradient="linear(to-br, gray.100, gray.400, gray.100, gray.400, gray.100)"
            p={10}
            centerContent
        >
            {props.children}
        </Container>
    )
}

export default QnrContainer
