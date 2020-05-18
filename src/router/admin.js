export default {
    path: "/admin",
    component: () =>
        import ('@/views/admin/Index'),
    meta: {

        title: 'Admin'
    },

    children: [{
            path: 'user',
            component: () =>
                import ('@/views/admin/User'),
            meta: {

                title: 'Admin User'
            }
        },
        {
            path: 'password/modify',
            component: () =>
                import ('@/views/admin/passwordModify'),
            meta: {

                title: 'Admin PasswordModify'
            }
        },
        {
            path: 'log/:page',
            component: () =>
                import ('@/views/admin/Log'),
            meta: {

                title: 'Log'
            }
        }






    ]

}