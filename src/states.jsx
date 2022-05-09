import React, { Component } from "react";
import statesData from "./statesData.json";

class States extends Component {

    constructor(props) {
        super(props);
        this.state = { states: [], start: 0, end: 0 };
    }

    componentDidMount() {
        this.setState({ states: statesData, start: 0, end: Math.min(statesData.length, this.props.limit)});
        this.props.countHandler(statesData.length);
    }

    componentDidUpdate(prevProps) {
        console.log("states component updated");
        if (this.props.searchPrefix !== prevProps.searchPrefix) {
            let filteredStates = statesData.filter((stateObj) => {
                return stateObj.state.toLowerCase().startsWith(this.props.searchPrefix.toLowerCase());
            });

            let count = filteredStates.length;
            this.props.countHandler(count);
            this.setState({ states: filteredStates, start: 0, end: Math.min(filteredStates.length, this.props.limit) });
        }
        if (this.props.sortDir !== prevProps.sortDir) {
            let dir = this.props.sortDir; // -1 is descending, 1 is ascending
            this.setState({
                states: this.state.states.sort(function (a, b) {
                    return a.state > b.state ? 1 * dir : -1 * dir;
                })
            });
        }
        if (this.props.offset !== prevProps.offset) {
            let start = this.props.offset;
            let end = Math.min(this.state.states.length, start + this.props.limit);
            this.setState({ start: start, end: end });
        }
    }

    // console.log(`In States. props: ${JSON.stringify(props)}`);


    // let displayStates = filteredStates.map(function (state) {
    //     return <li key={state.code}>{state.state}</li>
    // });


    render() {
        //return <nav><ul className="index-nav-ul">{displayStates}</ul></nav>;
        return (
            <div className="gridContainer">
                {
                    this.state.states.slice(this.state.start, this.state.end).map((state, i) => {
                        return (
                              <div className="card" key={i}>
                                <img src={state.state_seal_url}/>
                                <div className="detailContainer">
                                    <h4><b>{state.state}</b></h4>
                                    <p>Code: {state.code}</p>
                                    <p>Capital: {state.capital_city}</p>
                                    <p>Population: {state.population}</p>
                                </div>
                              </div>
                        );
                    })
                }
            </div >
        );
    }
}

export default States;
