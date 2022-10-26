const routes = [
    {
        name: 'Spline',
        path: '/Spline',
        component: () => import('@/views/Spline')
    },
    {
        name: 'ConeSource',
        path: '/ConeSource',
        component: () => import('@/views/ConeSource')
    },
    
];

export default routes
