import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';


const Customer = props => (
  <tr>
    <td style={{border:"3px double green"}}>{props.customer.cname}</td>
    <td style={{border:"3px double green"}}>{props.customer.cnumber}</td>
    <td style={{border:"3px double green"}}>{props.customer.cemail}</td>
    <td style={{border:"3px double green"}}>{props.customer.cenquiries}</td>
    <td>
      <Link to={"/edit/"+props.customer._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a>
    </td>
    
  </tr>
)

export default class CustomersList extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)

    this.state = {customers: []};
  }

  componentDidMount() {
    axios.get('')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCustomer(id) {
    axios.delete(''+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }

  customerList() {
    return this.state.customers.map(currentcustomer => {
      return <Customer customer={currentcustomer} deleteCustomer={this.deleteCustomer} key={currentcustomer._id}/>;
    })
  }

  render() {
    return (
      <div>
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"80%"}}><h4><b>Contact Us</b></h4></div>
    <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
         
          <input  type="text"
              required
              className="form-control"
              value={this.state.paymentid}
              onChange={this.onChangepaymentid}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </form>
    
        <div style={{width:"19%"}}><h4><b></b></h4></div>

    
</div>
        <div style={{overflowX:"scroll"}}>
         <div style={{overflowY:"scroll"}}>     
        <table className="table" style={{border:"3px double green"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"3px double green"}}>Contact Us</th>
              <th style={{border:"3px double green"}}>Contact Number</th>
              <th style={{border:"3px double green"}}>Contact Email</th>
              <th style={{border:"3px double green"}}>Contact Enquiries</th>
              
              
             
            </tr>
          </thead>
          <tbody>
            { this.customerList() }
          </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </div>
        
      </div>
    )
  }
}