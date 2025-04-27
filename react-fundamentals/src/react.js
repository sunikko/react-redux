
const hooks = [];
let currentComponent = 0;
export class Component {
    constructor(props) {
        this.props = props;
    }
}

export function createDOM(node) {
    if(typeof node === 'string') {
        return document.createTextNode(node);
    }
    const element = document.createElement(node.tag);

    Object.entries(node.props).forEach(([name, value]) => element.setAttribute(name, value));

    node.children.map(createDOM).forEach(element.appendChild.bind(element));
    return element;
}

function makeProps(props, children) {
    return {...props, children: children.length === 1 ? children[0] : children}
}

/*
* This function is just for understanding the concept of hooks.
*/
function useState(initialValue) {
    let current = currentComponent -1;
    if(!hooks[current]) {
        hooks[current] = initialValue;
    }
    const setState = (newValue) => {
        hooks[current] = newValue;
        render();
    }
    currentComponent++;
    return [hooks[current], setState];
}

export function createElement(tag, props, ...children) {
    props = props || {};
    if(typeof tag === 'function') {
        if(tag.prototype instanceof Component) {
            const instance = new tag(makeProps(props, children));
            return instance.render();
        }else{
            hooks[currentComponent] = null;
            currentComponent++;

            if(children.length > 0) {
                return tag(makeProps(props, children));
            }else{
                return tag(props); // function component's return html sentence
            }
        }
    }else{
        return {
            tag,
            props,
            children
        };
    }
}

export const render = (function() {
    let prevDOM = null;
    return function(virtualDOM, container) {
        if(prevDOM === null) {
            prevDOM = createDOM(virtualDOM);
        }
        
        // diff algorithm
        // update container.appendChild(prevDOM);

        container.appendChild(createDOM(virtualDOM));
    }
})();
