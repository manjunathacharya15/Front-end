import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeemail=this.onChangeemail.bind(this);
    this.onChangepassword=this.onChangepassword.bind(this);

    this.onChangegender=this.onChangegender.bind(this);
    this.onChangeage=this.onChangeage.bind(this);
    this.onChangeweight=this.onChangeweight.bind(this);
    this.onChangeheight=this.onChangeheight.bind(this);
    this.onChangecareer=this.onChangecareer.bind(this);
    this.onChangeintroduction=this.onChangeintroduction.bind(this);
    this.onChangebriefhistory=this.onChangebreifhistory.bind(this);
    this.onChangespecializedin=this.onChangespecializedin.bind(this);
    this.onChangenoofapplicants=this.onChangenoofapplicants.bind(this);
    this.onChangenoofattendees=this.onChangenoofattendees.bind(this);
    this.onChangenoofsubscribers=this.onChangenoofsubscribers.bind(this);
    
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      email:'',
      password:'',
      gender:'',
     
      age:'',
      weight:'',
      height:'',
      career:'',
      introduction:'',
      briefhistory:'',
      specializedin:'',
      noofapplicants:'',
      noofattendees:'',
      noofsubscribers:'',
      trainer:[]
      
      
    }
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
  onChangepassword(e) {
    this.setState({
      password: e.target.value
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
  onChangeage(e) {
    this.setState({
      age: e.target.value
    })
  }
  onChangeweight(e) {
    this.setState({
      weight: e.target.value
    })
  }
  onChangeheight(e) {
    this.setState({
      height: e.target.value
    })
  }
  onChangecareer(e) {
    this.setState({
      career: e.target.value
    })
  }
  onChangeintroduction(e) {
    this.setState({
      introduction: e.target.value
    })
  }
  onChangebreifhistory(e) {
    this.setState({
      briefhistory: e.target.value
    })
  }
  onChangespecializedin(e) {
    this.setState({
      specializedin: e.target.value
    })
  }
  onChangenoofapplicants(e) {
    this.setState({
      noofapplicants: e.target.value
    })
  }
  onChangenoofattendees(e) {
    this.setState({
      noofattendees: e.target.value
    })
  }
  onChangenoofsubscribers(e) {
    this.setState({
      noofsubscribers: e.target.value
    })
  }
 
  onSubmit(e) {
    e.preventDefault();

    const trainer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password:this.state.password,
      gender: this.state.gender,
      age: this.state.age,
      weight: this.state.weight,
      height: this.state.height,
      career: this.state.career,
      introduction: this.state.introduction,
      briefhistory: this.state.briefhistory,
      specializedin: this.state.specializedin,
      noofapplicants: this.state.noofapplicants,
      noofattendees: this.state.noofattendees,
      noofsubscribers: this.state.noofsubscribers,

    }

    console.log(trainer);

    axios.post('https://instructor9513.herokuapp.com/instructors/signup', trainer)
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div>
      <h3>Create trainer </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>FirstName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
        </div>
        <div className="form-group"> 
          <label>Lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangelastname}
              />
        </div>
        <div className="form-group">
          <label>Email </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <div className="form-group">
          <label>Password </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.password}
              onChange={this.onChangepassword}
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
          <label>Age </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeage}
              />
        </div>
        <div className="form-group">
          <label>Weight </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeweight}
              />
        </div>
        <div className="form-group">
          <label>Height </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.height}
              onChange={this.onChangeheight}
              />
        </div>
        <div className="form-group">
          <label>Career </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.career}
              onChange={this.onChangecareer}
              />
        </div>
        <div className="form-group">
          <label>Introduction </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.introduction}
              onChange={this.onChangeintroduction}
              />
        </div>
        <div className="form-group">
          <label>Briefhistory </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.briefhistory}
              onChange={this.onChangebreifhistory}
              />
        </div>
        <div className="form-group">
          <label>Specializedin </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.specializedin}
              onChange={this.onChangespecializedin}
              />
        </div>
        <div className="form-group">
          <label>No.Of.Applicants </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.noofapplicants}
              onChange={this.onChangenoofapplicants}
              />
        </div>
        <div className="form-group">
          <label>No.Of.Attendees </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.noofattendees}
              onChange={this.onChangenoofattendees}
              />
        </div>
        <div className="form-group">
          <label>No.Of.Subscribers </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.noofsubscribers}
              onChange={this.onChangenoofsubscribers}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create trainer" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}