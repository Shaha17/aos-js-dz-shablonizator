'use strict';

const obj = {
    tagname: 'img',
    attributes: {
        id: 'first',
        'data-id': 'first',
        class: 'primary',
        src: './img/logo_JS.svg'
    },
    text: 'Hello, JS',
};

function makeElement(el) {
    const element = document.createElement(el.tagname);
    element.textContent = el.text;

    for (const item of Object.keys(el.attributes)) {
        element.setAttribute(item, el.attributes[item]);
    }
    return element;
}
const rootEl = document.getElementById('root');
rootEl.appendChild(makeElement(obj));

console.log(makeElement(obj));