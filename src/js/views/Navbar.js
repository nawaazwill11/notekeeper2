import m from 'mithril';

const Navbar = {
    navItems: [],
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
    addNavItem: function (item, location) {
        Navbar.navItems[location] = item;
    },
    removeNavItem: function (location) {
        Navbar.navItems.splice(location, 1);
    },
};

export default Navbar;