import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import Search from '@material-ui/icons/SearchRounded';

const Customer = props => (
  <tr>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.classname}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.image}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.description}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.category}</td>
    
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.duration}</td>
    
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.caloriesburnt}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>
    <tr style={{textAlign:"center"}}>name:{props.customer.instructor.name}</tr>
    <tr style={{textAlign:"center"}}>image:{props.customer.instructor.img}</tr>
   

    </td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.instructorprofile}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.sdateandtime}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{props.customer.snameandcount}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>
      <Link to={"/liveupdate/"+props.customer._id}>edit</Link> | <a href="/videolisting" onClick={() => { props.deleteCustomer(props.customer._id) }}>delete</a>
    </td>
    

    
    
  </tr>
)

export default class CustomersList extends Component {
  constructor(props) {
    super(props);

    this.deleteCustomer = this.deleteCustomer.bind(this)

    this.onChangeclassname = this.onChangeclassname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      classname:'',
      customers: []};
}

  componentDidMount() {
    axios.get('https://instructor9513.herokuapp.com/liveclasses/')
      .then(response => {
        this.setState({ customers: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  onChangeclassname(e) {
    this.setState({
      classname: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      classname: this.state.classname
    }
    axios.post('https://instructor9513.herokuapp.com/liveclasses/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }

  deleteCustomer(id) {
    axios.delete('https://instructor9513.herokuapp.com/liveclasses/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      customers: this.state.customers.filter(el => el._id !== id)
    })
  }

  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.classname.toLowerCase() < b.classname.toLowerCase()) return -1;
      if(a.classname.toLowerCase() > b.classname.toLowerCase()) return 1;
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
    <div style={{width:"80%"}}><h4><b>Live Classes</b></h4></div>
    <div style={{marginTop:"5px"}}  >
    <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
        
          <input  type="text"
              required
              className="form-control"
              value={this.state.classname}
              onChange={this.onChangeclassname}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
        </form>
        </div>
        <div style={{width:"19%"}}><h4><b></b></h4></div>
   
</div>
        <div style={{overflowY:"scroll"}}>
               
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
            <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Class Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Featured Image</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Class Description</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Class Category</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Class Duration</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Expected Calories Burnt</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Instructor Name&Image</th>
               <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Instructor Profile</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Start Date&Time</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Subscribers Names&Count</th> 
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