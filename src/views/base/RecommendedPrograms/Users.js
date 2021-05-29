import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';


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

//   customerList() {
//     this.state.customers.sort(function(a,b){
//       if(a.rname.toLowerCase() < b.rname.toLowerCase()) return -1;
//       if(a.rname.toLowerCase() > b.rname.toLowerCase()) return 1;
//       return 0;
//      })
//     return this.state.customers.map(currentcustomer => {
//       return <Customer customer={currentcustomer} deleteCustomer={this.deleteCustomer} key={currentcustomer._id}/>;
//     })
//   }

  render() {
    return (
      <div>
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"80%"}}><h4><b>Recommended Programs</b></h4></div>
    
    
    

    
</div>
        <div style={{overflowX:"scroll"}}>
               
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
            <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Program Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Descriptions</th>

             
            </tr>
          </thead>
          <tbody>
          <td style={{
border:"1px double grey",textAlign:"center"}}>15days Chest</td>
<td style={{
border:"1px double grey",textAlign:"center"}}> Strength Training</td>
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