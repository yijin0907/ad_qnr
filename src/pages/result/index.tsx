import ResultTable from './components/ResultTable'
import QnrContainer from 'components/QnrContainer'
import QnrHeader from 'components/QnrHeader'
import QnrFooter from 'components/QnrFooter'

const Result: React.FC = () => {
    return (
        <>
            <QnrHeader />
            <QnrContainer>
                <ResultTable />
            </QnrContainer>
            <QnrFooter />
        </>
    )
}

export default Result
