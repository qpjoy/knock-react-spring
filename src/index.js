import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import App from './components/app/App';
import Carousel from "./components/carousel/Carousel";
import WordAnimation from "./components/word-animation/WordAnimation";
import Process from "./components/progress/Progress";
import BGImage from "./components/image/BGImage";
import Image3D from "./components/image/Image3D";

function Root() {
    return (
        <Router>
            <>
                <Route path="/" exact={true} component={App}/>
                <Route path="/carousel" exact={true} component={Carousel}/>
                <Route path="/word-animation" component={WordAnimation}/>
                <Route path="/process" component={Process} />
                <Route path="/bg-image" component={BGImage} />
                <Route path="/image-3d" component={Image3D}/>
            </>
        </Router>
    )
}


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
