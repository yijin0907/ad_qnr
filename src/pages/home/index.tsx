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
    Link,
    Flex,
    Spacer,
} from '@chakra-ui/react' // verbose
import { ArrowRightIcon, SunIcon, ExternalLinkIcon } from '@chakra-ui/icons'

import QnrHeader from 'components/QnrHeader'
import QnrContainer from 'components/QnrContainer'
import QnrFooter from 'components/QnrFooter'

const Home: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <QnrHeader />
            <QnrContainer>
                <Box mt={10}>
                    <HStack mb={20}>
                        <SunIcon boxSize={7} color="#6096BA" />
                        <Heading size="lg" bgClip="text" bgGradient="linear(to-br, #6096BA, #8B8C89)">
                            關於預立醫療決定，您應該知道的一些事：
                        </Heading>
                    </HStack>
                    <SimpleGrid columns={1} spacing={10}>
                        <Card
                            size="lg"
                            align="center"
                            variant="outline"
                            border="2px"
                            borderColor="#274C77"
                            borderRadius="20px"
                            h="full"
                            bg="#6096BA"
                            _hover={{ bgGradient: 'linear(to-br, #6096BA, #A3CEF1, #6096BA, #A3CEF1, #6096BA)' }}
                        >
                            <CardHeader p={10}>
                                <Heading size="md" color="whiteAlpha.900">
                                    預立醫療決定(Advance Decision, AD)是什麼？
                                </Heading>
                            </CardHeader>
                            <Divider color="#E7ECEF" border="1px" />
                            <CardBody p={12}>
                                <Text fontSize="md" color="whiteAlpha.800">
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
                                    variant="outline"
                                    border="2px"
                                    borderColor="#274C77"
                                    borderRadius="20px"
                                    h="full"
                                    bg="#6096BA"
                                    _hover={{
                                        bgGradient: 'linear(to-br, #6096BA, #A3CEF1, #6096BA, #A3CEF1, #6096BA)',
                                    }}
                                >
                                    <CardHeader p={10}>
                                        <Heading size="md" color="whiteAlpha.900">
                                            什麼情況會使用到預立醫療決定書？
                                        </Heading>
                                    </CardHeader>
                                    <Divider color="#E7ECEF" border="1px" />
                                    <CardBody p={12}>
                                        <Text fontSize="md" mb={5} color="whiteAlpha.800">
                                            只有當病人處於以下「特定臨床條件」時，才會啟動預立醫療決定：
                                        </Text>
                                        <OrderedList color="whiteAlpha.800">
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
                                    variant="outline"
                                    border="2px"
                                    borderColor="#274C77"
                                    borderRadius="20px"
                                    h="full"
                                    bg="#6096BA"
                                    _hover={{
                                        bgGradient: 'linear(to-br, #6096BA, #A3CEF1, #6096BA, #A3CEF1, #6096BA)',
                                    }}
                                >
                                    <CardHeader p={10}>
                                        <Heading size="md" color="whiteAlpha.900">
                                            什麼是「維持生命治療」？
                                        </Heading>
                                    </CardHeader>
                                    <Divider color="#E7ECEF" border="1px" />
                                    <CardBody p={12}>
                                        <Text fontSize="md" color="whiteAlpha.900" mb={5}>
                                            維持生命治療是指單純以人工方式延續生命，而不是針對疾病進行治療。如果依當時醫療水準已確認無法治癒病人的疾病時，可以藉由維持生命治療延續病人的生命。
                                        </Text>
                                        <OrderedList color="whiteAlpha.800">
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
                                    variant="outline"
                                    border="2px"
                                    borderColor="#274C77"
                                    borderRadius="20px"
                                    h="full"
                                    bg="#6096BA"
                                    _hover={{
                                        bgGradient: 'linear(to-br, #6096BA, #A3CEF1, #6096BA, #A3CEF1, #6096BA)',
                                    }}
                                >
                                    <CardHeader p={10}>
                                        <Heading size="md" color="whiteAlpha.900">
                                            什麼是「人工營養與流體餵養」？
                                        </Heading>
                                    </CardHeader>
                                    <Divider color="#E7ECEF" border="1px" />
                                    <CardBody p={12}>
                                        <Text fontSize="md" mb={5} color="whiteAlpha.800">
                                            人工營養及流體餵養是指透過導管或其他侵入性措施，為病人餵養食物與水分。
                                        </Text>
                                        <Text fontSize="md" color="whiteAlpha.800">
                                            如：鼻胃管、靜脈注射、胃造口等。
                                        </Text>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box flex="1">
                                <Card
                                    size="lg"
                                    align="center"
                                    variant="outline"
                                    border="2px"
                                    borderColor="#274C77"
                                    borderRadius="20px"
                                    h="full"
                                    bg="#6096BA"
                                    _hover={{
                                        bgGradient: 'linear(to-br, #6096BA, #A3CEF1, #6096BA, #A3CEF1, #6096BA)',
                                    }}
                                >
                                    <CardHeader p={10}>
                                        <Heading size="md" color="whiteAlpha.900">
                                            誰可以預立醫療決定？
                                        </Heading>
                                    </CardHeader>
                                    <Divider color="#E7ECEF" border="1px" />
                                    <CardBody p={12}>
                                        <Text fontSize="md" mb={5} color="whiteAlpha.800">
                                            預立醫療決定的人，在《病人自主權利法》上稱之為「意願人」，需要具備以下條件：
                                        </Text>
                                        <OrderedList color="whiteAlpha.800">
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
                        <Flex my={10}>
                            <Spacer />
                            <Text
                                as="u"
                                color="#8B8C89"
                                fontSize="lg"
                                _hover={{
                                    // colorScheme: 'whiteAlpha',
                                    color: '#6096BA',
                                }}
                            >
                                <Link href="https://hpcod.mohw.gov.tw/HospWeb/index.aspx" isExternal>
                                    相關資訊請參閱衛生福利部網站
                                    <ExternalLinkIcon mx="2px" />
                                </Link>
                            </Text>
                        </Flex>
                        <Box flex="1" textAlign="center" px={72} mb={10}>
                            <Button
                                size="lg"
                                colorScheme="whiteAlpha"
                                bgColor="#B9BAB8"
                                w="full"
                                h={20}
                                onClick={() => {
                                    navigate('/survey/personalInfo')
                                }}
                                rightIcon={<ArrowRightIcon />}
                                // bgGradient="linear(to-br,green.500, green.300, green.100,green.300,green.500)"
                                // border="1px"
                                // borderRadius="full"
                                _hover={{
                                    colorScheme: 'whiteAlpha',
                                    bgColor: '#6096BA',
                                }}
                            >
                                開始填寫
                            </Button>
                        </Box>
                    </SimpleGrid>
                </Box>
            </QnrContainer>
            <QnrFooter />
        </>
    )
}

export default Home
