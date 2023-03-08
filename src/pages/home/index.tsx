import { Box, Flex } from '@chakra-ui/react' // verbose

import QnrContainer from 'components/QnrContainer'

const Home: React.FC = () => {
    return (
        <>
            <QnrContainer>
                <Box display="flex" alignItems="center" justifyContent="space-between" bgColor="tomato">
                    Box with Flex props
                </Box>
                <Flex align="center" justify="center">
                    Flex Container
                </Flex>
            </QnrContainer>
        </>
    )
}

export default Home
