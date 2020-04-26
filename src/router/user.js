export default {
    path: "/user",
    component: () =>
        import ('@/views/common'),
    children: [{
            path: 'center',
            name: "UserCenter",
            component: () =>
                import ('@/views/user/Center'),
            meta: {

                title: 'User Center | I Am Future'
            }

        },
        {
            path: 'password/modify',
            name: "PasswordModify",
            component: () =>
                import ('@/views/user/passwordModify'),
            meta: {

                title: 'Password | I Am Future'
            }
        }




    ]

}