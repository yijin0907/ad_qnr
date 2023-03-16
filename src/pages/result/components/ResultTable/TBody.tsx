import { Tbody, Tr, Td } from "@chakra-ui/react"
import { useAppSelector } from "hooks"

import dbData from 'db'

type QnrInfoProps = {
    qnrId: string
    qnrContent: string
    qnrOptions: Array<{ opId: string; opContent: string }>
    qnrDescription: string
}

const TBody: React.FC = () => {
    const qnrReducer = useAppSelector(state => state.qnrReducer)
    const resultList = qnrReducer.qnrList

    return (
        <>
            <Tbody>
                {resultList.map((item) => {
                    const { qnrId, opId } = item
                    const opInfo = dbData.find(v => v.qnrId === qnrId) as QnrInfoProps
                    const opDesc = opInfo.qnrOptions.find(v => v.opId === opId)?.opContent
                    return (
                        <Tr>
                            <Td>{qnrId}</Td>
                            <Td>{opDesc}</Td>
                        </Tr>
                    )
                })}
            </Tbody>
        </>
    )
}

export default TBody
