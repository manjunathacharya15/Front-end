import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';
import { Input } from '@material-ui/core';


const Customer = props => (
  <tr>
    <td style={{border:"3px double green"}}>{props.customer.firstname}</td>
    <td style={{border:"3px double green"}}>{props.customer.lastname}</td>
    <td style={{border:"3px double green"}}>{props.customer.email}</td>
    <td style={{border:"3px double green"}}>{props.customer.role}</td>
    <td style={{border:"3px double green"}}>{props.customer.age}</td>
    <td style={{border:"3px double green"}}>{props.customer.weight}</td>
    <td style={{border:"3px double green"}}>{props.customer.height}</td>
    <td style={{border:"3px double green"}}>{props.customer.address}</td>
    <td style={{border:"3px double green"}}>{props.customer.currentplan}</td>
    <td style={{border:"3px double green"}}>{props.customer.nextrenewdate}</td>
    <td style={{border:"3px double green"}}>{props.customer.numberofexercises}</td>
    <td style={{border:"3px double green"}}>{props.customer.timedurationofallexercises}</td>
    <td style={{border:"3px double green"}}>{props.customer.totalcaloriesburnt}</td>
    <td style={{border:"3px double green"}}>{props.customer.phonenumber}</td>
    
    <td>
      <Link to={"/edit/"+props.customer._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a> 
    </td>
  </tr>
)


export default class CustomersList extends Component {

  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      firstname:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.get('https://vast-river-32952.herokuapp.com/customers/')
    .then(response => {
      this.setState({ customers: response.data })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onChangefirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      firstname: this.state.firstname
    }
    axios.post('https://vast-river-32952.herokuapp.com/customers/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }
  deleteCustomer(id) {
    axios.delete('https://vast-river-32952.herokuapp.com/customers/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.firstname.toLowerCase() < b.firstname.toLowerCase()) return -1;
      if(a.firstname.toLowerCase() > b.firstname.toLowerCase()) return 1;
      return 0;
     })
    return this.state.customers.map(currentcustomer => {
      return <Customer customer={currentcustomer} deleteCustomer={this.deleteCustomer} key={currentcustomer._id}/>;
    })
    
  }
  
  
 



  render()
 {

  
    return (
      
      <div>
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"80%"}}><h4><b>Customer</b></h4></div>
    <div style={{marginTop:"5px"}}>
    <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </form>
        </div>
    
    <div style={{width:"22%"}}><Link to="/welcome" className="nav-link"><button type="submit" value="AddNewTrainer">AddNewUser+</button></Link></div>
</div>
        <div style={{overflowY:"scroll"}}>
        
          
       
               
        <table className="table" style={{border:"3px double green"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"3px double green"}}>First Name</th>
              <th style={{border:"3px double green"}}>Last Name</th>
              <th style={{border:"3px double green"}}>Email</th>
              <th style={{border:"3px double green"}}>Role</th>
              <th style={{border:"3px double green"}}>Age</th>
              <th style={{border:"3px double green"}}>Weight</th>
              <th style={{border:"3px double green"}}>Height</th>
              <th style={{border:"3px double green"}}>Address</th>
              <th style={{border:"3px double green"}}>Current Plan</th>
              <th style={{border:"3px double green"}}>Next Renew Date</th>
              <th style={{border:"3px double green"}}>Number Of Exercises</th>
              <th style={{border:"3px double green"}}>Time Duration All Exercises</th>
              <th style={{border:"3px double green"}}>Total Calories Burnt</th>
              <th style={{border:"3px double green"}}>Phone Number</th>
              <th style={{border:"3px double green"}}>Actions</th>
           
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