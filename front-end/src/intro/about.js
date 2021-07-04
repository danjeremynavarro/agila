import React from 'react';
import ReactDom from 'react-dom';
import Section from './section';
import Summary from './summary';

export default class About extends React.Component{
    
    aboutContent(){
        return(
            <div className="jumbotron">
                <h1>Dan Jeremy Navarro</h1>
                <p className="lead">
                    Hey there! My name is Dan Jeremy Navarro. I'm an information technology professional with experience ranging from network and systems administration
                    to full stack development. I'm a naturally curious individual with a go-getter attitude. I believe in getting things done quick and the right way! You can read more about me by scrolling down.
                </p>
                <hr className="my-4"></hr>
                <a className="btn btn-primary m-2" href="https://www.linkedin.com/in/dan-jeremy-navarro-a075bb13a/">LinkedIn</a>
                <a className="btn btn-primary m-2" href="https://github.com/danjeremynavarro">Github</a>
            </div>
        )
    }

    render(){
        document.title = "About";
        return (
            <div className="container-fluid">
                <Section content={this.aboutContent()} />
                <Summary />
            </div>
        )
    }
}