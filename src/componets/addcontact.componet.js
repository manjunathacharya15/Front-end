import React,{Component} from "react"
import axios from 'axios';
export default class Addfaq extends Component{
    constructor(props) {
        super(props);
    
        this.onChangefirstname = this.onChangefirstname.bind(this);
        this.onChangelastname= this.onChangelastname.bind(this);
        
        this.onChangecontactnumber = this.onChangecontactnumber.bind(this);
        this.onChangeemail= this.onChangeemail.bind(this);
        this.onChangequery=this.onChangequery.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstname: '',
            lastname: '',
            contactnumber:'',
            email:'',
            query:'',
         
         
            trainer:[]
            
            
          }
        }
        onChangefirstname(e) {
            this.setState({
              firstname: e.target.value
            })
          }
          onChangelastname(e) {
            this.setState({
              lastname: e.target.value
            })
          }
          onChangecontactnumber(e) {
            this.setState({
              contactnumber: e.target.value
            })
          }
          onChangeemail(e) {
            this.setState({
              email: e.target.value
            })
          }
          onChangequery(e) {
            this.setState({
              query: e.target.value
            })
          }
          


          onSubmit(e) {
            e.preventDefault();
        
            const trainer = {
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              contactnumber:this.state.contactnumber,
              email:this.state.email,
              query:this.state.query
             

        
            }
        
            console.log(trainer);
        
            axios.post('https://obscure-shelf-98404.herokuapp.com/contactus/add', trainer)
            .then(function(response){
        
              if(response.data ==='Contact Added'){
                  window.location='/ContactUs'
              }
             }) 
          }
        
    render(){
        return(
            <div>
                <h3>Create Contact </h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>First Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangefirstname}
              />
        </div>
        <div className="form-group"> 
          <label>Last Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangelastname}
              />
        </div>
        <div className="form-group"> 
          <label>Contact Number: </label>
          <input  type="number"
              required
              className="form-control"
              value={this.state.contactnumber}
              onChange={this.onChangecontactnumber}
              />
        </div>
        <div className="form-group"> 
          <label>Contact Email: </label>
          <input  type="email"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeemail}
              />
        </div>
        <div className="form-group"> 
          <label>Query: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.query}
              onChange={this.onChangequery}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Create Contact us" className="btn btn-primary" />
        </div>
      </form>
            </div>
        )
    }
}