import m from 'mithril';
import navbar from './navbar';

const main = function (vnode) {
    return m('.container', vnode.children)
}

const layout = {
    view: function(vnode) {
        return [
            navbar.navLoad(),
            main(vnode)
        ]
    }
}

export default layout;