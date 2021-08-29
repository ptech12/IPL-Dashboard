import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <h1 className="name">
                            About Team
                        </h1>
                        </div>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col"><h2 className="team-name">Venkatesh E</h2></div>
                        <div className="col"><h2 className="team-name">Prasanth A R</h2></div>
                    </div>
                    </div>
                </div>
            </section>
        )
    }
}
