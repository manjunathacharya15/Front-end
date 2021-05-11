import React,{Component} from 'react'
export default class trainercomponet extends Component{
    render(){
        return(
            <form  >
                         <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">SLNO:</label>
  <input type="number" id="email" placeholder=" SLNO" name="email"></input>
  </div>
  
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">FULLNAME:</label>
  <input type="text" id="email" placeholder=" FULLNAME" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">EMAIL:</label>
  <input type="email" id="email" placeholder="EMAIL " name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">PHONENUMBER:</label>
  <input type="number" id="email" placeholder=" PHONENUMBER" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">CREATEDDATE:</label>
  <input type="email" id="text" placeholder=" CREATEDDATE" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">STATUS:</label>
  <input type="email" id="text" placeholder=" STATUS" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">ACTIONS:</label>
  <input type="text" id="email" placeholder=" ACTIONS" name="email"></input>
  </div>
                        
     
                        
                        
                
              <div>
                <br/>
              <button type="submit" class="btn btn-default">Submit</button> 
              </div> 
                </form>


        )
    }
}