export default class DOM3D {
    constructor (elem) {
        this.DOM = typeof elem === 'string' ? document.createElement(elem) : elem;
    }
    // Get first element matching passed query
    getEl (query) {
        return document.querySelector(query);
    }
    // Get all elements matching passed query
    getEls (query) {
        return [...document.querySelectorAll(query)];
    }
    // Set property of DOM
    set (prop, val) {
        this.DOM[prop] = val;
    }
    // Append ChildNode
    append (node) {
        this.DOM.appendChild(node.DOM);
    }
}