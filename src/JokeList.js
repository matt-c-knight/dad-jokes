import React, { Component } from "react";
import axios from 'axios';
class JokeList extends Component {
    async componentDidMount(){
    
        let res = axios.get("https://icanhazdadjoke.com/");
        console.log(res)
    }
    render() {
        return (
            <div>
                <h1>Dad Jokes</h1>
            </div>
        )
    }
}

export default JokeList;