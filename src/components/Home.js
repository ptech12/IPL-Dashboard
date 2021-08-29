import React, { Component } from 'react'
// import home from '../images/home.jpg'
import { Button } from 'reactstrap'
import { Navbar, NavbarBrand } from 'reactstrap'

export default class Home extends Component {
    render() {
        return (
            <section className="homepage">
                 <Navbar dark expand="md">
                    <NavbarBrand href='/'>IPL Super Predictor</NavbarBrand>
                </Navbar>
                <div className="conatiner">
                <div className="home">
                    <div className="row">
                        <h1>IPL Super Predictor</h1>
                    </div>
                    <div className="row"> </div>
                    <div className="row"></div>
                    <div className="row"><br/></div>
                    <div className="row" id="buttons">
                        
                    <div class="col"><Button color="success"> Dashboard PDF</Button></div>
                    <div class="col"><Button color="primary"> GitHub Link</Button></div>
                        
                    </div>
                </div>
                </div>
            </section>
        )
    }
}
