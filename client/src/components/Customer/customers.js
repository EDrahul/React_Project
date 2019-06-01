import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCustomers} from '../../store/actions/customer'
import './customers.css';
var buttonStyle = {
  margin: '10px 10px 10px 0'
};
class Customers extends Component {

  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
  }

  static defaultProps = {
    customers: []
  }

  componentWillMount() {
    this.props.getCustomers();
  }

  

  render() {

    return (
      <div>
        <h2>Employee</h2>
        <ul>
        {this.props.customers.map(customer =>
          <li key={customer.id}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>

        <button
        className="btn btn-default"
        style={buttonStyle}
        onClick={this.props.handleClick}>{this.props.label} Check button</button>
      </div>

          
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

const dispatchToProps = (dispatch) => ({
   getCustomers: () => dispatch(getCustomers())
})

export default connect(mapStateToProps, dispatchToProps)(Customers);
