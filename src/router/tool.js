export default {

    path: "/tool",
    component: () =>
        import ('@/views/common'),
    children: [{
            path: 'xigua',
            name: "Xigua",
            component: () =>
                import ('@/views/tool/Xigua'),
            meta: {

                title: 'XiGua | I Am Future'
            }
        },
        {
            path: 'test',
            name: "Test",
            component: () =>
                import ('@/views/tool/test')
        },
        {
            path: 'vpn',
            name: "Vpn",
            component: () =>
                import ('@/views/tool/vpn'),
            meta: {

                title: 'VPN | I Am Future'
            }
        }


    ]

}