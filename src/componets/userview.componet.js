import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    // this.onChangefirstname = this.onChangefirstname.bind(this);
    // this.onChangelastname = this.onChangelastname.bind(this);
    // this.onChangeemail=this.onChangeemail.bind(this);
    // this.onChangephonenumber=this.onChangephonenumber.bind(this);
    // this.onChangepassword=this.onChangepassword.bind(this);

   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      role: '',
      weight: '',
      height:'',
      address:'',
      currentplan:'',
      nextrenewdate: '',
      numberofexercises: '',
      timedurationofallexercises:'',
      totalcaloriesburnt:'',
      


      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://vast-river-32952.herokuapp.com/customers/' + this.props.match.params.id)
      .then(response => {
    this.setState({
        role:response.data.role,
        weight:response.data.weight,
        height:response.data.height,
        address:response.data.address,
        currentplan:response.data.currentplan,
        nextrenewdate:response.data.nextrenewdate,
        numberofexercises:response.data.numberofexercises,
        timedurationofallexercises:response.data.timedurationofallexercises,
        totalcaloriesburnt:response.data.totalcaloriesburnt,


   
       
    })
      })
      .catch(function(error){
          console.log(error)
      })
  }

//   onChangefirstname(e) {
//     this.setState({
//       firstname: e.target.value
//     })
//   }
//   onChangelastname(e) {
//     this.setState({
//       lastname: e.target.value
//     })
//   }

  
//   onChangeemail(e) {
//     this.setState({
//       email: e.target.value
//     })
//   }
//   onChangephonenumber(e) {
//     this.setState({
//       phonenumber: e.target.value
//     })
//   }
//   onChangepassword(e) {
//     this.setState({
//       password: e.target.value
//     })
//   }
  

 
  

  onSubmit(e) {
    e.preventDefault();
    window.location="/users"

    // const customer = {
    //   firstname: this.state.firstname,
    //   lastname: this.state.lastname,
    //   email: this.state.email,
    //   phonenumber:this.state.phonenumber,

     
      

    // }

    // axios.post('https://vast-river-32952.herokuapp.com/customers/update/' + this.props.match.params.id, customer)
    //   .then(function(response){
    //    if(response.data==='User updated!'){
    //        window.location='/users'
    //    }
    //   }) 
  }

  render() {
    return (
    <div>
      <h3> User details </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Gold/Platinum/Diamond: </label>
          <input  type="text"
              className="form-control"
              value={this.state.role}
           
              />
        </div>
        <div className="form-group"> 
          <label>Weight: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.weight}
             
              />
        </div>
        <div className="form-group">
          <label>Height: </label>
          <input 
              type="text" 
              className="form-control"
             value={this.state.height}
             
              />
        </div>
        <div className="form-group">
          <label>Address: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.address}
              
              />
        </div>
        <div className="form-group"> 
          <label>Current Plan: </label>
          <input  type="text"
              className="form-control"
              value={this.state.currentplan}
           
              />
        </div>
        <div className="form-group"> 
          <label>Next Renew Date: </label>
          <input  type="text"
              className="form-control"
              value={this.state.nextrenewdate}
           
              />
        </div>
        <div className="form-group"> 
          <label>Number Of Exercise: </label>
          <input  type="text"
              className="form-control"
              value={this.state.numberofexercises}
           
              />
        </div>
        <div className="form-group"> 
          <label>Time Duration Of All Exercise: </label>
          <input  type="text"
              className="form-control"
              value={this.state.timedurationofallexercises}
           
              />
        </div>
        <div className="form-group"> 
          <label>Total Calories Burnt: </label>
          <input  type="text"
              className="form-control"
              value={this.state.totalcaloriesburnt}
           
              />
        </div>
        
        
       
       
        <div className="form-group">
          <input type="submit" value="back" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}