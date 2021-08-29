import React, { Component } from 'react'
// import home from '../images/home.jpg'
import { Button } from 'reactstrap'
export default class Home extends Component {
    render() {
        return (
            <section className="homepage">
                <div className="home">
                    <div className="row">
                        <h1>IPL Super Predictor</h1>
                    </div>
                    <div className="row" id="buttons">
                    <div class="col-12 col-md-8"><Button color="success"> Dashboard PDF</Button></div>
                    <div class="col-12 col-md-8"><Button color="success"> GitHub Link</Button></div>
                        
                        

                    </div>
                </div>
            </section>
        )
    }
}
