export default class DOM3D {
    // Get first element matching passed query
    getEl (query) {
        return document.querySelector(query);
    }
    // Get all elements matching passed query
    getEls (query) {
        return [...document.querySelectorAll(query)];
    }
}