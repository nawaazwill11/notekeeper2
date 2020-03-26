import m from 'mithril';
import Navbar from './Navbar';

const main = function (vnode) {
    const container = m('.container', vnode.children);
    console.log('Main: Container elements', container);
    const nav = Navbar.nav();
    console.log('Main: Nav elements', nav);
    return [nav, container];
};

const layout = {
    view: function(vnode) {
        console.log('Layout View');
        const main_ = main(vnode);
        console.log('Layout: Main', main_);
        return main_
    }
};

export default layout;