import React,{Component} from 'react';
import Reactplayer from 'react-player'
export default class Addvideocomponet extends Component{
   
    render(){
        return(
            <div class="container">



    <div class="row">
      <div class="col-md">
            <div>
                
                    <Reactplayer controls url="https://www.youtube.com/watch?v=OKL8Mw9EqZQ" />
                    <input type="file" name="images" id="imgid" className="imgcls"  multiple/>
                    <br/>
                    <br/>
                   <center><button type="submit" class="btn btn-secondary">Submit</button></center> 
            </div>
            </div>
            </div>
            </div>
            

        )
    }
}