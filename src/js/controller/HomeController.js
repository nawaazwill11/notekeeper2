import m from 'mithril';

import Layout from '../views/Layout';
import Navbar from '../views/Navbar';
import Group from '../model/Group';
import GroupList from '../views/GroupList';

const HomeController = {
    oninit: updateNav,
    view: function () {
        return m(Layout, m(GroupList))
    }
}

function updateNav() {
    Navbar.navItems[0] = getNavItem();
}

function getNavItem() {
    return Group.list.root.find((item) => item.type === 'root');
}

export default HomeController;