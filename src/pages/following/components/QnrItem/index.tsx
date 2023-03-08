import { useParams } from 'react-router-dom'

const QnrItem: React.FC = () => {
    const url = useParams()
    console.log(url)
    return <p>AAAAA</p>
}

export default QnrItem
