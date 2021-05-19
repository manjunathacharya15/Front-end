import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangecname = this.onChangecname.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangecaloriesburnt=this.onChangecaloriesburnt.bind(this);
   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cname: '',
      image: '',
      caloriesburnt:'',
      

      
      customer:[]
      
      
    }
  }

  onChangecname(e) {
    this.setState({
      cname: e.target.value
    })
  }
  onChangeimage(e) {
    this.setState({
      image: e.target.value
    })
  }

  
  onChangecaloriesburnt(e) {
    this.setState({
      caloriesburnt: e.target.value
    })
  }
  

 
  

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      cname: this.state.cname,
      image: this.state.image,
      caloriesburnt: this.state.caloriesburnt,
      
     
      

    }

    console.log(customer);

    axios.post('https://obscure-shelf-98404.herokuapp.com/categories/add', customer)
      .then(res => console.log(res.data));
  }

  render() {
    return (
    <div>
      <h3>Create Packages </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Category Name: </label>
          <input  type="text"
              className="form-control"
              value={this.state.cname}
              onChange={this.onChangecname}
              />
        </div>
        <div className="form-group"> 
          <label>Image/Video: </label>
          <input  type="file"
              name="image"
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeimage}
              />
        </div>
        <div className="form-group">
          <label>Calories Burnt </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.caloriesburnt}
              onChange={this.onChangecaloriesburnt}
              />
        </div>
        
       
       
        <div className="form-group">
          <input type="submit" value="Create Categories" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}