import { Outlet, useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'

const Following: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <p>Following</p>
            <Button
                colorScheme="blue"
                onClick={() => {
                    navigate(-1)
                }}
            >
                下一題
            </Button>
            <Outlet />
        </>
    )
}

export default Following
