export default {
    path: "/common",
    name: "Common",
    component: () =>
        import ('@/views/common'),
    meta: {

        title: 'Index | I Am Future'
    },

    children: [{
            path: 'about',
            name: "About",
            component: () =>
                import ('@/views/common/About'),
            meta: {

                title: 'About ME | I Am Future'
            }
        }




    ]

}