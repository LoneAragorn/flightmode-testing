import React, {Component} from 'react';
import ReactDom from 'react-dom';
import {Jumbotron, PageHeader} from 'react-bootstrap';
import './css.css';
import ReactDomServer from 'react-dom/server';



const mongoose = require('mongoose');
const article = require('./model');
const myDb = 'mongodb://localhost:27017/flightmode-development';

mongoose.connect(myDb);

class Test extends Component {
    render (){
        return(
        <div className="filler">
            <Jumbotron className ="background-turqoise"> 
            <h4><i>The best articles out there</i></h4>
            </Jumbotron>

            <div className="title-section">
                <PageHeader><small>/futurism</small></PageHeader>
                <h4><i>How technology will shape the future</i></h4>
            </div>
            
            <div className="article-card">
               <p> Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello </p>
            </div>
            <div className="article-card">
               <p> Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello </p>
            </div>
            <div className="article-card">
               <p> Hello Hello Hello Hello Hello Hello Hello
                Hello Hello Hello</p>
            </div>

        </div>


        );
    }
}

/*export class MoreTest extends Component {
    render(){
        return(
            <h2>Hello, again!</h2>
        );
    }
}*/

export default Test;