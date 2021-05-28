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
      file:null,
      caloriesburnt:'',
      

      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://obscure-shelf-98404.herokuapp.com/categories/' + this.props.match.params.id)
      .then(response => {
    this.setState({
        cname:response.data.cname,
        
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
      file: e.target.files[0]
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

    axios.post('https://obscure-shelf-98404.herokuapp.com/categories/update/' + this.props.match.params.id, formData)
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
          name="cname"
              className="form-control"
              value={this.state.cname}
              onChange={this.onChangecname}
              />
        </div>
        <div className="form-group"> 
          <label>Image: </label>
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
          name="caloriesburnt"
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