import m from 'mithril';
import Navbar from './Navbar';

const main = function (vnode) {
    const container = m('.container', vnode.children);
    const nav = Navbar.nav();
    return [nav, container];
};

const layout = {
    view: function(vnode) {
        return main(vnode);
    }
};

export default layout;