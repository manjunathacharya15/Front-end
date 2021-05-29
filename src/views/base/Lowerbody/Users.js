import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{
border:"1px double grey",textAlign:"center"}}>{props.customer.paymentid}</td>
    <td style={{
border:"1px double grey",textAlign:"center"}}>{props.customer.cname}</td>
    <td style={{
border:"1px double grey",textAlign:"center"}}>{props.customer.pname}</td>
    <td style={{
border:"1px double grey",textAlign:"center"}}>{props.customer.amount}</td>
    <td style={{
border:"1px double grey",textAlign:"center"}}>{props.customer.paymentdate}</td>
    <td style={{
border:"1px double grey",textAlign:"center"}}>{props.customer.accessenddate}</td>

    
    
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
    this.state.customers.sort(function(a,b){
        if(a.paymentid.toLowerCase() < b.paymentid.toLowerCase()) return -1;
        if(a.paymentid.toLowerCase() > b.paymentid.toLowerCase()) return 1;
        return 0;
       })
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
    <div style={{width:"80%"}}><h4><b>Payments</b></h4></div>
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

    
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Payment id</th>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Customer Name</th>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Program Name</th>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Amount</th>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Payment Date</th>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Accessibility Enddate</th>
              

              
              
             
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