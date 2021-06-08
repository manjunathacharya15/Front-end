import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";
import { Link } from 'react-router-dom';

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeemail=this.onChangeemail.bind(this);
    this.onChangephonenumber=this.onChangephonenumber.bind(this);
    this.onChangegender=this.onChangegender.bind(this);
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
    

    


   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);
this.onback=this.onback.bind(this);
    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      phonenumber:'',
      age:'',
      role: '',
      gender:'',
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
      firstname:response.data.firstname,
      lastname:response.data.lastname,
      email:response.data.email,
      phonenumber:response.data.phonenumber,
      gender:response.data.gender,
      age:response.data.age,
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
  onChangephonenumber(e) {
    this.setState({
      phonenumber: e.target.value
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

  onChangerole(e) {
    this.setState({
      role4: e.target.value
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

  

 
  onback(){
  window.location='/users'
  }

  onSubmit(e) {
    e.preventDefault();
    

    const customer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber:this.state.phonenumber,
      gender:this.state.gender,
      age:this.state.age,
      role:this.state.role,
      weight:this.state.weight,
      height:this.state.height,
      address:this.state.address,
      currentplan:this.state.currentplan,
      nextrenewdate:this.state.nextrenewdate,
      numberofexercises:this.state.numberofexercises,
      timedurationofallexercises:this.state.timedurationofallexercises,
      totalcaloriesburnt:this.state.totalcaloriesburnt,


     
      

    }

    axios.post('https://vast-river-32952.herokuapp.com/customers/update/' + this.props.match.params.id, customer)
      .then(function(response){
       if(response.data==='User updated!'){
           window.location='/users'
       }
      }) 
  }

  render() {
    return (
    <div>
      <h3 style={{marginLeft:"530px"}}> User details/Update </h3>
      <br/>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"  style={{width:"400px",marginLeft:"450px"}} > 
          <label>First Name: </label>
          <input  type="text"
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Last Name: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangelastname}
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}>
          <label>Email </label>
          <input 
              type="email" 
              className="form-control"
             value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}>
          <label>Phonenumber </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangephonenumber}
              />
        </div>
      <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Gender: </label>
          <input  type="text"
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangegender}
              
           
              />
              </div>
              <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Age: </label>
          <input  type="number"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeage}
              
           
              />
              </div>
      <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Gold/Platinum/Diamond: </label>
          <input  type="text"
              className="form-control"
              value={this.state.role}
              onChange={this.onChangerole}
           
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Weight: </label>
          <input  type="number"
             
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeweight}
             
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}>
          <label>Height: </label>
          <input 
              type="number" 
              className="form-control"
             value={this.state.height}
             onChange={this.onChangeheight}
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}>
          <label>Address: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.address}
              onChange={this.onChangeaddress}
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Current Plan: </label>
          <input  type="text"
              className="form-control"
              value={this.state.currentplan}
              onChange={this.onChangecurrentplan}
           
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Next Renew Date: </label>
          <input  type="text"
              className="form-control"
              value={this.state.nextrenewdate}
           onChange={this.onChangenextrenewdate}
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Number Of Exercise: </label>
          <input  type="number"
              className="form-control"
              value={this.state.numberofexercises}
              onChange={this.onChangenumberofexercises}
           
              />
        </div>
        <div className="form-group" style={{width:"400px",marginLeft:"450px"}}> 
          <label>Time Duration Of All Exercise: </label>
          <input  type="number"
              className="form-control"
              value={this.state.timedurationofallexercises}
              onChange={this.onChangetimedurationofallexercises}
           
              />
        </div>
        <div className="form-group"  style={{width:"400px",marginLeft:"450px"}}> 
          <label>Total Calories Burnt: </label>
          <input  type="number"
              className="form-control"
              value={this.state.totalcaloriesburnt}
              onChange={this.onChangetotalcaloriesburnt}
           
              />
        </div>
        
        
       
       
        <div className="form-group" style={{marginLeft:"600px"}} >
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>
      </form>
      <button type="button" class="btn btn-dark" style={{marginLeft:"610px"}} onClick={this.onback}>Back</button>
    </div>
    )
  }
}