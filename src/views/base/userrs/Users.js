import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';


const Customer = props => (
  <tr>
    <td style={{border:"1px double grey",textAlign:"center"}}><Link to= {"/trainerdetail/"+props.customer._id}>{props.customer.firstname}</Link></td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.lastname}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.email}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.gender}</td>
    {/* <td style={{border:"1px double grey"}}>{props.customer.status}</td> */}
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.phonenumber}</td>
    {/* <td style={{border:"1px double grey"}}>{props.customer.posttype}</td>
    <td style={{border:"1px double grey"}}>{props.customer.role}</td>
    <td style={{border:"1px double grey"}}>{props.customer.age}</td>
    <td  style={{border:"1px double grey"}}>{props.customer.weight}</td>
    <td style={{border:"1px double grey"}}>{props.customer.height}</td>
    <td style={{border:"1px double grey"}}>{props.customer.career}</td>
    <td style={{border:"1px double grey"}}>{props.customer.introduction}</td>
    <td style={{border:"1px double grey"}}>{props.customer.briefhistory}</td>
    <td style={{border:"1px double grey"}}>{props.customer.specializedin}</td>
    <td style={{border:"1px double grey"}}>{props.customer.numberofapplicants}</td>
    <td style={{border:"1px double grey"}}>{props.customer.numberofattendees}</td>
    <td style={{border:"1px double grey"}}>{props.customer.numberofsubscribers}</td>
     */}
    

    
    <td style={{border:"1px double grey",textAlign:"center"}}>
      <Link to={"/updates/"+props.customer._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a>
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
    axios.get('https://instructor9513.herokuapp.com/instructors/')
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
    axios.post('https://instructor9513.herokuapp.com/instructors/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
          }

  deleteCustomer(id) {
    axios.delete('https://instructor9513.herokuapp.com/instructors/'+id)
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

  render() {
    return (
      <div>
         <div class="container">

<div class="row">
  <div class="col-md">
         <div style={{display:"flex"}}>
    <div style={{width:"84%"}}><h4><b>Trainers</b></h4></div>
    <div style={{marginTop:"5px"}}>
    <form onSubmit={this.onSubmit}>
      <div className="form-group" style={{width:"100%"}}> 
          
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
        </div>
        <div className="form-group" style={{width:"6%"}}>
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        
        </form>
       
    </div>
    
   
    <div style={{width:"22%"}}><Link to="/trainer" className="nav-link"><button type="submit" value="AddNewTrainer" className="btn btn-success">AddNewTrainer+</button></Link></div>
</div>            
        <div style={{overflowY:"scroll"}}>
       
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>First Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Last Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Email</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Gender</th>
              {/* <th style={{border:"1px double grey"}}>Status</th> */}
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Phone Number</th>
              {/* <th style={{border:"1px double grey"}}>Post Type</th>
              <th style={{border:"1px double grey"}}>Role</th>
              <th style={{border:"1px double grey"}}>Age</th>
              <th style={{border:"1px double grey"}}>Weight</th>
              <th style={{border:"1px double grey"}}>Height</th>
              <th style={{border:"1px double grey"}}>Career</th>
              <th style={{border:"1px double grey"}}>Introduction</th>
              <th style={{border:"1px double grey"}}>Brief History</th>
              <th style={{border:"1px double grey"}}>Specialized In</th>
              <th style={{border:"1px double grey"}}>No.of.applicants</th>
              <th style={{border:"1px double grey"}}>No.of.attendees</th>
              <th style={{border:"1px double grey"}}>No.of.subscribers</th> */}
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
    )
  }
}