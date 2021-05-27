import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeemail=this.onChangeemail.bind(this);
    this.onChangegender=this.onChangegender.bind(this);
    

   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      email:'',
      gender:'',
    

      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://instructor9513.herokuapp.com/instructors/' + this.props.match.params.id)
      .then(response => {
    this.setState({
        firstname:response.data.firstname,
        lastname:response.data.lastname,
        email:response.data.email,
        gender:response.data.gender,
   
       
    })
      })
      .catch(function(error){
          console.log(error)
      })
  }

  onChangefirstname(e) {
    this.setState({
      firstname: e.target.value
    })
  }
  onChangelastname(e) {
    this.setState({
      lastname: e.target.value
    })
  }

  
  onChangeemail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangegender(e) {
    this.setState({
      gender: e.target.value
    })
  }
  

 
  

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      gender:this.state.gender,

     
      

    }

    axios.post('https://instructor9513.herokuapp.com/instructors/update/' + this.props.match.params.id, customer)
    .then(function(response){
        if(response.data==='Instructor updated!'){
            window.location='/userrs'
        }
       }) 
  }

  render() {
    return (
    <div>
      <h3>Update Trainer </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>First Name: </label>
          <input  type="text"
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
        </div>
        <div className="form-group"> 
          <label>Last Name: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangelastname}
              />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input 
              type="email" 
              className="form-control"
             value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <div className="form-group">
          <label>Gender </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangegender}
              />
        </div>
       
       
       
        <div className="form-group">
          <input type="submit" value="Update trainer" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}