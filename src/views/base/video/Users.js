import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.exercisename}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.vname}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.exerciseduration}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.exerciseprice}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.access}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.status}</td>
    
    
  </tr>
)

export default class CustomersList extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)

    this.onChangeexercisename = this.onChangeexercisename.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      exercisename:'',
      customers: []};
}

  componentDidMount() {
    axios.post('https://obscure-shelf-98404.herokuapp.com/videos/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeexercisename(e) {
    this.setState({
      exercisename: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      exercisename: this.state.exercisename
    }
    axios.post('https://obscure-shelf-98404.herokuapp.com/videos/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }

  deleteCustomer(id) {
    axios.delete('https://obscure-shelf-98404.herokuapp.com/videos/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }

  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.exercisename.toLowerCase() < b.exercisename.toLowerCase()) return -1;
      if(a.exercisename.toLowerCase() > b.exercisename.toLowerCase()) return 1;
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
    <div style={{width:"80%"}}><h4><b>Videos</b></h4></div>
    <div style={{marginTop:"5px"}}>
    <form onSubmit={this.onSubmit}>
    <div className="input-group"> 
          
          <input  type="text"
              required
              className="form-control"
              value={this.state.exercisename}
              onChange={this.onChangeexercisename}
              />
              <div className="input-group-apppend">
              <button className="btn btn-secondary" type="submit">
              <i className="fa fa-search"></i>
              </button>
              </div>
        </div>
        </form>
        </div>
    
    <div style={{width:"26%"}}><Link to="/videos" className="nav-link"><button type="submit" value="AddNewTrainer" className="btn btn-success">Addvideo+</button></Link></div>
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Exercise Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Video Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Exercise Duration</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Exercise Price</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Access</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Status</th>
              
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