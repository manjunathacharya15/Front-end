import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangefirstname = this.onChangefirstname.bind(this);
    this.onChangelastname = this.onChangelastname.bind(this);
    this.onChangeemail=this.onChangeemail.bind(this);
    this.onChangephonenumber=this.onChangephonenumber.bind(this);
    this.onChangegender=this.onChangegender.bind(this);
    this.onChangestatus=this.onChangestatus.bind(this);
    this.onChangeposttype=this.onChangeposttype.bind(this);
    this.onChangerole=this.onChangerole.bind(this);
    this.onChangeage=this.onChangeage.bind(this);
    this.onChangeweight=this.onChangeweight.bind(this);
    this.onChangeheight=this.onChangeheight.bind(this);
    this.onChangecareer=this.onChangecareer.bind(this);
    this.onChangeintroduction=this.onChangeintroduction.bind(this);
    this.onChangebriefhistory=this.onChangebriefhistory.bind(this);
    this.onChangespecializedin=this.onChangespecializedin.bind(this);
    this.onChangenumberofapplicants=this.onChangenumberofapplicants.bind(this);
    this.onChangenumberofattendees=this.onChangenumberofattendees.bind(this);
    this.onChangenumberofsubscribers=this.onChangenumberofsubscribers.bind(this);
    



   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname:'',
      lastname:'',
      email:'',
      phonenumber:'',
      gender:'',
      status:'',
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
      axios.get('https://mitnessnew.herokuapp.com/instructors/' + this.props.match.params.id)
      .then(response => {
    this.setState({
      firstname:response.data.firstname,
      lastname:response.data.lastname,
      email:response.data.email,
      phonenumber:response.data.phonenumber,
      gender:response.data.gender,
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
  onChangestatus(e) {
    this.setState({
      status: e.target.value
    })
  }
  onChangeposttype(e) {
    this.setState({
      posttype: e.target.value
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
  onChangebriefhistory(e) {
    this.setState({
      briefhistory: e.target.value
    })
  }
  onChangespecializedin(e) {
    this.setState({
      specializedin: e.target.value
    })
  }
  onChangenumberofapplicants(e) {
    this.setState({
      numberofapplicants: e.target.value
    })
  }
  onChangenumberofattendees(e) {
    this.setState({
      numberofattendees: e.target.value
    })
  }
  onChangenumberofsubscribers(e) {
    this.setState({
      numberofsubscribers: e.target.value
    })
  }

  
  onback(){
    window.location='/userrs'
    }
 
  

  onSubmit(e) {
    e.preventDefault();
    

    const customer = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phonenumber:this.state.phonenumber,
      gender:this.state.gender,
      role:this.state.role,
      age:this.state.age,
      posttype:this.state.posttype,
      status:this.state.status,
      weight:this.state.weight,
      height:this.state.height,
      career:this.state.career,
      introduction:this.state.introduction,
      briefhistory:this.state.briefhistory,
      specializedin:this.state.specializedin,
      numberofapplicants:this.state.numberofapplicants,
      numberofattendees:this.state.numberofattendees,
      numberofsubscribers:this.state.numberofsubscribers,

     
      

    }

    axios.post('https://mitnessnew.herokuapp.com/instructors/update/' + this.props.match.params.id, customer)
      .then(function(response){
       if(response.data==='Instructor updated!'){
           window.location='/userrs'
       }
      }) 
  }

  render() {
    return (
    <div>
      <h3> Trainer details/Update </h3>
      <br/>
      <form onSubmit={this.onSubmit}>
      <div className="form-group" style={{width:"450px"}}> 
          <label>First Name: </label>
          <input  type="text"
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Last Name: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangelastname}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Email </label>
          <input 
              type="email" 
              className="form-control"
             value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Phonenumber </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.phonenumber}
              onChange={this.onChangephonenumber}
              />
        </div>
      <div className="form-group" style={{width:"450px"}}> 
          <label>Gender: </label>
          <input  type="text"
              className="form-control"
              value={this.state.gender}
              onChange={this.onChangegender}
              
           
              />
              </div>
              <div className="form-group" style={{width:"450px"}}> 
          <label>Age: </label>
          <input  type="text"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeage}
              
           
              />
              </div>
      <div className="form-group" style={{width:"450px"}}> 
          <label>Status: </label>
          <input  type="text"
              className="form-control"
              value={this.state.status}
           onChange={this.onChangestatus}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Posttype: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.role}
              onChange={this.onChangeposttype}
             
              />
        </div>
        
        
        <div className="form-group" style={{width:"450px"}}>
          <label>Weight: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.weight}
              onChange={this.onChangeweight}
              
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Height: </label>
          <input  type="text"
              className="form-control"
              value={this.state.height}
              onChange={this.onChangeheight}
           
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Career: </label>
          <input  type="text"
              className="form-control"
              value={this.state.career}
              onChange={this.onChangecareer}
           
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Introduction: </label>
          <input  type="text"
              className="form-control"
              value={this.state.introduction}
              onChange={this.onChangeintroduction}
           
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Brief History: </label>
          <input  type="text"
              className="form-control"
              value={this.state.briefhistory}
              onChange={this.onChangebriefhistory}
           
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Specialized In: </label>
          <input  type="text"
              className="form-control"
              value={this.state.specializedin}
              onChange={this.onChangespecializedin}
           
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Number Of Applicants: </label>
          <input  type="text"
              className="form-control"
              value={this.state.numberofapplicants}
              onChange={this.onChangenumberofapplicants}
           
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Number of Attendees: </label>
          <input  type="text"
              className="form-control"
              value={this.state.numberofattendees}
              onChange={this.onChangenumberofattendees}
           
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Number Of Subscribers: </label>
          <input  type="text"
              className="form-control"
              value={this.state.numberofsubscribers}
              onChange={this.onChangenumberofsubscribers}
           
              />
        </div>
        
        
       
       
        <div className="form-group">
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>
      </form>
      <button type="button" class="btn btn-dark" onClick={this.onback}>Back</button>
    </div>
    )
  }
}