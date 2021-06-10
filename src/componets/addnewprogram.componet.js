import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeclassname = this.onChangeclassname.bind(this);
    this.onChangesdateandtime = this.onChangesdateandtime.bind(this);

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
    this.onChangeinstructorprofile=this.onChangeinstructorprofile.bind(this);
    this.onChangecaloriesburnt=this.onChangecaloriesburnt.bind(this);
    this.onChangepmaterial=this.onChangepmaterial.bind(this);
    this.onChangestatus=this.onChangestatus.bind(this);

   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        classname: '',
       file1:null,
       file2:null,
        description:'',
       duration:'',
       chooseinstructor: '',
        category: '',
        access:'',
       price:'',
       exercisename:'',
       video:'',
       categoryname:'',
       instructorprofile:'',
        caloriesburnt: '',
        pmaterial:'',
       status:'',
       sdateandtime:'',
       
      

      
      customer:[]
      
      
    }
  }

  onChangeinstructorprofile(e) {
    this.setState({
      instructorprofile: e.target.value
    })
  }
  onChangeclassname(e) {
    this.setState({
      classname: e.target.value
    })
  }
  onChangesdateandtime(e) {
    this.setState({
      sdateandtime: e.target.value
    })
  }
  onChangeimage(e) {
    this.setState({
      file1: e.target.files[0]
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
        file2: e.target.files[0]
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
 
  onback(){
    window.location='/VideoListing'
    }
  

  onSubmit(e) {
    e.preventDefault();

    // const customer = {
    //   classname: this.state.classname,
    //   image: this.state.image,
    //   description: this.state.description,
    //   duration:this.state.duration,
    //   chooseinstructor: this.state.chooseinstructor,
    //   category: this.state.category,
    //   access: this.state.access,
    //   price:this.state.price,
    //   exercisename: this.state.exercisename,
    //   video: this.state.video,
    //   categoryname: this.state.categoryname,
    //   cimage:this.state.cimage,
    //   caloriesburnt: this.state.caloriesburnt,
    //   pmaterial: this.state.pmaterial,
    //   status: this.state.status,
      
    const formData=new FormData();
    formData.append('classname',this.state.classname);
    formData.append('images',this.state.file1);
    formData.append('images',this.state.file2);
  
    

    formData.append('description',this.state.description);
    formData.append('duration',this.state.duration);
    formData.append('chooseinstructor',this.state.chooseinstructor);
    formData.append('category',this.state.category);
    formData.append('access',this.state.access);
    formData.append('price',this.state.price);
    formData.append('exercisename',this.state.exercisename);
    formData.append('video',this.state.video);
    formData.append('categoryname',this.state.categoryname);
    formData.append('instructorprofile',this.state.instructorprofile);
   
    formData.append('caloriesburnt',this.state.caloriesburnt);
    formData.append('pmaterial',this.state.pmaterial);
    formData.append('status',this.state.status);
    formData.append('sdateandtime',this.state.sdateandtime);

    
    
    const config={
      headers:{
        'content-type':'multipart/form-data'
      }
     
      
      

     
      

    }

    axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/programs/add' , formData,config)
    .then(function(response){
        if(response.data==='Program added!'){
            window.location='/Videolisting'
        }
       }) 
  }
  render() {
    return (
    <div>
     <h3>Add Program </h3>
      <br/>
      <form onSubmit={this.onSubmit}>
      <div className="form-group" style={{width:"450px"}} > 
          <label>Class Name: </label>
          <input  type="text"
          name="classname"
              className="form-control"
              value={this.state.classname}
              onChange={this.onChangeclassname}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Image: </label>
          <input  type="file"
             name="images"
              className="form-control"
              onChange={this.onChangeimage}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} >
          <label>Description </label>
          <input 
          name="description"
              type="text" 
              className="form-control"
             value={this.state.description}
              onChange={this.onChangedescription}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} >
          <label>Sdateandtime </label>
          <input 
          name="description"
              type="text" 
              className="form-control"
             value={this.state.sdateandtime}
              onChange={this.onChangesdateandtime}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}>
          <label>Duration</label>
          <input 
          name="duration"
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeduration}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} >
          <label>Instructor Profile </label>
          <input 
          name="description"
              type="text" 
              className="form-control"
             value={this.state.instructorprofile}
              onChange={this.onChangeinstructorprofile}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} > 
          <label>Choose Instructor: </label>
          <input  type="text"
          name="chooseinstructor"
              className="form-control"
              value={this.state.chooseinstructor}
              onChange={this.onChangechooseinstructor}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} > 
          <label>Category: </label>
          <input  type="text"
             name="category"
              className="form-control"
              value={this.state.category}
              onChange={this.onChangecategory}
              />
        </div>
        <div className="form-group"  style={{width:"450px"}}>
          <label>Access </label>
          <input
          name="access" 
              type="text" 
              className="form-control"
             value={this.state.access}
              onChange={this.onChangeaccess}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} >
          <label>Price </label>
          <input 
          name="price"
              type="number" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeprice}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} > 
          <label>Exercise Name: </label>
          <input  type="text"
          name="exercisename"
              className="form-control"
              value={this.state.exercisename}
              onChange={this.onChangeexercisename}
              />
        </div>
        <div className="form-group" style={{width:"450px"}}> 
          <label>Video: </label>
          <input  type="text"
             name="video"
              className="form-control"
              value={this.state.video}
              onChange={this.onChangevideo}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} >
          <label>Category Name </label>
          <input 
          name="categoryname"
              type="text" 
              className="form-control"
             value={this.state.categoryname}
              onChange={this.onChangecategoryname}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} >
          <label>Category Image </label>
          <input 
          name="images"
              type="file" 
              className="form-control"
              onChange={this.onChangecimage}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} > 
          <label>Calories Burnt: </label>
          <input  type="number"
          name="caloriesburnt"
              className="form-control"
              value={this.state.caloriesburnt}
              onChange={this.onChangecaloriesburnt}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} > 
          <label>Program Material: </label>
          <input  type="text"
             name="pmaterial"
              className="form-control"
              value={this.state.pmaterial}
              onChange={this.onChangepmaterial}
              />
        </div>
        <div className="form-group" style={{width:"450px"}} >
          <label>Status </label>
          <input 
          name="status"
              type="text" 
              className="form-control"
             value={this.state.status}
              onChange={this.onChangestatus}
              />
        </div>
       
 
       
       
       
        <div className="form-group">
          <input type="submit" value="Add Program" className="btn btn-primary"  />
        </div>
      </form>
    </div>
    )
  }
}