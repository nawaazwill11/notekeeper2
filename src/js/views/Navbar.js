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
        const address = function (item) {
            console.log('Navbar nav');
            return  m('.address-group', [
                m('span.separator', ' / '),
                m(m.route.Link, {
                    class: 'nav-link',
                    href: item.href,
                },  item.id)
            ]);
        
        }
        return m('.nav-container', this.navItems.map((item) => {
            return address(item)
        }))
    },
};

export default navbar;