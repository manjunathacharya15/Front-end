import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{border:"3px double green"}}>{props.customer.packagename}</td>
    <td style={{border:"3px double green"}}>{props.customer.category}</td>
    <td style={{border:"3px double green"}}>{props.customer.video}</td>
    <td style={{border:"3px double green"}}>{props.customer.price}</td>
    <td style={{border:"3px double green"}}>{props.customer.subscribers}</td>


    <td>
    <a   href="#" >update</a> | <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a>
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
    <div style={{width:"80%"}}>Packages</div>
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
    <div  style={{width:"5%"}}><Link to="" className="nav-link"><button ><FilterListRoundedIcon/></button></Link></div>
    <div  style={{width:"26%"}}><Link to="/package" className="nav-link"><button >AddNewPackages</button></Link></div>
    
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"3px double green"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"3px double green"}}>Package Name</th>
              <th style={{border:"3px double green"}}>Category</th>
              <th style={{border:"3px double green"}}>Video</th>
              <th style={{border:"3px double green"}}>Price</th>
              <th style={{border:"3px double green"}}>Subscribers</th>
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