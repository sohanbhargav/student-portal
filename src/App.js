import React, { Component } from "react";
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import StudentList from './StudentList';
import StudentForm from './StudentForm';
import history from './history';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            list: []  
        };
        this.updateList = this.updateList.bind(this);
    }


    updateList(newObj) {
        let newList = this.state.list;
        newList.push(newObj);
        this.setState({
            list: newList
        });
       alert("Submitted Successfully!, Please Navigate to Student List for details! ");
    }

    render() {
        return (
            <Router  history={history}>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">StudentRegistration</Link>
                            </li>
                            <li>
                                <Link to="/list">Students List</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/list">
                            <StudentList list={this.state.list} />
                        </Route>
                        <Route path="/">
                            <StudentForm updateList={this.updateList} />
                        </Route>
                    </Switch>
                </div>
            </Router>

        );
    }
}

render(<App />, document.getElementById("root"));
