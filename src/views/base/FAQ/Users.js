import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';






export default class CustomersList extends Component {

  constructor(props) {
    super(props);

    // this.deleteCustomer = this.deleteCustomer.bind(this)
    // this.onChangefirstname = this.onChangefirstname.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    // this.deleteCustomerByIds=this.deleteCustomerByIds.bind(this);
    this.state = {
      // firstname:'',
      customers: []
    };
  }
  

  componentDidMount() {
   
      axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/faqs/')
    .then(response => {
      
      this.setState({ customers: response.data})
     
      let result=response.data
      this.setState({customers:
        result.map(e => {
          return{
            select : false,
            id : e._id,
            question : e.question,
            answer: e.answer,
           

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
  const arrayids = [];
    this.state.customers.forEach(d => {
      if(d.select) { 
        arrayids.push(d.id);
      }
    });
    // console.log(arrayids)
    axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/delete',{arrayids:arrayids})
   .then(response=>{
     if(response.data.message==="Deleted Successfully")
     {
       window.location.reload(true)
     }

   })
    
  
    ;
   
  };
 
 
  // deleteCustomer(id) {
  //   axios.delete('https://vast-river-32952.herokuapp.com/customers/'+id)
  //     .then(response => { console.log(response.data)});

  //   this.setState({
  //     customers: this.state.customers.filter(el => el._id !== id)
  //   })
  // }
  
  customerList() {
    this.state.customers.sort(function(a,b){
      if(a.question.toLowerCase() < b.question.toLowerCase()) return -1;
      if(a.question.toLowerCase() > b.question.toLowerCase()) return 1;
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
      <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.question}</td>
      <td style={{border:"1px double grey",textAlign:"center"}}>{currentcustomer.answer}</td>
      
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
    <div style={{width:"80%"}}><h4><b>FAQ</b></h4></div>
    
        
        <div>
    <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => {
          this.deleteCustomerByIds();
        }}
      >
        <DeleteIcon/>
      </button>
      
    </div>
       
    
    
    <div style={{width:"22%"}}><Link to="/addfaq" className="nav-link"><button type="submit" value="AddNewFaq" className="btn btn-success"><AddIcon/></button></Link></div>
    
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
            <th style={{border:"1px double white",width:"5%",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Delete</th>
              <th style={{border:"1px double white",width:"150px" ,backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Questions</th>
              <th style={{border:"1px double white",width:"100px",backgroundColor:"#3d84b8",color:"white",textAlign:"center"}}>Answers</th>
              
           
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
