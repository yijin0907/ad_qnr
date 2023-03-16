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
        dispatch(addAns({
            qnrId: qnrId,
            opId: optionValue
        }))
    }

    const previousPageHandler = () => {
        setQIdState('Q' + (parseInt(qIdState.slice(2), 10) - 1).toString().padStart(2, '0'))

    }

    useEffect(() => {
        dispatch(removeAns(parseInt(qIdState.slice(2), 10) - 1))
        if (qIdState === 'Q00') {
            navigate(`/survey/personalInfo`)
        } else if (qIdState === 'Q08') {
            navigate(`/result`)
        } else {
            navigate(`/survey/${qIdState}`)
        }
    }, [qIdState, navigate, dispatch])
    return (
        <>
            <CardBody bgGradient="linear(to-br,cyan.100, cyan.400, cyan.100, cyan.400)" px={20} py={10}>
                <RadioGroup onChange={setOptionValue} value={optionValue}>
                    <Stack divider={<StackDivider />} spacing={8}>
                        {qnrOptions.map((v) => (
                            <Radio key={v.opId} value={v.opId} size="md" colorScheme="green">
                                {v.opContent}
                            </Radio>
                        ))}
                    </Stack>
                </RadioGroup>
            </CardBody>
            <CardFooter justify="space-around" flexWrap="wrap" p={10}>
                <Button
                    colorScheme="green"
                    variant="link"
                    leftIcon={<ArrowLeftIcon />}
                    size="lg"
                    onClick={previousPageHandler}
                >
                    上一題
                </Button>
                <Button
                    colorScheme="green"
                    variant="link"
                    rightIcon={<ArrowRightIcon />}
                    size="lg"
                    onClick={nextPageHandler}
                >
                    {qnrId === "Q07" ? "已完成，確認送出" : "下一題"}
                </Button>
            </CardFooter>
        </>
    )
}

export default QnrRadio
