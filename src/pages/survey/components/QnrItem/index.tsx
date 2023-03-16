import { useParams } from 'react-router-dom'
import { Card } from '@chakra-ui/react'

import QnrRadio from './QnrRadio'
import dbData from 'db'
import QnrInfo from '../QnrInfo'

type QnrInfoProps = {
    qnrId: string
    qnrContent: string
    qnrOptions: Array<{ opId: string; opContent: string }>
    qnrDescription: string
}

const QnrItem: React.FC = () => {
    const params = useParams()
    const qnrInfo = dbData.find((v) => v.qnrId === params.item) as QnrInfoProps

    return (
        <>
            <Card
                size="lg"
                variant="filled"
                bgGradient="linear(to-br,orange.100, orange.300, orange.100, orange.300)"
                borderRadius="50px"
            >
                <QnrInfo qnrId={qnrInfo.qnrId} topicInfo={qnrInfo.qnrContent} qnrDescription={qnrInfo.qnrDescription} />

                <QnrRadio key={qnrInfo.qnrId} qnrId={qnrInfo.qnrId} qnrOptions={qnrInfo?.qnrOptions} />

            </Card>
        </>
    )
}

export default QnrItem
