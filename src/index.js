import React from 'react';
import {render} from 'react-dom';
import './index.css';
import Login from './component/Login'
import Register from './component/Register'
import Home from './component/Home'
import {Router, Route} from "react-router";

class App extends React.Component {
    render() {
        return (
            <div>
                <Login/>
            </div>
        )
    }
}

render(<App/>, document.getElementById('root'));


