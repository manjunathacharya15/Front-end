import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';






export default class CustomersList extends Component {

  constructor(props) {
    super(props);

    // this.deleteCustomer = this.deleteCustomer.bind(this)
    this.onChangeclassname = this.onChangeclassname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      classname:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/programs/')
    .then(response => {
      
      this.setState({ customers: response.data})
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            classname: e.classname,
            image: e.image,
            category:e.category,
            duration:e.duration,
            totalexercises:e.totalexercises,
            description:e.description,
            chooseinstructor:e.chooseinstructor,
            exercisename:e.exercise.exercisename,
            video:e.exercise.video,
           cimage:e.exercise.category.cimage,

            instructorprofile:e.instructorprofile,
            access:e.access,
            price:e.price,
            subscriberslist:e.subscriberslist

          }
        })
        
    })
    console.log(this.state)
    })
    .catch((error) => {
      console.log(error);
    })
    
  }
  deleteCustomerByIds = () => {
  let arrayids = [];
  
    this.state.customers.forEach(d => {
      if(d.select) { 
        arrayids.push(d.id);
      }
    });
    console.log(arrayids)
    axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/programs/delete',{arrayids:arrayids})
    .then(response=>{
      if(response.data.message==="Deleted Successfully")
      {
        window.location.reload(true)
      }
 
    })
  
    
  
    
    
  };
  onChangeclassname(e) {
    this.setState({
      classname: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();

    const customer = {
      classname: this.state.classname
    }
    axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/programs/search', customer)
      .then(res => {
        this.setState({ customers: res.data })
      })
      .catch((error) => {
             console.log(error);
           })
      
  }
  // deleteCustomer(id) {
  //   axios.delete('https://instructor9513.herokuapp.com/programs/'+id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     customers: this.state.customers.filter(el => el._id !== id)
  //   })
  // }
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.classname.toLowerCase() < b.classname.toLowerCase()) return -1;
      if(a.classname.toLowerCase() > b.classname.toLowerCase()) return 1;
      return 0;
     })

    return this.state.customers.map(currentcustomer => (
      <tr>
        <td style={{border:"1px double grey",textAlign:"center"}}>
        <input type="checkbox" onChange={e => {
                                let value = e.target.checked
                                console.log(this.state)
                                this.state.customers.find(o => o.id=== currentcustomer.id).select = value
                                this.setState(this.state);
                            }} />
      </td>
      <td style={{border:"1px double grey",textAlign:"center"}}><Link to={"/program/"+currentcustomer.id}>{ currentcustomer.classname}</Link></td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.image}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.category}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.duration}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.totalexercises}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.description}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.chooseinstructor}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}>
    <tr style={{textAlign:"center"}}>ExerciseName:{currentcustomer.exercisename}</tr>
    <tr style={{textAlign:"center"}}>Video:{currentcustomer.video}</tr>
    <tr style={{textAlign:"center"}}>Duration:{currentcustomer.duration}</tr>
    <tr style={{textAlign:"center"}}>Category:{currentcustomer.category}</tr>
    <tr style={{textAlign:"center"}}>Image:{currentcustomer.cimage}</tr>
</td>
 <td style={{border:"1px double grey",textAlign:"center"}} > {currentcustomer.instructorprofile}</td>
    <td style={{border:"1px double grey",textAlign:"center"}} > {currentcustomer.access}</td>
    <td style={{border:"1px double grey",textAlign:"center"}}> {currentcustomer.price}</td>
    <td style={{border:"1px double grey",textAlign:"center"}} > {currentcustomer.subscriberslist}</td>
    
    </tr>
      
    ))
    
  }
  
  
 



  render()
 {

  
    return (
      
      <div>
        
        <div class="container">



<div class="row">
  <div class="col-md">

             <div style={{display:"flex"}}>
    <div style={{width:"80%"}}><h4><b>Programs</b></h4></div>
    <div style={{marginTop:"5px"}}>
    <form onSubmit={this.onSubmit}>
      <div className="input-group"> 
          
          <input  type="text"
              required
              className="form-control"
              value={this.state.classname}
              onChange={this.onChangeclassname}
              />
              <div className="input-group-apppend">
              <button className="btn btn-secondary" type="submit">
              <i className="fa fa-search"></i>
              </button>
              </div>
        </div>
        </form>
        
        
       
        
        </div>
        <div style={{width:"9%"}}><Link to="/program" className="nav-link"><button type="submit" value="AddNewTrainer" className="btn btn-success"><AddIcon/></button></Link></div>
    <div style={{width:"22%"}}  >
    <button style={{height:"25",marginTop:"8px"}}
        className="btn btn-danger "
        onClick={() => {
          this.deleteCustomerByIds();
        }}
      >
    <DeleteIcon/>
      </button>
    </div>
        
</div>


        <div style={{overflowX:"scroll",overflowY:"scroll"}}>
        
          
       
        
        <table className="table" style={{border:"1px double grey"}}>
          <thead className="thead-light">
            <tr>
            {/* <th>
            
              
              <input
                type="checkbox"
                onChange={e => {
                  let value = e.target.checked;
                  this.setState(
                    this.state.customers.map(d => {
                      d.select = value;
                      return d;
                    })
                  );
                }}
              />
            </th> */}
            <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Delete</th>
            <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Program Name</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Program Image</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Category</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Duration</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Total Exercises</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Program Description</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Choose Instructor</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Exercise</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Instructor Profile</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Access</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Price</th>
              <th style={{border:"1px double white",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Subscribers List</th>
              
              
           
            </tr>
            
          </thead>
          <tbody>
            { this.customerList() }
          </tbody>
         
        </table>
      
        </div>
        </div>
        </div>
        </div>
        
      </div>
    )
  }
}
