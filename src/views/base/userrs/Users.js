import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td>{props.customer.firstname}</td>
    <td>{props.customer.lastname}</td>
    <td>{props.customer.email}</td>
    <td>{props.customer.role}</td>
    <td>{props.customer.age}</td>
    <td>{props.customer.weight}</td>
    <td>{props.customer.height}</td>
    <td>{props.customer.address}</td>
    <td>{props.customer.currentplan}</td>
    <td>{props.customer.nextrenewdate}</td>
    <td>{props.customer.numberofexercises}</td>
    <td>{props.customer.timedurationofallexercises}</td>
    <td>{props.customer.totalcaloriesburnt}</td>
    <td>{props.customer.phonenumber}</td>
    
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
    axios.get('http://localhost:80/instructors/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteCustomer(id) {
    axios.delete('http://localhost:80/instructors/'+id)
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
        <div style={{overflowX:"scroll"}}>
        <div style={{display:"flex"}}>
    <div style={{width:"84%"}}>Trainers</div>
    <div style={{width:"11%"}}><Link to="" className="nav-link"><button ><Search/></button></Link></div>
    <div  style={{width:"11%"}}><Link to="" className="nav-link"><button ><FilterListRoundedIcon/></button></Link></div>
    <div style={{width:"22%"}}><Link to="/welcome" className="nav-link"><button type="submit" value="AddNewTrainer">AddNewUser+</button></Link></div>
</div>            
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Role</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Height</th>
              <th>Address</th>
              <th>Currentplan</th>
              <th>Nextrenewdate</th>
              <th>Numberofexercises</th>
              <th>TimeDurationAllExercises</th>
              <th>TotalCaloriesBurnt</th>
              <th>PhoneNumber</th>
              <th>Actions</th>
             
            </tr>
          </thead>
          <tbody>
            { this.customerList() }
          </tbody>
        </table>
        </div>
        
      </div>
    )
  }
}