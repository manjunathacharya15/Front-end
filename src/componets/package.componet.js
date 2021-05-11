import React,{Component} from 'react';
export default class Packagecomponet extends Component{
    render(){
        return(
            <form>
            <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">SLNO:</label>
  <input type="number" id="email" placeholder=" SLNO" name="email"></input>
  </div>
  
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">PACKAGE NAME:</label>
  <input type="text" id="email" placeholder=" PACKAGENAME" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2"> CATEGORY:</label>
  <input type="text" id="email" placeholder="CATEGORY " name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">SUB CATEGORY:</label>
  <input type="text" id="email" placeholder=" SUBCATEGORY" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">VIDEOS:</label>
  <input type="text" id="text" placeholder=" VIDEOS" name="email"></input>
  </div>
 
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">PRICE:</label>
  <input type="text" id="email" placeholder=" PRICE" name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">SUBCRIBERS:</label>
  <input type="text" id="email" placeholder="SUBCRIBERS " name="email"></input>
  </div>
  <div class="input-group mb-3">
                        <label for="email" class="col-lg-2">ACTIONS:</label>
  <input type="text" id="email" placeholder="ACTIONS " name="email"></input>
  </div>
         
        
         <div>
               <br/>
         <button type="submit" class="btn btn-default">Submit</button></div>
         </form>
        )
    }
}