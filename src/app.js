import React, { Component } from "react";
import reactDom from "react-dom";

class App extends Component {

    click = () => {
        alert('react')
    }

    render() {

        return (

            <div >
                <span> HELLO REACT</span>
                <button onClick={this.click.bind(this)}>click me</button>
            </div>

        )

    }

}



reactDom.render(
    <App></App>,
    document.getElementById("root")
)