import React, { Component } from 'react';
export default class upperbodycomponet extends Component{

    render(){
        return(
<form  >
                         <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">SLNO:</label>
  <input type="number" id="email" placeholder=" SLNO" name="email"></input>
  </div>
  
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">SUB CATEGORY:</label>
  <input type="text" id="email" placeholder=" SUBCATEGORY" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">MAIN CATEGORY:</label>
  <input type="text" id="email" placeholder="MAINCATEGORY " name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">VIDEOS:</label>
  <input type="file" id="email" placeholder=" VIDEOS" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">PACKAGE:</label>
  <input type="text" id="text" placeholder=" PACKAGE" name="email"></input>
  </div>
  
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">ACTIONS:</label>
  <input type="text" id="email" placeholder=" ACTIONS" name="email"></input>
  </div>
                        
     
                        
                        
                
               
            <div> 
                  <br/>   
             <button type="submit" class="btn btn-default">Submit</button></div>
                </form>

        )
    }

}