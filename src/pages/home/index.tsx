import { useNavigate } from 'react-router-dom'
import {
    Heading,
    Card,
    CardHeader,
    CardBody,
    Button,
    Text,
    SimpleGrid,
    OrderedList,
    ListItem,
    Divider,
    UnorderedList,
    Box,
    Stack,
    HStack,
} from '@chakra-ui/react' // verbose
import { ArrowRightIcon, SunIcon } from '@chakra-ui/icons'

import QnrContainer from 'components/QnrContainer'

const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <QnrContainer>
                <HStack mb="12">
                    <SunIcon boxSize={7} color="#7928CA" />
                    <Heading size="lg" bgClip="text" bgGradient="linear(to-br, #7928CA, #FF0080)">
                        關於預立醫療決定，您應該知道的一些事：
                    </Heading>
                </HStack>
                <SimpleGrid columns={1} spacing={10}>
                    <Card
                        size="lg"
                        align="center"
                        variant="elevated"
                        bgGradient="linear(to-br,orange.100, orange.300, orange.100, orange.300, orange.100)"
                        borderRadius="50px"
                        h="full"
                    >
                        <CardHeader p={10}>
                            <Heading size="md" color="orange.600">
                                預立醫療決定(Advance Decision, AD)是什麼？
                            </Heading>
                        </CardHeader>
                        <Divider color="pink.500" border="2px" />
                        <CardBody p={12}>
                            <Text fontSize="md" color="orange.900">
                                預立醫療決定(Advance Decision,
                                AD)是根據《病人自主權利法》所誕生的制度，讓人們藉由簽署「預立醫療決定書」，預先表達當自己處於疾病末期、永久昏迷等「特定臨床條件」時，有無接受「維持生命治療」、「人工營養或流體餵養」的意願。
                            </Text>
                        </CardBody>
                    </Card>
                    <Stack direction={['column', 'row']} spacing={10}>
                        <Box flex="1">
                            <Card
                                size="lg"
                                align="center"
                                variant="elevated"
                                bgGradient="linear(to-br,cyan.100, cyan.400, cyan.100, cyan.400)"
                                borderRadius="50px"
                                h="full"
                            >
                                <CardHeader p={10}>
                                    <Heading size="md" color="blue.600">
                                        什麼情況會使用到預立醫療決定書？
                                    </Heading>
                                </CardHeader>
                                <Divider color="purple.600" border="2px" />
                                <CardBody p={12}>
                                    <Text fontSize="md" mb={5} color="blue.700">
                                        只有當病人處於以下「特定臨床條件」時，才會啟動預立醫療決定：
                                    </Text>
                                    <OrderedList color="blue.700">
                                        <ListItem>末期病人。</ListItem>
                                        <ListItem>處於不可逆轉之昏迷狀況。</ListItem>
                                        <ListItem>永久植物人狀態。</ListItem>
                                        <ListItem>極重度失智。</ListItem>
                                        <ListItem>
                                            其他經中央主管機關公告之病人疾病狀況或痛苦難以忍受、疾病無法治癒且依當時醫療水準無其他合適解決方法之情形。
                                        </ListItem>
                                    </OrderedList>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box flex="1">
                            <Card
                                size="lg"
                                align="center"
                                variant="elevated"
                                bgGradient="linear(to-br,cyan.100, cyan.400, cyan.100, cyan.400)"
                                borderRadius="50px"
                                h="full"
                            >
                                <CardHeader p={10}>
                                    <Heading size="md" color="blue.600">
                                        什麼是「維持生命治療」？
                                    </Heading>
                                </CardHeader>
                                <Divider color="purple.600" border="2px" />
                                <CardBody p={12}>
                                    <Text fontSize="md" color="blue.700" mb={5}>
                                        維持生命治療是指單純以人工方式延續生命，而不是針對疾病進行治療。如果依當時醫療水準已確認無法治癒病人的疾病時，可以藉由維持生命治療延續病人的生命。
                                    </Text>
                                    <OrderedList color="blue.700">
                                        <ListItem>心肺復甦術，包括：心臟按壓、人工呼吸、心臟電擊等。</ListItem>
                                        <ListItem>機械式維生系統，如：葉克膜、呼吸器等。</ListItem>
                                        <ListItem>血液製品（輸血）。</ListItem>
                                        <ListItem>
                                            為特定疾病而設之專門治療，如：洗腎、化療、荷爾蒙治療、放射治療、罕病藥物等。
                                        </ListItem>
                                        <ListItem>重度感染時所給予之抗生素。</ListItem>
                                        <ListItem>其他任何有可能延長病人生命之必要醫療措施。</ListItem>
                                    </OrderedList>
                                </CardBody>
                            </Card>
                        </Box>
                    </Stack>
                    <Stack direction={['column', 'row']} spacing={10}>
                        <Box flex="1">
                            <Card
                                size="lg"
                                align="center"
                                variant="elevated"
                                bgGradient="linear(to-br,cyan.100, cyan.400, cyan.100, cyan.400)"
                                borderRadius="50px"
                                h="full"
                            >
                                <CardHeader p={10}>
                                    <Heading size="md" color="blue.600">
                                        什麼是「人工營養與流體餵養」？
                                    </Heading>
                                </CardHeader>
                                <Divider color="purple.600" border="2px" />
                                <CardBody p={12}>
                                    <Text fontSize="md" mb={5} color="blue.700">
                                        人工營養及流體餵養是指透過導管或其他侵入性措施，為病人餵養食物與水分。
                                    </Text>
                                    <Text fontSize="md" color="blue.700">
                                        如：鼻胃管、靜脈注射、胃造口等。
                                    </Text>
                                </CardBody>
                            </Card>
                        </Box>
                        <Box flex="1">
                            <Card
                                size="lg"
                                align="center"
                                variant="elevated"
                                bgGradient="linear(to-br,cyan.100, cyan.400, cyan.100, cyan.400)"
                                borderRadius="50px"
                                h="full"
                            >
                                <CardHeader p={10}>
                                    <Heading size="md" color="blue.600">
                                        誰可以預立醫療決定？
                                    </Heading>
                                </CardHeader>
                                <Divider color="purple.600" border="2px" />
                                <CardBody p={12}>
                                    <Text fontSize="md" mb={5} color="blue.700">
                                        預立醫療決定的人，在《病人自主權利法》上稱之為「意願人」，需要具備以下條件：
                                    </Text>
                                    <OrderedList color="blue.700">
                                        <ListItem>
                                            法律上的完全行為能力人，包含以下兩種：
                                            <UnorderedList>
                                                <ListItem>成年且未受監護宣告者。</ListItem>
                                                <ListItem>未成年但已結婚，且未受監護宣告者。</ListItem>
                                            </UnorderedList>
                                        </ListItem>
                                        <ListItem>有健保卡（外籍人士有健保卡者亦可）。</ListItem>
                                        <ListItem>精神狀況正常，能夠清楚、自主地表達意思。</ListItem>
                                    </OrderedList>
                                </CardBody>
                            </Card>
                        </Box>
                    </Stack>
                    <SimpleGrid columns={1} mt={20}>
                        <Box flex="1" textAlign="center" px={72} mb={10}>
                            <Button
                                w="full"
                                h={20}
                                onClick={() => {
                                    navigate('/survey/personalInfo')
                                }}
                                rightIcon={<ArrowRightIcon />}
                                bgGradient="linear(to-br,green.500, green.300, green.100,green.300,green.500)"
                                border="1px"
                                borderRadius="full"
                                _hover={{
                                    bgGradient:
                                        'linear(to-tl, orange.500, orange.300, orange.100,orange.300,orange.500)',
                                }}
                                borderColor="green.600"
                            >
                                開始填寫
                            </Button>
                        </Box>
                    </SimpleGrid>
                </SimpleGrid>
            </QnrContainer>
        </>
    )
}

export default Home
