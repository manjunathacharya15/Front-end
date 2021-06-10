import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeexercisename = this.onChangeexercisename.bind(this);
    this.onChangevideoname = this.onChangevideoname.bind(this);
    this.onChangeexerciseduration=this.onChangeexerciseduration.bind(this);
    this.onChangeexerciseprice=this.onChangeexerciseprice.bind(this);
    this.onChangeaccess=this.onChangeaccess.bind(this);
    this.onChangestatus=this.onChangestatus.bind(this);
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      exercisename: '',
      videoname: '',
      exerciseduration:'',
      exerciseprice:'',
      access: '',
      status:'',
      
      customer:[]
      
      
    }
  }

  onChangeexercisename(e) {
    this.setState({
      exercisename: e.target.value
    })
  }

  onChangevideoname(e) {
    this.setState({
      videoname: e.target.value
    })
  }
  onChangeexerciseduration(e) {
    this.setState({
      exerciseduration: e.target.value
    })
  }
  

  onChangeexerciseprice(e) {
    this.setState({
      exerciseprice: e.target.value
    })
  }
  onChangeaccess(e) {
    this.setState({
      access: e.target.value
    })
  }
  onChangestatus(e) {
    this.setState({
      status: e.target.value
    })
  }
 
  

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      exercisename: this.state.exercisename,
      vname: this.state.videoname,
      exerciseduration: this.state.exerciseduration,
      exerciseprice:this.state.exerciseprice,
      access: this.state.access,
      status: this.state.status,
      

    }

    console.log(customer);

    axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/videos/add', customer)
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div>
      <h3  >Create Videos </h3>
      <br/>
      <form onSubmit={this.onSubmit}>
      <div className="form-group" style={{width:"450px"}}> 
          <label>Exercisename: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.exercisename}
              onChange={this.onChangeexercisename}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Videoname: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.videoname}
              onChange={this.onChangevideoname}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Exerciseduration </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.exerciseduration}
              onChange={this.onChangeexerciseduration}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Exerciseprice </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.exerciseprice}
              onChange={this.onChangeexerciseprice}
              />
        </div>
        
        <div className="form-group" style={{width:"450px"}}>
          <label>Access </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.access}
              onChange={this.onChangeaccess}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Staus </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.status}
              onChange={this.onChangestatus}
              />
        </div>
       
        <div className="form-group">
          <input type="submit" value="Create videos" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}