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
      file: null,
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
     file:e.target.files[0]
    })
  }

  
  onChangecaloriesburnt(e) {
    this.setState({
      caloriesburnt: e.target.value
    })
  }
  

 
  

  onSubmit(e) {
    e.preventDefault();

const formData=new FormData();
formData.append('cname',this.state.cname);
formData.append('image',this.state.file);
formData.append('caloriesburnt',this.state.caloriesburnt);


const config={
  headers:{
    'content-type':'multipart/form-data'
  }

  }
    axios.post('https://obscure-shelf-98404.herokuapp.com/categories/add',formData)
    .then(function(response){
      if(response.data==='Category Added'){
          window.location='/Categorymanagement'
      }
     }) 
  }

  render() {
    return (
    <div>
      <h3>Create Packages </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Category Name: </label>
          <input  type="text"
              name="cname"
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
              name="caloriesburnt"
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