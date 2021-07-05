import React from 'react';
import Section from './section';
import Summary from './summary';
import { MDBBtn } from 'mdb-react-ui-kit';

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
                <MDBBtn href="https://www.linkedin.com/in/dan-jeremy-navarro-a075bb13a/" color="primary" className="m-2">LinkedIn</MDBBtn>
                <MDBBtn href="https://github.com/danjeremynavarro/" color="primary" className="m-2">Github</MDBBtn>
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