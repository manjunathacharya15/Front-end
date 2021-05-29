import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';


const Customer = props => (
  <tr>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.firstname}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.lastname}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.contactnumber}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.email}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>
      <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a>
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
    axios.get('https://obscure-shelf-98404.herokuapp.com/contactus/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCustomer(id) {
    axios.delete('https://obscure-shelf-98404.herokuapp.com/contactus/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }

  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.cname.toLowerCase() < b.cname.toLowerCase()) return -1;
      if(a.cname.toLowerCase() > b.cname.toLowerCase()) return 1;
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
    <div style={{width:"80%"}}><h4><b>Contact Us</b></h4></div>
   
    
        <div style={{width:"11%"}}><Link to="/addcontact" className="nav-link"><button className="btn btn-success" >NewContact</button></Link></div>

    
</div>
        <div style={{overflowX:"scroll"}}>
         <div style={{overflowY:"scroll"}}>     
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>First Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Last Name </th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Contact Number</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Contact Email</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Actions</th>
              
              
             
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