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
    this.onChangerole=this.onChangerole.bind(this);
    this.onChangeage=this.onChangeage.bind(this);
    this.onChangeweight=this.onChangeweight.bind(this); 
    this.onChangeheight=this.onChangeheight.bind(this);
    this.onChangeaddress=this.onChangeaddress.bind(this);
    this.onChangecurrentplan=this.onChangecurrentplan.bind(this);
    this.onChangenextrenewdate=this.onChangenextrenewdate.bind(this);
    this.onChangenumberofexercises=this.onChangenumberofexercises.bind(this);
    this.onChangetimedurationofallexercises=this.onChangetimedurationofallexercises.bind(this);
    this.onChangetotalcaloriesburnt=this.onChangetotalcaloriesburnt.bind(this);
    this.onChangephonenumber=this.onChangephonenumber.bind(this);
    this.onChangegender=this.onChangegender.bind(this);
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: '',
      lastname: '',
      email:'',
      password:'',
      role: '',
      gender:'',
      age:'',
      weight:'',
      height:'',
      address:'',
      currentplan:'',
      nextrenewdate:'',
      numberofexercises:'',
      timedurationofallexercises:'',
      totalcaloriesburnt:'',
      phonenumber:'',
      customer:[]
      
      
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
  onChangerole(e) {
    this.setState({
      role: e.target.value
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
  onChangeaddress(e) {
    this.setState({
      address: e.target.value
    })
  }
  onChangecurrentplan(e) {
    this.setState({
      currentplan: e.target.value
    })
  }
  onChangenextrenewdate(e) {
    this.setState({
      nextrenewdate: e.target.value
    })
  }
  onChangenumberofexercises(e) {
    this.setState({
      numberofexercises: e.target.value
    })
  }
  onChangetimedurationofallexercises(e) {
    this.setState({
      timedurationofallexercises: e.target.value
    })
  }
  onChangetotalcaloriesburnt(e) {
    this.setState({
      totalcaloriesburnt: e.target.value
    })
  }
  onChangephonenumber(e) {
    this.setState({
      phonenumber: e.target.value
    })
  }
  

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password:this.state.password,
      role: this.state.role,
      gender:this.state.gender,
      age: this.state.age,
      weight: this.state.weight,
      height: this.state.height,
      address: this.state.address,
      currentplan: this.state.currentplan,
      nextrenewdate: this.state.nextrenewdate,
      numberofexercises: this.state.numberofexercises,
      timedurationofallexercises: this.state.timedurationofallexercises,
      totalcaloriesburnt: this.state.totalcaloriesburnt,
      phonenumber: this.state.phonenumber,

    }

    console.log(customer);

    axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/customers/signup', customer)
    .then(function(response){

      if(response.data.returnCode ==='Success'){
          window.location='/users'
      }
     }) 
  }

  render() {
    return (
    <div>
      <h3>Create customer </h3>
      <br/>
      <form onSubmit={this.onSubmit} >
      <div className="form-group" style={{width:"450px"}}> 
          <label>FirstName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Lastname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangelastname}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Email </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Password </label>
          <input 
              type="password" 
              className="form-control"
              value={this.state.password}
              onChange={this.onChangepassword}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Gender </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangegender}
              />
        </div>
        
        {/* <div className="form-group">
          <label>Role </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.role}
              onChange={this.onChangerole}
              />
        </div> */}
        {/* <div className="form-group">
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
          <label>Address </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeaddress}
              />
        </div>
        <div className="form-group">
          <label>Currentplan </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.currentplan}
              onChange={this.onChangecurrentplan}
              />
        </div>
        <div className="form-group">
          <label>Nextrenewdate </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.nextrenewdate}
              onChange={this.onChangenextrenewdate}
              />
        </div>
        <div className="form-group">
          <label>Numberofexercises </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.numberofexercises}
              onChange={this.onChangenumberofexercises}
              />
        </div>
        <div className="form-group">
          <label>Timedurationofallexercises </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.timedurationofallexercises}
              onChange={this.onChangetimedurationofallexercises}
              />
        </div>
        <div className="form-group">
          <label>Totalcaloriesburnt </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.totalcaloriesburnt}
              onChange={this.onChangetotalcaloriesburnt}
              />
        </div> */}
        <div className="form-group" style={{width:"450px"}}>
          <label>Phonenumber </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangephonenumber}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Customer" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}