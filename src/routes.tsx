import type { RouteObject } from 'react-router-dom'
import Home from './pages/home'
import Survey from './pages/survey'
import NotFound from './pages/notFound'
import QnrItem from 'pages/survey/components/QnrItem'
import Result from 'pages/result'
import PersonalInfo from 'pages/survey/components/PersonalInfo'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
        children: [],
    },
    {
        path: '/survey',
        element: <Survey />,
        children: [
            {
                path: '/survey/personalInfo',
                element: <PersonalInfo />,
            },
            {
                path: '/survey/:item',
                element: <QnrItem />,
            },
        ],
    },
    {
        path: '/result',
        element: <Result />,
        children: [],
    },
    {
        path: '*',
        element: <NotFound />,
        children: [],
    },
]

export default routes
