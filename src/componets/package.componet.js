import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangepackagename = this.onChangepackagename.bind(this);
    this.onChangecategory = this.onChangecategory.bind(this);
    this.onChangevideo=this.onChangevideo.bind(this);
    this.onChangeprice=this.onChangeprice.bind(this);
    this.onChangesubscribers=this.onChangesubscribers.bind(this);
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      packagename: '',
      category: '',
      video:'',
      price:'',
      subscribers: '',

      
      customer:[]
      
      
    }
  }

  onChangepackagename(e) {
    this.setState({
      packagename: e.target.value
    })
  }

  onChangecategory(e) {
    this.setState({
      category: e.target.value
    })
  }
  onChangevideo(e) {
    this.setState({
      video: e.target.value
    })
  }
  

  onChangeprice(e) {
    this.setState({
      price: e.target.value
    })
  }
  onChangesubscribers(e) {
    this.setState({
      subscribers: e.target.value
    })
  }
 
 
  

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      packagename: this.state.packagename,
      category: this.state.category,
      video: this.state.video,
      price:this.state.price,
      subscribers: this.state.subscribers,
     
      

    }

    console.log(customer);

    axios.post('https://obscure-shelf-98404.herokuapp.com/packages/add', customer)
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div>
      <h3>Create Packages </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>ProgramName: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.packagename}
              onChange={this.onChangepackagename}
              />
        </div>
        <div className="form-group"> 
          <label>Category: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.category}
              onChange={this.onChangecategory}
              />
        </div>
        <div className="form-group">
          <label>Video </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.video}
              onChange={this.onChangevideo}
              />
        </div>
        <div className="form-group">
          <label>Price </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeprice}
              />
        </div>
        <div className="form-group">
          <label>Subscribers </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.subscribers}
              onChange={this.onChangesubscribers}
              />
        </div>
       
       
        <div className="form-group">
          <input type="submit" value="Create packages" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}