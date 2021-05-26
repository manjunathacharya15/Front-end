import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangeclassname = this.onChangeclassname.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangedescription=this.onChangedescription.bind(this);
    this.onChangeduration=this.onChangeduration.bind(this);
    this.onChangechooseinstructor=this.onChangechooseinstructor.bind(this);
    this.onChangecategory=this.onChangecategory.bind(this);
    this.onChangeaccess=this.onChangeaccess.bind(this);
    this.onChangeprice=this.onChangeprice.bind(this);
    this.onChangeexercisename=this.onChangeexercisename.bind(this);
    this.onChangevideo=this.onChangevideo.bind(this);
    this.onChangecategoryname=this.onChangecategoryname.bind(this);
    this.onChangecimage=this.onChangecimage.bind(this);
    this.onChangecaloriesburnt=this.onChangecaloriesburnt.bind(this);
    this.onChangepmaterial=this.onChangepmaterial.bind(this);
    this.onChangestatus=this.onChangestatus.bind(this);

    

   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
    classname: '',
      image: '',
      description:'',
     duration:'',
     chooseinstructor: '',
      category: '',
      access:'',
     price:'',
     exercisename:'',
     video:'',
     categoryname:'',
     cimage: '',
      caloriesburnt: '',
      pmaterial:'',
     status:'',
     

    

      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('https://instructor9513.herokuapp.com/programs/' + this.props.match.params.id)
      .then(response => {
    this.setState({
        classname:response.data.classname,
        image:response.data.image,
        description:response.data.description,
        duration:response.data.duration,
        chooseinstructor:response.data.chooseinstructor,
        category:response.data.category,
        access:response.data.access,
        price:response.data.price,
        exercisename:response.data.exercisename,
        video:response.data.video,
        categoryname:response.data.categoryname,
        cimage:response.data.cimage,
        caloriesburnt:response.data.caloriesburnt,
        pmaterial:response.data.pmaterial,
        status:response.data.status,
       
        
        
        
   
       
    })
      })
      .catch(function(error){
          console.log(error)
      })
  }

  onChangeclassname(e) {
    this.setState({
      classname: e.target.value
    })
  }
  onChangeimage(e) {
    this.setState({
      image: e.target.value
    })
  }

  
  onChangedescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeduration(e) {
    this.setState({
      duration: e.target.value
    })
  }
  onChangechooseinstructor(e) {
    this.setState({
      chooseinstructor: e.target.value
    })
  }
  onChangecategory(e) {
    this.setState({
      category: e.target.value
    })
  }

  
  onChangeaccess(e) {
    this.setState({
      access: e.target.value
    })
  }
  onChangeprice(e) {
    this.setState({
      price: e.target.value
    })
  }
  onChangeexercisename(e) {
    this.setState({
      exercisename: e.target.value
    })
  }
  onChangevideo(e) {
    this.setState({
      video: e.target.value
    })
  }

  
  onChangecategoryname(e) {
    this.setState({
      categoryname: e.target.value
    })
  }
  onChangecimage(e) {
    this.setState({
      cimage: e.target.value
    })
  }
  onChangecaloriesburnt(e) {
    this.setState({
      caloriesburnt: e.target.value
    })
  }
  onChangepmaterial(e) {
    this.setState({
      pmaterial: e.target.value
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
      classname: this.state.classname,
      image: this.state.image,
      description: this.state.description,
      duration:this.state.duration,
      chooseinstructor: this.state.chooseinstructor,
      category: this.state.category,
      access: this.state.access,
      price:this.state.price,
      exercisename: this.state.exercisename,
      video: this.state.video,
      categoryname: this.state.categoryname,
      cimage:this.state.cimage,
      caloriesburnt: this.state.caloriesburnt,
      pmaterial: this.state.pmaterial,
      status: this.state.status,
      
      
      
      

     
      

    }

    axios.post('https://instructor9513.herokuapp.com/programs/update/' + this.props.match.params.id, customer)
    .then(function(response){
        if(response.data==='Program updated!'){
            window.location='/Videolisting'
        }
       }) 
  }

  render() {
    return (
    <div>
      <h3>Update User </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Class Name: </label>
          <input  type="text"
              className="form-control"
              value={this.state.classname}
              onChange={this.onChangeclassname}
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
          <label>Description </label>
          <input 
              type="text" 
              className="form-control"
             value={this.state.description}
              onChange={this.onChangedescription}
              />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeduration}
              />
        </div>
        <div className="form-group"> 
          <label>Choose Instructor: </label>
          <input  type="text"
              className="form-control"
              value={this.state.chooseinstructor}
              onChange={this.onChangechooseinstructor}
              />
        </div>
        <div className="form-group"> 
          <label>Category: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.category}
              onChange={this.onChangecategory}
              />
        </div>
        <div className="form-group">
          <label>Access </label>
          <input 
              type="text" 
              className="form-control"
             value={this.state.access}
              onChange={this.onChangeaccess}
              />
        </div>
        <div className="form-group">
          <label>Price </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeprice}
              />
        </div>
        <div className="form-group"> 
          <label>Exercise Name: </label>
          <input  type="text"
              className="form-control"
              value={this.state.exercisename}
              onChange={this.onChangeexercisename}
              />
        </div>
        <div className="form-group"> 
          <label>Video: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.video}
              onChange={this.onChangevideo}
              />
        </div>
        <div className="form-group">
          <label>Category Name </label>
          <input 
              type="text" 
              className="form-control"
             value={this.state.categoryname}
              onChange={this.onChangecategoryname}
              />
        </div>
        <div className="form-group">
          <label>Category Image </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.cimage}
              onChange={this.onChangecimage}
              />
        </div>
        <div className="form-group"> 
          <label>Calories Burnt: </label>
          <input  type="number"
              className="form-control"
              value={this.state.caloriesburnt}
              onChange={this.onChangecaloriesburnt}
              />
        </div>
        <div className="form-group"> 
          <label>Program Material: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.pmaterial}
              onChange={this.onChangepmaterial}
              />
        </div>
        <div className="form-group">
          <label>Status </label>
          <input 
              type="text" 
              className="form-control"
             value={this.state.status}
              onChange={this.onChangestatus}
              />
        </div>
       
 
       
       
       
        <div className="form-group">
          <input type="submit" value="Update Program" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}