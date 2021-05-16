
export const items = (typeUser,intl) => {
    
    let menuAdminTypeOne = [
        {
            path: "/",
            name: intl.formatMessage({ id: "app.header.nav.init" })
        },
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.products" })}`,
            name: intl.formatMessage({ id: "app.header.nav.products" }),
        },
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.config" })}`,
            name: intl.formatMessage({ id: "app.header.nav.config" }),
        },
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.state-product" })}`,
            name: intl.formatMessage({ id: "app.header.nav.state-product" }),
        },
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.see-as-user" })}`,
            name: intl.formatMessage({ id: "app.header.nav.see-as-user" }),
        },
    ]

    let menuAdminTypeTwo = [
        {
            path: "/",
            name: intl.formatMessage({ id: "app.header.nav.init" })
        },
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.state-product" })}`,
            name: intl.formatMessage({ id: "app.header.nav.state-product" }),
        },
    ]
    let menuAdminTypeThree = [
        {
            path: "/",
            name: intl.formatMessage({ id: "app.header.nav.init" })
        },
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.state-product" })}`,
            name: intl.formatMessage({ id: "app.header.nav.state-product" }),
        },
    ]

    let userInAuth = [
        {
            path: "/",
            name: intl.formatMessage({ id: "app.header.nav.init" })
        },
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.products" })}`,
            name: intl.formatMessage({ id: "app.header.nav.products" }),
        },
    ]

    let userAuth = [
        {
            path: "/",
            name: intl.formatMessage({ id: "app.header.nav.init" })
        },
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.products" })}`,
            name: intl.formatMessage({ id: "app.header.nav.products" }),
        },
    ]


    switch (typeUser) {
        case 0:                 //Usuario autenticado
            return userAuth
        case 1:                 //Admin tipo 1 (administrador de administradores)
            return menuAdminTypeOne
        case 2:                 //Admin tipo 2 (administrador de preparacion)
            return menuAdminTypeTwo
        case 3:                 //Admin tipo 3 (administrador de reparto)
            return menuAdminTypeThree
        default:                //Usuario no autentificado
            return userInAuth
    }


}



