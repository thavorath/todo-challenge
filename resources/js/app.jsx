require('./bootstrap');

import React from 'react';
import ReactDom from 'react-dom';
import TodoList from './TodoList.jsx';

function App() {
    return (<div>
        <div className = "header" >
        Welcome to TodoList 
		</div> 
		<TodoList / >
        </div>)
}


const appE = document.querySelector('#app-container');
if (appE) {
    ReactDom.render(React.createElement(App), appE);
}