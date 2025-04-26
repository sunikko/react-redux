function createDOM(node) {
    if(typeof node === 'string') {
        return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);

    node.children.map(createDOM).forEach(element.appendChild.bind(element));
    return element;
}

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
                    props: {},
                    children: ['Virtual DOM is a programming concept.'],
                },
                {
                    tag: 'li',
                    props: {},
                    children: ['It is used in React.'],
                },
                {
                    tag: 'li',
                    props: {},
                    children: ['It makes UI updates faster.'],
                },
            ],
        },
    ],
};

document.querySelector('#root').appendChild(createDOM(virtualDom));