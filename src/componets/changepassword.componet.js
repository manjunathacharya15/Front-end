import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangeoldpassword = this.onChangeoldpassword.bind(this);
    this.onChangenewpassword=this.onChangenewpassword.bind(this);
   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: '',
      oldpassword: '',
      newpassword:'',
   

      
      customer:[]
      
      
    }
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeoldpassword(e) {
    this.setState({
      oldpassword: e.target.value
    })
  }
  onChangenewpassword(e) {
    this.setState({
      newpassword: e.target.value
    })
  }
  


 
 
  
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      email: this.state.email,
      oldpassword: this.state.oldpassword,
      newpassword: this.state.newpassword,
      
     
      

    }

    console.log(customer);

    axios.post('https://obscure-shelf-98404.herokuapp.com/changepassword', customer)
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div>
      <h3>Create Packages </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <div className="form-group"> 
          <label>Old Password: </label>
          <input  type="password"
              required
              className="form-control"
              value={this.state.oldpassword}
              onChange={this.onChangeoldpassword}
              />
        </div>
        <div className="form-group">
          <label>New Password </label>
          <input 
              type="password" 
              className="form-control"
              value={this.state.newpassword}
              onChange={this.onChangenewpassword}
              />
        </div>
       
       
       
        <div className="form-group">
          <input type="submit" value="Create new password" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}