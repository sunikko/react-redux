/* @jsx createElement */
import {render, createElement, Component} from './react.js';

const virtualDOM1 = {
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

const virtualDOM2 = createElement(
    'div',
    { className: 'container' },
    createElement('h1', { className: 'title' }, 'Hello, Virtual DOM!'),
    createElement(
        'ul',
        { className: 'description' },
        createElement('li', { style: 'color: red;' }, 'Virtual DOM is a programming concept.'),
        createElement('li', { style: 'color: blue;' }, 'It is used in React.'),
        createElement('li', { style: 'color: green;' }, 'It makes UI updates faster.')
    )
);


// class component
class Title extends Component {
    render() {
        return <h1>{this.props.children}</h1>;
    }
}

// funtion component
function Item(props){
    return <li style={`color: ${props.color}`}>{props.children}</li>;
}

const App = () => (
    <p>
        <Title>Hello!!! Virtual DOM Class!</Title>
        <ul>
            <Item color="red">Virtual DOM is a programming concept.</Item>
            <Item color="blue">It is used in React.</Item>
            <Item color="green">It makes UI updates faster.</Item>
        </ul>
    </p>
  );


render( <App />, document.querySelector('#root'));