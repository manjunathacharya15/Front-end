import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{border:"3px double green"}}>{props.customer.exercisename}</td>
    <td style={{border:"3px double green"}}>{props.customer.vname}</td>
    <td style={{border:"3px double green"}}>{props.customer.exerciseduration}</td>
    <td style={{border:"3px double green"}}>{props.customer.exerciseprice}</td>
    <td style={{border:"3px double green"}}>{props.customer.access}</td>
    <td style={{border:"3px double green"}}>{props.customer.status}</td>
    
    
  </tr>
)

export default class CustomersList extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)

    this.state = {customers: []};
  }

  componentDidMount() {
    axios.get('https://obscure-shelf-98404.herokuapp.com/videos/')
      .then(response => {
        this.setState({ customers: response.data })
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
    <div style={{width:"80%"}}>Videos</div>
    <div style={{width:"6%"}}><Link to="" className="nav-link"><button ><Search/></button></Link></div>
    <div  style={{width:"6%"}}><Link to="" className="nav-link"><button ><FilterListRoundedIcon/></button></Link></div>
    <div style={{width:"22%"}}><Link to="/videos" className="nav-link"><button type="submit" value="AddNewTrainer">Addvideo+</button></Link></div>
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"3px double green"}}>
          <thead className="thead-light">
            <tr>
              <th style={{border:"3px double green"}}>Exercisename</th>
              <th style={{border:"3px double green"}}>Videoname</th>
              <th style={{border:"3px double green"}}>Exerciseduration</th>
              <th style={{border:"3px double green"}}>Exerciseprice</th>
              <th style={{border:"3px double green"}}>Access</th>
              <th style={{border:"3px double green"}}>Status</th>
              
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