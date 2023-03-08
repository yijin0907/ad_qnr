import { Container } from '@chakra-ui/react'

type ContainerProps = {
    children: React.ReactNode
}

const QnrContainer = (props: ContainerProps) => {
    return (
        <Container maxW="1024px" m={[0, 'auto']}>
            {props.children}
        </Container>
    )
}

export default QnrContainer
