import React,{Component} from 'react';
export default class Videocomponet extends Component{
    render(){
        return(
            <form  >
                         <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">SLNO:</label>
  <input type="number" id="email" placeholder=" SLNO" name="email"></input>
  </div>
  
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">VIDEO NAME:</label>
  <input type="text" id="files" placeholder=" VIDEONAME" name="files"></input>
  </div>
  
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2"> CATEGORY:</label>
  <input type="text" id="email" placeholder="CATEGORY " name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">SUB CATEGORY:</label>
  <input type="text" id="email" placeholder=" SUB CATEGORY" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">PACKAGES:</label>
  <input type="text" id="text" placeholder=" PACKAGES" name="email"></input>
  </div>
  
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">ACTIONS:</label>
  <input type="text" id="email" placeholder=" ACTIONS" name="email"></input>
  </div>


  <div class="input-group mb-3">
                       
                        <input type="file" name="images" id="imgid" className="imgcls"  multiple/>
  </div>

                        
     
                        
                        
                
               
            <div> 
                  <br/>   
             <button type="submit" class="btn btn-default">Submit</button></div>
                </form>
        )
    }
}