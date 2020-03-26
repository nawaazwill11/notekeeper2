import m from 'mithril';
import Group from '../model/Group';
import Navbar from './Navbar';

const groups = {
    oninit: function () {
        console.log('GroupList init')
        Group.loadList();
        Navbar.navItems = [Navbar.navItems[0]];
    },
    view: function () {
        console.log('GroupList view')
        return m('.group-container', Group.list.map((group) => {
            return m('.group', m(m.route.Link, {
                    id: group.id,
                    class: 'group-item',
                    href: "/groups/" + group.id,
                    onclick: addToNav,
                }, group.id)
            )
        }));
    },
}

function addToNav(e) {
    const element = e.target;
    Navbar.navItems[1] = Group.list.find((group) => group.id === element.id );
}

export default groups;