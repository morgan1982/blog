import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Test1 from '../tests/test1';
import Test2 from '../tests/test2';

class Test extends Component {

    state = {

        tests: ""

    }


    showTest = (e) => {
        const testsObj = {
            1: <Test1 />,
            2: <Test2 />
        }

        this.setState({
            tests: testsObj[e.target.name]
        }) 
    }



    render() {





        return (

            <div>
                <button name="1" className="btn btn-primary m-" onClick={this.showTest}>show test 1</button>
                <button name="2" className="btn btn-primary" onClick={this.showTest}>show test 2</button>
                <div>{this.state.tests}</div>
            </div>
            )
    }




}



export default Test;


