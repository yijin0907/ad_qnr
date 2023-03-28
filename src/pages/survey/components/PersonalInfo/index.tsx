import { useEffect, useState } from 'react'
import {
    Button,
    FormControl,
    FormLabel,
    Card,
    CardBody,
    CardFooter,
    SimpleGrid,
    Stack,
    Input,
    RadioGroup,
    Radio,
} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from 'hooks'
import { addPersonalInfo, removePersonalInfo } from 'slices/qnrSlice'
import QnrInfo from '../QnrInfo'

const PersonalInfo: React.FC = () => {
    const [name, setName] = useState('')
    const [gender, setGender] = useState('1')
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const nameHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value)

    useEffect(() => {
        dispatch(removePersonalInfo(0))
    })
    return (
        <>
            <Card
                w="full"
                size="lg"
                variant="outline"
                border="2px"
                borderColor="#6096BA"
                // bgGradient="linear(to-br,orange.100, orange.300, orange.100, orange.300)"
                borderRadius="20px"
                my={32}
            >
                <QnrInfo qnrId="個人基本資訊" topicInfo="請填入下列相關個人資訊：" qnrDescription="Q00" />
                <CardBody bgColor="#6096BA" px={20} py={10}>
                    <FormControl isRequired color="whiteAlpha.900">
                        <SimpleGrid columns={2} spacingY="3em">
                            <FormLabel fontSize="md">姓名</FormLabel>
                            <Input
                                variant="filled"
                                placeholder="姓名"
                                size="sm"
                                borderRadius="md"
                                onChange={nameHandleChange}
                                value={name}
                            />
                            <FormLabel fontSize="md">性別</FormLabel>
                            <RadioGroup onChange={setGender} value={gender}>
                                <Stack spacing={5} direction="row">
                                    <Radio colorScheme="red" value="1" size="md">
                                        男
                                    </Radio>
                                    <Radio colorScheme="green" value="2" size="md">
                                        女
                                    </Radio>
                                </Stack>
                            </RadioGroup>
                            <FormLabel fontSize="md">出生年月日</FormLabel>
                            <Input variant="filled" placeholder="Select Date" size="sm" type="date" />
                            <FormLabel fontSize="md">聯絡電話</FormLabel>
                            <Input variant="filled" type="tel" placeholder="聯絡電話" size="sm" borderRadius="md" />
                            <FormLabel fontSize="md">電子信箱</FormLabel>
                            <Input
                                variant="filled"
                                type="email"
                                placeholder="example@mail.com"
                                size="sm"
                                borderRadius="md"
                            />
                        </SimpleGrid>
                    </FormControl>
                </CardBody>
                <CardFooter justify="space-around" flexWrap="wrap" p={20}>
                    <Button
                        colorScheme="whiteAlpha"
                        bgColor="#B9BAB8"
                        rightIcon={<ArrowRightIcon />}
                        size="lg"
                        // borderRadius="full"
                        onClick={() => {
                            dispatch(addPersonalInfo(name))
                            dispatch(addPersonalInfo(gender))
                            navigate('/survey/Q01')
                        }}
                        _hover={{
                            colorScheme: 'whiteAlpha',
                            bgColor: '#6096BA',
                        }}
                    >
                        下一頁
                    </Button>
                </CardFooter>
            </Card>
        </>
    )
}

export default PersonalInfo
