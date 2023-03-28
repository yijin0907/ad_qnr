import { Outlet } from 'react-router-dom'
// import ResultTable from './components/ResultTable'
import QnrContainer from 'components/QnrContainer'
import QnrHeader from 'components/QnrHeader'
import QnrFooter from 'components/QnrFooter'

const Result: React.FC = () => {
    return (
        <>
            <QnrHeader />
            <QnrContainer>
                <Outlet />
            </QnrContainer>
            <QnrFooter />
        </>
    )
}

export default Result
