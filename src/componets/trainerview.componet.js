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
      status: '',
      posttype: '',
      role:'',
      age:'',
      weight:'',
      height: '',
      career: '',
      introduction:'',
      briefhistory:'',
      specializedin:'',
      numberofapplicants:'',
      numberofattendees:'',
      numberofsubscribers:'',

      
      


      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://instructor9513.herokuapp.com/instructors/' + this.props.match.params.id)
      .then(response => {
    this.setState({
        status:response.data.status,
        posttype:response.data.posttype,
        role:response.data.role,
        age:response.data.age,
        weight:response.data.weight,
       height:response.data.height,
        career:response.data.career,
        introduction:response.data.introduction,
        briefhistory:response.data.briefhistory,
        specializedin:response.data.specializedin,
        numberofapplicants:response.data.numberofapplicants,
        numberofattendees:response.data.numberofattendees,
        numberofsubscribers:response.data.numberofsubscribers,



   
       
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
    window.location="/userrs"

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
          <label>Status: </label>
          <input  type="text"
              className="form-control"
              value={this.state.status}
           
              />
        </div>
        <div className="form-group"> 
          <label>Posttype: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.role}
             
              />
        </div>
        <div className="form-group">
          <label>Age: </label>
          <input 
              type="text" 
              className="form-control"
             value={this.state.age}
             
              />
        </div>
        <div className="form-group">
          <label>Weight: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.weight}
              
              />
        </div>
        <div className="form-group"> 
          <label>Height: </label>
          <input  type="text"
              className="form-control"
              value={this.state.height}
           
              />
        </div>
        <div className="form-group"> 
          <label>Career: </label>
          <input  type="text"
              className="form-control"
              value={this.state.career}
           
              />
        </div>
        <div className="form-group"> 
          <label>Introduction: </label>
          <input  type="text"
              className="form-control"
              value={this.state.introduction}
           
              />
        </div>
        <div className="form-group"> 
          <label>Brief History: </label>
          <input  type="text"
              className="form-control"
              value={this.state.briefhistory}
           
              />
        </div>
        <div className="form-group"> 
          <label>Specialized In: </label>
          <input  type="text"
              className="form-control"
              value={this.state.specializedin}
           
              />
        </div>
        <div className="form-group"> 
          <label>Number Of Applicants: </label>
          <input  type="text"
              className="form-control"
              value={this.state.numberofapplicants}
           
              />
        </div>
        <div className="form-group"> 
          <label>Number of Attendees: </label>
          <input  type="text"
              className="form-control"
              value={this.state.numberofattendees}
           
              />
        </div>
        <div className="form-group"> 
          <label>Number Of Subscribers: </label>
          <input  type="text"
              className="form-control"
              value={this.state.numberofsubscribers}
           
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