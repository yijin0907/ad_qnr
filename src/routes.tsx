import type { RouteObject } from 'react-router-dom'
import Home from './pages/home'
import Following from './pages/following'
import NotFound from './pages/notFound'
import QnrItem from 'pages/following/components/QnrItem'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
        children: [],
    },
    {
        path: '/following',
        element: <Following />,
        children: [
            {
                path: '/following/:item',
                element: <QnrItem />,
            },
        ],
    },
    {
        path: '*',
        element: <NotFound />,
        children: [],
    },
]

export default routes
