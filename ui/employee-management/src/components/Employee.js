/**
 * Created by Travis on 2/16/2017.
 */

import React, {Component} from 'react';

class Employee extends Component {


    render() {
        let renderActive = () => {
            if(!this.props.isActive){
                return(<span className="label label-danger">Is Not Active</span>)
            } else {
                return(<span className="label label-success">Is Active</span>)
            }
        }
        let renderEndDate = () => {
            if(this.props.endDate){
                return(<h5>End Date: {this.props.endDate}</h5>)
            } else {
                return ''
            }
        }

        return (
            <div className="Employee">
                <hr />
                <h2>{this.props.name}</h2>
                <h5>Start Date: {this.props.startDate}</h5>
                {renderEndDate()}
                <h4>
                    {renderActive()}
                    <span className="label label-info">Salary: {this.props.salary}</span>
                </h4>
                <hr />
            </div>
        );
    }
}

Employee.propTypes = {
    name: React.PropTypes.string.isRequired,
    startDate: React.PropTypes.string.isRequired,
    endDate: React.PropTypes.string,
    salary: React.PropTypes.number.isRequired,
    isActive: React.PropTypes.number.isRequired,
};

export default Employee;
