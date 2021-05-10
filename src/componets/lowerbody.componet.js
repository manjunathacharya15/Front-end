import React,{Component} from 'react';
export default class Lowerbodycomponet extends Component{
    render(){
        return(
            <form>
            <div class="input-group mb-3">
           
      <span class="input-group-text" id="basic-addon1">SLNO:    </span>
<input type="text" class="form-control" placeholder="SLNO" aria-label="Username" aria-describedby="basic-addon1"/>

            </div>
           
            <div class="input-group mb-3 sm-3">
           
           <span class="input-group-text" id="basic-addon1">Sub Category:</span>
   <input type="text" class="form-control" placeholder="Sub Category" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                 <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">Main Category:</span>
   <input type="text" class="form-control" placeholder="Main Category" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                 <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">Videos:</span>
   <input type="text" class="form-control" placeholder="Videos" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
                  <div class="input-group mb-3">
           
      <span class="input-group-text" id="basic-addon1">Packages</span>
<input type="number" class="form-control" placeholder="Packages" aria-label="Username" aria-describedby="basic-addon1"/>

            </div>
            
                 <div class="input-group mb-3">
           
           <span class="input-group-text" id="basic-addon1">Actions</span>
   <input type="text" class="form-control" placeholder="Actions" aria-label="Username" aria-describedby="basic-addon1"/>

                 </div>
         
        
         
        <center> <button type="submit" class="btn btn-default">Submit</button></center>
         </form>
        )
    }
}