import React, {Component} from 'react';
import '../style/App.css';
import getAllEmployees from '../data-access/employee'

import Employee from './Employee'

class App extends Component {
    render() {
        let renderPeople = (employees) => {
            if (employees.length > 0) {
                return employees.map((employee) => {
                    return (
                        <Employee name={employee.name} startDate={employee.startDate} salary={employee.salary}
                                  endDate={employee.endDate} isActive={employee.isActive ? 1 : 0}/>
                    )
                })
            }
        }

        return (
            <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-4 sidenav">
                        <h4>Employee Management</h4>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search Employees By Name..."/>
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-search"/>
                              </button>
                              <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-plus"/>
                              </button>
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <h2>Employee Management</h2>
                        <h4>
                            <small>Listing of All Employees</small>
                        </h4>
                        {(renderPeople(this.props.employees))}
                    </div>
                </div>
                <footer className="container-fluid">
                    <p>Footer Text</p>
                </footer>
            </div>
        )
    }
}

export default App;
