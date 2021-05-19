import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';


const Customer = props => (
  <tr>
    <td style={{border:"3px double green"}}>{props.customer.cname}</td>
    <td style={{border:"3px double green"}}>{props.customer.image}</td>
    <td style={{border:"3px double green"}}>{props.customer.caloriesburnt}</td>
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
    <div style={{width:"80%"}}>Customer Exercise Details</div>
    <div style={{width:"6%"}}><Link to="" className="nav-link"><button ><Search/></button></Link></div>
    <div  style={{width:"22%"}}><Link to="" className="nav-link"><button ><FilterListRoundedIcon/></button></Link></div>
    
    
    

    
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"3px double green"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"3px double green"}}>Category Name</th>
              <th style={{border:"3px double green"}}>Image/Video</th>
              <th style={{border:"3px double green"}}>Calories Burnt</th>
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