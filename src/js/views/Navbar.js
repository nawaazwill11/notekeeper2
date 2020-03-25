import m from 'mithril';

const navbar = {
    navItems: [
        {
            type: 'default',
            path: '/',
            id: 'notekeeper',
        }
    ],
    nav: function () {
        const address = {
            view: function (vnode) {
               return  m('.address-group', [
                    m('span.separator', ' / '),
                    m(m.route.Link, {
                        id: vnode.attrs.id,
                        class: 'nav-link',
                        href: vnode.attrs.href,
                    },  vnode.children)
                ]);
            }
        }
        return m('.nav-container', this.navItems.map((item) => {
            return m(address, {
                id: item.id,
                href: item.path + item.id,
            }, item.id)
        }));
    },
};

export default navbar;