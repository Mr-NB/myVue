export default {
    path: "/admin",
    component: () =>
        import ('@/views/admin/Index'),
    meta: {

        title: 'Admin | I Am Future'
    },

    children: [{
            path: 'user',
            component: () =>
                import ('@/views/admin/User'),
            meta: {

                title: 'Admin User | I Am Future'
            }
        },
        {
            path: 'password/modify',
            component: () =>
                import ('@/views/admin/passwordModify'),
            meta: {

                title: 'Admin PasswordModify | I Am Future'
            }
        }





    ]

}