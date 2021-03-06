import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Spring} from 'react-spring/renderprops';
import Counter from '../counter/Counter';


function App() {
    return (
        <Spring from={{
            opacity: 0, marginTop: -1000
        }} to={{
            opacity: 1, marginTop: 0
        }}>
            {
                props => (
                    <div className="App" style={props}>
                        <div>
                            <header className="App-header">
                                <img src={logo} className="App-logo" alt="logo"/>
                                <p>
                                    Edit <code>src/App.js</code> and save to reload.
                                </p>
                                <a className="App-link" href="https://reactjs.org" target="_blank"
                                   rel="noopener noreferrer">
                                    Learn React
                                </a>
                                <Counter/>
                            </header>
                        </div>
                    </div>
                )
            }
        </Spring>
    );
}

export default App;
