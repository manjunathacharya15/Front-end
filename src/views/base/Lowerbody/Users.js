import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{border:"3px double green"}}>{props.customer.paymentid}</td>
    <td style={{border:"3px double green"}}>{props.customer.cname}</td>
    <td style={{border:"3px double green"}}>{props.customer.pname}</td>
    <td style={{border:"3px double green"}}>{props.customer.amount}</td>
    <td style={{border:"3px double green"}}>{props.customer.paymentdate}</td>
    <td style={{border:"3px double green"}}>{props.customer.accessenddate}</td>

    
    
  </tr>
)

export default class CustomersList extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    
    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangepaymentid = this.onChangepaymentid.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      paymentid:'',
      customers: []
    };
  }

   
    
    
  
  

  componentDidMount() {
    axios.get('https://vast-river-32952.herokuapp.com/payments/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangepaymentid(e) {
    this.setState({
      paymentid: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      paymentid: this.state.paymentid
    }
    axios.post('https://vast-river-32952.herokuapp.com/payments/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }

  deleteCustomer(id) {
    axios.delete('https://vast-river-32952.herokuapp.com/payments/'+id)
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
    <div style={{width:"80%"}}>Payments</div>
    <div style={{marginTop:"5px"}}>
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
        </div>

    <div  style={{width:"18%"}}><Link to="" className="nav-link"><button ><FilterListRoundedIcon/></button></Link></div>
    
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"3px double green"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"3px double green"}}>Paymentid</th>
              <th style={{border:"3px double green"}}>Customername</th>
              <th style={{border:"3px double green"}}>Programname</th>
              <th style={{border:"3px double green"}}>Amount</th>
              <th style={{border:"3px double green"}}>Paymentdate</th>
              <th style={{border:"3px double green"}}>Accessibilityenddate</th>
              

              
              
             
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
    )
  }
}