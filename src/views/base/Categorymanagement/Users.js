import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.cname}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.image}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.caloriesburnt}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>
      <Link to={"/updatecategory/"+props.customer._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a>
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
    axios.get('https://obscure-shelf-98404.herokuapp.com/categories/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCustomer(id) {
    axios.delete('https://obscure-shelf-98404.herokuapp.com/categories/'+id)
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
    <div style={{width:"80%"}}><h4><b>Category</b></h4></div>
    
    <div style={{width:"11%"}}><Link to="/newcategory" className="nav-link"><button className="btn btn-success" >Newcategory</button></Link></div>
    
    <div  style={{width:"24%"}}><Link to="" className="nav-link"><button className="btn btn-secondary" >Activate/Deactivate</button></Link></div>

    
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Category Name</th>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Image/Video</th>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Calories Burnt</th>
              <th style={{
border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"
}}>Actions</th>
              
             
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