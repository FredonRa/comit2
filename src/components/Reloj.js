import React, { Component } from 'react';

class Reloj extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }
    }
    
    componentDidMount(){
        this.timerID = setInterval(()=> this.clock(), 1000)
    }

    clock(){
        this.setState ({date: new Date()});
    }

    render() {
        return (
            <section>
                <h2>La hora es: {this.state.date.toLocaleTimeString()}</h2>
            </section>
        )
    }    
}

export default Reloj;