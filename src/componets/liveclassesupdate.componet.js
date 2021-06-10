import React, { Component } from 'react';
import axios from 'axios';
import "react-datepicker/dist/react-datepicker.css";

export default class updateuser extends Component {
  constructor(props) {
    super(props);

    this.onChangeclassname = this.onChangeclassname.bind(this);
    this.onChangesdateandtime = this.onChangesdateandtime.bind(this);
    this.onChangedescription=this.onChangedescription.bind(this);
    this.onChangeimage=this.onChangeimage.bind(this);
    this.onChangeclasstype=this.onChangeclasstype.bind(this);
    this.onChangeapproval = this.onChangeapproval.bind(this);
    this.onChangeaccess = this.onChangeaccess.bind(this);
    this.onChangeprice=this.onChangeprice.bind(this);
    this.onChangecategory=this.onChangecategory.bind(this);
    this.onChangename=this.onChangename.bind(this);
    this.onChangeimg = this.onChangeimg.bind(this);
    this.onChangeduration = this.onChangeduration.bind(this);
    this.onChangecaloriesburnt=this.onChangecaloriesburnt.bind(this);
    this.onChangeinstructorprofile=this.onChangeinstructorprofile.bind(this);
    this.onChangesnameandcount=this.onChangesnameandcount.bind(this);


   
  
   
    

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      classname: '',
      sdateandtime: '',
       description:'',
      image:'',
      classtype:'',
      approvol: '',
      access: '',
      price:'',
      category:'',
      name:'',
      img:'',
      duration: '',
      caloriesburnt: '',
      instructorprofile:'',
      snameandcount:'',
     



      

      
      customer:[]
      
      
    }
  }
  componentDidMount(){
      axios.get('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/liveclasses/' + this.props.match.params.id)
      .then(response => {
    this.setState({
        classname:response.data.classname,
        sdateandtime:response.data.sdateandtime,
        description:response.data.description,
        image:response.data.image,
        classtype:response.data.classtype,
        approvol:response.data.approvol,
        access:response.data.access,
        price:response.data.price,
        category:response.data.category,
        name:response.data.name,
        img:response.data.img,
        duration:response.data.duration,
        caloriesburnt:response.data.caloriesburnt,
        instructorprofile:response.data.instructorprofile,
        snameandcount:response.data.snameandcount,
        

   
       
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
  onChangesdateandtime(e) {
    this.setState({
      sdateandtime: e.target.value
    })
  }

  
  onChangedescription(e) {
    this.setState({
      description: e.target.value
    })
  }
  onChangeimage(e) {
    this.setState({
      image: e.target.value
    })
  }
  onChangeclasstype(e) {
    this.setState({
      classtype: e.target.value
    })
  }
  onChangeapproval(e) {
    this.setState({
      approvol: e.target.value
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
  onChangecategory(e) {
    this.setState({
      category: e.target.value
    })
  }
  onChangename(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeimg(e) {
    this.setState({
      img: e.target.value
    })
  }
  onChangeduration(e) {
    this.setState({
      duration: e.target.value
    })
  }
  onChangecaloriesburnt(e) {
    this.setState({
      caloriesburnt: e.target.value
    })
  }
  onChangeinstructorprofile(e) {
    this.setState({
      instructorprofile: e.target.value
    })
  }
  onChangesnameandcount(e) {
    this.setState({
      snameandcount: e.target.value
    })
  }
  onback(){
    window.location='/VideoListingg'
    }
  

 
  

  onSubmit(e) {
    e.preventDefault();

    const customer = {
      classname: this.state.classname,
      sdateandtime: this.state.sdateandtime,
      description: this.state.description,
      image:this.state.image,
      classtype: this.state.classtype,
      approvol: this.state.approvol,
      access: this.state.access,
      price:this.state.price,
      category: this.state.category,
      name: this.state.name,
      img: this.state.img,
      duration:this.state.duration,
      caloriesburnt: this.state.caloriesburnt,
      instructorprofile: this.state.instructorprofile,
      snameandcount: this.state.snameandcount,
    


     
      

    }

    axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/liveclasses/update/' + this.props.match.params.id, customer)
      .then(function(response){
       if(response.data=== 'Liveclass updated!'){
           window.location='/Videolistingg'
       }
      }) 
  }

  render() {
    return (
    <div>
      <h3>Live classupdate </h3>
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
          <label>SDate and Time: </label>
          <input  type="text"
             
              className="form-control"
              value={this.state.sdateandtime}
              onChange={this.onChangesdateandtime}
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
          <label>Image </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.image}
              onChange={this.onChangeimage}
              />
        </div>
        <div className="form-group">
          <label>Class Type </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.classtype}
              onChange={this.onChangeclasstype}
              />
        </div>
        <div className="form-group">
          <label>Approvol </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.approvol}
              onChange={this.onChangeapproval}
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
          <label>Price</label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangeprice}
              />
        </div>
        <div className="form-group">
          <label>Category </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.category}
              onChange={this.onChangecategory}
              />
        </div>
        <div className="form-group">
          <label>Name </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.name}
              onChange={this.onChangename}
              />
        </div>
        <div className="form-group">
          <label>Img </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.img}
              onChange={this.onChangeimg}
              />
        </div>
        <div className="form-group">
          <label>Duration </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeduration}
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
          <label>Instructor Profile </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.instructorprofile}
              onChange={this.onChangeinstructorprofile}
              />
        </div>
        <div className="form-group">
          <label>Subscribe Name and Count </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.snameandcount}
              onChange={this.onChangesnameandcount}
              />
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
       
       
        <div className="form-group">
          <input type="submit" value="Update LiveClass" className="btn btn-primary" />
        </div>
      </form>
      <button type="button" class="btn btn-dark" onClick={this.onback}>Back</button>
    </div>
    )
  }
}