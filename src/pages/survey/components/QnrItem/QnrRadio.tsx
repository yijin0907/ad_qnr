import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Stack, StackDivider, Radio, RadioGroup, CardBody, CardFooter, Button } from '@chakra-ui/react'
import { ArrowRightIcon, ArrowLeftIcon } from '@chakra-ui/icons'

import { useAppDispatch } from 'hooks'
import { addAns, removeAns } from 'slices/qnrSlice'

type qnrOptionsProps = {
    qnrId: string
    qnrOptions: Array<{ opId: string; opContent: string }>
}

const QnrRadio: React.FC<qnrOptionsProps> = ({ qnrId, qnrOptions }) => {
    const [optionValue, setOptionValue] = useState('1')
    const [qIdState, setQIdState] = useState(qnrId)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const nextPageHandler = () => {
        setQIdState('Q' + (parseInt(qIdState.slice(2), 10) + 1).toString().padStart(2, '0'))
        dispatch(
            addAns({
                qnrId: qnrId,
                opId: optionValue,
            })
        )
    }

    const previousPageHandler = () => {
        setQIdState('Q' + (parseInt(qIdState.slice(2), 10) - 1).toString().padStart(2, '0'))
    }

    useEffect(() => {
        dispatch(removeAns(parseInt(qIdState.slice(2), 10) - 1))
        if (qIdState === 'Q00') {
            navigate(`/survey/personalInfo`)
        } else if (qIdState === 'Q08') {
            navigate(`/result/resulttable`)
        } else {
            navigate(`/survey/${qIdState}`)
        }
    }, [qIdState, navigate, dispatch])
    return (
        <>
            <CardBody bgColor="#6096BA" px={20} py={10}>
                <RadioGroup onChange={setOptionValue} value={optionValue} color="whiteAlpha.900">
                    <Stack divider={<StackDivider />} spacing={8}>
                        {qnrOptions.map((v) => (
                            <Radio key={v.opId} value={v.opId} size="md" colorScheme="whatsapp">
                                {v.opContent}
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
            </CardBody>
            <CardFooter justify="space-around" flexWrap="wrap" p={20}>
                <Button
                    colorScheme="whiteAlpha"
                    bgColor="#B9BAB8"
                    leftIcon={<ArrowLeftIcon />}
                    size="lg"
                    onClick={previousPageHandler}
                    _hover={{
                        colorScheme: 'whiteAlpha',
                        bgColor: '#6096BA',
                    }}
                >
                    上一題
                </Button>
                <Button
                    colorScheme="whiteAlpha"
                    bgColor="#B9BAB8"
                    rightIcon={<ArrowRightIcon />}
                    size="lg"
                    onClick={nextPageHandler}
                    _hover={{
                        colorScheme: 'whiteAlpha',
                        bgColor: '#6096BA',
                    }}
                >
                    {qnrId === 'Q07' ? '已完成' : '下一題'}
                </Button>
            </CardFooter>
        </>
    )
}

export default QnrRadio
