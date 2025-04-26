import {createDOM, render} from './react.js';

const virtualDom = {
    tag: 'div',
    props: {},
    children: [
        {
            tag: 'h1',
            props: {
                className: 'title',
            },
            children: ['Hello, Virtual DOM!'],
        },
        {
            tag: 'ul',
            props: {
                className: 'description',
            },
            children: [
                {
                    tag: 'li',
                    props: {style: 'color: red;'},
                    children: ['Virtual DOM is a programming concept.'],
                },
                {
                    tag: 'li',
                    props: { style: 'color: blue;' },
                    children: ['It is used in React.'],
                },
                {
                    tag: 'li',
                    props: { style: 'color: green;' },
                    children: ['It makes UI updates faster.'],
                },
            ],
        },
    ],
};

render(virtualDom, document.querySelector('#root'));