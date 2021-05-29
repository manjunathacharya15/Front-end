import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.packagename}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.category}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.video}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.price}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.subscribers}</td>


    <td style={{border:"1px double grey",textAlign:"center"}}>
     <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a>
    </td> 
    
  </tr>
  
)


export default class CustomersList extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangepackagename = this.onChangepackagename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      packagename:'',
      customers: []};
}
  

  componentDidMount() {
    axios.get('https://obscure-shelf-98404.herokuapp.com/packages/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangepackagename(e) {
    this.setState({
      packagename: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      packagename: this.state.packagename
    }
    axios.post('https://obscure-shelf-98404.herokuapp.com/packages/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }

  deleteCustomer(id) {
    axios.delete('https://obscure-shelf-98404.herokuapp.com/packages/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }

  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.packagename.toLowerCase() < b.packagename.toLowerCase()) return -1;
      if(a.packagename.toLowerCase() > b.packagename.toLowerCase()) return 1;
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
    <div style={{width:"80%"}}><h4><b>Packages</b></h4></div>
    <div style={{marginTop:"5px"}}>
    <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          
          <input  type="text"
              required
              className="form-control"
              value={this.state.packagename}
              onChange={this.onChangepackagename}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </form>
        </div>
    
    <div  style={{width:"26%"}}><Link to="/package" className="nav-link"><button className="btn btn-success">AddNewPackages</button></Link></div>
    
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Package Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Category</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Video</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Price</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Subscribers</th>
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