import m from 'mithril';
import Navbar from './Navbar';

const main = function (vnode) {
    return m('.container', vnode.children)
}

const layout = {
    view: function(vnode) {
        return [
            Navbar.nav(),
            main(vnode)
        ]
    }
};

export default layout;