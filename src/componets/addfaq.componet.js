import React,{Component} from "react"
import axios from 'axios';
export default class Addfaq extends Component{
    constructor(props) {
        super(props);
    
        this.onChangequestion = this.onChangequestion.bind(this);
        this.onChangeanswer= this.onChangeanswer.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            question: '',
            answer: '',
         
         
            trainer:[]
            
            
          }
        }
        onChangequestion(e) {
            this.setState({
              question: e.target.value
            })
          }
          onChangeanswer(e) {
            this.setState({
              answer: e.target.value
            })
          }
          onSubmit(e) {
            e.preventDefault();
        
            const trainer = {
              question: this.state.question,
              answer: this.state.answer,
             

        
            }
        
            console.log(trainer);
        
            axios.post('http://mitnessbackend-env.eba-wbimkk6k.ap-south-1.elasticbeanstalk.com/faqs/add', trainer)
            .then(function(response){
        
              if(response.data ==='FAQ Added'){
                  window.location='/FAQ'
              }
             }) 
          }
        
    render(){
        return(
            <div>
                <h3 >Create Faq </h3>
                <br/>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"  style={{width:"400px"}}> 
          <label>Question: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.question}
              onChange={this.onChangequestion}
              />
        </div>
        <div className="form-group"  style={{width:"400px"}}> 
          <label>Answer: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.answer}
              onChange={this.onChangeanswer}
              />
        </div>
        <div className="form-group"  >
          <input type="submit" value="Create Faq" className="btn btn-primary" />
        </div>
      
      </form>
            </div>
        )
    }
}