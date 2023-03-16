import { Outlet } from 'react-router-dom'
// import { Button } from '@chakra-ui/react'

import QnrContainer from 'components/QnrContainer'

const Survey: React.FC = () => {
    // const navigate = useNavigate()
    return (
        <>
            <QnrContainer>
                <Outlet />
            </QnrContainer>
        </>
    )
}

export default Survey
