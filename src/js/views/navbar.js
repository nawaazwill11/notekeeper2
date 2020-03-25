import m from 'mithril';

// const navbar = function (addresses) {

//     function links(addresses) {
//         return addresses.map(address => {
//             m(m.route.Link, {href: address.location}, address.address)
//         });
//     }

//     return m('.nav-container', [
//         m('.nav-address', [
//             m(m.route.Link, {href: '/'}, 'notekeeper')
//         ])
//     ]);
// }

const navbar = {
    default: function () {
        return m(m.route.Link, {href: '/'}, 'notekeeper');
    },
    navList: [],
    navLoad: function () {
        return m('.nav-container', [
            m('.nav-address', navbar.navList.map(n => {
                return m(m.route.Link, {href: '/' + n}, n)
            }))
        ]);
    }
};

export default navbar;