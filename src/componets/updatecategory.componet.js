import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangecname = this.onChangecname.bind(this);
    this.onChangeimage= this.onChangeimage.bind(this);
    this.onChangecaloriesburnt=this.onChangecaloriesburnt.bind(this);


   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      cname: '',
      image: '',
      caloriesburnt:'',
      

      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://obscure-shelf-98404.herokuapp.com/categories/' + this.props.match.params.id)
      .then(response => {
    this.setState({
        cname:response.data.cname,
        image:response.data.image,
        caloriesburnt:response.data.caloriesburnt,
       
   
       
    })
      })
      .catch(function(error){
          console.log(error)
      })
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

    axios.post('https://obscure-shelf-98404.herokuapp.com/categories/update/' + this.props.match.params.id, customer)
      .then(function(response){
       if(response.data==='Category updated!'){
           window.location='/Categorymanagement'
       }
      }) 
  }

  render() {
    return (
    <div>
      <h3>Update Category </h3>
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
          <label>Image: </label>
          <input  type="text"
             
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
          <input type="submit" value="Update Category" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}