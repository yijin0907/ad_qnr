import { Outlet } from 'react-router-dom'
// import { Button } from '@chakra-ui/react'

import QnrContainer from 'components/QnrContainer'
import QnrHeader from 'components/QnrHeader'
import QnrFooter from 'components/QnrFooter'

const Survey: React.FC = () => {
    // const navigate = useNavigate()
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

export default Survey
