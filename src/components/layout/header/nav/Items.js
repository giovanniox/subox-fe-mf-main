
export const items = (typeUser, intl) => {

    let user = [
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
    ]

    let admin = [
        {
            path: `/${intl.formatMessage({ id: "app.header.nav.config" })}`,
            name: intl.formatMessage({ id: "app.header.nav.config" }),
        },

    ]


    switch (typeUser) {
        case "ROLE_ADMIN":
            return admin
        case "ROLE_USER":
            return user
        default:
            return user
    }



}



