import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const items = [
    { name: "one" },
    { name: "two" },
    { name: "three" },
    { name: "four" },
    { name: "five" },
    { name: "six" },
    { name: "seven" }
]

ReactDOM.render(<App items={items} />, document.getElementById('root'));